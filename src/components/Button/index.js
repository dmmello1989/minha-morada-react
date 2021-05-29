import "./styles.css";

export const Button = ({ child }) => {
  return (
    <button className="button">{child}</button>
  );
}