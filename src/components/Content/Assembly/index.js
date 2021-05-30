

export const Assembly = ({ className, children }) => {
  return (
    <div className={`content ${className}`}>{children}</div>
  );
}