import React from "react";
import Layout from "../layout/Layout";
import logo from "../../asset/logoNCC.png";
import cssIcon from "../../asset/css-icon.png";
import htlmIcon from "../../asset/html-icon.png";
import urlIcon from "../../asset/url-icon.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home-wrapper">
          <div className="home-logo">
            <img src={logo} alt="" />
          </div>

          <div className="top">
            <h2 className="top-title">Lorem ipsum dolor sit amet?</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu.
            </p>
          </div>
          <div className="bottom">
            <div className="card-list">
              <div className="card-item">
                <h2 className="card-title">Lorem ipsum dolor sit amet?</h2>
                <div className="card-content">
                  <div className="card-logo">
                    <img src={htlmIcon} alt="" />
                  </div>
                  <div className="card des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem maxime dolorum aut dolore voluptate vitae odit
                    perferendis animi, ipsum eum nostrum soluta commodi! Optio
                    dolores ipsum ipsa at. Beatae, maxime!Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptatem maxime dolorum
                    aut dolore voluptate vitae odit perferendis animi, ipsum eum
                    nostrum soluta commodi!
                  </div>
                </div>
              </div>
              <div className="card-item">
                <h2 className="card-title">Lorem ipsum dolor sit amet?</h2>
                <div className="card-content">
                  <div className="card-logo">
                    <img src={cssIcon} alt="" />
                  </div>
                  <div className="card des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem maxime dolorum aut dolore voluptate vitae odit
                    perferendis animi, ipsum eum nostrum soluta commodi! Optio
                    dolores ipsum ipsa at. Beatae, maxime!Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptatem maxime dolorum
                    aut dolore voluptate vitae odit perferendis animi, ipsum eum
                    nostrum soluta commodi!
                  </div>
                </div>
              </div>
              <div className="card-item">
                <h2 className="card-title">Lorem ipsum dolor sit amet?</h2>
                <div className="card-content">
                  <div className="card-logo">
                    <img src={urlIcon} alt="" />
                  </div>
                  <div className="card-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem maxime dolorum aut dolore voluptate vitae odit
                    perferendis animi, ipsum eum nostrum soluta commodi! Optio
                    dolores ipsum ipsa at. Beatae, maxime!Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Voluptatem maxime dolorum
                    aut dolore voluptate vitae odit perferendis animi, ipsum eum
                    nostrum soluta commodi!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
