import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react"
import SideNav from "~/components/sideNav";

function ProfilePage() {
    const { user, signOut } = useAuthenticator();

    return (<div className="w-full inline-block z-0 bg-dark dark:bg-light">
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="container mx-auto flex">
                <SideNav id={user?.username} signOut={signOut}/>
                <div className="min-h-screen flex-grow border-x text-light dark:text-dark">
                    <header className="sticky top-0 z-10 border-b bg-dark dark:bg-light pt-2">
                        <h1 className="mb-2 px-4 text-lg font-bold">Profile</h1>
                    </header>
                </div>
            </div>
        </div>
    </div>);
}

export default withAuthenticator(ProfilePage);