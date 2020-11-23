import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return(
        <div class="home ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    );
}

export default Spinner;