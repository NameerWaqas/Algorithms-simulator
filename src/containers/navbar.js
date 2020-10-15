import React from 'react';
import {css} from 'emotion'

export default function NavBar(props){
    return(
        <div 
        className={css`width:100vw;height:10vh;background-color:teal`}>
        <h1 className={css`color:white;`}>Algorithms Simulator!</h1>
        </div>
    )
}