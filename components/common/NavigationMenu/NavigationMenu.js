import { app_constants } from "../../../lib/data/globals";
import Link from "next/link";
import styles from './NavigationMenu.module.scss'

export default function NavigationMenu(){
    const menuItems = app_constants.sections.map((el,idx)=>{
        return <li key={idx}>
           <Link  href={el.url}><span>{`0${idx}`}</span>{el.id}</Link>
        </li>
    })
    return (
        <ul className={styles['navigation-menu']}>{menuItems}</ul>
    )
};