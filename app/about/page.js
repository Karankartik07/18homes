import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import HomeAbout from '../components/HomeAbout'
import AboutPage from './AboutPage'
import MissionVisson from './MissionVisson'

function page() {
  return (
    <div>
      <Navbar color="white"/>
      <AboutPage/>
      <HomeAbout/>
      <MissionVisson/>
     
      <Footer/>

    </div>
  )
}

export default page
