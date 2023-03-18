import React, { Component } from 'react'

export default class varma extends Component {
    state={
name:"varma",
task:""

    }
    render() {
        return (
            <div>
               <h1>{this.state.name}</h1> 
            </div>
        )
    }
}
