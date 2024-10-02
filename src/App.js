import Navbar from "./components/Navbar"
import "./App.scss"
import HeroSection from "./components/heri-section/Hero_Section";
import HeroBottom1 from "./components/hero-bottom1/HeroBottom1";
import Categories from "./components/Category/Categories";
import CategoriesBottom1 from "./components/Category/CategoryBottom1";
import DesignerAndCreater from "./components/Design/Design";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import AppWorkProcess from "./components/AppWork/AppWorkProcess";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection/>
      <HeroBottom1 heading={"The OG Creators"}/>
      <Categories />
      <CategoriesBottom1 heading={"In The Spotlight"}/>
      <DesignerAndCreater/>
      <HeroBottom1 heading={"On The Rise"}/>
      <CategoriesBottom1 heading={"UGC"}/>
      <SocialMedia/>
      <AppWorkProcess/>
      <Footer/>
    </div>
  )
}

export default App;