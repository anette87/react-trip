import React, {Component} from 'react'; 

export default function TripFront(props){
    return(
        <div>
            <h1>Client Name:{props.clientName}</h1>
            <h2>Location:{props.location}</h2>
        </div>
    )
}