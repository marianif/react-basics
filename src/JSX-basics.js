import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Setup

const author = 'Douglas R. Hofstadter'
const image = "https://images-na.ssl-images-amazon.com/images/I/41D+2N5s2AL._SY344_BO1,204,203,200_.jpg" 
const title = 'Godel, Escher, Bach'
const description = 'Un eterna ghirlanda brillante. Una fuga metaforica su menti e macchine nello spirito di Lewis Carroll'

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  )
}


const Book = () => {
  return <article className='book'>
     <img src= {image} alt="" />
     <h1>{title}</h1>
     <h4>{author}</h4>
     <p>{description}</p>
  </article>
}



const root = document.getElementById('root')

ReactDOM.render(<Booklist />, root)
