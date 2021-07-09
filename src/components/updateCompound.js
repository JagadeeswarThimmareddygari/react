import React from 'react'

class OnlyEvens extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextValue,nextState){
        console.log('Should I update?')
        if(nextValue.value %2===0){
            return true
        }
        return false
    }
    componentDidUpdate(){
        console.log("Component Re-endered")
    }
    render(){
        return(
            <h4>{this.props.value}</h4>
        )
    }
}

class Controller extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }
    handleChange(){
        this.setState((state)=>({
            value:state.value+1
        }))
    }
    render(){
        return(
            <div>
                <button onClick={this.handleChange.bind(this)}>Add</button>
                <OnlyEvens  value={this.state.value}/>
            </div>
        )
    }
}

export default Controller;

