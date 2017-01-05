import React from 'react';

class App extends React.Component {

    render () {
        let x = this.props;
        console.log(x)
        return (
            <div>   
                <h1>{x.txt}</h1>
                <h1>{x.cat}</h1>
                
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