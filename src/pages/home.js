import React from 'react'
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Aim } from "../components/goal";




const Home = () => {
  return (
    <>
    <div className="App">
      <Banner />
      <Skills />
      <Projects />
      <Aim />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default Home