import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react"
import SideNav from "~/components/sideNav";
import {RxAvatar, RxDividerVertical} from "react-icons/rx";
import { LoadingPage } from "~/components/loadingCustom";

function ProfilePage() {
    const { user, signOut, isPending } = useAuthenticator();
    
    if (isPending) {
        return <>
            <LoadingPage/>
        </>
    }

    return (<div className="w-full inline-block z-0 bg-dark dark:bg-light">
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="container mx-auto flex">
                <SideNav id={user?.username} signOut={signOut}/>
                <div className="min-h-screen flex-grow border-x-2 border-gray-700 text-light dark:text-dark flex-col">
                    <header className="sticky top-0 z-10 border-b-2 border-gray-700 bg-dark dark:bg-light pt-2">
                        <h1 className="mb-2 px-4 text-lg font-bold">Profile</h1>
                    </header>
                    <div className="flex justify-center items-center bg-[#1B272F] rounded-lg m-5 p-5 flex-col gap-5 shadow-customBlue">
                        <div>
                            <RxAvatar className="w-[100px] h-[100px] text-light "/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-xl font-semibold text-light">{user.attributes?.name}</span>
                            <span className="text-sm text-light">{user.attributes?.email}</span>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col text-center">
                                <span className="text-light">90</span>
                                <div className="text-[#56668E] text-sm hover:underline cursor-pointer">
                                    Capsules
                                </div>
                            </div>
                            <RxDividerVertical  className="text-5xl"/>
                            <div className="flex flex-col text-center">
                                <span className="text-light">40</span>
                                <div className="text-[#56668E] text-sm cursor-pointer hover:underline">
                                    Friends
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="px-4 font-semibold text-lg">
                            <h2 className="text-light dark:text-dark">Tags</h2>
                        </div>
                        <div className="flex px-2">
                            <div className="px-2 py-1 md:px-4 md:py-2 bg-profile/80 rounded-full m-2 text-light">
                                Car
                            </div>
                            <div className="px-2 py-1 md:px-4 md:py-2 bg-profile/80 rounded-full m-2 text-light">
                                Fitness
                            </div>
                            <div className="px-2 py-1 md:px-4 md:py-2 bg-profile/80 rounded-full m-2 text-light">
                                Goals
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default withAuthenticator(ProfilePage);