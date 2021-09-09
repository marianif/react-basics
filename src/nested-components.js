import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}


const Book = () => {
  return <article className='book'>
    <Image/>
    <Title/>
    <Description/>
  </article>
}


const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/41D+2N5s2AL._SY344_BO1,204,203,200_.jpg" alt="" />
  )
}
const Title = () => {
  return <h1>Godel, Escher, Bach</h1>
}

const Description = () => {
  return <p>Un'eterna ghirlanda brillante. Una fuga metaforica su menti e macchine nello spirito di Lewis Carroll</p>
}



const root = document.getElementById('root')

ReactDOM.render(<Booklist />, root)
