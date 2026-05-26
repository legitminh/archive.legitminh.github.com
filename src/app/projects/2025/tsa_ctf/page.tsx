"use client";
import Navbar from "@/app/components/Nav/Navbar"
// import ThemeWrapper from "@/app/components/ThemeWrapper"
// import Text from "@/app/components/Text/Text"
// import FileSection from "@/app/components/FileSection"
// import TextImageLink from "@/app/components/About/TextImageLink"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
export default function f(){
    function verify(){
        alert("HI")
    }
    (window as any).verify = verify; // temporarily expose for testing
    return(
        <>
            <Head>
                <title>TSA CTF</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    TSA CTF
                </h1>
            </center>
            <PageMargin>
                <p className=" text-c40">
                    date: 2026.1.17
                    <br></br>
                    Hi competitor, log in if you dare
                </p>
                <button onClick={verify}>
                    Hi
                </button>
            </PageMargin>
            </div>
        </>
        
    )
}
