import React, { Component,PureComponent } from 'react'

export default class FirstCom extends PureComponent {

    constructor() {
        super()
        this.state = {
            currentValue: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
  

    static getDerivedStateFromProps(props, state) {
        /* console.log('pp', props);
        console.log('ss', state); */
        return {
            currentValue: props.data * 10
        }
    }


    render() {
        console.log('render');
        return (

            <div>
                {this.state.currentValue}
            </div>
        )
    }
}
