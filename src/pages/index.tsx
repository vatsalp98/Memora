import HeadMeta from "~/components/headMeta";
import Layout from "~/components/layout";
import Image from "next/image";
import Footer from "~/components/footer";
import Navbar from "~/components/header";

export default function Home() {
  return (
    <>
      <HeadMeta
        title="Memora | Home"
        description="Capture your memories, goals and everything in between."
      />
      <Navbar />
      <div className="z-0 inline-block min-h-screen w-full bg-dark px-32 dark:bg-light">
        <Layout className={"pt-32 md:pt-16 sm:pt-8"}>
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src="/home.svg"
                alt="Profile Picture"
                width={550}
                height={550}
                className="h-auto w-full md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center pl-10 lg:w-full lg:text-center">
              <p className="text-2xl text-light dark:text-dark">
                Best social media on earth!
              </p>
            </div>
          </div>
        </Layout>
      </div>
      <Footer />
    </>
  );
}
