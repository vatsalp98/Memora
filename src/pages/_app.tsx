import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Montserrat } from "next/font/google";
import useThemeSwitcher from "~/components/hooks/useThemeSwitcher";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import awsExports from "../aws-exports";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

Amplify.configure({ ...awsExports, ssr: true });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const { darkMode, setDarkMode } = useThemeSwitcher();
  const queryClient = new QueryClient();
  return (
    <>
      <Authenticator.Provider>
        <QueryClientProvider client={queryClient}>
          <div
            className={`${montserrat.variable} font-mont bg-dark dark:bg-light`}
          >
            <Component {...pageProps} />
            <div
              className="z-90 bg-light text-light dark:shadow-light fixed bottom-10 right-8 flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full p-1 text-4xl shadow-md drop-shadow-lg transition-all duration-100 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500  hover:drop-shadow-2xl dark:hover:bg-indigo-500"
              onClick={() => {
                const check = darkMode === "light" ? "dark" : "light";
                setDarkMode(check);
              }}
            >
              {darkMode === "dark" ? (
                <BsFillSunFill className="text-dark h-9 w-9" />
              ) : (
                <MdDarkMode className="text-dark dark:text-light h-9 w-9" />
              )}
            </div>
          </div>
        </QueryClientProvider>
      </Authenticator.Provider>
    </>
  );
};

export default MyApp;
