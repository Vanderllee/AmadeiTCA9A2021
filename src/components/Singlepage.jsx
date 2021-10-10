/* eslint-disable @next/next/no-img-element */

import Link from   'next/link';
import TopBar from './TopBar';
import styles from '../styles/Singlepage.module.css'
import SideBar from './SideBar';

export default function Singlepage(props) {
    return (
        <>    
            <TopBar  />

         <div className= {styles.singlepost} >
            <div className={styles.singlePostWraper} >
                    
                            <img 
                                src={props.post.imageURL} 
                                alt="Minha imagem" 
                            />

                    <div className= {styles.singlePostInfo} >
                            <span className=  {styles.singlePostAuthor} >
                                Author: 
                                        <b>{props.post.username}</b>
                                    
                            </span>

                            <span className= {styles.singlePostDate}>
                                { new Date(props.post.date).toDateString() }
                            </span>
                    </div>

                    <span className={styles.descSidebar}>


                            <div className={styles.singlePostDesc}>
                                    <h1  className={styles.postTitle} >
                                            {
                                                props.post.title
                                            }
                                    </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Earum dolores beatae ut tempore rerum vel esse,
                                    explicabo ea molestiae libero doloremque illo dicta harum reiciendis 
                                    neque facilis numquam error sit.
                                </p>
                             
                            </div>

                            <SideBar />
                        
                    </span>


             </div>

        
         </div>

    </> 
    )
}