import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav class="menu">
        <div class="wrapCap"><label class="labCap">The Gambit Queen Fan</label></div>
        
        <ul>
          <li class="cap pad"><a href="mainpage.html"><svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.6666 24.5408L33.5416 11.4158L12.8741 32.0833H17.5V55.4167H26.25V37.9167H40.8333V55.4167H49.5833V32.0833H54.2091L49.5833 27.4575V17.5H46.6666V24.5408ZM5.83331 35L33.5416 7.29166L43.75 17.5V14.5833H52.5V26.25L61.25 35H52.5V58.3275H37.9166V40.8275H29.1666V58.3275H14.5833V35H5.83331Z" fill="white"/>
        </svg></a></li>
        <li class="cap"><a href="characters.html">Персонажи</a></li>
        <li class="cap"><a href="#">Актеры</a></li>
        <li class="cap"><a href="episodes.html">Серии</a></li>
    </ul>
      </nav>
  );
}

export default App;
