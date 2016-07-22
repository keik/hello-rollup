import React from 'react'
import ReactDOM from 'react-dom'


export default class App extends React.Component {

  constructor() {
    super()
    self.TAG = 'App'
  }

  componentDidMount() {
    console.log(`${self.TAG}#componentDidMount`)
  }

  handleKeyDown() {
    console.log(`${self.TAG}#handleKeyDown`)
  }
  handleChange() {
    console.log(`${self.TAG}#handleChange`)
  }

  render() {
    console.log(`${self.TAG}#render`)

    return (
      <div>
        <h1>Hello Rollup</h1>
      </div>
    )
  }
}
