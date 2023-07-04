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

Amplify.configure(awsExports);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const { darkMode, setDarkMode } = useThemeSwitcher();

  return (
    <Authenticator.Provider>
      <div className={`${montserrat.variable} font-mont bg-dark dark:bg-light`}>
        <Component {...pageProps} />
        <div
          className="z-90 fixed bottom-10 right-8 flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-light p-1 text-4xl text-light shadow-md drop-shadow-lg transition-all duration-100 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 hover:drop-shadow-2xl  dark:shadow-light dark:hover:bg-indigo-500"
          onClick={() => {
            const check = darkMode === "light" ? "dark" : "light";
            setDarkMode(check);
          }}
        >
          {darkMode === "dark" ? (
            <BsFillSunFill className="h-9 w-9 text-dark" />
          ) : (
            <MdDarkMode className="h-9 w-9 text-dark dark:text-light" />
          )}
        </div>
      </div>
    </Authenticator.Provider>
  );
};

export default MyApp;
