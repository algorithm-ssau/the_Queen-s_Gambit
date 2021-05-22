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
     characters = {
          1 : "Элизабет Хармон",
          2 : "Бенни Уоттс",
          3 : "Гарри Белтик",
          4 : "Альма Уитли",
          5 : "Уильям Шейбл",
          6 : "Джолин",
          7 : "Хелен Дирдорф",
          8 : "Олстон Уитли",
          9 : "Таунс",
          10 : "Василий Боргов",
          11 : "Элис Хармон",
          12 : "Аннет Пакер",
      }
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
                                         <img src = {ElizabethHarmon} width = "280" height = "240" alt = "Элизабет Хармон" /> 
                                   </Link> 
                                    <br/>
                                    <p> <Link to = "/info" onClick = {() => this.setName("ElizabethHarmon")} name = "ElizabethHarmon" > {this.characters[1]} </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("BennyWatts")} name = "BennyWatts" >
                                        < img src = {BennyWatts} width = "280" height = "240" alt = "Бенни Уоттс"/> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onClick = {() => this.setName("BennyWatts")} name = "BennyWatts" > {this.characters[2]} </Link></p >
                              </td> 
                              <td>
                                    <Link to = "/info" onClick = {() => this.setName("HarryBeltik")} name = "HarryBeltik" >
                                         <img src = {HarryBeltik} width = "280" height = "240" alt = "Гарри Белтик"/> 
                                    </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("HarryBeltik")} name = "HarryBeltik" > {this.characters[3]} </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("AlmaWhittle")} name = "AlmaWhittle" >
                                        <img src = {AlmaWhittle} width = "280" height = "240" alt = "Альма Уитл" /> 
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("AlmaWhittle")} name = "AlmaWhittle" > {this.characters[4]} </Link></p >
                              </td> 
                         </tr>  
                         <tr>
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("mrScheibel")} name = "mrScheibel" >
                                        <img src = {mrScheibel} width = "280" height = "240" alt = "Уильям Шейбл" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onClick = {() => this.setName("mrScheibel")} name = "mrScheibel" > {this.characters[5]} </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("Jolene")} name = "Jolene" >
                                        < img src = {Jolene} width = "280" height = "240" alt = "Джолин" />
                                    </Link>
                                    <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("Jolene")} name = "Jolene" > {this.characters[6]} </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("HelenDirdorrf")} name = "HelenDirdorrf" >
                                        < img src = {HelenDirdorrf} width = "280" height = "240" alt = "Хелен Дирдорф" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onClick = {() => this.setName("HelenDirdorrf")} name = "HelenDirdorrf" > {this.characters[7]} </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("AllstonWheatley")} name = "AllstonWheatley" >
                                         <img src = {AllstonWheatley} width = "280" height = "240" alt = "Олстон Уитли" /> 
                                   </Link> 
                                   <br/>  
                                   <p> < Link to = "/info" onClick = {() => this.setName("AllstonWheatley")} name = "AllstonWheatley" > {this.characters[8]} </Link></p >
                               </td> 
                          </tr>  
                         <tr>
                              <td>
                                   <Link to = "/info" onClick = {() => this.setName("Towns")} name = "Towns" >
                                        <img src = {Towns} width = "280" height = "240" alt = "Таунс" /> 
                                   </Link> 
                                   <br/>
                                   <p> < Link to = "/info" onClick = {() => this.setName("Towns")} name = "Towns" > {this.characters[9]} </Link></p >
                              </td>  
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("VasilyBorgov")} name = "VasilyBorgov" >
                                        <img src = {VasilyBorgov} width = "280" height = "240" alt = "Василий Боргов" /> 
                                   </Link>
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("VasilyBorgov")} name = "VasilyBorgov" > {this.characters[10]} </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("AliceHarmon")} name = "AliceHarmon" >
                                        <img src = {AliceHarmon} width = "280"height = "240" alt = "Элис Хармон" />
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onClick = {() => this.setName("AliceHarmon")} name = "AliceHarmon" > {this.characters[11]} </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onClick = {() => this.setName("AnnettePacker")} name = "AnnettePacker" >
                                        <img src = {AnnettePacker} width = "280" height = "240" alt = "Аннет Пакер" />  
                                   </Link> 
                                   <br/>
                                   <p> <Link to = "/info" onClick = {() => this.setName("AnnettePacker")} name = "AnnettePacker" > {this.characters[12]} </Link></p >
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

