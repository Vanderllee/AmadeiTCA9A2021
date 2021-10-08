/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

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

                <Link href={`/post/${poste.id}`}>
                
                    <span className= {styles.postTitle}>
                        {poste.title}
                    </span>
                
                </Link>

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