import React, { useState } from "react";
import OIP from "../assets/images/Webp/OIP.webp";
import open_mri from "../assets/images/Webp/open-mri.webp";
import PrimaryButton from "../shared/Button/PrimaryButton";
import DialogForm from "../components/DialogForm";
import AboutSection from "../components/AboutSection";

function AboutUs() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* about_section  */}
      <AboutSection />

      {/* Exhibition Partners With IRIA ===== */}
      <section>
        <div className="container py-5 text-center">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
          >
            Our Team
          </h2>
          <img
            className="w-full hidden sm:inline-block"
            data-aos="zoom-in"
            data-aos-offset="200"
            src={OIP}
            alt="OIP"
          />
        </div>
      </section>

      <DialogForm setVisible={setVisible} visible={visible} />
    </>
  );
}

export default AboutUs;
