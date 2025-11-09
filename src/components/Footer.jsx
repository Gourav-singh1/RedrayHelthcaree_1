import React, { useEffect } from "react";
import footerlogo from "../assets/images/webp/footerlogo.webp";
import { getCategory } from "../redux/actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
function Footer() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.data);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <>
      <footer className="Footer_Bg">
        <div className="container py-5">
          <div className="grid">
            <div className="col-12 sm:col-6 md:col-4">
              <img width={150} src={footerlogo} alt="footerlogo" />
              <h1 className="text-white text-xs font-bold">
                Radrays Helthcare
              </h1>
              <h2 className="text-white text-xs font-normal pr-2 capitalize">
                Plot No. 307, suncity colony , Hanuman Mandir wali Gali ,
                Adampur road ,Agroha (Hisar ) 125047
              </h2>
              <ul className="pl-3">
                <li className="text-sm text-700 mb-1 text-white pt-5 list-disc">
                  +91 9996337963
                </li>
                <li className="text-sm text-700 mb-1 text-white list-disc">
                  radrayshealthcare@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4">
              <ul className="pl-3">
                <li className="text-lg text-700 font-bold mb-3 text-white pt-5">
                  Our Services
                </li>
                <li className="text-sm text-700 mb-2 text-white list-disc">
                  CMC/AMC Service Packages For CT Scanners
                </li>
                <li className="text-sm text-700 mb-2 text-white list-disc">
                  CMC/AMC Service Packages For MRI Scanners
                </li>
                <li className="text-sm text-700 mb-2 text-white list-disc">
                  Medical Imaging Radiology Equipment Installation
                </li>
                <li className="text-sm text-700 mb-2 text-white list-disc">
                  Medical Imaging Radiology Site Planning and Construction
                </li>
              </ul>
              <ul className="pl-3">
                <li className="text-lg text-700 font-bold mb-3 text-white pt-5">
                  More Products
                </li>
                {category?.map((item) => (
                  <>
                    <li
                      key={item._id}
                      className="text-sm text-700 mb-2 text-white list-disc"
                    >
                      {item.name} Machines
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="col-12 md:col-4">
              <div className="w-full h-23rem">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.123!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1234567890%3A0xabcdef123456!2sPhantom%20Healthcare!5e0!3m2!1sen!2sin!4v1690987654321"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
