import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import {Montserrat} from 'next/font/google';
import useThemeSwitcher from "~/components/hooks/useThemeSwitcher";
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import awsExports from "../aws-exports";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

const MyApp: AppType = ({ Component, pageProps }) => {

  const {darkMode, setDarkMode} = useThemeSwitcher();

  return (
    <Authenticator.Provider>
      <div className={`${montserrat.variable} font-mont bg-dark dark:bg-light`}>
        <Component {...pageProps} />
        <div className='fixed z-90 bottom-10 right-8 bg-light w-[42px] h-[42px] p-1 rounded-full drop-shadow-lg flex justify-center items-center text-light text-4xl hover:bg-indigo-500 shadow-md hover:drop-shadow-2xl hover:scale-110 hover:-translate-y-2 duration-100 transition-all ease-in-out dark:shadow-light  dark:hover:bg-indigo-500 cursor-pointer' onClick={() => {
              const check = darkMode === "light" ? "dark": "light";
              setDarkMode(check);
            }}
            >
          {
            darkMode === "dark" ? <BsFillSunFill className="w-9 h-9 text-dark"/> : <MdDarkMode className="w-9 h-9 text-dark dark:text-light"/>
          }
        </div>
      </div>
    </Authenticator.Provider>
  );
    
};

export default MyApp;
