import React from 'react'

class App extends React.Component {

    render () {
        return <Button>I<Heart />React</Button>
    }
}

const Button = (props) => {
    let x = props;
    console.log(x)

    return (``
        <button>{props.children}</button>
    )
}

class Heart extends React.Component {
    render () {
        return (
            <span>&hearts;</span>
        )
    }
}
export default App