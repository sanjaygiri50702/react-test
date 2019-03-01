import React, { Component } from 'react';
import Faq from './Faq';
var data = require('../data/data.json')
export default class Faqlist extends Component{
    getData(){
       return data.map(data=>{
             return <li className="list-group-item"><Faq tittle={data.tittle} description={data.description}/></li>

       })
    }
    render(){
        return (
            <ul className="list-group">
            {this.getData()}
            </ul>
        )
    }
}