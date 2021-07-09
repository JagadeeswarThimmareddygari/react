import React from 'react'

class MyUsers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeUsers:null
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                activeUsers:Math.round(Math.random()*10)
            });
        },1000);
    }
    render(){
        return(
            <div>
                <h1>Active Users: {this.state.activeUsers} </h1>
            </div>
        )
    }
}

export default MyUsers;