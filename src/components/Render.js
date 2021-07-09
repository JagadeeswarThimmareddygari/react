import React from 'react'


const InputStyle={
    width:235,
    margin:5
};

class MagicEightBall extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'hello',
            RandomIndex:''
        }
    }
    ask(){
        if(this.state.userInput){
            this.setState({
                RandomIndex:Math.floor(Math.random()*20),
                userInput:''
            });
        }
    }
    handleChange(event){
        this.setState({
            userInput:event.target.value
        });
    }
    render(){
        const PossibleAnswers=[
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answers=PossibleAnswers[this.state.RandomIndex]
        return(
            <div>
                <input 
                type="text"
                style={InputStyle}
                value={this.state.userInput}
                onChange={this.handleChange.bind(this)}
                 /> <br />
                 <button onClick={this.ask.bind(this)}>Ask the Magic Eight Ball</button> 
                 <p>Answer: </p>
                 <h3>{answers}</h3>
            </div>
        )
    }
}

export default MagicEightBall;