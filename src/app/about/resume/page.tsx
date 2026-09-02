import Navbar from "@/app/components/Nav/Navbar";
import ThemeWrapper from "@/app/components/ThemeWrapper";
import PageMargin from "@/app/components/PageMargin";
import Image from "next/image";
export default function Resume() {
    return (
        <>
            {/* <TOCLayout children={undefined}>
                
            </TOCLayout> */}
            <ThemeWrapper>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Resume
                </h1>
            </center>
            <PageMargin>
                {/* <iframe src="/pdf/Resume2025.pdf" className="w-full h-screen" /> */}
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/ResumeCs.png`} alt="Resume"  className="w-full h-fit"/>
            </PageMargin>
            </div>
            </ThemeWrapper>
        </>
    );
}
