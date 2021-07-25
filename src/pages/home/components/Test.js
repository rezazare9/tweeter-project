import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
    }
    
    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    render() {
        console.log("render")
        return (
            <div>
                "This is component class"
            </div>
        )
    }
}

