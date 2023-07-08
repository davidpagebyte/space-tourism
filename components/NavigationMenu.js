import { app_constants } from "../lib/data/globals";

export default function NavigationMenu(){
    const menuItems = app_constants.sections.map((el,idx)=>{
        return <li key={idx}>{el}</li>
    })
    return (
        <ul>{menuItems}</ul>
    )
};