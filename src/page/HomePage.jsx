import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Skeleton } from "primereact/skeleton";
import up from "../assets/images/webp/up.webp";
import service from "../assets/images/webp/service.webp";
import site from "../assets/images/webp/site.webp";
import reating5 from "../assets/images/webp/reating5.webp";
import service24 from "../assets/images/webp/service24.webp";
import best from "../assets/images/webp/best.webp";
import skill from "../assets/images/webp/skill.webp";
import our_process from "../assets/images/webp/our_process.webp";
import our_process_2 from "../assets/images/webp/our_process_2.webp";
import india_flag from "../assets/images/webp/india_flag.webp";
import team_image from "../assets/images/webp/team_image.webp";

import MRI_Machines from "../assets/images/svg/MRI_Machines.svg";
import upd from "../assets/images/svg/upd.svg";
import ser from "../assets/images/svg/ser.svg";
import PrimaryButton from "../shared/Button/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/ProductsAction";
import { getCategory } from "../redux/actions/CategoryAction";
import { getSpareparts } from "../redux/actions/SparepartsAction";
import { getStats } from "../redux/actions/StatsAction";
import { Link } from "react-router-dom";
import DialogForm from "../components/DialogForm";

import AboutSection from "../components/AboutSection";

const Services = [
  {
    id: 1,
    image: MRI_Machines,
    title: "Buy/Sell MRI Machines, CT Scanner, PET-CT",
    paragraph:
      " Buy New as well as refurbished equipment from a wide range of models",
  },
  {
    id: 2,
    image: upd,
    title: "Inventory of Spare Parts also Available​",
    paragraph:
      " We have a large inventory of spare parts available for upgrades",
  },
  {
    id: 3,
    image: ser,
    title: "Services and Repairs for Your Equipment",
    paragraph:
      "We provide service plans and also do repair work of your machines",
  },
];

const officeInfo = [
  {
    region: "India & Sub-Continent Region",
    countryFlag: india_flag,
    company: "RadRays Healthcare IND Private Limited",
    address:
      " Plot No. 307, suncity colony , Hanuman Mandir wali Gali , Adampur road ,Agroha (Hisar ) 125047",
    phone: "+91 9996337963",
    email: "radrayshealthcare@gmail.com",
  },
];

