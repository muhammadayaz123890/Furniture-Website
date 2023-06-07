import Card from "../components/card";
import Footer from "../components/footer";
import { useState } from "react";
import Navbar from "../components/navbar";
import Link from "next/dist/client/link";
import SearchBar from "../components/searchBar";

export const getStaticProps = async () => {
  const response = await fetch(`http://127.0.0.1:8000/product/`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default function Shop({ data }) {
  const [len, setLen] = useState(4);

  return (
    <>
      <Navbar />
      <section className="shop-section mb-5">
        <div className="container mb-5">
          <SearchBar />
          <div className="row mt-3 mb-5">
            {data.slice(0, len).map((child) => {
              return (
                <>
                  <div
                    class="product-card my-4 col-sm-12 col-md-6 col-xxl-3  col-lg-4 mb-md-0"
                    key={child.id}
                  >
                    <Card
                      id={child.id}
                      source={`http://127.0.0.1:8000/media/${child.img}`}
                      alt_text={child.name}
                      name={child.name}
                      price={child.price}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="row d-flex flex-row justify-content-center align-items-center">
            <div className="col-lg-2 d-flex flex-row">
              <Link
                href="#"
                className="button-secondary d-block"
                onClick={(event) => {
                  event.preventDefault();
                  setLen((pre) => (pre += 16));
                }}
              >
                Load More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
