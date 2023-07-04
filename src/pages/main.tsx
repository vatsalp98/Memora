import { Authenticator, View } from "@aws-amplify/ui-react";
import SideNav from "~/components/sideNav";
import Image from "next/image";
import Link from "next/link";

const components = {
    Header() {
        return (
            <View textAlign="center" className="flex justify-center items-center mb-10 flex-col gap-5">
              <Link href="/">
                <Image
                    alt="Login Social Media Image"
                    src="/login.svg"
                    width={200}
                    height={200}
                />
                <h2 className="text-light dark:text-dark text-2xl font-semibold pt-5">Memora</h2>
              </Link>
            </View>
          );
    },
    Footer() {
        return (
            <View textAlign="center" className="pt-5">
              <div className="text-white/70">
                Memora &copy; All Rights Reserved
              </div>
            </View>
          );
    },
}

export default function MainApp() {
    return (
        <>
            <div className="w-full inline-block z-0 bg-dark dark:bg-light">
                <div className="flex items-center justify-center w-full min-h-screen">
                    <Authenticator components={components} className="shadow-lg shadow-primary rounded-lg p-5">
                        {({ signOut, user }) => (
                            <div className="container mx-auto flex">
                                <SideNav id={user?.username} signOut={signOut}/>
                                <div className="min-h-screen flex-grow border-x text-light dark:text-dark">
                                    <header className="sticky top-0 z-10 border-b bg-dark dark:bg-light pt-2">
                                        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
                                    </header>
                                </div>
                            </div>
                        )}
                    </Authenticator>
                </div>
                
            </div>
        </>
    );
}