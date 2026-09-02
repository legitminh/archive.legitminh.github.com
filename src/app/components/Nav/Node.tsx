// import { activePathState } from "./Path"
// import { useRecoilState } from "recoil";
// import { pathState } from "./Path";
//one node that contains children
import Link from "next/link";
import { usePathStore } from "./Path";
export default function Node(props : {
    name : string,
    path : number[],
    link : string
    // isInPath: boolean
}){
      const {activePath, setActivePath} = usePathStore();
    
    // const [path, setPath] = useRecoilState(pathState);

    // let color = props.isInPath?" bg-c8Blue":"";
    // console.log(props.name);
    // console.log(props.path);
    // console.log(activePath.slice(0,props.path.length));

    const safeActivePath = Array.isArray(activePath) ? activePath : [];
    const color = (props.path.toString() === safeActivePath.slice(0,props.path.length).toString())?" text-cblue80":" text-c00"; //if part of the path

    const nodeRender = (
        // Node outline px-[2rem] py-[0.5rem]
        <div className={" flex"}  > 
            {/* WHEN CLICK LINK, CHANGE PATH TOTALLY */}
            <Link href={props.link} className={" h-max w-[50%] left-0 pl-[2rem] py-[0.5rem] hover:bg-c00 text-c00 hover:text-cff " + color}> 
                <div className={" text-inherit h-max right-0 text-right"}>
                {props.name.substring(0,props.name.length/2)}
                </div>
            </Link>
            <div className={" w-[50%] text-c00 hover:text-cff hover:bg-c00 h-max pr-[2rem] py-[0.5rem] " + color} onClick={()=>{ setActivePath(props.path); console.log(activePath)}}>
                {props.name.substring(props.name.length/2)}
            </div>
        </div> );
    return nodeRender;
}   