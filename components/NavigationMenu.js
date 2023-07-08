import { app_constants } from "../lib/data/globals";
import Link from "next/link";

export default function NavigationMenu(){
    const menuItems = app_constants.sections.map((el,idx)=>{
        return <li key={idx}>
           <Link href={el.url}>{el.id}</Link>
        </li>
    })
    return (
        <ul>{menuItems}</ul>
    )
};