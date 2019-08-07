import React, { Component } from 'react'
import Random from '../components/Random.jsx'

export default class RandomPage extends Component {
    render() {
        return (
            <div>  
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
            </div>
        )
    }
}
