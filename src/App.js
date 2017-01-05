import React from 'react';

class App extends React.Component {

    constructor () {
        super();
            this.state = {
                txt: "this is state txt",
                cat: 0
            }
    }

    update ( e ) {
        this.setState({txt: e.target.value})
    }
    render () {
        // let x = this.props;
        let x = this.state;
        console.log(x)
        return (
            <div>
                <input type='text' onChange={this.update.bind(this)}/>   
                <h1>{x.txt}</h1>
                <h1>{x.cat}</h1>
                <h1>{this.state.txt} - {this.state.cat}</h1>
                
            </div>
        )
    }

}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "this is default text"
}
export default App