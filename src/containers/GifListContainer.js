import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


const URL = "http://api.giphy.com/v1/gifs/search?q="
const api_key = "&api_key=dc6zaTOxFJmzC"

class GiftListContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      gifs: []
    }
  }

  handleSearch = (searchTerm) => {
    fetch(URL + searchTerm + api_key, {
      headers: {'Content-Type':'application/json'},
      method: 'get'
    }).then(res=>res.json()).then(json=>{
      this.setState({
        gifs: json.data.slice(0, 3)
      })
    })
  }

  render(){
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GiftListContainer
