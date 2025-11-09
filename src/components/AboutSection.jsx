import React from "react";
import PrimaryButton from "../shared/Button/PrimaryButton";
import { Link } from "react-router-dom";
import aboutsection from "../assets/images/webp/aboutsection.webp";

function AboutSection() {
  return (
    <section className="about_section">
      <div className="container py-5 text-white z-2 relative">
        <div className="grid align-items-center justify-content-between flex-column-reverse md:flex-row">
          <div className="col-12 md:col-7">
            <h2
              className="text-3xl font-simebold text-white"
              data-aos="fade-right"
              data-aos-delay={700}
              //   data-aos-offset="200"
            >
              About Radrays Helthcaree
            </h2>
            <p
              className="text-sm font-medium text-white pt-3 line_Height_md"
              data-aos="fade-right"
              data-aos-delay={800}
              //   data-aos-offset="200"
            >
              I started RadRays Healthcare in 2019 with a vision to make
              advanced medical imaging technology more accessible and
              affordable. We specialize in buying and selling MRI machines,
              providing high-quality spare parts, and offering expert repair and
              maintenance services for MRI systems. With years of hands-on
              experience in the diagnostic field, our goal is to ensure that
              every healthcare center gets reliable machines with smooth
              performance. At RadhRays Healthcare, we take pride in delivering
              trust, quality, and technical excellence to our clients across
              India.
            </p>
            <Link to="/about">
              <PrimaryButton
                data-aos="fade-right"
                data-aos-delay={900}
                // data-aos-offset="200"
                label="Learn More"
              />
            </Link>
          </div>
          <div className="col-12 sm:col-7 md:col-5 lg:col-4">
            <img
              className="w-full border-round-sm"
              data-aos="fade-left"
              data-aos-delay={800}
              //   data-aos-offset="200"
              src={aboutsection}
              alt="aboutsection"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
