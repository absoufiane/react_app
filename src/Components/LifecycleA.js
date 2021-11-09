import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Soufiane"
        }
        console.log("LifeCycle Cons");
    }

    static getDerivedStateFromProps(props , state){
        console.log("LifeCycle 12")
        return null;
    }
    
    componentDidMount() {
       console.log("Lidecycle componentDidMount") 
    }

    shouldComponentUpdate(){
        console.log("Lifecycle A shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("Lifecycle componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name : "codevolution"
        })
    }

    render() {
        console.log("lifecycle render")
        return (
            <div>
                <div>lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA
