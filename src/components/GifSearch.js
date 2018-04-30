import React from 'react'

class GifSearch extends React.Component{
  constructor(){
    super()

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.value)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.value}/>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
