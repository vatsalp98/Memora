import {
  Authenticator,
  TextField,
  View,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import SideNav from "~/components/sideNav";
import Image from "next/image";
import Link from "next/link";

const components = {
  Header() {
    return (
      <View
        textAlign="center"
        className="mb-10 flex flex-col items-center justify-center gap-5"
      >
        <Link href="/">
          <Image
            alt="Login Social Media Image"
            src="/login.svg"
            width={200}
            height={200}
          />
          <h2 className="text-light dark:text-dark pt-5 text-2xl font-semibold">
            Memora
          </h2>
        </Link>
      </View>
    );
  },
  Footer() {
    return (
      <View textAlign="center" className="pt-5">
        <div className="text-white/70">Memora &copy; All Rights Reserved</div>
      </View>
    );
  },
};

export default function MainApp({ capsules = [] }) {
  return (
    <>
      <div className="bg-dark dark:bg-light z-0 inline-block w-full">
        <div className="flex min-h-screen w-full items-center justify-center">
          <Authenticator
            components={components}
            formFields={{
              signUp: {
                "custom:slug": {
                  order: 1,
                  label: "Slug",
                  placeholder: "Slug",
                  type: "text",
                  isRequired: true,
                },
              },
            }}
            className="rounded-lg p-5 shadow-lg shadow-primary"
          >
            {({ user }) => (
              <div className="container mx-auto flex">
                <SideNav />
                <div className="text-light dark:text-dark min-h-screen flex-grow border-x-2 border-gray-700">
                  <header className="bg-dark dark:bg-light sticky top-0 z-10 border-b-2 border-gray-700 pt-2">
                    <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
                  </header>
                  <div>{capsules.length}</div>
                </div>
              </div>
            )}
          </Authenticator>
        </div>
      </div>
    </>
  );
}
