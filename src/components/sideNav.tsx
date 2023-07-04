/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import {AiFillHome} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BiLogOut} from "react-icons/bi";

type Props = {
    id?: string;
    signOut: any;
}

export default function SideNav(props: Props) {
    return (
        <nav className="sticky top-0 px-2 py-4">
            <ul className="flex flex-col items-start gap-2 whitespace-nowrap px-2">
                <li className="text-light dark:text-dark py-2">
                    <Link href="/main" className="flex hover:bg-primary p-2 rounded duration-75 ease-in"> 
                        <AiFillHome className="text-xl text-light dark:text-dark mr-2"/>
                        <span className="font-semibold sm:hidden">Home </span>
                    </Link>
                </li>
                <li className="text-light dark:text-dark py-2">
                    <Link href={`/profile/${props.id ?? ""}`} className="flex hover:bg-primary p-2 rounded duration-75 ease-in">
                        <CgProfile className="text-xl text-light dark:text-dark mr-2"/>
                        <span className="font-semibold sm:hidden">Profile </span>
                    </Link>
                </li>
                <li className="text-light dark:text-dark py-2">
                    <button onClick={props.signOut} className="flex hover:bg-red-700 p-2 rounded duration-75 ease-in">
                        <BiLogOut className="text-xl text-light dark:text-dark mr-2"/>
                        <span className="font-semibold sm:hidden">Logout </span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}