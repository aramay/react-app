import React from 'react';

class App extends React.Component {

    constructor (){
        super()
        this.state = {currentEvent: '-----'}
        this.update = this.update.bind(this)
    }

    update (e) {
        this.setState({currentEvent: e.type})
    }
    render() {
        console.log(this)
        return (
            <div>
                <h1>hello</h1>
                <textarea
                    onKeyPress={this.update}
                    cols="30"
                    rows="20" >
                </textarea>
                <h2>{this.state.currentEvent}</h2>

            </div>
        )
    }
}

export default App