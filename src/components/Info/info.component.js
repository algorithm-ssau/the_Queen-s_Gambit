import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import script from  "./info_style.css";
import "../../styles/styleCap.css";

export default class Info extends Component {
    render() {
        return (
            <div>
                <script src = {script}></script>
                <nav class="menu">
                    <div class="wrapCap"><label class="labCap">The Gambit Queen Fan</label></div>

                    <ul>
                        <li class="cap pad"><a href="mainpage.html"><svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.6666 24.5408L33.5416 11.4158L12.8741 32.0833H17.5V55.4167H26.25V37.9167H40.8333V55.4167H49.5833V32.0833H54.2091L49.5833 27.4575V17.5H46.6666V24.5408ZM5.83331 35L33.5416 7.29166L43.75 17.5V14.5833H52.5V26.25L61.25 35H52.5V58.3275H37.9166V40.8275H29.1666V58.3275H14.5833V35H5.83331Z" fill="white" />
                        </svg></a></li>
                        <li class="cap"><Link to="/characters">Персонажи</Link></li>
                        <li class="cap"><a href="#">Актеры</a></li>
                        <li class="cap"><a href="episodes.html">Серии</a></li>
                    </ul>
                </nav>

                <div class="wrapper">
                     <table>
                          <tr>
                            <td>
                                <p><img src="images/example.png" alt="Актер/персонаж" width="220" height="190" class="caption-border"></img></p>
                            </td>
                            <td>
                                <p>Биография</p>
                            </td>
                            </tr> 
                        </table>        
                    </div>
            </div>
            
        )
    }
}