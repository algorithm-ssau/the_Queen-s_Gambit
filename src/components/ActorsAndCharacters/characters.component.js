import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ac_style.css"
import "../../styles/styleCap.css";
import ElizabethHarmon from "../../images/ElizabethHarmon.jpg";

export default class Characters extends Component {
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
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "ElizabethHarmon" >
                                         <img src = {ElizabethHarmon} width = "220" height = "190" alt = "Элизабет Хармон" /> 
                                   </Link> 
                                    <br/>
                                    <p> <Link to = "/info" onclick = "setCh(this.name)" name = "ElizabethHarmon" > Элизабет Хармон </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "BennyWatts" >
                                        < img src = "../../images/BennyWatts.jpg" width = "220" height = "190" alt = "Бенни Уоттс"/> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onclick = "setCh(this.name)" name = "BennyWatts" > Бенни Уоттс </Link></p >
                              </td> 
                              <td>
                                    <Link to = "/info" onclick = "setCh(this.name)" name = "HarryBeltik" >
                                         <img src = "../../images/HarryBeltik.jpg" width = "220" height = "190" alt = "Гарри Белтик"/> 
                                    </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "HarryBeltik" > Гарри Белтик </Link></p>
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "AlmaWhittle" >
                                        <img src = "../../images/AlmaWhittle.jpg" width = "220" height = "190" alt = "Альма Уитл" /> 
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "AlmaWhittle" > Альма Уитл </Link></p >
                              </td> 
                         </tr>  
                         <tr>
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "mrScheibel" >
                                        <img src = "../../images/mrScheibel.jpg" width = "220" height = "190" alt = "мистер Шейбел" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onclick = "setCh(this.name)" name = "mrScheibel" > мистер Шейбел </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "Jolene" >
                                        < img src = "../../images/Jolene.jpg" width = "220" height = "190" alt = "Джолин" />
                                    </Link>
                                    <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "Jolene" > Джолин </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "HelenDirdorrf" >
                                        < img src = "../../images/HelenDirdorrf.jpg" width = "220" height = "190" alt = "Хелен Дирдоррф" /> 
                                   </Link> 
                                   <br/> 
                                   <p > < Link to = "/info" onclick = "setCh(this.name)" name = "HelenDirdorrf" > Хелен Дирдоррф </Link></p >
                              </td> 
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "AllstonWheatley" >
                                         <img src = "../../images/AllstonWheatley.jpg" width = "220" height = "190" alt = "Олстон Уитли" /> 
                                   </Link> 
                                   <br/>  
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "AllstonWheatley" > Олстон Уитли </Link></p >
                               </td> 
                          </tr>  
                         <tr>
                              <td>
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "Towns" >
                                        <img src = "../../images/Towns.jpg" width = "220" height = "190" alt = "Д. Л. Таунс" /> 
                                   </Link> 
                                   <br/>
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "Towns" > Д.Л.Таунс </Link></p >
                              </td>  
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "VasilyBorgov" >
                                        <img src = "../../images/VasilyBorgov.jpg" width = "220" height = "190" alt = "Василий Боргов" /> 
                                   </Link>
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "VasilyBorgov" > Василий Боргов </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "AliceHarmon" >
                                        <img src = "../../images/AliceHarmon.jpg" width = "220"height = "190" alt = "Элис Хармон" />
                                   </Link> 
                                   <br/> 
                                   <p> < Link to = "/info" onclick = "setCh(this.name)" name = "AliceHarmon" > Элис Хармон </Link></p >
                              </td> 
                              <td >
                                   <Link to = "/info" onclick = "setCh(this.name)" name = "AnnettePacker" >
                                        <img src = "../../images/AnnettePacker.jpg" width = "220" height = "190" alt = "Аннетт Пакер" />  
                                   </Link> 
                                   <br/>
                                   <p> <Link to = "/info" onclick = "setCh(this.name)" name = "AnnettePacker" > Аннетт Пакер </Link></p >
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
