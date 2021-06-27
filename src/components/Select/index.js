import "./styles.css";

export const Select = ({ name, options, onChange }) => {
  return(
    <select name={name} id={name} className="select" onChange={onChange}>
      <option default value="">Selecione:</option>
      {options.map((item, index) => (
        <option value={item.id} key={`select-options-${index}`}>{item}</option>
      ))}
    </select>
  )
}