/* eslint-disable @next/next/no-img-element */


import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className= {styles.header} >
            <div className= {styles.headerTitles} >
                <span className= {styles.headerTitleSm} >Consumismo</span>
                <span className= {styles.headerTitleLg} >Blog</span>
            </div>

            <img 
                className={styles.headerImg}
                src="https://cdn.pixabay.com/photo/2016/09/19/02/17/world-1679462_960_720.png" 
                alt="foto do blog" 
            />
        </div>
    )
}