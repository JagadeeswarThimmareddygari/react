import React, {useState} from 'react'

class Formsubmit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:'',
            submit:''
        }

    }
    handleChange(event){
        this.setState({
            input:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit:this.state.input
        })
    }
    render(){
    return(
        <>
        <div> 
            <form onSubmit={this.handleSubmit.bind(this)}>
                <p>Enter the text: </p>
                <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} />
                <button type="submit">Submit</button>
            </form>
            <h4>{this.state.submit}</h4>
        </div>
        </>
    )
    }
}

export default Formsubmit;