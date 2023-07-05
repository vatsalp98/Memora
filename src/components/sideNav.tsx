/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut, BiSolidCapsule } from "react-icons/bi";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function SideNav() {
  const { user, signOut } = useAuthenticator();

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-center justify-center gap-2 whitespace-nowrap px-2">
        <li className="py-2 text-light dark:text-dark">
          <Link
            href="/main"
            className="flex rounded p-2 duration-75 ease-in hover:bg-primary"
          >
            <AiFillHome className="mr-2 text-xl text-light dark:text-dark" />
            <span className="font-semibold sm:hidden">Home</span>
          </Link>
        </li>
        <li className="py-2 text-light dark:text-dark">
          <Link
            href={`/profile/${user.username ?? ""}`}
            className="flex rounded p-2 duration-75 ease-in hover:bg-primary"
          >
            <CgProfile className="mr-2 text-xl text-light dark:text-dark" />
            <span className="font-semibold sm:hidden">Profile</span>
          </Link>
        </li>
        <li className="py-2 text-light dark:text-dark">
          <Link
            href={`/capsule`}
            className="flex rounded p-2 duration-75 ease-in hover:bg-primary"
          >
            <BiSolidCapsule className="mr-2 text-xl text-light dark:text-dark" />
            <span className="font-semibold sm:hidden">Capsule</span>
          </Link>
        </li>
        <li className="py-2 text-light dark:text-dark">
          <button
            onClick={signOut}
            className="flex rounded p-2 duration-75 ease-in hover:bg-red-700"
          >
            <BiLogOut className="mr-2 text-xl text-light dark:text-dark" />
            <span className="font-semibold sm:hidden">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
