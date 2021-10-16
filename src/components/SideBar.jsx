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

                    
               <div>
               
               <p>
                        Olá meu nome é Danilo, tenho 15 anos e estudo nessa escola Emef Engenheiro José Amadei por 9 anos consecutivos.
                         Meus hobbies favoritos são ler e jogar Futebol, um dos meus livros prediletos se chama O Poder do Hábito, é um livro que explica a neurociencia 
                         dos hábitos, ou seja, como eles funcionam e como podemos quebra-los, é um livro essencial. Um dos gêneros de filmes que eu mais gosto é ação 
                         e um dos exemplos dele é o filme Vingadores Ultimato, um dos melhores filmes já  feitos na minha humilde opinião. Para finalizar, gostaria de relatar
                        a vocês as minhas áreas que gostaria de atuar no futuro, são elas: Engenharia Civil, Engenharia Mecânica, Engenharia de Automação, Engenharia 
                        Elétrica e Programador, gostos dessas áreas por serem áreas de exatas e resolver problemas, duas coisas no qual eu gosto muito.


                </p>

                <p>
                    Bom meu nome é João Paulo, tenho 14 anos e estudo na escola Emef Engenheiro José Amadei desde do final do 5° ano.
                    Não tenho muitos hobbies, mas o hobbie que eu gosto muito é jogar no computador junto de varios amigos, eu não assisti  muitos filmes, mas o meu 
                    preferido é Por Lugares Incríveis, mesmo achando o final um pouco ruim, não li muitos livros que me marcaram então não é algo que irei comentar. Para 
                    acabar, tem algumas áreas que gostaria de atuar, que são relacionas com exatas, pois nao gosto muito de humanas, algumas dessas áreas é: Engenharia Mecânica
                    e progamação.    
                </p>

                <p>
                    Salve meu nome é Lucas, tenho 15 anos e estudo na escola Emef Engenheiro José Amadei estou aqui desde primeiro ano. 
                    Também não tenho muitos hobbies, mais eu gosto de jogar jogos online,de filmes e gosto muito de tecnologia.
                    Uma coisa que não sei ainda é o que eu vou fazer quando termina a escola. 
                </p>
               </div>

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