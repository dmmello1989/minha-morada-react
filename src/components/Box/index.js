import "./styles.css";

export const Box = ({ className, children }) => {
  return (
    <div className={`box ${className}`}>{children}</div>
  );
}