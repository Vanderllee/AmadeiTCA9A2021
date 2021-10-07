/* eslint-disable @next/next/no-img-element */


import Topbar from '../styles/Topbar.module.css';

import Image from "next/image";

import { dataPost } from '../data/postData';
import { useState } from 'react';


export default function TopBar() {

    const [post] = useState(dataPost);


    return (
        <div className={Topbar.top}>
            <div className= {Topbar.topLeft} >
                <a
                    href="https://facebook.com/pages/E.M.E.F%20Engenheiro%20Jos%C3%A9%20Amadei/114176958598965/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className={`${Topbar.topIcon} fab fa-facebook-square`}></i>  
                </a>

                <i className= {`${Topbar.topIcon} topIcon fab fa-twitter-square`} ></i>
                <i className={`${Topbar.topIcon} topIcon fab fa-pinterest-square`} ></i>
                <a
                    href="https://instagram.com/vanderllee/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className= {`${Topbar.topIcon} fab fa-instagram-square`} ></i>
                </a>
            </div>
            <div className={Topbar.topCenter}>
                <ul className="topList">
                    <li className={Topbar.topIcon}>
                        HOME
                    </li>
                    <li className={Topbar.topIcon}>

                        SOBRE
                    </li>
                    <li className={Topbar.topIcon}>
                        CONTATO
                    </li>
                    <li className={Topbar.topIcon}>
                        POST
                    </li>
                    <li
                        className={Topbar.topIcon}
                    >

                   

                    </li>
                </ul>
            </div>
            <div className={Topbar.topRight}>

                    
                    {
                        post.map(postItem =>  (

                            <div key={postItem.id}>
                            <Image
                                width={100}
                                height={100}
                                src={postItem.photo}
                                alt={''}
                                objectFit="cover"
                            />
                            </div>

                        ))
                        
                        
                    }
                


                <i className= {`${Topbar.topSearchIcon} fas fa-search `}></i>
            </div>
        </div>
    )
}