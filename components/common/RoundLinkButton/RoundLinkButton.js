import styles from './RoundLinkButton.module.scss'

const linkTypes = ['main','page','dot']

export default function RoundLinkButton(props){
    let type = (typeof props.type === 'undefined')? linkTypes[0] : props.type.toLowerCase();
    type = (linkTypes.indexOf(type) >= 0)? type : linkTypes[0]
    return <a className={`${styles['round-link']} ${styles[type]}`} href={props.href}>
        {props.text}
    </a>
}