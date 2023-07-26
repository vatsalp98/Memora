import {
  AccountSettings,
  Card,
  ThemeProvider,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import SideNav from "~/components/sideNav";
import { RxAvatar, RxDividerVertical } from "react-icons/rx";
import { LoadingPage } from "~/components/loadingCustom";
import { useRouter } from "next/router";

function ProfilePage() {
  const { user, isPending } = useAuthenticator();
  const router = useRouter();

  if (isPending) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  const onSuccess = () => {
    alert("Password succesfully changed!");
    router.reload();
  };

  const theme = {
    name: "custom-theme",
    tokens: {
      colors: {
        border: {
          primary: { value: "{colors.primary}" },
          secondary: { value: "{colors.neutral.20}" },
          tertiary: { value: "{colors.neutral.10}" },
        },
      },
      radii: {
        small: { value: "2px" },
        medium: { value: "3px" },
        large: { value: "4px" },
        xl: { value: "6px" },
      },
    },
  };

  return (
    <div className="bg-dark dark:bg-light z-0 inline-block w-full">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="container mx-auto flex">
          <SideNav />
          <div className="text-light dark:text-dark min-h-screen flex-grow flex-col border-x-2 border-gray-700">
            <header className="bg-dark dark:bg-light sticky top-0 z-10 border-b-2 border-gray-700 pt-2">
              <h1 className="mb-2 px-4 text-lg font-bold">Profile</h1>
            </header>
            <div className="shadow-customBlue m-5 flex flex-col items-center justify-center gap-5 rounded-lg bg-[#1B272F] p-5">
              <div>
                <RxAvatar className="text-light h-[100px] w-[100px] " />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-light text-xl font-semibold">
                  {user.attributes?.name}
                </span>
                <span className="text-light text-sm">
                  {user.attributes?.email}
                </span>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col text-center">
                  <span className="text-light">90</span>
                  <div className="cursor-pointer text-sm text-[#56668E] hover:underline">
                    Capsules
                  </div>
                </div>
                <RxDividerVertical className="text-5xl" />
                <div className="flex flex-col text-center">
                  <span className="text-light">40</span>
                  <div className="cursor-pointer text-sm text-[#56668E] hover:underline">
                    Friends
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="px-4 text-lg font-semibold">
                <h2 className="text-light dark:text-dark">Tags</h2>
              </div>
              <div className="flex px-2">
                <div className="bg-profile/80 text-light m-2 rounded-full px-2 py-1 md:px-4 md:py-2">
                  Car
                </div>
                <div className="bg-profile/80 text-light m-2 rounded-full px-2 py-1 md:px-4 md:py-2">
                  Fitness
                </div>
                <div className="bg-profile/80 text-light m-2 rounded-full px-2 py-1 md:px-4 md:py-2">
                  Goals
                </div>
              </div>
            </div>
            <div>
              <div className="px-4 text-lg font-semibold">
                <h2 className="text-light dark:text-dark">
                  Account Information
                </h2>
                <div className="text-light dark:text-dark flex flex-col px-2 py-2">
                  <ThemeProvider theme={theme}>
                    <Card width={"500px"}>
                      <AccountSettings.ChangePassword onSuccess={onSuccess} />
                    </Card>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(ProfilePage);
