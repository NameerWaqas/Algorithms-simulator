import React from 'react';
import { css } from 'emotion'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    // let buttonStyle=css` height:inherit;width:100%;flex:2 `
    return (
        <div className={css`width:100vw;height:10vh;background-color:#073b4c; display:flex;align-items:center;
        justify-content:space-between;`}>
            <Link to="/" className={css`color:white;flex:2;text-decoration:none`}><h1>Algorithms Simulator!</h1></Link>
            <div className={css`height:100% ;flex:1; flex-direction:row;`}>
                <Link to='/searching'><button className="NavBarButtons">Searching</button></Link>
                <Link to='/sorting'><button className="NavBarButtons">Sorting</button></Link>
            </div>
        </div>
    )
}