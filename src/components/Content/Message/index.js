

export const Message = ({ className, children }) => {
  return (
    <div className={`content ${className}`}>{children}</div>
  );
}