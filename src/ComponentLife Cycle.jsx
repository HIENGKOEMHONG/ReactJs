import { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state =date: new Date() };
}
componentDidMount(){ this.timerID = setInterval(() => this.tick(), 1000); }
componentwillUnmount() { clearInterval(this.timerID); }
tick() { this.setState( {date: new Date() } ); }
render() {
    return (
        <>
            <h2>Component Life Cycle!</h2>
            <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
        </>
    );
}

export default Clock;