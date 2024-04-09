// Write your JS code here
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
class BlogItemDetails extends Component {
  state = {blogs: [], isLoading: true}

  componentDidMount() {
    this.getFullDetails()
  }
  getFullDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const i = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const u = await i.json()
    const z = {
      title: u.title,
      imageUrl: u.image_url,
      avatarUrl: u.avatar_url,
      author: u.author,
      content: u.content,
      topic: u.topic,
    }
    this.setState({blogs: z, isLoading: false})
  }
  render() {
    const {blogs, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogs
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" height={50} width={50} />
          </div>
        ) : (
          <div className="king">
            <h1>{title}</h1>
            <div className="pok">
              <img src={avatarUrl} className="zup" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} className="pip" alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
