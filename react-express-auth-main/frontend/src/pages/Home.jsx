import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import './home.css';

export default function HomePage() {
  const navigate = useNavigate();

  return <>
    <main>
      <section id="logo-hero">
        <section id="logo">logo</section>
        <section id="hero">
          <p>Our hero statement lives here!</p>
        </section>
      </section>
    
      <section id="name-and-wallpaper">
        <section id="name-button">
          <button onClick={() => navigate('/login')}>JAS IT UP!</button>
        </section>
        <section id="home-wallpaper">
          <img src="/images/home-wallpaper.svg"></img>
        </section>
      </section>
   
      <section id = "upcycling-examples">
        <section id="example-1">
          <img src = "/images/upcycle-planters-palette.svg"></img>
          <p>This is the example 1 description.</p>
        </section>
        <section id="example-2">
          <img src = "/images/upcycle-planters.svg"></img>
          <p>This is the example 2 description.</p>
        </section>
        <section id="example-3">
          <img src = "/images/upcycle-with-person.svg"></img>
          <p>This is the example 3 description.</p>
        </section>
      </section>
    
      <section id="about-us">
        <p>This is the text for what JAS IT UP is about and the people who created it </p>
        <p>About us</p>
      </section>
    </main>
  </>;
}
