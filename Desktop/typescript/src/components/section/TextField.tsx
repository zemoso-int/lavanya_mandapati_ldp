import { useRef, useState } from "react";



interface Props
{
    text:string;
    ok:boolean;
    i:number;
    fn:(name:string)=>string;
    handleChange:()=>void

}

const TextField=({text,ok,i,fn,handleChange}:Props)=>
{
    const[value,setValue]=useState<number|null>(5);
    const inputRef=useRef<HTMLInputElement>(null);

    return(
        <div>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}

export default TextField;