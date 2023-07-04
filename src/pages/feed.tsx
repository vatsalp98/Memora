import Footer from "~/components/footer";
import HeadMeta from "~/components/headMeta";
import Navbar from "~/components/header";
import Layout from "~/components/layout";

export default function FeedPage() {
    return (
        <>
            <HeadMeta title="Memora | Feed" description="Capture your memories, goals and everything in between."/>
            <Navbar />
            <div className="w-full min-h-screen inline-block z-0 bg-dark px-32 dark:bg-light">
                <Layout className={"pt-32 md:pt-16 sm:pt-8"}>
                    <div className="flex items-center justify-center w-full flex-col text-center">
                        
                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    );
}