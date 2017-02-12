import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            val: 0,
            x: 2
        }
        this.update = this.update.bind(this)
    }

    update () {
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log("will mount")
    }

    componentDidMount(){
        console.log("did mount")
    }
    componentWillUnmount() {
        console.log("componentWillUnMount")
    }
    render () {
        console.log("render")
        return (
            <div>
                <h1>hello</h1>
                <button onClick={this.update}>
                Press to Add</button>
                <p>{this.state.val}</p>
            </div>
        )
    }
}


class Wrapper extends React.Component {
    
    mount() {
        ReactDOM.render(
            <App />,
            document.getElementById('a')
        )
    }
    unmount(){
        // console.log("un mount method called")
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        console.log(this)
        return (
            <div>
                <button 
                    onClick={this.mount}>Mount
                </button>
                
                <button 
                    onClick={this.unmount}>UnMount
                </button>

                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper