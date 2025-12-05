import Footer from "@/app/COMMON/Footer"
import Navbar from "@/app/COMMON/Navbar"
import PageHeader from "@/app/COMMON/PageHeader"
import { HouseOption } from "./HouseOption"
import ContactSection from "@/app/components/ContactSection"


function page() {
  return (
    <div>
      <Navbar color="white"/>
      <PageHeader title="Service" />
    <HouseOption/>
    <ContactSection/>
      <Footer/>

    </div>
  )
}

export default page
