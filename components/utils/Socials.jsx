import { EnvelopeHeart, Instagram } from "react-bootstrap-icons"

export default function Socials(props){
    return(
        <ul className={props.ulClass}>
            <li className={"nav-item "+(props.liClass)}><a className={"nav-link "+(props.aClass)} href="https://www.instagram.com/larae.day"><Instagram/></a></li>
            <li className={"nav-item "+(props.liClass)}><a className={"nav-link "+(props.aClass)} href="mailto:larae@laraeday.com"><EnvelopeHeart/></a></li>
        </ul>
    )
}