import React, {Component} from 'react'; 
import TripFront from './TripFront'
import TripBack from './TripBack'

class Trip extends Component{
    state= {front: true}
    handleClick=(e)=>{ 
        if (this.state.front === false){
            this.setState({front:true})    
        }else {
            this.setState({front:false})  
        }
    }
    
    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.front ? <TripFront clientName={this.props.clientName} location={this.props.location} /> : <TripBack email={this.props.email} />  }
                 
            </div>
        )

    }
}

export default Trip; 