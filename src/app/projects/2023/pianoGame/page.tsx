import Navbar from "@/app/components/Nav/Navbar"
// import ThemeWrapper from "@/app/components/ThemeWrapper"
// import Text from "@/app/components/Text/Text"
// import FileSection from "@/app/components/FileSection"
// import TextImageLink from "@/app/components/About/TextImageLink"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
export default function f(){
    return(
        <>
             <Head>
                <title>Piano Game</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Piano Game
                </h1>
            </center>
            <PageMargin>
                <video muted controls className=" w-max" autoPlay src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/RushE.mp4`}>
                </video>
                <p className=" text-c40">
                    Any song can be played, including Rush E! That is, as long as you have the midi file.
                </p>
            </PageMargin>
            </div>
        </>
        
    )
}
