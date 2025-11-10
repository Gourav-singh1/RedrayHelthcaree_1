import React, { useEffect, useState } from "react";
import { Skeleton } from "primereact/skeleton";
import { getCategory } from "../redux/actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/ProductsAction";
import { getSpareparts } from "../redux/actions/SparepartsAction";
import PrimaryButton from "../shared/Button/PrimaryButton";
import DialogForm from "../components/DialogForm";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [sparePartLoading, setSparePartLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const category = useSelector((state) => state.category.data);
  const products = useSelector((state) => state.products.data);
  const sparepart = useSelector((state) => state.sparepart.data);
  useEffect(() => {
    dispatch(getCategory(setCategoryLoading));
    dispatch(getProducts(setLoading));
    dispatch(getSpareparts(setSparePartLoading));
  }, [dispatch]);

  const [visible, setVisible] = useState(false);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (category.length > 0 && !activeTab) {
      setActiveTab(category[0].name);
    }
  }, [category]);

  const filteredProducts = (products || []).filter(
    (p) => p?.category?.name?.toLowerCase() === (activeTab || "").toLowerCase()
  );

  const itemsToShow = sparePartLoading ? Array(3).fill({}) : sparepart;
  const categoryToShow = categoryLoading ? Array(4).fill({}) : category;

  const renderProductSkeleton = () => {
    return (
      <>
        {[...Array(3)].map((_, i) => (
          <div className="col-12 sm:col-6 md:col-4" key={i}>
            <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg">
              <Skeleton
                height="180px"
                className="mb-2"
                style={{ backgroundColor: "#E0F2FE" }}
              />
              <Skeleton
                width="60%"
                className="mb-2"
                style={{ backgroundColor: "#BFDBFE" }}
              />
              <Skeleton width="40%" style={{ backgroundColor: "#BFDBFE" }} />
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <section className="bg_gray">
        <div className="container py-6">
          <h2
            className="text-center text-2xl text_dark font-semibold"
            data-aos="fade-down"
          >
            Featured Products
          </h2>
          <div className="">
            {/* TabView wrapper */}
            <div className="card">
              {/* Tab headers */}
              <ul className="p-tabview-nav flex nowrap overflow-x-auto mb-4 bb_white custom-scrollbar">
                {categoryLoading
                  ? Array(5)
                      .fill()
                      .map((_, i) => (
                        <li key={i} className="px-2 py-2">
                          <Skeleton
                            width="100px"
                            height="2rem"
                            className="mx-2 border-round-lg"
                            style={{
                              backgroundColor: "rgba(173, 216, 230, 0.3)",
                            }}
                          />
                        </li>
                      ))
                  : category?.map((tab) => (
                      <li
                        key={tab._id}
                        className={`cursor-pointer px-2 py-2 relative whitespace-nowrap ${
                          activeTab === tab.name ? "active-tab" : ""
                        }`}
                        onClick={() => setActiveTab(tab.name)}
                      >
                        <a className="p-tabview-nav-link px-4 py-2 inline-block font-semibold text-nowrap">
                          {tab.name}
                        </a>
                      </li>
                    ))}
              </ul>

              {/* Tab panel */}
              <div className="p-tabview-panel">
                <div className="grid">
                  {loading ? (
                    renderProductSkeleton()
                  ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                      <div
                        className="col-12 sm:col-6 md:col-4"
                        key={item._id}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                      >
                        <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image">
                          <div className="overflow-hidden">
                            <img
                              className="w-full card _image"
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                          <h2 className="text-base font-semibold pt-3">
                            {item.name}
                          </h2>
                          <h3 className="text-xs font-medium pt-2 word-break-break-all">
                            {item.designation}
                          </h3>
                          <PrimaryButton
                            onClick={() => setVisible(true)}
                            className="font-medium mx-1 my-2 py-2 px-4 bg_Primary border_Primary text-white text-sm border-rounded-lg border-round-3xl"
                            label="Learn More"
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      No products found in this category
                    </p>
                  )}
                  {/* {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                      <div
                        className="col-12 sm:col-6 md:col-4"
                        key={item._id}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                      >
                        <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image">
                          <div className="overflow-hidden">
                            <img
                              className="w-full card _image"
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                          <h2 className="text-base font-semibold pt-3">
                            {item.name}
                          </h2>
                          <h3 className="text-xs font-medium pt-2 word-break-break-all">
                            {item.designation}
                          </h3>
                          <PrimaryButton
                            onClick={() => setVisible(true)}
                            className="font-medium mx-1 my-2 py-2 px-4 bg_Primary border_Primary text-white text-sm border-rounded-lg border-round-3xl"
                            label="Learn More"
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      No products found in this category
                    </p>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2
            className="text-center pb-4 text-2xl text_dark font-semibold"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay={800}
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

      <DialogForm setVisible={setVisible} visible={visible} />
    </>
  );
};

export default ProductPage;
