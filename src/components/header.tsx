import React from 'react';
import '../UI/header.css';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {

  return (
    <div className='header'>
        <div className='left-side'>
        <a href="/" className="brand-logo">ORGANIZER</a>
        </div>
        <div className='reight-side'>
        
            <div className='menu'>
                <button className='menuItem'>
                <Link to={'/todo'}>Todo</Link>
                </button>
                <button className='menuItem'>
                <Link to={'/Notes'}>Notes</Link>
                </button>
                <button className='menuItem'>
                <Link to={'/Calendar'}>Calendar</Link>
                </button>   
                <button className='menuItem'>
                <Link to={'/js_tests'}>JS Tests</Link>
                </button>  
            </div>

           
        </div>
        
    </div>
  )
}

export default Header