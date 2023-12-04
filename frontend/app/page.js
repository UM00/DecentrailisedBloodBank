import Image from 'next/image'
import Header from './Layouts/Header'
import LandingSection from './Layouts/LandingSection'
import Footer from './Layouts/Footer'
import AddBloodBank from './Components/AddBloodBank'
import DonateBlood from './Components/DonateBlood'

export default function Home() {
  return (
    <>
    <Header/>
    <LandingSection/>
    <Footer/>
    </>
  )
}
