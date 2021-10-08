/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

import styles from '../styles/Post.module.css'


export default function Post(props) {

    const [poste, setPost] = useState(props.post)

    return (

        <div className= {styles.post}>
            {
                poste.imageURL &&
                (<img
                    className= {styles.postImg}
                    src={poste.imageURL}
                    alt="minha foto"
                />)

            }

            <div className= {styles.postInfo}>

                <span className= {styles.postTitle}>
                    {poste.title}
                </span>

                <hr />
                <span className= {styles.postDate} >
                    {new Date(poste.date).toDateString()}
                </span>

            </div>

            <p className= {styles.postDesc} >

                {poste.text}

            </p>
        </div>
    )


}