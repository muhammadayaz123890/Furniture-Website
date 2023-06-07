import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Image from "next/image"
import Footer from "../components/footer";


export const getStaticPaths = async () =>{

    const response = await fetch('http://127.0.0.1:8000/product/');
    const data = await response.json();

    
    
    const paths =   data.map((curElem) => {
        return {
            params : {
                product_id : curElem.id.toString(),
            },
        };
    });
    
    return {
        paths,
        fallback : false,
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.product_id
    
    const response = await fetch(`http://127.0.0.1:8000/product/${id}`);
    const data = await response.json();

    return {
        props : {
            data,
        }
    }
}

export default function Product({data}) {
    console.log("Hello", data.naem)

    return(
        <>
            <Navbar />
            <section className="s-product-section">
                <div className="container">
                    <div className="row">
                        {
                            data.map(elem  => {
                                


                                return(
                                    <>
                                        <div className="col-lg-5">
                                            <Image className='p-img img-fluid' width='400' height='500' src={`http://127.0.0.1:8000/media/${elem.img}`} />
                                            <div className="r-imgs mt-4 flex-row d-flex ">
                                            <Image className='r-img img-fluid' width='400' height='500' src={`http://127.0.0.1:8000/media/${elem.img}`} />
                                            <Image className='r-img img-fluid' width='400' height='500' src={`http://127.0.0.1:8000/media/${elem.img}`} />
                                            <Image className='r-img img-fluid' width='400' height='500' src={`http://127.0.0.1:8000/media/${elem.img}`} />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 mt-lg-0 mt-5">
                                            <h2 className="s-p-name">{elem.name}</h2>
                                            <h6 className="mt-3">Brand</h6>
                                            <h6 className="for-i">{elem.brand_name}</h6>
                                            <h6 className="mt-4">Added on </h6>
                                            <h6 className="m for-i"> {elem.added_on}</h6>

                                            <h6 className="mt-5">Description </h6>
                                            <p className="some-c mb-3">{elem.about.slice(0,500)}... <span className="more-btn" onClick={(event) => {
                                                document.querySelector("p.some-c").innerHTML = elem.about
                                            }}>show more</span></p>

                                            <div className="btns-con mt-5">
                                                <Link className="button-secondary" href="/">
                                                    Buy Now
                                                </Link>
                                                <Link className="button-primary mx-lg-2" href="/">
                                                    Add To Card
                                                </Link>
                                            </div>

                                            <h6 className="mt-5">Comments</h6>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <br /><br /><br /><br /><br /><br />

            <Footer />
        </>
    )
}
