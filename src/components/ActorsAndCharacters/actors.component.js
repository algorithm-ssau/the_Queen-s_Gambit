
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ac_style.css"
import "../../styles/styleCap.css";
import AnyaTaylorJoy from "../../images/AnyaTaylorJoy.jpg";
import ThomasBrodieSangster from "../../images/ThomasBrodieSangster.jpg";
import HarryMelling from "../../images/HarryMelling.jpg";
import MarielleHeller from "../../images/MarielleHeller.jpg";
import WilliamCamp from "../../images/WilliamCamp.jpg";
import MosesIngram from "../../images/MosesIngram.jpg";
import ChristianeSeidel from "../../images/ChristianeSeidel.jpg";
import PatrickKennedy from "../../images/PatrickKennedy.jpg";
import JacobFortuneLloyd from "../../images/JacobFortuneLloyd.jpg";
import MarcinDorociński from "../../images/MarcinDorociński.jpg";
import ChloePirri from "../../images/ChloePirri.jpg";
import EloiseWebb from "../../images/EloiseWebb.jpg";

export default class Actors extends Component {
    render() {
        return ( 
             <div>
             <nav class="menu">
                <div class="wrapCap"><label class="labCap">The Gambit Queen Fan</label></div>
        
                <ul>
                        <li class="cap pad"><Link to="/"><svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.6666 24.5408L33.5416 11.4158L12.8741 32.0833H17.5V55.4167H26.25V37.9167H40.8333V55.4167H49.5833V32.0833H54.2091L49.5833 27.4575V17.5H46.6666V24.5408ZM5.83331 35L33.5416 7.29166L43.75 17.5V14.5833H52.5V26.25L61.25 35H52.5V58.3275H37.9166V40.8275H29.1666V58.3275H14.5833V35H5.83331Z" fill="white" />
                        </svg></Link></li>
                        <li class="cap"><Link to="/characters">Персонажи</Link></li>
                        <li class="cap"><Link to="/actors">Актеры</Link></li>
                        <li class="cap"><Link to="/episodes">Серии</Link></li>
                    </ul>
            </nav>

            <div class = 'tbl' >
                 <label> Актеры </label>
                 <table>
                        <tr>
                             <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "AnyaTaylorJoy" >
                                         <img src = {AnyaTaylorJoy} width = "280" height = "240" alt = "Аня Тейлор-Джой" /> 
                                   </Link> 
                                    <br/>
                                    <p> <Link to = "/info" onclick = "setCh(this.name)" name = "AnyaTaylorJoy" > Элизабет Хармон </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "ThomasBrodieSangster" >
                                        < img src = {ThomasBrodieSangster} width = "280" height = "240" alt = "Томас Броди-Сангстер"/> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onclick = "setCh(this.name)" name = "ThomasBrodieSangster" > Томас Броди-Сангстер </Link></p >
                              </td> 
                              <td>
                                    <Link to = "/info" onclick = "setCh(this.name)" name = "HarryMelling" >
                                         <img src = {HarryMelling} width = "280" height = "240" alt = "Гарри Меллинг"/> 
                                    </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "HarryMelling" >Гарри Меллинг</Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = " MarielleHeller" >
                                        <img src = {MarielleHeller} width = "280" height = "240" alt = "Мариэль Хеллер" /> 
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = " MarielleHeller" > Мариэль Хеллер </Link></p >
                              </td> 
                         </tr>  
                         <tr>
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "WilliamCamp" >
                                        <img src = {WilliamCamp} width = "280" height = "240" alt = "Билл Кэмп" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onclick = "setCh(this.name)" name = "WilliamCamp" > Билл Кэмп </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "MosesIngram" >
                                        < img src = {MosesIngram} width = "280" height = "240" alt = "Мозес Инграм" />
                                    </Link>
                                    <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "MosesIngram" >Мозес Инграм </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "ChristianeSeidel" >
                                        < img src = {ChristianeSeidel} width = "280" height = "240" alt = "Кристиана Сидел" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onclick = "setCh(this.name)" name = "Christiane Seidel" >Кристиана Сидел </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "PatrickKennedy" >
                                         <img src = {PatrickKennedy} width = "280" height = "240" alt = "Патрик Кеннеди" /> 
                                   </Link> 
                                   <br/>  
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "PatrickKennedy" > Патрик Кеннеди </Link></p >
                               </td> 
                          </tr>  

                         <tr>
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "JacobFortuneLloyd" >
                                        <img src = {JacobFortuneLloyd} width = "280" height = "240" alt = "Джейкоб Форчун-Ллойд" /> 
                                   </Link> 
                                   <br/>
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "JacobFortuneLloyd" > Джейкоб Форчун-Ллойд </Link></p >
                              </td>  
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "MarcinDorociński" >
                                        <img src = {MarcinDorociński} width = "280" height = "240" alt = "Марчин Дорочиньский" /> 
                                   </Link>
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "MarcinDorociński" > Марчин Дорочиньский </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "ChloePirri" >
                                        <img src = {ChloePirri} width = "280"height = "240" alt = "Хлоя Пирри" />
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "ChloePirri" > Хлоя Пирри </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "EloiseWebb" >
                                        <img src = {EloiseWebb} width = "280" height = "240" alt = "Элоиза Уэбб" />  
                                   </Link> 
                                   <br/>
                                   <p> <Link to = "/info" onclick = "setCh(this.name)" name = "EloiseWebb" >Элоиза Уэбб</Link></p >
                              </td> 
                         </tr>  
                    </table> 
                    <script >
                         function setCh(name) {
                             localStorage.setItem('name', window.name)
                         } 
                    </script> 
               </div>
          </div>

        );
    }
}
