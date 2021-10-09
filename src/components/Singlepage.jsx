/* eslint-disable @next/next/no-img-element */

import styles from '../styles/Singlepage.module.css'

export default function Singlepage(props) {
    return (
            
        <div className="singlepost">
        <div className="singlePostWraper">
            
               
                    <img src={props.post.imageURL} 
                        alt="Minha imagem" 
                        className="singlePostImg" 
                    />

            

            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: 
                        <Link to={ ` /?user=${ post.username } ` } className="link">
                            <b>{post.username}</b>
                        </Link>
                </span>

                <span className="singlePostDate">
                    { new Date(post.createdAt).toDateString() }
                </span>
            </div>

            {
                updateMode 
                ? (<textarea 
                    className="singlePostDescInput" 
                    value={ desc }
                    onChange={(e) => setDesc(e.target.value)} 
                />)
                : (<p className="singlePostDesc"> { desc } </p>)
            }

           { updateMode 
            && (<button className="singlePostButton"onClick={ handleUpdate }>Atualizar</button>)
            }
        </div>
    </div>

       
    )
}