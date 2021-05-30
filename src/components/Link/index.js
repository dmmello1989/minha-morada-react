import "./styles.css";

export const Link = ({ href, className, children }) => {
  return (
    <a href={href} className={`link ${className}`}>{children}</a>
  )
}