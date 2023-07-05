import { withAuthenticator } from "@aws-amplify/ui-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { BsCardImage, BsClockHistory } from "react-icons/bs";
import { Button } from "~/components/Button";
import ProfileImage from "~/components/profileImage";
import SideNav from "~/components/sideNav";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

function CapsulePage() {
  const [postText, setPostText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [postText]);

  return (
    <div className="z-0 inline-block w-full bg-dark dark:bg-light">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="container mx-auto flex">
          <SideNav />
          <div className="min-h-screen flex-grow flex-col border-x-2 border-gray-700 text-light dark:text-dark">
            <header className="sticky top-0 z-10 flex border-b-2 border-gray-700 bg-dark pt-2 dark:bg-light">
              <h1 className="mb-2 px-4 text-lg font-bold">Time Capsule</h1>
            </header>
            <div className="m-5 flex flex-col rounded-lg border border-gray-700 shadow-customBlue">
              <form className="flex flex-col gap-2 p-4">
                <div className="flex gap-4">
                  <ProfileImage />
                  <textarea
                    ref={inputRef}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    style={{ height: 0 }}
                    className="flex-grow resize-none overflow-hidden rounded-lg bg-gray-700 p-4 text-lg text-light outline-none dark:bg-light dark:text-dark"
                    placeholder="Whats happening?"
                  />
                </div>
                <div className="flex w-full justify-between pt-2">
                  <div className="flex gap-3">
                    <div className="cursor-pointer px-2 py-1">
                      <BsCardImage className="text-3xl text-light duration-75 ease-in hover:text-primary dark:text-dark" />
                    </div>
                    <div className="cursor-pointer px-2 py-1">
                      <BsClockHistory className="mt-1 text-2xl text-light duration-75 ease-in hover:text-primary dark:text-dark" />
                    </div>
                  </div>
                  <Button className="self-end">Post</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(CapsulePage);
