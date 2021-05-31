import "./styles.css";

export const Card = ({ className, children }) => {
  return (
    <div className={`card ${className}`}>{children}</div>
  )
}