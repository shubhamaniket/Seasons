import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state = {
            lat : null,
            lon : null,
            errorMsg : ''
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude,lon : position.coords.longitude}),
            err => this.setState({errorMsg : err.message})
        )
    }
    render(){
        if(this.state.errorMsg && !this.state.lat){
            return (
                <div className="ui container">
                    Error : {this.state.errorMsg}
                </div>
            );
        }
        if(!this.state.errorMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} lon={this.state.lon}/>
        }
        return <Spinner/>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));