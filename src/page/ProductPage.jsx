import React, { useEffect, useState } from "react";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import { getCategory } from "../redux/actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/ProductsAction";
import { getSpareparts } from "../redux/actions/SparepartsAction";
import PrimaryButton from "../shared/Button/PrimaryButton";
import DialogForm from "../components/DialogForm";

const ProductPage = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.data);
  const products = useSelector((state) => state.products.data);
  const sparepart = useSelector((state) => state.sparepart.data);
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
    dispatch(getSpareparts());
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
              <ul className="p-tabview-nav flex mb-4 bb_white">
                {category?.map((tab) => (
                  <li
                    key={tab._id}
                    className={`cursor-pointer px-2 py-2 relative ${
                      activeTab === tab.name ? "active-tab" : ""
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    <a className="p-tabview-nav-link px-4 py-2 inline-block font-semibold">
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Tab panel */}
              <div className="p-tabview-panel">
                <div className="grid">
                  {filteredProducts.length > 0 ? (
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
          <div className="grid justify-content-center">
            {sparepart?.map((item, index) => (
              <div
                key={item._id}
                className="col-12 sm:col-6 md:col-4"
                data-aos="fade-don"
                data-aos-delay={index * 200}
                data-aos-offset="200"
              >
                <div className="p-3 px-4 md:px-3 lg:px-4 h-full text-center bg-white shadow-2 border-round-lg scale_hover_image flex flex-column h-full justify-content-between">
                  <div className="overflow-hidden">
                    <img
                      className="w-full card_image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold pt-3">
                      {item.name}
                    </h2>
                    <PrimaryButton
                      onClick={() => setVisible(true)}
                      className="font-medium mx-1 my-2 py-2 px-4 bg_Primary border_Primary text-white text-sm border-rounded-lg border-round-3xl"
                      label="Learn More"
                    />
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
