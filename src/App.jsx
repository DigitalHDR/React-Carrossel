import { useEffect, useState, useRef } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json').then((response) =>
      response.json().then(setData)
    )
  }, [])

  if (!data || !data.length) {
    return null
  }

  const handleLeftClick = (e) => {
    e.preventDefault()
    // console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    // console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="logo" />
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">R$ {oldPrice}</span>
                <span className="price">R$ {price}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/seta.png" alt="Scroll left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/seta.png" alt="Scroll right" />
        </button>
      </div>
    </div>
  )
}
