import React, { Component } from 'react'

export default class SecondCom extends Component {

    constructor() {
        super();
        this.state = {
            currentValue: 0
        }
    }
    componentDidUpdate(preProps,state,snap){
        console.log('preprops',preProps);
        console.log('thisprops',this.props);
        console.log('state',state);
        console.log('snap',snap);

        if(this.props.data !== preProps.data){
            this.setState({
                currentValue:snap.currentValue
            })
        }
        
       
    }

    getSnapshotBeforeUpdate(preprops,preState) {

        console.log('getSnapshotBeforeUpdateprops',preprops.data,this.props.data);
        console.log('preState',preState);

        return {currentValue:preprops.data*20}
          
    }   
    render() {
        return (
            <div>
                {this.state.currentValue}
            </div>
        )
    }
}
