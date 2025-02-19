interface ErrorMessageProps {
    message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="error-message">
            <h5 id="message">{message}</h5>
        </div>
    )
}