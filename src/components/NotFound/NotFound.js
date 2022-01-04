import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const backHome = () => {
        history.push('/')
    }
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <button onClick={backHome} className='btn'>
                    <a href=''>Go TO Homepage</a>
                </button>
            </div>
        </div>
    );
};

export default NotFound;