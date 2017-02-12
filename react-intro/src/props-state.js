import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor () {
        super();
        this.state = {increasing: false}
    }
    update () {
        ReactDOM.render(
            <App val={this.props.val + 1}/>,
            document.getElementById('root')
        )
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps nextProps", nextProps)
        this.setState({increasing: nextProps.val > this.props.val})
    }
    //does not prevent props from being updated
    //it only prevents a re-render
    shouldComponentUpdate(nextProps, nextState) {
        console.log("nextProps ", nextProps)
        console.log("nextState ", nextState)
        
        return nextProps.val % 5 === 0
    }
    render () {
        // console.log(this)
        console.log("increasing in render", this.state.increasing)
        return (
            <div>
                <h1>hello</h1>
                <button onClick={this.update.bind(this)}>Add </button>
                <p>{this.props.val}</p>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps ", prevProps)
    }
}

App.defaultProps = {val: 0}

export default App