import './card.css'
import React from 'react'


export default function Card(props){

    return(
            <div className="Card">
                <div className="Titlle">{props.titulo}</div>
                <div className="Content">{props.children}</div>
            </div>


    )

}