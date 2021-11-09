import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Soufiane"
        }
        console.log("LifeCycle B Cons");
    }

    static getDerivedStateFromProps(props , state){
        console.log("LifeCycle 12")
        return null;
    }
    
    componentDidMount() {
       console.log("Lidecycle B componentDidMount") 
    }

    shouldComponentUpdate(){
        console.log("Lifecycle B shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle B getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("Lifecycle B componentDidUpdate")
    }

    render() {
        console.log("lifecycle B render")
        return (
            <div>lifecycle B</div>
        );
    }
}

export default LifecycleB
