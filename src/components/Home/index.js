import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => {
  return (
    <div className="home-container" data-testid="loader">
      <UserInfo />
      <BlogList />
    </div>
  )
}
export default Home
