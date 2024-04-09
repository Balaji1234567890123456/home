// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'
const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`}>
      <div className="lol">
        <div>
          <img src={imageUrl} className="oop" />
        </div>
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="lol">
            <img src={avatarUrl} className="poli" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
