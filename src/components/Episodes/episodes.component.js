import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./episodes_style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./episodes_script.js";

import "./styleCap.css";
import axios from "axios";

const Episode = props => {
    <tr>
        <td>{props.episode.number}</td>
        <td>{props.episode.name}</td>
        <td>{props.episode.description}</td>
    </tr>
}

export default class Episodes extends Component {

    constructor(props){
        super(props);

        this.state = {episodes:[]};
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/episodes/`)
        .then(response => {
            console.log(response);
            this.setState({episodes:response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }
    /*componentDidMount(){
        axios.get(`http://localhost:5000/:episodes/`, {method: 'get'}).then(res => res.json()).then(resEpisodes => {
            this.setState({
                episodes: resEpisodes
            })
        })
   }*/

    episodesList(){
        return this.state.episodes.map(function(episode, i){
            return <tr>
            <td>{episode.number}</td>
            <td>{episode.name}</td>
            <td>{episode.description}</td>
        </tr>
        });
    }

    render() {
        return (
            <div>
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

                <div className="content">
                    <div className="content_wrapper">
                        <div className="content_title">
                            <h2>Список серий</h2>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Номер серии</th>
                                    <th>Название серии</th>
                                    <th>Описание серии</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.episodesList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
//export default Episodes;