const slides = [
  {
    id: 1,
    video: "../../public/video/video_background.mp4", // <-- put your video file in public/videos/
    subtitle: "RadRays Healthcare",
    title: "We Buy, Sell & Repair MRI Machines",
    isVideo: true,
  },
  {
    id: 2,
    image:
      "https://5.imimg.com/data5/GG/TN/YK/SELLER-27515495/maintenance-service-for-mri-scan-and-ct-scan-1000x1000.jpg",
    subtitle: "Spare Parts and Services",
    title:
      "We Have One Of The Largest Inventories of Spare Parts and Offer AMC/CMC Services",
  },
  {
    id: 3,
    image: team_image,
    subtitle: "Dedicated Team",
    title: "Our 100+ Engineers Are Available 24/7 For You",
  },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [sparePartLoading, setSparePartLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.data);
  const category = useSelector((state) => state.category.data);
  const sparepart = useSelector((state) => state.sparepart.data);
  const stats = useSelector((state) => state.stats.data);

  useEffect(() => {
    dispatch(getProducts(setLoading));
    dispatch(getCategory(setCategoryLoading));
    dispatch(getSpareparts(setSparePartLoading));
    dispatch(getStats(setStatsLoading));
  }, [dispatch]);

  const itemsToShow = sparePartLoading
    ? Array(3).fill({})
    : sparepart?.slice(0, 3);
  const categoryToShow = categoryLoading ? Array(4).fill({}) : category;
  const statsItems = [
    { label: "Total Installations", value: stats?.totalInstallations },
    { label: "Happy Customers", value: stats?.happyCustomers },
    { label: "Cities Covered", value: stats?.citiesCovered },
    { label: "Countries Covered", value: stats?.countriesCovered },
  ];
  // start carousel js =======================>

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // Correct template: only renders ONE item
  const productTemplate = (item) => {
    return (
      <div className="px-2" data-aos="fade-up" data-aos-offset="200">
        <div className="py-3 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image flex flex-column align-items-center">
          <div className="overflow-hidden">
            {loading ? (
              <Skeleton height="20rem" width="420px" className="mb-2" />
            ) : (
              // <Skeleton height="2rem"  className="my-3" />
              <img
                className="w-full card_image"
                src={item.image}
                alt={item.name}
              />
            )}
          </div>

          {loading ? (
            <>
              <Skeleton height="2rem" width="120px" className="my-3" />
              <Skeleton height="2rem" width="120px" className="my-3" />
              <Skeleton
                height="2rem"
                width="120px"
                className="my-3 border-round-3xl"
              />
            </>
          ) : (
            <>
              <h2 className="text-base font-semibold pt-3">{item.name}</h2>
              <h3 className="text-xs font-medium pt-2">{item.designation}</h3>
              <Link to="/products">
                <PrimaryButton
                  className="font-medium mx-1 my-2 py-2 px-4 bg_Primary border_Primary text-white text-sm border-rounded-lg border-round-3xl"
                  label="Learn More"
                />
              </Link>
            </>
          )}
        </div>
      </div>
    );
  };

  // end carousel js =======================>

  // hero  section ........................

  const itemTemplate = (item) => {
    return (
      <div
        className="relative w-full"
        style={{ height: "580px", overflow: "hidden" }}
      >
        {/* 🔹 Background video or image */}
        {item.isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
            className="zoom-effect"
          />
        )}

        {/* 🔹 Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        ></div>

        {/* 🔹 Text Content */}
        <div
          className={`flex justify-content-center flex-column ${
            item.isVideo ? "align-items-center" : "sm:pl-8"
          }`}
          style={{
            height: "100%",
            position: "relative",
            zIndex: 2,
            padding: "1rem",
          }}
        >
          <h2
            className={`text-4xl font-bold text-white mb-3 ${
              item.isVideo ? "" : "md:pl-8"
            }`}
          >
            {item.subtitle}
          </h2>
          <p
            className={`text-xl text-white ${item.isVideo ? "" : "md:pl-8"}`}
            style={{ maxWidth: "30rem", lineHeight: "1.8" }}
          >
            {item.title}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="Hero_section">
        <Carousel
          value={slides}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={8000}
          itemTemplate={itemTemplate}
          className="hero-carousel"
        />
      </section>

      <section>
        <div className="container py-5">
          <div className="grid justify-content-center">
            {Services.map((item, index) => (
              <div
                key={item.id}
                className="col-12 sm:col-6 md:col-4"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover">
                  <img src={item.image} alt={item.image} />
                  <h2 className="text-base font-semibold">{item.title}</h2>
                  <h3 className="text-xs font-medium pt-2">{item.paragraph}</h3>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-center">
              <PrimaryButton
                data-aos="fade-up"
                data-aos-offset="200"
                label="Request A Callback"
                onClick={() => setVisible(true)}
              />
            </div>
            <DialogForm setVisible={setVisible} visible={visible} />
          </div>
        </div>
      </section>
      {/* about_section  */}
      <AboutSection />
      {/* What We Do ===== */}
      <section>
        <div className="container py-5">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            What We Do
          </h2>
          <div className="grid justify-content-center">
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-offset="200"
            >
              <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover">
                <h2 className="text-base font-semibold">
                  Sales & Supply with transparent deals​
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  Buy New as well as refurbished equipment from a wide range of
                  models
                </h3>
              </div>
            </div>
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-delay={800}
              data-aos-offset="200"
            >
              <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover">
                <img src={up} alt="up" />
                <h2 className="text-base font-semibold">
                  Upgrade your existing MRI and CT Machine​
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  We have one of the largest inventory of spare parts for
                  upgrades and repairs
                </h3>
              </div>
            </div>
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-delay={900}
              data-aos-offset="200"
            >
              <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover">
                <img src={service} alt="service" />
                <h2 className="text-base font-semibold">
                  Service Maintenance Plans All over India​​
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  Our field engineers are present all over India for instant
                  troubleshooting.
                </h3>
              </div>
            </div>
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-delay={1000}
              data-aos-offset="200"
            >
              <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover">
                <img src={site} alt="site" />
                <h2 className="text-base font-semibold">
                  Site Planning with full financial assistance​
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  We provide full support and guidance from site planning with
                  financial assistance.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products   ===== */}
      <section className="bg_gray">
        <div className="container py-5">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Featured Products
          </h2>
          <div className="card">
            <Carousel
              value={loading ? Array(3).fill({}) : product}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={productTemplate}
            />
          </div>
        </div>
      </section>

      {/* Featured Spare Parts   ===== */}
      <section>
        <div className="container py-5">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Featured Spare Parts
          </h2>
          <div className="grid">
            {itemsToShow.map((item, index) => (
              <div
                key={index}
                className="col-12 sm:col-6 md:col-4"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset="200"
              >
                <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image flex flex-column justify-content-between">
                  <div className="overflow-hidden">
                    {sparePartLoading ? (
                      <Skeleton height="16rem" className="w-full mb-2" />
                    ) : (
                      <img
                        className="w-full card_image"
                        src={item.image}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div>
                    {sparePartLoading ? (
                      <>
                        <Skeleton
                          height="2rem"
                          width="80%"
                          className="my-3 mx-auto"
                        />
                        <Skeleton
                          height="2.5rem"
                          width="100px"
                          className="mx-auto border-round-3xl"
                        />
                      </>
                    ) : (
                      <>
                        <h2 className="text-base font-semibold pt-3">
                          {item.name}
                        </h2>
                        <Link to="/products">
                          <PrimaryButton
                            className="font-medium mx-1 my-2 py-2 px-4 bg_Primary border_Primary text-white text-sm border-rounded-lg border-round-3xl"
                            label="Learn More"
                          />
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* All Products name==================== */}
      <section className="bg_light_blue">
        <div className="container py-5">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            All Products
          </h2>
          <div className="flex flex-wrap gap-3 justify-content-center">
            {categoryToShow?.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="flex"
              >
                {loading ? (
                  <Skeleton
                    height="2.5rem"
                    width="8rem"
                    className="border-round-3xl bg-blue-100"
                  />
                ) : (
                  <PrimaryButton extraClassName="uppercase" label={item.name} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Process To Set Up Machine   ===== */}
      <section>
        <div className="container py-5">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Our Process To Set Up Machine
          </h2>
          <div className="grid justify-content-center">
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay={700}
            >
              <div className="text-center scale_hover_image">
                <img className="w-full w-9rem" src={reating5} alt="reating5" />
                <h2 className="text-base font-semibold">
                  6+ Years of Experience
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  we have 6 year experience and sell best refurbished Machine In
                  India
                </h3>
              </div>
            </div>
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay={800}
            >
              <div className="text-center scale_hover_image">
                <img
                  className="w-full w-9rem"
                  src={service24}
                  alt="service24"
                />
                <h2 className="text-base font-semibold">
                  24*7 Service & Support
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  Our team is well experienced to set up refurbished MRI machine
                </h3>
              </div>
            </div>
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay={900}
            >
              <div className="text-center scale_hover_image">
                <img className="w-full w-9rem" src={best} alt="best" />
                <h2 className="text-base font-semibold">
                  Best Quality AERB Approved​
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  We are giving 100% satisfied guaranteed result of client​
                </h3>
              </div>
            </div>
            <div
              className="col-12 sm:col-6 md:col-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay={1000}
            >
              <div className="text-center scale_hover_image">
                <img className="w-full w-9rem" src={skill} alt="skill" />
                <h2 className="text-base font-semibold">
                  Skilled Professional
                </h2>
                <h3 className="text-xs font-medium pt-2">
                  We provide a dedicated work for better coordination and with
                  getting
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*customer ===== */}
      <section className="bg_Primary">
        <div className="container py-5">
          <div className="grid justify-content-center">
            {statsItems.map((item, index) => (
              <div
                key={index}
                className="col-12 sm:col-6 md:col-3 text-center"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay={700 + index * 100}
              >
                {statsLoading ? (
                  <>
                    <Skeleton
                      height="4rem"
                      width="8rem"
                      className="mx-auto mb-3 border-round-lg bg-blue-100"
                    />
                    <Skeleton
                      height="2rem"
                      width="10rem"
                      className="mx-auto border-round-lg bg-blue-100"
                    />
                  </>
                ) : (
                  <>
                    <h2 className="text-white text-7xl font-semibold">{`${item.value}+`}</h2>
                    <h3 className="text-2xl font-semibold">{item.label}</h3>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Process To Set Up Machine ===== */}
      <section>
        <div className="container py-5 text-center">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            Our Process To Set Up Machine
          </h2>
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            className="w-full hidden sm:inline-block"
            src={our_process}
            alt="our_process"
          />
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            className="w-full sm:hidden"
            src={our_process_2}
            alt="our_process_2"
          />
        </div>
      </section>
      {/* Exhibition Partners With IRIA ===== */}
      {/* <section>
        <div className="container py-5 text-center">
          <h2 className="text-center pb-4 text-2xl text_dark font-semibold">
            Exhibition Partners With IRIA
          </h2>
          <img className="w-full hidden sm:inline-block" src={OIP} alt="OIP" />
        </div>
      </section> */}
      {/* CUSTOMER Testimonial   ===== */}
      {/* <section className="bg_gray">
        <div className="container py-5">
          <h2 className="text-center pb-4 text-2xl text_dark font-semibold">
            CUSTOMER Testimonial
          </h2>
          <div className="card">
            <Carousel
              value={testimonials}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={testimonialsTemplate}
            />
          </div>
        </div>
      </section> */}
      {/* location_section   ===== */}
      {/* <section className="location_section">
        <div className="container py-5">
          <div
            className="grid justify-content-center"
            data-aos="zoom-in"
            data-aos-offset="200"
          >
            {officeInfo.map((item) => (
              <div key={item.id} className="col-12 sm:col-6 md:col-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-900 mb-2">
                    {item.region}
                  </h3>

                  <img
                    src={item.countryFlag}
                    alt={item.countryFlag}
                    className="w-4rem h-3rem mx-auto my-3 border-round-sm"
                  />

                  <h4 className="text-lg font-bold text-800 mb-2">
                    {item.company}
                  </h4>

                  <p className="text-sm text-700 leading-normal mb-2 capitalize">
                    {item.address}
                  </p>

                  <p className="text-sm text-700 mb-1">{item.phone}</p>
                  <p className="text-sm text-700">{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
