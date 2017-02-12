import React from 'react';

class App extends React.Component {
    render() {
        return (
            <Title text='this'/>
        )
    }
}

const Title = (props) => {
    let x = props
    console.log(x)

    return (
        <h1>title: {props.text}</h1>
    )
}

Title.propTypes = {
    // text: React.PropTypes.string.isRequired
    text (props, propName, component){
        console.log(props) // returns an Object {}
        console.log(propName) // returns text as propName = text
        if(!(propName in props)){
            return new Error (`missing ${propName} in component => ${component}`)
        }
        if(props[propName].length < 5){
            return new Error (`too short propName ${propName} in component => ${component}`)
        }
    }
}

export default App