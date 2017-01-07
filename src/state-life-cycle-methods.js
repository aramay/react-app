import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            val: 1,
        }
        this.update = this.update.bind(this)
    }

    update () {
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log("will mount")
        this.setState({x: 2})
        console.log("will mount component ", ReactDOM.findDOMNode(this)) //null
    }

    componentDidMount(){
        console.log("did mount")
        console.log("did mount component ", ReactDOM.findDOMNode(this)) // returns DOM element. has access to DOM

        this.inc = setInterval(this.update, 500)
    }
    componentWillUnmount() {
        console.log("componentWillUnMount")
        clearInterval(this.inc) // this will remove element 
        // if we try to unmount element when it's state is updated. it throws an error
        // Warning: setState(...): Can only update 
        
    }
    render () {
        console.log("render")
        return (
            <div>
                <h1>hello</h1>
                <button onClick={this.update}>
                Press to Add</button>
                <p>{this.state.val * this.state.x}</p>
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