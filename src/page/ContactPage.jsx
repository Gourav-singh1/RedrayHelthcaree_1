import React from "react";
import CallbackForm from "../components/CallbackForm";

function ContactPage() {
  return (
    <section>
      <div className="container py-5 contect_section ">
        <h2
          className="text-center pb-4 text-2xl text_dark font-semibold"
          data-aos="fade-down"
        >
          Contact
        </h2>

        <div className="grid justify-content-between bg-white shadow-2 border-round-lg p-3">
          <div className="col-12 md:col-5 lg:col-4">
            <h2
              className="text-xl font-bold"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="600"
            >
              Visit Us
            </h2>
            <div
              className="flex align-content-center pt-4"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="700"
            >
              {/* <img width={20} src={location_Icon} alt="location_Icon" /> */}{" "}
              <h1>icon</h1>
              <h2 className="text-xs font-normal pl-5">
                <span className="font-bold">Radray Helthcaree</span> <br />
                Radray Helthcaree Plot No. 307, suncity colony , Hanuman Mandi
                wali Gali , Adampur road ,agroha (Hisar ) 125047
              </h2>
            </div>
            <div
              className="flex align-content-center pt-4"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="800"
            >
              {/* <img width={20} src={phone_calling} alt="phone_calling" /> */}
              phone icon
              <h2 className="text-xs font-normal pl-5">+91 9996337963</h2>
            </div>
            <div
              className="flex align-content-center pt-4"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="900"
            >
              {/* <img width={20} src={email_icon} alt="email_icon" /> */}
              <h2 className="text-xs font-normal pl-5">
                radhrayshelthcaree@gmail.com
              </h2>
            </div>
          </div>
          <div
            className="col-12 md:col-7 lg:col-6"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="600"
          >
            <h2 className="text-xl font-bold pb-2 md:pb-4">Send Enquiry</h2>
            <CallbackForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
