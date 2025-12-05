import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import PageHeader from '../COMMON/PageHeader'
import { MainService } from './MainService'

function page() {
  return (
    <div>
      <Navbar color="white"/>
      <PageHeader title="Service" />
     <MainService/>
      <Footer/>

    </div>
  )
}

export default page
