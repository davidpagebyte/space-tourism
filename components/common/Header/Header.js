import siteLogo from './../../../public/images/shared/logo.svg'
import Image from 'next/image'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import styles from './Header.module.scss'

export default function Header(){
    return (
        <section className={styles.background}>
            <div className={styles['logo-style']}>
                <Image
                    src={siteLogo}
                    alt="Website logo"
                >
                </Image>
            </div>
            <NavigationMenu></NavigationMenu>
        </section>
    )
}