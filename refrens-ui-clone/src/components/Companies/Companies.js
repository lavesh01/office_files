import "./Companies.css";

import React from "react";

const Companies = () => {
  return (
    <>

      <div className="company-container">
        <div className="company-wrapper">
          <div className="company-heading">
            Big people are talking good things about us
            </div>

          <div className="company-logos">
            <picture>
              <div className="comp-logo">
                <img
                  src="https://assets.refrens.com/indian_express_v2_73a8926fc0.png"
                  className="image"
                  alt="Indian-Express"
                  title="Indian-Express"
                  data-src="https://assets.refrens.com/indian_express_v2_73a8926fc0.png"
                />
              </div>
            </picture>

            <picture>
              <div className="comp-logo">
                <img
                  src="https://assets.refrens.com/ys_v2_64f01b6ea4.png"
                  className="image"
                  alt="YourStory"
                  title="Your-Story"
                  data-src="https://assets.refrens.com/ys_v2_64f01b6ea4.png"
                />
              </div>
            </picture>

            <picture>
              <div className="comp-logo">
                <img
                  src="https://assets.refrens.com/130_vccircle_e8177e1784.webp"
                  className="image"
                  alt="VC-circle"
                  title="VC-circle"
                  data-src="https://assets.refrens.com/130_vccircle_e8177e1784.webp"
                />
              </div>
            </picture>

            <picture>
              <div className="comp-logo">
                <img
                  src="https://assets.refrens.com/Economic_Times_54d3ef3213.png"
                  className="image"
                  alt="Economic-Times"
                  title="Economic-Times"
                  data-src="https://assets.refrens.com/Economic_Times_54d3ef3213.png"
                />
              </div>
            </picture>

            <picture>
              <div className="comp-logo">
                <img
                  src="https://assets.refrens.com/130_Business_World_c4622081fc.webp"
                  className="image"
                  alt="Business World"
                  title="Business World"
                  data-src="https://assets.refrens.com/130_Business_World_c4622081fc.webp"
                />
              </div>
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
