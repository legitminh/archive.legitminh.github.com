import Navbar from "@/app/components/Nav/Navbar"
// import ThemeWrapper from "@/app/components/ThemeWrapper"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
import Link from "next/link"
export default function f(){
    return(
        <div>
            <Head>
                <title>Nan</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    NAN
                </h1>
            </center>
            <PageMargin>
            
            <div className=" text-c00 overflow-auto">
            <strong>A proposal to replace rock paper scissors</strong><br></br>
            <br></br>
            Rock paper scissors is a game between N players with a random result determining some victors, requiring only hands.
            <br></br><br></br>
            How many times have you tied rock paper scissors in total?
            <br></br><br></br>
            \\insertVideoOrGifOrComicOfTyingRockPaperScissorAndFrustrationEnsued
            <br></br><br></br>
            Countless, if you&apos;ve ever played the game.<br></br>
            You are expected to tie 0.5 times each game with another player.<br></br>
            <br></br>
            That sounds ok but that&apos;s only at 2 players, when the number of players is 4, select 1 victor,<br></br>
            The tie count expected is even higher, at ~1.36<br></br>
            <br></br>
            And double the player count again, the tie count expected is 9.34<br></br>
            Yes, for just 8 players, you are expected to tie 9 times<br></br>
            <br></br>
            <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/blogs/2024/Nan.Proof`}>Click here</Link> for proof<br></br>
            <br></br>
            That is not great, knowing the whole world runs on rock paper, and scissors. From who goes first in a board game to the decision of a U.S court case and selection of Christie&apos;s or Sotheby&apos;s Auction house (https://en.wikipedia.org/wiki/Rock_paper_scissors#American_court_case)<br></br>
            <br></br>
            Rock paper scissors are so commonplace that time saved from needlessly tying can be an unmeasurable long-term cost saving for the whole world. <br></br>
            <br></br>
            A proposal is coin flipping, this game has an extremely low tie rate of 1/6000 (https://ui.adsabs.harvard.edu/abs/1993PhRvE..48.2547M/abstract#:~:text=Extrapolations%20based%20on%20the%20model,approximately%201%20in%206000%20tosses. ) and requires around ceil(log2(n)) rounds for n players. But it requires a physical object that we don&quot;t always have, time to take in and out the object, fails at 3 players, and needs to organize who is face and tails. This method is used in Futbol game decisions and is only good for 2 players. <br></br>
            <br></br>
            A better idea is a random number generator (RNG). This is a class of solution that uses a physical wheel or dice or more commonly, a digital one to generate a random number within certain requirements. The disadvantages are organizing who gets which number, and acquiring some physical object to perform RNG, although easier to find. For frequent games with the same players, a list of names or other forms of ID could be put in a digital wheel/randomizer.<br></br>
            <br></br>
            But now, I propose a better system that does the same with RNG but only requires hands. Someone has likely proposed something similar before, given the simplicity of tacking rock paper scissors weaknesses.<br></br>
            <br></br>
            I name it “Nan”, an easy-to-pronounce name regardless of language.<br></br>
            <br></br>
            The player proposing the game or (if the proposer is an outsider) initiating the game will say &ldquo;Start(in your language) Nan”, then all players will form a circle, with the initiator being 0 and the player number increasing by 1 each player clockwise from the initiator.<br></br>
            The initiator and only them will count 0,1 in their language, during this time:<br></br>
            Each player chooses a number from 0 to N-1. The number should be in binary, with the pinky finger representing the 2^0 and values increasing to the thumb. (This caps the number of players to 32 on one hand, but both hands can go up to 1024 players (left-hand contains 2^0). Also, be realistic, you don&quot;t need that many players)<br></br>
            Binary conversion is very easy, especially at low numbers<br></br>
            Then all players play their number on the 3rd beat, after the 0 and 1 beats.<br></br>
            The initiator and the one directly next to them clockwise quickly count the sum of the numbers while the other players check their neighbors for cheating. The sum is divided by the number of players and the remainder is the winning player.<br></br>
            <br></br>
            The weakness of this system is that it requires basic algebra, which prevents babies from playing with one another. Also, I&quot;ve assumed people have hands, but some don&quot;t. Also, this requires a circular or somewhat morphologically linear arraignment of players, this is not always possible (if you are playing “nan” floating in space, you could say “start nan age” and it will be ranked by age instead, default is increasing starting from the initiator and looping back once N is reached). RNG is still more efficient when you have a large number of players, like 32+, since addition and cross-checking time goes up linearly.<br></br>
            <br></br>
            I find this system better due to the low severity of its problems and the fit for most common uses of rock paper scissors.<br></br>
            <br></br>
            Feel free to reach out if you want to critique/discuss my idea or help plan the world expansion of “nan”
            </div>
            </PageMargin>
            </div>
        </div>
        
    )
}
