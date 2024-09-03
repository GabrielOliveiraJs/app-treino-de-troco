import styles from './Bill.module.css'

const Bill = ({ name, image, onClick }) => {
    return (
        <div className={styles.bill}>
            <img src={image} alt={name} onClick={onClick} />
        </div>
    )
}

export default Bill