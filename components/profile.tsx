import styles from '../styles/Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.profile_container}>
            <div className={styles.profile_background}>
            </div>
        <div className={styles.profile}>
            <div className={styles.profile_greeting}>
                <h1>
                    Welcome to my blog!
                </h1>
                <p>
                    Portfolio website of a Front-end developer
                </p>
            </div>
        </div>
        </div>
    )
}

export default Profile