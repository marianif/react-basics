import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Setup

const firstBook = {
  author: 'Douglas R. Hofstadter',
  image: "https://images-na.ssl-images-amazon.com/images/I/41D+2N5s2AL._SY344_BO1,204,203,200_.jpg" ,
title: 'Godel, Escher, Bach',
description: 'Un eterna ghirlanda brillante. Una fuga metaforica su menti e macchine nello spirito di Lewis Carroll'
}

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book img={firstBook.image} title={firstBook.title} author={firstBook.author} description={firstBook.description} >
      <p>€21</p>
      </Book>
    </section>
  )
}

//Props Children
const Book = (props) => {
  const {title, author, img, description, children} = props
  return <article className='book'>
     <img src= {img} alt="" />
     <h1>{title}</h1>
     <h4>{author}</h4>
     <p>{description}</p>
     {children}
  </article>
}



const root = document.getElementById('root')

ReactDOM.render(<Booklist />, root)
