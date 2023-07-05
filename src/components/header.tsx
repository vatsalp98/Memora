import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} group relative font-semibold text-light dark:text-dark`}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-light transition-[width] duration-300 group-hover:w-full dark:bg-dark ${
          router.pathname === href ? "w-full" : "w-0"
        }
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function Navbar() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-dark px-32 py-8 font-medium dark:bg-light lg:px-16 sm:px-12 xs:px-8">
      <div className="flex w-full items-center justify-between">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          {user && (
            <button
              className="rounded-lg border-2 border-light bg-light px-4 py-1 font-semibold text-dark duration-75 ease-in hover:bg-dark hover:text-light dark:border-dark"
              onClick={signOut}
            >
              Sign Out
            </button>
          )}
          {!user && (
            <Link
              href="/main"
              className="rounded-lg border-2 border-light bg-light px-4 py-1 font-semibold text-dark shadow-customBlue duration-75 ease-in hover:bg-dark hover:text-light dark:border-dark"
            >
              Get Started
            </Link>
          )}
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <div className="mt-2 flex items-center justify-center">
          <Link
            href={"/"}
            className="flex h-16 w-32 items-center justify-center rounded-full bg-light text-2xl font-bold text-dark shadow-primary dark:bg-dark dark:text-light"
          >
            Memora
          </Link>
        </div>
      </div>
    </header>
  );
}
