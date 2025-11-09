import React from "react";
import Maintenance_Services from "../assets/images/webp/Maintenance_Services.webp";
import loading_unloading from "../assets/images/webp/loading_unloading.webp";
import machine_transportation from "../assets/images/webp/machine_transportation.webp";
import Repair from "../assets/images/webp/Repair.webp";
import service_repair from "../assets/images/webp/service_repair.webp";
import Annual_Maintenance from "../assets/images/webp/Annual_Maintenance.webp";
import spare_parts from "../assets/images/webp/spare_parts.webp";
import CT_Scan_Maintenance from "../assets/images/webp/CT_Scan_Maintenance.webp";
import Inventory_Management from "../assets/images/webp/Inventory_Management.webp";

const Service = [
  {
    id: 1,
    image: service_repair,
    title: "CMC (Comprehensive Maintenance Services )",
    paragraph:
      "We provide CMC for any GE MRI & CT scan machine service on Pan India",
  },
  {
    id: 2,
    image: Annual_Maintenance,
    title: "AMC (Annual Maintenance Services )​",
    paragraph:
      "We provide AMC for any GE MRI & CT scan machine service on Pan India",
  },
  {
    id: 3,
    image: "http://localhost:5174/src/assets/images/Webp/cold_head_helium.webp",
    title: "Cold Head Replacement & Helium liquid Filling",
    paragraph:
      "Best 3rd party dealers in refurbished range of MRI Scanner machines on pan India",
  },
];
const Repairs = [
  {
    id: 1,
    image: Repair,
    title: "Repair Your Existing MRI and CT Scan Machines",
    paragraph:
      "Best 3rd party dealers in refurbished range of MRI Scanner machines on pan India",
  },
  {
    id: 2,
    image: Maintenance_Services,
    title: "AMC (Annual Maintenance Services )​",
    paragraph:
      "We provide AMC for any GE MRI & CT scan machine service on Pan India",
  },
  {
    id: 3,
    image: Inventory_Management,
    title: "Inventory Management",
    paragraph:
      "Advanced spare parts inventory tracking for all MRI and CT equipment.",
  },
];
const Spare_Parts = [
  {
    id: 1,
    image: spare_parts,
    title: "MRI Spare Parts",
    paragraph:
      "We provide high-quality spare parts for all major MRI systems ensuring reliable performance.",
  },
  // {
  //   id: 1,
  //   image: spare_parts,
  //   title: "MHU TUBE",
  //   paragraph:
  //     "Best 3rd party dealers in refurbished range of MRI Scanner machines on pan India",
  // },
  {
    id: 2,
    image: CT_Scan_Maintenance,
    title: "CT Scan Maintenance​",
    paragraph:
      "Expert CT scan maintenance services ensuring performance and reliability.",
  },
  {
    id: 3,
    image: Inventory_Management,
    title: "Inventory Management",
    paragraph:
      "Advanced spare parts inventory tracking for all MRI and CT equipment.",
  },
];

function Services() {
  return (
    <>
      <section>
        <div className="container py-5 contect_section ">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
          >
            Service Packages
          </h2>
          <div className="grid justify-content-center">
            {Service.map((item, index) => (
              <div
                key={item.id}
                className="col-12 sm:col-6 md:col-4"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay={index * 600}
              >
                <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image h-full flex flex-column justify-content-between">
                  <div className="overflow-hidden">
                    <img className="w-full" src={item.image} alt={item.image} />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold pt-3">
                      {item.title}
                    </h2>
                    <h3 className="text-xs font-medium pt-2">
                      {item.paragraph}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg_gray">
        <div className="container py-5 contect_section ">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Repairs &  Spare Parts
          </h2>
          <div className="grid justify-content-center">
            {Repairs.map((item, index) => (
              <div
                key={item.id}
                className="col-12 sm:col-6 md:col-4"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay={index * 600}
              >
                <div className="pb-3 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image h-full flex flex-column justify-content-between overflow-hidden">
                  <img className="" src={item.image} alt={item.image} />
                  <div>
                    <h2 className="text-base font-semibold pt-3">
                      {item.title}
                    </h2>
                    <h3 className="text-xs font-medium pt-2">
                      {item.paragraph}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container py-5 contect_section ">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Spare Parts and Inventory
          </h2>
          <div className="grid justify-content-center">
            {Spare_Parts.map((item, index) => (
              <div
                key={item.id}
                className="col-12 sm:col-6 md:col-4"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay={index * 300}
              >
                <div className="pb-3 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image h-full flex flex-column justify-content-between overflow-hidden">
                  <img className="" src={item.image} alt={item.image} />
                  <div className="px-3">
                    <h2 className="text-base font-semibold pt-3">
                      {item.title}
                    </h2>
                    <h3 className="text-xs font-medium pt-2">
                      {item.paragraph}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Services;
