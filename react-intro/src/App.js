import React from 'react';
// var axios = require('axios')
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {

        let items = []

        axios.get(`http://swapi.co/api/people/?format=json`)
            .then(res => {
        
            items = res.data.results.map(obj => obj.name);
            this.setState({items: items})

        }).catch(function(error){
            console.log("Get request failed ", error)
        })
    }

    filter(e){
        console.log("filter", e.target.value)
        this.setState({filter: e.target.value})
    }
    render () {
        let items = this.state.items
        
        if(this.state.filter){
            items = items.filter( item => {
                return item.includes(this.state.filter)
            })
            // console.log("filtered items ", items)
            // return items
        }
        
        console.log("render ", this.state)

        return (
            <div>
                <h1>Names</h1>
                <input type='text'
                    onChange={this.filter.bind(this)} >
                </input>

                <div>
                {items.map(item => 
                    <p>{item}</p>
                )}
                </div>

            </div>
        )
    }
}

export default App