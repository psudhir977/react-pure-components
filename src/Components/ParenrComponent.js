import React, { Component } from 'react'
import PureComponent from './PureComponent'
import RegularComponent from './RegularComponent'

class ParenrComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            name: 'Sudhir'
        }
    }
    
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: 'Sudhir'
            })
        },2000)
    }

    render() {
        return (
            <div>
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComponent name={this.state.name}></PureComponent>
            </div>
        )
    }
}

export default ParenrComponent
