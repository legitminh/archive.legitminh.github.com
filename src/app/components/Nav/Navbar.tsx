'use client'
//N
//The bar that will be present in pretty much all web pages. Composed of one master navfolder
/*TODO
Takes parameter of page location to create a top bar that display all page children for quick access
Display 
Rename to Document

*/
// import Link from "next/link";
import React, { useState } from "react";
// import NavFolder from "../Archived/NavFolder";
// import NavItem from "../Archived/NavItem";
import ToggleTheme from "../ToggleTheme";
// import { pathState } from "./Path";
import { usePathStore } from "./Path";
import Node from "./Node";
import EndNode from "./EndNode";
// import { useRouter } from 'next/navigation';
// import { navigation}
export default function Navbar() {
  
  const [open, setOpen] = useState(false); //if the map is opened
  const {activePath} = usePathStore();
  // const router = useRouter();
  const currentUrl = window.location.pathname;
  /**
   * Below is the master hierarchy and it manages everything
   * NodeStructure: 
   *  ID : {Name, Url,..., children}
   * PathStructure:
   *  Node, Node, FinalNode
   */
  const map :any = {c:[
    {n:"HOME", l:"/", c:[
      {n:"ABOUT", l:"/about", c:[
        {n:"RESUME", l:"/about/resume"},
      ]
    },
      {n:"PROJECTS", l:"/projects", c:[
        {n: "2025", l:"/projects#2025", c:[
          // {n:"TSA CTF", l:"/projects/2025/tsa_ctf"},
        ]},
        {n: "2024", l:"/projects#2023" ,c: [
          {n:"PEP WEBSITE", l:"/projects/2024/pepWebsite"},
          {n:"AUDIOPLAYER", l:"/projects/2024/audioPlayer"},
          {n:"ASTROFEST_1", l: "/projects/2024/astroFest1"},
        ]
        },
        {n: "2023", l:"/projects#2023"
        ,c: [
          {n:"NET ZERO HERO", l:"/projects/2023/netZeroHero"},
          {n:"YOUTUBE RANDOMIZE", l:"/projects/2023/youtubeRandomize"},
          {n:"PIANO GAME", l:"/projects/2023/pianoGame"},
          {n:"RSA STEINOGRAPHY", l:"https://minhn.itch.io/rsasteinography"},
          {n:"ASTRO FEST", l:"/projects/2023/astroFest"},
          {n:"THIRTEEN", l:"https://minhn.itch.io/thirteen"},
          {n:"MAZE GAME", l:"https://minhn.itch.io/mazegame"}
        ]
        },
        {n:"2022", l:"/projects#2022", c:[
          {n:"PROJECTILE MOTION CALCULATOR", l:"https://minhn.itch.io/projectilemotioncalculator"},
          {n:"MINE SWEEPER", l:"https://minhn.itch.io/minesweeper"},
          {n:"TETRIS", l:"https://minhn.itch.io/tetris"},
          {n:"GAME OF LIFE", l:"https://minhn.itch.io/conway"},
        ]},
        {n:"2021", l:"/projects#2021", c:[ 
          {n:"SPACE COLONIZER", l:"https://minhn.itch.io/space-colonizer"},
        ]}
      ]},
      {n:"BLOG", l: "/blogs", c: [
        {n:"2023", l: "/blogs#2023", c:[
          {n:"10 GRADE CAMPAIGN", l: "/blogs/10gradeCampaign"},
          {n:"9 GRADE CAMPAIGN", l: "/blogs/9gradeCampaign"},
          {n:"∞", l: "/blogs/infinity"}
        ]}, 
        {n:"2024", l: "/blogs#2024", c:[
          {n:"NAN", l: "/blogs/2024/Nan", c:[
            {n:"PROOF", l:"/blogs/2024/Nan.Proof"}
          ]},
          {n:"HAK", l:"/blogs/2024/Hag"},
          {n:"DETACHMENT", l:"/blogs/2024/Detachment"}

        ]},
        {n:"2025", l: "/blogs#2025", c:[
          {n:"NHSGA", l: "/blogs/2025/Nhsga"},
          {n:"CHOCOLATE FONDUE", l: "/blogs/2025/ChocolateFondue"}
        ]}


      ]}
    ]}
  ]};
  function getPath(){
    const urlPath = currentUrl.substring(currentUrl.indexOf("/"));
    // console.log(urlPath);
    function dfs(node:any, curPath:number[]){
      if ((node.l) === urlPath){
        return curPath
      }
      if (node.c){ //if have children
        for (let i = 0; i < node.c.length; i++){
          const childResult : any = dfs(node.c[i], curPath.concat(i));
          if (childResult != false){
            return childResult;
          }
        }
      }
      return false;
    }
    
    return dfs(map.c[0], [0]); //start at home
  }
  const path = getPath();
  function getChildren(){ //get childrenNodes of the current absolute file path
    let curNode = map;
    for (let i = 0; i < path.length; i++){
      curNode = curNode.c[path[i]];
    }
    return curNode.c;
  }
  function renderChildren(){
    // console.log(getPath());
    // Prep immediate children list to render
    // setPath(getPath());
    const childrenNodes = getChildren();
    const childrenLinks : any[] = [];
    if (childrenNodes != undefined){
      for (let i = 0; i < childrenNodes.length; i++){
        childrenLinks.push(
          <div key={i} className=" h-fit">
            <EndNode name={childrenNodes[i].n} link={childrenNodes[i].l} path={path.concat(i)} ></EndNode>
          </div>
        );
      }
    }
    return childrenLinks
  }
  function getColums(){
    console.log(activePath);
    const colums: any[] = [];
    // Prep nodes list to render
    if (open){  //transform into list of nodes for render
      let curNode = map; //starts at origin Node
      const path :Array<number> = []; //origin have no path
  
      for (let i = 0; i < activePath.length; i++){
        const branch = activePath[i];
        curNode = curNode.c[branch];
        path.push(branch); //at this location
        const colum : any[] = [];
        curNode.c.forEach((node :any, index: number) => {
          // Check for cases of children
          // if (i < activePath.length-1 && index === activePath[i+1]) { //if is a node in path
          //     colum.push(
          //       <Node name={node.n} link={node.l} isInPath={true} path={path.concat([index])}></Node>
          //     );
          // }
          // else 
          if (node.c){ //if have children
            colum.push(
              <Node key={index} name={node.n} link={node.l} path={path.concat([index])}></Node>
            );
          }
          else{ //if is endnode
            colum.push(
              <EndNode key={index} name={node.n} link={node.l} path={path.concat([index])}></EndNode>
            );
          }
          
        });
        colums.push(colum);
      };
    }
    return colums
  }
  function renderColums(){ //render each colum by returning children of all colums not root
    const colums: any = getColums();
    const everything : any = []; //al colums
    colums.forEach((colum:any, colIndex: number) =>{ //for each column, add column into everything
      const cl:any = [];
      colum.forEach((node:any) => {
        cl.push(node);
      });    
      everything.push(<div key={colIndex} className=" flex" >
        <div>
        {cl}
        </div>
        <div className=" flex h-[100%] items-center"><div className=" border-r-[1px] border-cc0 h-[calc(100%-1rem)] relative"></div></div>
      </div>);
    })
    return <div className=" flex">
      {
        everything
      }
    </div>;
  }
  return (
      <div className={"flex first z-10 w-full bg-opacity-50 border-b-[1px] border-cc0 overflow-scroll scrollbar-hide"}>

        {/* First column and Root node */}
        <div className=" flex" onClick={()=>setOpen(!open)} > 
          <Node name = "HOME" link="/" path={[0]}/>
          <div className=" flex h-[100%] items-center"><div className=" border-r-[1px] border-cc0 h-[calc(100%-1rem)] relative"></div></div>
          
        </div>
        {/* Colums */}
        <div>
          {renderColums()}
        </div>
        {/* Immediate Children */}
        
        <div className=" flex ml-auto items-center ">
          {/* <div className=" flex h-[100%] items-center"><div className=" border-r-[1px] border-cc h-[calc(100%-1rem)] relative"></div></div> */}
          {renderChildren()}
          <div className=" flex w-[4rem] items-center justify-center">
            <ToggleTheme></ToggleTheme>
          </div>
        </div>
        {/* DarkModeButton */}
        {/* <div className=" flex w-[4rem] h-full items-center justify-center ">
        
          
        </div> */}
      </div>
  );
}






// }
// function getNode(child: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined){ //return the nodes
//   // console.log(typeof child);
//   const [activePath, setActivePath] = useRecoilState(activePathState);
//   if (typeof child === 'string' ){
//     return (
//     <li className=" text-c0">
//       {child}
//     </li>
//     );
//   } 
//   else {
//     return (
//     <li className=" text-c0 hover:bg-c8Blue" >
//       {child}
//     </li>
//     );
//   }
// }
