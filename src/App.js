import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.jsx';
import Menu from './components/menu.jsx';
import madrid from './media/madrid.png';
import reBeba from './media/reBebaDeluxe.jpg';
import './App.css';

function App() {
    window.scroll(0,0)
    return (
        <div>
            <Navbar />
            <Menu />
            <div className='frase' >
                <h3>Frase</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum blanditiis, reiciendis, veniam sed, voluptas illo sequi illum id animi at sint recusandae</p>
            </div>
            <img style={{width: '100vw', maxWidth: '500px', margin:'auto'}} src={madrid} alt="" />
            <br /><br />
            <img style={{width: '100vw', maxWidth: '500px', margin:'auto'}} src={reBeba} alt="" />
        </div>
    );
}

export default App;
