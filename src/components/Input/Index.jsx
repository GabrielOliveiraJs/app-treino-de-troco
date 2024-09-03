import styles from './Input.module.css'

const Input = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input