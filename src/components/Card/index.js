import "./styles.css";

export const Card = ({ className = "", onClick, children }) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>{children}</div>
  )
}