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
        <Link href={href} className={`${className} relative group font-semibold text-light dark:text-dark`}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${router.pathname === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    );
};

export default function Navbar() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-dark relative z-10 lg:px-16 sm:px-12 xs:px-8 dark:bg-light">
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4"/>
                    <CustomLink href="/about" title="About" className="mx-4"/>
                </nav>
                
                <nav className="flex items-center justify-center flex-wrap">
                    {!user && <Link href="/login" className="bg-light rounded-lg hover:bg-dark text-dark hover:text-light px-4 py-1 border-light font-semibold duration-75 dark:border-dark border-2 ease-in">
                        Sign Out
                    </Link>}
                    {user && <Link href="/login" className="bg-light rounded-lg hover:bg-dark text-dark hover:text-light px-4 py-1 border-light font-semibold duration-75 dark:border-dark border-2 ease-in">
                        Login
                    </Link>}
                </nav>
            </div>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <div className="flex items-center justify-center mt-2">
                    <Link href={"/"} className="w-32 h-16 bg-light text-dark flex items-center justify-center rounded-full text-2xl font-bold dark:text-light dark:bg-dark">
                        Memora
                    </Link>
                </div>
            </div>
        </header>
    );
}