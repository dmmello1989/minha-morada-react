import "./styles.css";

export const Button = ({ className, onClick, children }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>{children}</button>
  );
}