import React, { Component } from 'react';
var Question = require('../data/question.json')
class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            score:0,
            number:0
         }
    }
    handleButton(event){
        var value = event.target.innerText;
        // console.log('hw',this.state.number,Question.length)
        if(value==Question[this.state.number].answer && this.state.number<Question.length) {
            this.setState((state)=>({
                score: state.score + 1,
            }))
        }
        this.setState((state)=>({
            number: state.number + 1,
        }))
        return ;

    }
    getData(){
        var number = this.state.number
        if(this.state.number<Question.length){
            return <div>
                <h2>{Question[number].question}</h2>
                <ul class="list-group">
                    <li class="list-group-item"><button className="btn btn-outline-secondary" onClick={this.handleButton.bind(this)}>{Question[number].option[0]}</button></li>
                    <li class="list-group-item"><button className="btn btn-outline-secondary" onClick={this.handleButton.bind(this)}>{Question[number].option[1]}</button></li>
                    <li class="list-group-item"><button className="btn btn-outline-secondary" onClick={this.handleButton.bind(this)}>{Question[number].option[2]}</button></li>
                    <li class="list-group-item"><button className="btn btn-outline-secondary" onClick={this.handleButton.bind(this)}>{Question[number].option[3]}</button></li>

                </ul>
            </div>
        }
        return ;
    }
    render() { 
        return ( 
            <div className="col-md-3">
                <h1>Score:{this.state.score}</h1>
                {/* <p>{Question[0].question}</p> */}
                <div>
                    {this.getData()}
                </div>
            </div>
         );
    }
}
 
export default Quiz; 