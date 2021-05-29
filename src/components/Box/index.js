import "./styles.css";

export const Box = ({ child }) => {
  return (
    <button className="box">{child}</button>
  );
}