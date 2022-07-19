import {ErrorMessageProps} from "./ErrorMessage.props";

export const ErrorMessage = ({message}: ErrorMessageProps): JSX.Element => {
    return (
        <p>{message}</p>
    );
}
