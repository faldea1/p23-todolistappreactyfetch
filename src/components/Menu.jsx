import React from 'react';
import {FaTrash, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Menu = () =>{
    return (
        <ul className='nav justify-content-center'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/mytodolist'>My todolist</Link>
            </li>
            <li className='nav-item'>
                <span className='nav-link disabled'>faldea</span>
            </li>




        </ul>

    );



};

export default Menu;