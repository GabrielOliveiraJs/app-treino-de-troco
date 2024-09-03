import styles from './ValueHighlight.module.css'

const ValueHighlight = ({ children }) => {
    return (
        <span className={styles.span}>
            {children}
        </span>
    )
}

export default ValueHighlight