import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/Thumbnail4.png'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1>this is the post title</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nostrum maiores 
      accusantium saepe, voluptatem pariatur incidunt minus architecto sed sunt itaque velit 
      voluptate iusto hic? Maiores quos velit eligendi in facilis omnis itaque sit nemo cum 
      commodi assumenda recusandae minus, tenetur aut, inventore accusamus odio quas. Officia,
       porro quibusdam assumenda eum, perspiciatis enim quaerat debitis autem quis nulla temporibus
        nesci.
     </p>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit placeat alias provident totam accusamus, quasi,
        pariatur, ullam nam amet unde fugit enim. Ipsam quae vero tempora quod blanditiis id ut voluptatum dolore nulla,
         itaque quam aspernatur? Atque, suscipit. Tempora, mollitia neque accusantium qui, non beatae architecto quis quae 
         natus dolores, sed quam eveniet laboriosam.

     </p>
     <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci dolor omnis optio. Velit, reprehenderit beatae
       consequuntur alias repellat exercitationem possimus laborum! Iusto iste modi, laudantium ipsam unde hic, sint minima consectetur
        repudiandae fugit voluptate ut natus quam nesciunt quidem delectus recusandae dicta temporibus quasi? Fugiat cumque dicta modi omnis.
     </p>

     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quia harum sed, quisquam accusamus nisi, 
        expedita deserunt ut officiis est doloribus quae.
      </p>
      </div>
    </section>
  )
}

export default PostDetail
