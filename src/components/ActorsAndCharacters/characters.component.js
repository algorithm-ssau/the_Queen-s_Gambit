import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ac_style.css"
import "../../styles/styleCap.css";
import ElizabethHarmon from "../../images/ElizabethHarmon.jpg";
import BennyWatts from "../../images/BennyWatts.jpg";
import HarryBeltik from "../../images/HarryBeltik.jpg";
import AlmaWhittle from "../../images/AlmaWhittle.jpg";
import mrScheibel from "../../images/mrScheibel.png";
import Jolene from "../../images/Jolene.jpg";
import HelenDirdorrf from "../../images/HelenDirdorrf.jpg";
import AllstonWheatley from "../../images/AllstonWheatley.png";
import Towns from "../../images/Towns.png";
import VasilyBorgov from "../../images/VasilyBorgov.jpg";
import AliceHarmon from "../../images/AliceHarmon.jpg";
import AnnettePacker from "../../images/AnnettePacker.jpg";

export default class Characters extends Component {
     setName(name) {
          localStorage.setItem('name', name)
      } 
      
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
                 <label> Персонажи </label>
                 <table>
                        <tr>
                             <td>
                                   <Link to = "/info" onClick = {() => this.setName("ElizabethHarmon")} name = "ElizabethHarmon" >
                                         <img src = {ElizabethHarmon} width = "260" height = "260" alt = "Элизабет Хармон" /> 
                                   </Link> 
                                    <br/>
                                    <p> <Link to = "/info" onClick = {() => this.setName("ElizabethHarmon")} name = "ElizabethHarmon" > Элизабет Хармон </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("BennyWatts")} name = "BennyWatts" >
                                        < img src = {BennyWatts} width = "260" height = "260" alt = "Бенни Уоттс"/> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onClick = {() => this.setName("BennyWatts")} name = "BennyWatts" > Бенни Уоттс </Link></p >
                              </td> 
                              <td>
                                    <Link to = "/info" onClick = {() => this.setName("HarryBeltik")} name = "HarryBeltik" >
                                         <img src = {HarryBeltik} width = "260" height = "260" alt = "Гарри Белтик"/> 
                                    </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("HarryBeltik")} name = "HarryBeltik" > Гарри Белтик </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("AlmaWhittle")} name = "AlmaWhittle" >
                                        <img src = {AlmaWhittle} width = "260" height = "260" alt = "Альма Уитл" /> 
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("AlmaWhittle")} name = "AlmaWhittle" > Альма Уитли </Link></p >
                              </td> 
                         </tr>  
                         <tr>
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("mrScheibel")} name = "mrScheibel" >
                                        <img src = {mrScheibel} width = "260" height = "260" alt = "Уильям Шейбл" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onClick = {() => this.setName("mrScheibel")} name = "mrScheibel" > Уильям Шейбл </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("Jolene")} name = "Jolene" >
                                        < img src = {Jolene} width = "260" height = "260" alt = "Джолин" />
                                    </Link>
                                    <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("Jolene")} name = "Jolene" > Джолин </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("HelenDirdorrf")} name = "HelenDirdorrf" >
                                        < img src = {HelenDirdorrf} width = "260" height = "260" alt = "Хелен Дирдорф" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onClick = {() => this.setName("HelenDirdorrf")} name = "HelenDirdorrf" > Хелен Дирдорф </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("AllstonWheatley")} name = "AllstonWheatley" >
                                         <img src = {AllstonWheatley} width = "260" height = "260" alt = "Олстон Уитли" /> 
                                   </Link> 
                                   <br/>  
                                   <p> < Link to = "/info" onClick = {() => this.setName("AllstonWheatley")} name = "AllstonWheatley" > Олстон Уитли </Link></p >
                               </td> 
                          </tr>  
                         <tr>
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("Towns")} name = "Towns" >
                                        <img src = {Towns} width = "260" height = "260" alt = "Таунс" /> 
                                   </Link> 
                                   <br/>
                                   <p> < Link to = "/info" onClick = {() => this.setName("Towns")} name = "Towns" > Таунс </Link></p >
                              </td>  
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("VasilyBorgov")} name = "VasilyBorgov" >
                                        <img src = {VasilyBorgov} width = "260" height = "260" alt = "Василий Боргов" /> 
                                   </Link>
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("VasilyBorgov")} name = "VasilyBorgov" > Василий Боргов </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("AliceHarmon")} name = "AliceHarmon" >
                                        <img src = {AliceHarmon} width = "260"height = "260" alt = "Элис Хармон" />
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("AliceHarmon")} name = "AliceHarmon" > Элис Хармон </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("AnnettePacker")} name = "AnnettePacker" >
                                        <img src = {AnnettePacker} width = "260" height = "260" alt = "Аннет Пакер" />  
                                   </Link> 
                                   <br/>
                                   <p> <Link to = "/info" onClick = {() => this.setName("AnnettePacker")} name = "AnnettePacker" > Аннет Пакер </Link></p >
                              </td> 
                         </tr>  
                    </table> 
                    <script >
                        
                    </script> 
               </div>
          </div>

        );
    }
}

