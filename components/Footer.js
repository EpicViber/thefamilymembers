import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        The Family <img src="https://cdn.discordapp.com/attachments/565187025058136075/1058000579101732934/DALLE_2022-10-03_18.55.19_-_only_in_ohio.png" alt="The Family" className={styles.logo} /> the best
      </footer>
    </>
  )
}
