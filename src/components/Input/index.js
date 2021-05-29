import "./styles.css";

export const Input = ({ label }) => {
  return (
    <div class="input input-subject edit">
      <input type="text" name="subject" required />
      <label for="subject">{label}</label>
    </div>
  );
}