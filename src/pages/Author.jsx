import React, { useState } from 'react'
import Avatar1 from '../images/Derrick.png'
import Avatar2 from '../images/Kitkat.png'
import Avatar3 from '../images/Abu.png'
import Avatar4 from '../images/Lus.png'
import Avatar5 from '../images/Ashley.png'
import Avatar6 from '../images/Alina.png'
import Avatar7 from '../images/Joel.png'
import Avatar8 from '../images/Drue.png'
import Avatar9 from '../images/Vitas.png'
import { Link } from 'react-router-dom'

const authorsData = [
{id: 1, avatar: Avatar1, name: 'Derrick Dario', posts: 3},
{id: 2, avatar: Avatar2, name: 'Kitkat Magayones', posts: 3},
{id: 3, avatar: Avatar3, name: 'Abdul Raman', posts: 0},
{id: 4, avatar: Avatar4, name: 'Lus Smith', posts: 2},
{id: 5, avatar: Avatar5, name: 'Ashley Nance', posts: 20},
{id: 6, avatar: Avatar6, name: 'Alina Wong', posts: 11},
{id: 7, avatar: Avatar7, name: 'Joel Lee', posts: 9},
{id: 8, avatar: Avatar8, name: 'Drue Morning', posts: 8},
{id: 9, avatar: Avatar9, name: 'Vitas Paul', posts: 4},

]

const Author = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
   <section className="authors">
    {authors.length > 0 ? <div className="container authors__container">
    {
     authors.map(({id, avatar, name, posts}) => {
      return <Link key={id} to={`/posts/users/${id}`} className='author'>
       <div className="author__avatar">
      <img src={avatar} alt={`Image of ${name}`} />
      </div>
      <div className="author__info">
        <h4>{name}</h4>
        <p>{posts}</p>

      </div>

      </Link>
     })
    }
    </div> : <h2 className='center'>No users/authors found.</h2>}
   
   </section> 
  )
}

export default Author
