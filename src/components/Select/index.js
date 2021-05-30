import "./styles.css";

export const Select = ({ name, options }) => {
  return(
    <select name={name} id={name} className="select">
      {options.map((item, index) => (
        <option value={index}>{item}</option>
      ))}
    </select>
  )
}