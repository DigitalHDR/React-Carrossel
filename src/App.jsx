import { useRef } from 'react'
import './App.css'
import shoes from './shoes.json'

export default function App() {
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="logo" />
      </div>
      <div className="carousel" ref={carousel}>
        {shoes.map((item) => {
          const { id, name, price, oldPrice, image } = item
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name.substring(0, 23) + '...'}</span>
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
