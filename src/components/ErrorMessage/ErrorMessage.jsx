import './ErrorMessage.css'

function ErrorMessage({ message }) {
  return (
    <div className="error">
      <div className="error__sad-face">:(</div>
      <div className="error__message">{message}</div>
    </div>
  )
}

export default ErrorMessage
