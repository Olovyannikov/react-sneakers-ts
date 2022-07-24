import {Button} from "@/ui";
import {ArrowBack} from "../Icons";

import s from './InfoMessage.module.scss';
import {InfoMessageProps} from "./InfoMessage.props";

export const InfoMessage = ({title, message, image}: InfoMessageProps): JSX.Element => {

    return (
        <div className={s.info}>
            {image && <img src={image} alt={message}/>}
            {title && <h3>{title}</h3>}
            {message && <p>{message}</p>}
            <Button href='/' color='primary' icon={<ArrowBack/>}>Вернуться назад</Button>
        </div>
    );
}
