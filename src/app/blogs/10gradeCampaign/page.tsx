import Navbar from "@/app/components/Nav/Navbar"
import ThemeWrapper from "@/app/components/ThemeWrapper"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
export default function f(){
    return(
        <ThemeWrapper>
             <Head>
                <title>Avatar Campaign</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Avatar Campaign
                </h1>
            </center>
            <PageMargin>
                <p className=" text-c00">
                    nothing to see here. Campaign Credit: Aswin K
                </p>
                {/* <video className=" w-max" muted controls autoPlay src="/videos/avatar.mp4">
                </video> */}
            </PageMargin>
            </div>
        </ThemeWrapper>
        
    )
}
