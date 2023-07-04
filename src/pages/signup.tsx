/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { message } from "antd";
import { Auth } from "aws-amplify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "~/components/footer";
import HeadMeta from "~/components/headMeta";
import Navbar from "~/components/header";
import Layout from "~/components/layout";
import { LoadingSpinner } from "~/components/loadingCustom";

export default function SignupPage() {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');
    const [name, setName]= useState('');
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    
    const handleSignup = async () => {
        setLoading(true);
        try {
            await Auth.signUp({
                username: email,
                password: pass,
                attributes: {
                    email,
                    name,
                },
                autoSignIn: {
                    enabled: true,
                },
            });
            setLoading(false);
            void router.push("/feed");
        } catch(err: any) {
            setLoading(false);
            void messageApi.error(err.message as string)
        }
    }

    return (
        <>
            {contextHolder}
            <HeadMeta title="Memora | Signup" description="Capture your memories, goals and everything in between."/>
            <Navbar />
            <div className="w-full min-h-screen inline-block z-0 bg-dark px-32 dark:bg-light">
                <Layout className={"pt-32 md:pt-16 sm:pt-8"}>
                <div className="flex items-center justify-center w-full flex-col text-center">
                        <div className="text-light dark:text-dark text-2xl font-semibold my-2">
                            Create your account
                        </div>
                        <div className="flex flex-row mt-5">
                            {
                                loading && <LoadingSpinner />
                            }
                            {!loading && <form className="w-full max-w-lg">
                                <div className="flex flex-wrap -mx-3 mb-3">
                                    <div className="w-[400px] px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-white/60 dark:text-gray-700 text-sm font-bold mb-2" >
                                            Full Name
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe" value={name} onChange={(e) => {
                                            setName(e.target.value);
                                        }}/>
                                        {/* <p className="text-red-500 text-sm italic">Please fill out this field.</p> */}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white/60 dark:text-gray-700 text-sm font-bold mb-2">
                                            Email
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Email Address" value={email} onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}/>
                                        {/* <p className="text-gray-600 text-sm italic">Make it as long and as crazy as youd like</p> */}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white/60 dark:text-gray-700 text-sm font-bold mb-2">
                                            Password
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" value={pass} onChange={(e) => {
                                            setPass(e.target.value);
                                        }}/>
                                    {/* <p className="text-gray-600 text-sm italic">Make it as long and as crazy as youd like</p> */}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white/60 dark:text-gray-700 text-sm font-bold mb-2">
                                           Confirm Password
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" value={cpass} onChange={(e) => {
                                            setCPass(e.target.value);
                                        }} />
                                    {/* <p className="text-gray-600 text-sm italic">Make it as long and as crazy as youd like</p> */}
                                    </div>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSignup}>
                                            Signup
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center mb-6 mt-7 justify-center w-full">
                                    <div className="text-sm hover:underline hover:text-primary duration-75 dark:text-dark text-light dark:hover:text-primary">
                                        <Link href="/login" >
                                            Back to Login
                                        </Link>
                                    </div>
                                </div>
                            </form>}
                        </div>
                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    );
}