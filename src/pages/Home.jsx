

import '../../src/styles/HomeStyle.css'

import { HomeAboutSection } from "../components/HomeAboutSection"
import HomeContactSection from '../components/HomeContactSection'
import { HomeHeroSection } from "../components/HomeHeroSection"
import { HomeMenuSection } from '../components/HomeMenuSection'
import { HomePromotionSection } from '../components/HomePromotionSection'
import HomeReviewSection from '../components/HomeReviewSection'
import HomeShopSection from '../components/HomeShopSection'


export const Home = () => {
   
   
    return (
        <>
      < HomeHeroSection />
      <HomeAboutSection/>
      <HomeMenuSection/>
      <HomePromotionSection/>
      <HomeShopSection/>
      <HomeReviewSection/>
      <HomeContactSection/>


        </>
    )
}