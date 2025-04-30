// Score.js

import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        return (
                <div class="result-div">
                <h2> RESULTS</h2>
                <h4>CONGRATULATIONS</h4>
                <h4>YOUR SCORE IS : {score}</h4>
                </div>
        );
    }
}

export default Score;