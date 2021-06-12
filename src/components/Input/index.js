import "./styles.css";

export const Input = ({ name, type = "text", label, required = true, className = "" }) => {
  return (
    <div className={`input ${className}`}>
      <input className="input__input" type={type} name={name} required={required} />
      <label className="input__label" for={name}>{label}</label>
    </div>
  );
}