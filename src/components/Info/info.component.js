import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./info_style.css";
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

import AnyaTaylorJoy from "../../images/AnyaTaylorJoy.jpg";
import ThomasBrodieSangster from "../../images/ThomasBrodieSangster.jpg";
import HarryMelling from "../../images/HarryMelling.jpg";
import MarielleHeller from "../../images/MarielleHeller.jpg";
import WilliamCamp from "../../images/WilliamCamp.jpg";
import MosesIngram from "../../images/MosesIngram.png";
import ChristianeSeidel from "../../images/ChristianeSeidel.jpg";
import PatrickKennedy from "../../images/PatrickKennedy.jpg";
import JacobFortuneLloyd from "../../images/JacobFortuneLloyd.jpg";
import MarcinDorociński from "../../images/MarcinDorociński.jpg";
import ChloePirri from "../../images/ChloePirri.jpg";
import EloiseWebb from "../../images/EloiseWebb.jpg";

import axios from "axios";

export default class Info extends Component {
    constructor(props){
        super(props);
        this.state = {info:[]};
    }
    componentDidMount(){
        switch(window.name){
            case "ElizabethHarmon":
                axios.get(`http://localhost:5000/info/ElizabethHarmon`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "BennyWatts":
                axios.get(`http://localhost:5000/info/BennyWatts`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "HarryBeltik":
                axios.get(`http://localhost:5000/info/HarryBeltik`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "AlmaWhittle":
                axios.get(`http://localhost:5000/info/AlmaWhittle`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "mrScheibel":
                axios.get(`http://localhost:5000/info/mrScheibel`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case  "Jolene":
                axios.get(`http://localhost:5000/info/Jolene`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "HelenDirdorrf":
                axios.get(`http://localhost:5000/info/HelenDirdorrf`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "AllstonWheatley":
                axios.get(`http://localhost:5000/info/AllstonWheatley`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "Towns":
                axios.get(`http://localhost:5000/info/Towns`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "VasilyBorgov":
                axios.get(`http://localhost:5000/info/VasilyBorgov`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "AliceHarmon":
                axios.get(`http://localhost:5000/info/AliceHarmon`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "AnnettePacker":
                axios.get(`http://localhost:5000/info/AnnettePacker`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;

            case "AnyaTaylorJoy":
                axios.get(`http://localhost:5000/info/AnyaTaylorJoy`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "ThomasBrodieSangster":
                axios.get(`http://localhost:5000/info/ThomasBrodieSangster`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "HarryMelling":
                axios.get(`http://localhost:5000/info/HarryMelling`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "MarielleHeller":
                axios.get(`http://localhost:5000/info/MarielleHeller`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "WilliamCamp":
                axios.get(`http://localhost:5000/info/WilliamCamp`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case  "MosesIngram":
                axios.get(`http://localhost:5000/info/MosesIngram`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "ChristianeSeidel":
                axios.get(`http://localhost:5000/info/ChristianeSeidel`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "PatrickKennedy":
                axios.get(`http://localhost:5000/info/PatrickKennedy`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "JacobFortuneLloyd":
                axios.get(`http://localhost:5000/info/JacobFortuneLloyd`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "MarcinDorociński":
                axios.get(`http://localhost:5000/info/MarcinDorociński`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "ChloePirri":
                axios.get(`http://localhost:5000/info/ChloePirri`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            case "EloiseWebb":
                axios.get(`http://localhost:5000/info/EloiseWebb`)
                .then(response => {
                    console.log(response);
                    this.setState({info:response.data});
                 })
                 .catch((error) => {
                    console.log(error);
                })
                break;
            
        }
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
            switch(window.name){
                case "ElizabethHarmon":
                    window.IMGset = ElizabethHarmon;
                    break;
                case "BennyWatts":
                    window.IMGset = BennyWatts;
                    break;
                case "HarryBeltik":
                    window.IMGset = HarryBeltik;
                    break;
                case "AlmaWhittle":
                    window.IMGset = AlmaWhittle;
                    break;
                case "mrScheibel":
                    window.IMGset = mrScheibel;
                    break;
                case  "Jolene":
                    window.IMGset = Jolene;
                    break;
                case "HelenDirdorrf":
                    window.IMGset = HelenDirdorrf;
                    break;
                case "AllstonWheatley":
                    window.IMGset = AllstonWheatley;
                    break;
                case "Towns":
                    window.IMGset = Towns;
                    break;
                case "VasilyBorgov":
                    window.IMGset = VasilyBorgov;
                    break;
                case "AliceHarmon":
                    window.IMGset = AliceHarmon;
                    break;
                case "AnnettePacker":
                    window.IMGset = AnnettePacker;
                    break;

                case "AnyaTaylorJoy":
                    window.IMGset = AnyaTaylorJoy;
                    break;
                case "ThomasBrodieSangster":
                    window.IMGset = ThomasBrodieSangster;
                    break;
                case "HarryMelling":
                    window.IMGset = HarryMelling;
                    break;
                case "MarielleHeller":
                    window.IMGset = MarielleHeller;
                    break;
                case "WilliamCamp":
                    window.IMGset = WilliamCamp;
                    break;
                case  "MosesIngram":
                    window.IMGset = MosesIngram;
                    break;
                case "ChristianeSeidel":
                    window.IMGset = ChristianeSeidel;
                    break;
                case "PatrickKennedy":
                    window.IMGset = PatrickKennedy;
                    break;
                case "JacobFortuneLloyd":
                    window.IMGset = JacobFortuneLloyd;
                    break;
                case "MarcinDorociński":
                    window.IMGset = MarcinDorociński;
                    break;
                case "ChloePirri":
                    window.IMGset = ChloePirri;
                    break;
                case "EloiseWebb":
                    window.IMGset = EloiseWebb;
                    break;                
            }
            return <tr>
                <td>{info.nameRU}</td>
            </tr>
        });
    }
     getName() {
        window.IMGset = "";
        window.name = localStorage.getItem('name')
    }

    render() {
        return (
            <div>
                 { this.getName()}
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
                                    <p><img src = {window.IMGset} alt="Актер/персонаж"  class="caption-border"></img></p>
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