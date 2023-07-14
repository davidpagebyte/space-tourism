import { app_constants } from "../../../lib/data/globals";
import Link from "next/link";
import styles from './NavigationMenu.module.scss'
import Image from "next/image";
import burguerButton from './../../../public/images/shared/icon-hamburger.svg';
import closeButton from './../../../public/images/shared/icon-close.svg';
import {useState} from 'react'
import {useEffect} from 'react'

export default function NavigationMenu(){
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const menuItems = app_constants.sections.map((el,idx)=>{
        return <li key={idx}>
           <Link  href={el.url}><span className={styles['menu-index']}>{`0${idx}`}</span>{el.id}</Link>
        </li>
    })
    
    return (
        <div>
            <ul className={styles['navigation-menu']}>{menuItems}</ul>
            <Image onClick={e=>setShowMobileMenu(!showMobileMenu)} src={burguerButton} className={styles['mobile-menu-toggle']}></Image>
            <div className={`${styles['mobile-navigation']} ${ showMobileMenu? '':styles['mobile-hide'] }`}>
                <Image onClick={e=>setShowMobileMenu(false)} src={closeButton} className={styles['mobile-close']}></Image>
                <ul>{menuItems}</ul>
            </div>
        </div>
    )
};