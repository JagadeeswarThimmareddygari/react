import React from 'react'

class KeyCode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        }
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.handleEnter=this.handleEnter.bind(this);
    }
    componentDidMount(){
        document.addEventListener("keydown",this.handleKeyPress)
    }
    componentWillUnmount(){
        document.removeEventListener('keydown',this.handleKeyPress)
    }
    handleEnter(){
        this.setState({
            message:this.state.message+' You have entered the enter key! '
        })
    }

    handleKeyPress(event){
        if(event.KeyCode===13){
            this.handleEnter()
        }
    }

    render(){
        return(
            <div>
                <h4>{this.state.message}</h4>
            </div>
        );
    }
};

export default KeyCode;