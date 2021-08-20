import React, { Component } from 'react'
import FirstCom from './FirstCom'
import SecondCom from './SecondCom';

export default class ClassLifeCycle extends Component {

    constructor() {
        super();
        this.state = {
            dcount: 0,
            scount:0
        }
    }

    
    render() {
        return (
            <div>
                <div>getDerivedStateFromProps with componentDidMount</div>
                <FirstCom data={this.state.dcount}></FirstCom>
                <button onClick={()=>{this.setState({dcount:this.state.dcount+1})}}>click on me</button>



                <div>getSnapshotBeforeUpdate with componentDidUpdate</div>
                <SecondCom data={this.state.scount}></SecondCom>
                <button onClick={()=>{this.setState({scount:this.state.scount+1})}}>click on me</button>

            </div>
        )
    }
}
