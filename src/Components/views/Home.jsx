import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../Assets/styles/Home.css';
import Background from '../common/Background';
import Modal from '../common/Modal';
import Footer from '../Footer';
import Ut from "../../Assets/images/ut.jpg";
import Extras from '../common/Extras';

export default function Home(props) {
  let [showModal, setShowModal] = useState(null);

  const toggleModal = (e)=>{
    if(!showModal && e.currentTarget === e.target)
      setShowModal(e.target.src);
    else setShowModal(null);
  }

  return (
  <>
    <main className="home">
      <header className="home-header">
        <article className="home-left profile-section">
          <picture className="profile-img-container">
              <img src={Ut} className="profile-img" alt="profile" />
          </picture>
          <section className="profile-content">
            <h1 className="name">Utkarsh Dhiman</h1>
            <p className="details p-1r">I'm a full stack web developer.</p>
          </section>
        </article>
        <article className="home-right">
          <nav className="home-nav">
            <Link to="/projects" className="home-nav-link">Projects</Link>
            <Link to="/blogs" className="home-nav-link">Blogs</Link>
            <a href="#contact" className="home-nav-link">Contact</a>
          </nav>
        </article>
      </header>
      <Extras toggleModal={toggleModal} />
    </main>
    <Footer />
    <Background text="Home" />
    {showModal && <Modal toggleModal={toggleModal}><img alt="extra" src={showModal} className="block w-80p" /></Modal>}
  </>);
}