import React, {Component} from 'react'
import Trip from './Trip'

class TripContainer extends Component {

    state={trips:[]}

    componentDidMount(){
        fetch('http://localhost:3000/trips')
        .then(resp => resp.json())
        .then (data =>

        this.setState({trips: data.data})

        )
    }

    renderTrips(){
         
        return this.state.trips.map( trip =>  
            <Trip clientName={trip.attributes.client_name} location={trip.attributes.location} email={trip.attributes.email} />
        )
    }
            
            


    render(){
        return(
            <div>
                {this.state.trips.length === 0 ? <h1>Loading</h1> : this.renderTrips()}
            
            </div>

        )
    }
}

export default TripContainer

// fetch request backend
// take data and render the trips
