const MessageAlert = ({alertType = 'danger', handleCloseMessageAlert, ...props}) => {
    if (props.showMessageAlert) {
        if (props.error) {
            return (
                Array.isArray(props.error.message) ? (
                    <div className={`notification mb-5 is-${alertType}`}>
                        <button className="delete" onClick={handleCloseMessageAlert}></button>
                        {props.error.message.map((message, index) => (
                            <p key={index}>{message}</p>
                        ))}
                    </div>
                ) : (
                    <div className={`notification mb-5 is-${alertType}`}>
                        <button className="delete" onClick={handleCloseMessageAlert}></button>
                        {props.error.message}
                    </div>
                )
            )
        }
    }
}

export default MessageAlert
