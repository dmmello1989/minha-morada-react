

export const Room = ({ className, children }) => {
  return (
    <div className={`content ${className}`}>{children}</div>
  );
}