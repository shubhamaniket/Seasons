import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat,mon) => {
    if(mon > 2 && mon < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const text = season === 'summer' ? 'Summer is here !' : 'Winter is here !';
    const avatar = season === 'summer' ? 'sun' : 'snowflake';
    const seasonColor = season === 'summer' ? 'orangeBack' : 'blueBack'
    
    return(
        <div className={`container ${seasonColor}`}>
            <i className={`icon-left massive ${avatar} loading icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${avatar} loading icon`}></i>
        </div>
    );
}

export default SeasonDisplay;
