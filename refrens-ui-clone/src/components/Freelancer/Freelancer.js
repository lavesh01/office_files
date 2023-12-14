import "./Freelancer.css";

import React from 'react'

const Freelance = () => {
  return (
    <>
        <div className="freelancer-contain">

                <div class="header-container">

                    <div class="header-wrapper">
                    
                        <div class="heading-section">
                            <h1 class="f-head">
                            100,000+ Agencies & Freelancers on the Network
                            </h1>
                            <div class="f-description">
                              <p>Who’ve worked for Google, Tata Cliq, Citibank and more</p>

                              <p>People you look up to.</p>

                              <p>And people you work with.</p>
                            </div>

                            <div className="f-btn">
                              <button class="purple-join-btn"> 
                                  <span class="f-btn-text">
                                      Join Refrens 
                                  </span>
                              </button>
                            </div>
                           
                        </div>

                        <div class="img-section">
                            <img src="https://assets.refrens.com/720_Freelancer_Markeplace_734f52e512.webp" alt="compnay" />
                        </div>
                    
                    </div>
                </div>
        </div>

        </>
  )
}

export default Freelance