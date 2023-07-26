/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { type BaseSyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { BsCardImage } from "react-icons/bs";
import { z } from "zod";
import ProfileImage from "~/components/profileImage";
import SideNav from "~/components/sideNav";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/Button";
import { API, withSSRContext } from "aws-amplify";
import { createCapsule } from "~/graphql/mutations";
import { GRAPHQL_AUTH_MODE, type GraphQLQuery } from "@aws-amplify/api";
import type { Capsule, CreateCapsuleMutation } from "~/API";
import { useMutation } from "react-query";
import { LoadingSpinner } from "~/components/loadingCustom";
import dayjs from "dayjs";
import { listCapsules } from "~/graphql/queries";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const formValuesSchema = z.object({
  postText: z
    .string()
    .min(1, {
      message: "Post Text must be at least 2 characters long.",
    })
    .max(512, {
      message: "Post Text cannot be more than 512 characters long.",
    }),
  postTime: z.string().min(1),
  img: z.string().optional().or(z.literal("")),
  isPublic: z.boolean(),
});

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const SSR = withSSRContext({ req });
  try {
    const result = await SSR.API.graphql({
      query: listCapsules,
      authMode: "API_KEY",
    });
    return {
      props: {
        capsules: result.data.listCapsules.items,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        capsules: [],
      },
    };
  }
}

function CapsulePage({ capsules = [] }) {
  const { user } = useAuthenticator();
  const [isPublic, setIsPublic] = useState(true);
  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof formValuesSchema>
  >({
    resolver: zodResolver(formValuesSchema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async (values: z.infer<typeof formValuesSchema>) => {
      const data = {
        is_live: false,
        is_public: values.isPublic,
        post_time: dayjs(values.postTime).toISOString(),
        content: values.postText,
        img_url: values.img,
        user_id: user.username,
      };
      const result = await API.graphql<GraphQLQuery<CreateCapsuleMutation>>({
        query: createCapsule,
        variables: {
          input: data,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      return result.data?.createCapsule?.id;
    },
  });

  function onSubmit(
    values: z.infer<typeof formValuesSchema>,
    e?: BaseSyntheticEvent
  ) {
    e?.preventDefault();
    console.log(values);
    mutate(values);
  }

  return (
    <>
      <div className="bg-dark dark:bg-light z-0 inline-block w-full">
        <div className="flex min-h-screen w-full items-center justify-center">
          <div className="container mx-auto flex">
            <SideNav />
            <div className="text-light dark:text-dark min-h-screen flex-grow flex-col border-x-2 border-gray-700">
              <header className="bg-dark dark:bg-light sticky top-0 z-10 flex border-b-2 border-gray-700 pt-2">
                <h1 className="mb-2 px-4 text-lg font-bold">Time Capsule</h1>
              </header>
              <div className="shadow-customBlue m-5 flex flex-col rounded-lg border border-gray-700">
                {isLoading && (
                  <div className="flex w-full items-center justify-center">
                    <LoadingSpinner />
                  </div>
                )}
                {!isLoading && (
                  <form
                    className="flex flex-col gap-2 p-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex gap-4">
                      <ProfileImage />
                      <textarea
                        {...register("postText", { required: true })}
                        rows={2}
                        className="text-dark dark:bg-light dark:text-light flex-grow resize-none overflow-hidden rounded-lg bg-blue-200 p-4 text-lg outline-none"
                        placeholder="Whats happening?"
                      />
                    </div>
                    <div className="flex w-full justify-between pt-2">
                      <div className="flex gap-3">
                        {/* Image Upload */}
                        <div className="cursor-pointer px-2 py-1">
                          <BsCardImage className="text-light dark:text-dark text-3xl duration-75 ease-in hover:text-primary" />
                        </div>
                        {/* Public/Private Toggle */}
                        <div className="cursor-pointer px-3 py-1">
                          <label className="relative mr-5 inline-flex cursor-pointer items-center">
                            <input
                              {...register("isPublic", { required: true })}
                              type="checkbox"
                              className="peer sr-only"
                              checked={isPublic}
                              onChange={(e) => setIsPublic(e.target.checked)}
                            />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-green-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                              {isPublic ? "Public" : "Private"}
                            </span>
                          </label>
                        </div>
                        {/* Date Selection */}
                        <div className="cursor-pointer px-2 py-1">
                          <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Post Time
                          </span>
                          <input
                            {...register("postTime", { required: true })}
                            type="datetime-local"
                            className="cursor-pointer rounded-lg border p-2 hover:border-gray-500"
                          />
                        </div>
                      </div>
                      <Button className="self-end" type="submit">
                        Post
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              <div className="px-5">
                <div className="font-normal text-red-500">
                  {formState.errors.postText?.message}
                </div>
                <div className="font-normal text-red-500">
                  {formState.errors.postTime?.message}
                </div>
                <div className="font-normal text-red-500">
                  {formState.errors.img?.message}
                </div>
              </div>
              <div className="flex flex-col gap-y-5 px-5">
                {capsules.map((capsule: Capsule) => (
                  <div
                    key={capsule.id}
                    className="mx-auto w-full rounded-lg border p-2 shadow-lg"
                  >
                    {capsule.content}
                    <div>Created by {capsule.user?.full_name}</div>
                    <div>isLive: {capsule.is_live.toString()}</div>
                    <div>isPublic: {capsule.is_public.toString()}</div>
                    <div>Post Time: {dayjs(capsule.post_time).toString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(CapsulePage);
