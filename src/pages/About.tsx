import Wrapper from '../sections/Wrapper'
import avatarImage from "../assets/rishi.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const About = () => {
  return (
    <div className='profile'>
      <img className='profile-image' src={avatarImage} alt="" />
      <h1 className="profile-text">Hi, I am Rishi Singh</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <div className="profile-links">
        <a href="https://github.com/mrsingh-rishi">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/rishi_singh12_02/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rishi-singh-332a481a4/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About);