// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
class BlogList extends Component {
  state = {
    blogItems: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getDetails()
  }
  getDetails = async () => {
    const y = await fetch('https://apis.ccbp.in/blogs')
    const u = await y.json()
    const updatedData = u.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogItems: updatedData, isLoading: false})
  }
  render() {
    const {isLoading, blogItems} = this.state

    return (
      <div className="pol">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" width={50} height={50} color="#00BFFF" />
          </div>
        ) : (
          <ul className="pol">
            {blogItems.map(eachItem => (
              <BlogItem blogDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
