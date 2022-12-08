import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import avatar from '../public/avatar.jpg'
import { SocialIcon } from 'react-social-icons'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_background}>
            </div>
            <div className={styles.profile_greeting}>
                <h1>
                    Welcome to my blog!
                </h1>
                <p>
                    Portfolio website of a Front-end developer
                </p>
            </div>
            <div className={styles.profile_information}>
                <div className={styles.profile_information_avatar}>
                    <Image
                        className={styles.avatar}
                        src={avatar}
                        alt='Avatar'
                        height={150}
                        width={150}
                    />
                </div>
                <div className={styles.profile_information_name}>
                    <h3>
                        Phạm Gia Huy
                    </h3>
                    <p>
                        (Mentorias)
                    </p>
                </div>
                <div className={styles.profile_information_contact}>
                    <h3>Contact me</h3>
                    <SocialIcon url='https://www.facebook.com/lullaby.for.ur.soul/'
                        style={{
                            height: 30,
                            width: 30,
                        }} />
                    <SocialIcon url='https://www.instagram.com/huyan.kami/'
                        style={{
                            height: 30,
                            width: 30,
                        }} />
                    <SocialIcon url='https://www.linkedin.com/in/huy-ph%E1%BA%A1m-gia-6570aa250/'
                        style={{
                            height: 30,
                            width: 30,
                        }} />
                    <SocialIcon url='pghuy18@gmail.com'
                        style={{
                            height: 30,
                            width: 30,
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Profile