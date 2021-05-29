import "./styles.css";

export const Link = ({ href, children }) => {
  return (
    <a href={href} className="link">{children}</a>
  )
}