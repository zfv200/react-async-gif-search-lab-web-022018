import React from 'react'

const GifList = (props) => {
  let renderedGifs = props.gifs.map(gif=>{
    console.log(gif.images.downsized_large.url)
    return (
      <div>
        <img src={gif.images.downsized_large.url} />
      </div>
    )
  })
  return (
    <div>
      // {renderedGifs}
    </div>
  )
}

export default GifList
