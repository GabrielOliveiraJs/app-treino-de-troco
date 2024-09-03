import styles from './Coin.module.css'

const Coin = ({ name, image, onClick }) => {
    return (
        <div className={styles.coin}>
            <img src={image} alt={name} onClick={onClick} />
        </div>
    )
}

export default Coin