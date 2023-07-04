/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Authenticator } from "@aws-amplify/ui-react";
import { message } from "antd";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "~/components/footer";
import HeadMeta from "~/components/headMeta";
import Navbar from "~/components/header";
import Layout from "~/components/layout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const result = Auth.signIn(email, password);
    result
      .then((_value) => {
        setLoading(false);
        void router.push("/feed");
      })
      .catch((error) => {
        setLoading(false);
        void messageApi.error(error.message as string);
      });
  };

  return (
    <>
      {contextHolder}
      <HeadMeta
        title="Memora | Login"
        description="Capture your memories, goals and everything in between."
      />
      <Navbar />
      <div className="z-0 inline-block min-h-screen w-full bg-dark px-32 dark:bg-light">
        <Layout className={"pt-32 md:pt-16 sm:pt-8"}>
          <div className="flex w-full flex-col items-center justify-center text-center">
            <Authenticator></Authenticator>
            {/* <div className="text-light dark:text-dark text-2xl font-semibold my-2">
                            Sign in to your account
                        </div>
                        <div className="flex flex-row">
                            {
                                loading && <LoadingSpinner />
                            }
                            {!loading && <form className="w-full max-w-sm">
                                <div className="md:flex md:items-center mb-6 flex mt-6 w-[300px]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mt-2 md:mb-0 pr-4">
                                            Email
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="inline-email" type="text" value={email} onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="flex items-center mb-6 w-[300px]">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                            Passw
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="inline-password" type="password" placeholder="***********" value={password} onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}/>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6 w-[300px]">
                                    <div className="md:w-1/3"></div>
                                    <label className="md:w-2/3 block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" checked/>
                                    <span className="text-sm">
                                        Remember me
                                    </span>
                                    </label>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                        <button className="shadow bg-primary/80 hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleLogin}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6 w-[300px] mt-7">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3 text-sm hover:underline hover:text-primary duration-75 dark:text-dark text-light dark:hover:text-primary">
                                        <Link href="/signup" >
                                            Dont have an account?
                                        </Link>
                                    </div>
                                </div>
                            </form>}
                        </div> */}
          </div>
        </Layout>
      </div>
      <Footer />
    </>
  );
}
