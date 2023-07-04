import Head from "next/head";

type Props = {
    title: string,
    description: string,
    icon?: string,
}

export default function HeadMeta(props: Props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href={props.icon ?? "/favicon.ico"} />
        </Head>
    );
}