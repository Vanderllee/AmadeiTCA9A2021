/* eslint-disable @next/next/no-img-element */
import {
    faFacebookSquare,
    faInstagramSquare,
    faPinterestSquare,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Sidebar from '../styles/Sidebar.module.css';


export default function SideBar() {
    
    return (
        <div className={Sidebar.sidebar}>
            <div className={Sidebar.sidebarItem}>
                <span className={Sidebar.sidebarTitle}>
                    SOBRE NÓS
                </span>

                <div className={Sidebar.sidebarItem}>
                    <img
                        src="/assets/turma9A.jpeg"
                        alt="Imagem da turma"
                    />
                <p>
                    Nós somos alunos do 9A do ensino fundamental,
                    ...

                </p>
                </div>

            </div>



            <div className={Sidebar.sidebarItem} >
                <span className={Sidebar.sidebarTitle}>
                    SIGA A GENTE
                </span>
                <div className={Sidebar.sidebarSocial}>

                    <a
                        href="https://facebook.com/pages/E.M.E.F%20Engenheiro%20Jos%C3%A9%20Amadei/114176958598965/"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <i className={`${Sidebar.sidebarIcon}`} >

                            <FontAwesomeIcon icon={faFacebookSquare} />

                        </i>
                    </a>

                    <a href="#">

                        <i className={`${Sidebar.sidebarIcon}`}  >
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </i>
                    </a>


                    <a href="#">

                        <i className={`${Sidebar.sidebarIcon}`} >

                            <FontAwesomeIcon icon={faPinterestSquare} />
                        </i>
                    </a>

                    <a href="#">

                        <i className={`${Sidebar.sidebarIcon}`} >
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </i>
                    </a>
                </div>
            </div>
        </div>
    )
}