import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./info_style.css";
import "../../styles/styleCap.css";

import ElizabethHarmon from "../../images/ElizabethHarmon.jpg";

import axios from "axios";

export default class Info extends Component {
    constructor(props){
        super(props);
        this.state = {info:[]};
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/info/`)
        .then(response => {
            console.log(response);
            this.setState({info:response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    infosList(){
        return this.state.info.map(function(info, i){
            return <tr>
                <td>{info.biography}</td>
            </tr>
        });
    }

    namesList(){
        return this.state.info.map(function(info, i){
            return <tr>
                <td>{info.nameRU}</td>
            </tr>
        });
    }
    start(){
        window.name = localStorage.getItem('name');
        document.getElementById("name").innerHTML = window.name;
        localStorage.removeItem('name');
    }

    render() {
        let IMGname = this.namesList();
        return (
            <div>
                <script>
	                start();
	            </script>
                <nav class="menu">                  
                     <div class="wrapCap"><label class="labCap">The Queen’s Gambit Fan</label></div>
                    <ul>                        
                         <li class="cap pad"><Link to="/"><svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.6666 24.5408L33.5416 11.4158L12.8741 32.0833H17.5V55.4167H26.25V37.9167H40.8333V55.4167H49.5833V32.0833H54.2091L49.5833 27.4575V17.5H46.6666V24.5408ZM5.83331 35L33.5416 7.29166L43.75 17.5V14.5833H52.5V26.25L61.25 35H52.5V58.3275H37.9166V40.8275H29.1666V58.3275H14.5833V35H5.83331Z" fill="white" />
                        </svg></Link></li>
                        <li class="cap"><Link to="/characters">Персонажи</Link></li>
                        <li class="cap"><Link to="/actors">Актеры</Link></li>
                        <li class="cap"><Link to="/episodes">Серии</Link></li>
                    </ul>
                </nav> 
                <div className="content_inf">
                    <div className="content_wrapper_inf"> 
                        <div className="content_title_inf">
                            <h2  color = "black">{this.namesList()}</h2>
                        </div>   
                        <table >                                                        
                            <tr>
                                <td>  
                                    <p><img src = {ElizabethHarmon} alt="Актер/персонаж"  class="caption-border"></img></p>
                                </td>
                                <td>
                                    {this.infosList()}                               
                                </td> 
                            </tr> 
                    </table>
                    </div>
                </div>        
                            
            </div>           
        );
    }
}