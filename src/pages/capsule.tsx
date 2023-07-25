import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCardImage } from "react-icons/bs";
import { z } from "zod";
import ProfileImage from "~/components/profileImage";
import SideNav from "~/components/sideNav";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/Button";

const formValuesSchema = z.object({
  postText: z
    .string()
    .min(1, {
      message: "Post Text must be at least 2 characters long.",
    })
    .max(512, {
      message: "Post Text cannot be more than 512 characters long.",
    }),
  postTime: z.date(),
  img: z.string().optional().or(z.literal("")),
  isPublic: z.boolean(),
});

function CapsulePage() {
  const [isPublic, setIsPublic] = useState(true);

  const form = useForm<z.infer<typeof formValuesSchema>>({
    resolver: zodResolver(formValuesSchema),
  });

  function onSubmit() {
    console.log(form.getValues());
  }

  return (
    <div className="bg-dark dark:bg-light z-0 inline-block w-full">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="container mx-auto flex">
          <SideNav />
          <div className="text-light dark:text-dark min-h-screen flex-grow flex-col border-x-2 border-gray-700">
            <header className="bg-dark dark:bg-light sticky top-0 z-10 flex border-b-2 border-gray-700 pt-2">
              <h1 className="mb-2 px-4 text-lg font-bold">Time Capsule</h1>
            </header>
            <div className="shadow-customBlue m-5 flex flex-col rounded-lg border border-gray-700">
              <form className="flex flex-col gap-2 p-4">
                <div className="flex gap-4">
                  <ProfileImage />
                  <textarea
                    {...form.register("postText", { required: true })}
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
                          {...form.register("isPublic", { required: true })}
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
                        {...form.register("postTime", { required: true })}
                        type="datetime-local"
                        className="cursor-pointer rounded-lg border p-2 hover:border-gray-500"
                      />
                    </div>
                  </div>
                  <Button className="self-end" type="button" onClick={onSubmit}>
                    Post
                  </Button>
                </div>
                <div>{form.formState.errors.postText?.message}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(CapsulePage);
