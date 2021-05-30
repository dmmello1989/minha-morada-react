import "./styles.css";

export const Container = ({ className, children }) => {
  return (
    <div className={`container ${className}`}>{children}</div>
  );
}