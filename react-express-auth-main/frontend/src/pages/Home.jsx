import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import './Home.css'



export default function HomePage() {
  const navigate = useNavigate();

  return <>
    <main id='everything'>
      <section id="mission-logo">
        {/* <section id="logo">logo</section> */}
        <img id='home-logo'src="../images/upcycling.png"></img>
          <p id='mission-statement'>Our mission is to inspire individuals to reduce their carbon footprint through creative upcycling. Our innovative app helps users discover enjoyable ways to repurpose recyclable items, fostering a community dedicated to reuse and reduction. We aim to empower people to impact the environment positively, one upcycled creation at a time, contributing to a more sustainable future.
</p>
      
      </section>
    
      <section id="name-and-wallpaper">
         
        <section id="home-wallpaper">
           <button id="name-button" onClick={() => navigate('/login')}>JAS IT UP!</button>
          <img id='shapes'src="/images/home-wallpaper.svg"></img>
        </section>
      </section>
   
      <section id = "upcycling-examples">
        <section id="example-1">
          <img id='plant-bottle' src = "/images/upcycle-planters-palette.svg"></img>
          <p id='plant-description'>Upcycling results in less hazardous waste production during the manufacturing process. -HEAL THE PLANET</p>
        </section>
        <section id="example-2">
          <img id='purple-image' src = "/images/upcycle-planters.svg"></img>
          <p id='purple-description'>It reduces the amount of waste that will need to be recycled or sent to landfills and incinerators. -HEAL THE PLANET</p>
        </section>
        <section id="example-3">
          <img id='pink-image' src = "/images/upcycle-with-person.svg"></img>
          <p id='pink-description'>It saves energy - as well as reducing greenhouse gas emissions which contribute to global climate fluctuations. -HEAL THE PLANET</p>
        </section>
      </section>
    
      <section id="about-us">
        <section id='just-text'> 
        <p id='AB-paragraph'>At Jas It Up, we're all about finding fun and practical ways to reuse things you might normally throw away. Whether it's turning old jars into storage containers or getting creative with cardboard, our platform is a friendly place for eco-friendly DIY projects. We offer helpful guides and a supportive community to help you make a positive impact on the environment by reducing waste. Join us in our mission to live sustainably and creatively! </p>
        </section>
        <p id='AB-TEXT'>About us</p>
      </section>
    </main>
  </>;
}
