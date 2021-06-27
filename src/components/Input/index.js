import "./styles.css";

export const Input = ({ 
  name, 
  label,
  onChange,
  value = "",
  isDate = "",
  type = "text", 
  className = "", 
  required = false, 
}) => {
  const isFilled = value.length > 0;

  return (
    <div className={`input ${className}`}>
      <input className="input__input" type={type} name={name} required={required} value={value} onChange={onChange} />
      <label className={`input__label ${isDate && "input__label--date"} ${isFilled && "input__label--filled"} `} htmlFor={name}>{label}</label>
    </div>
  );
}