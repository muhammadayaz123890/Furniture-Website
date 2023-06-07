import Link from "next/link"
import Image from "next/image";






export default function Header(){


    return(
        <>
        
            

        <section className="header-section">

            <div className="container">
                <div className="row mt-5">
                    <div className="col-5  mt-lg-3">
                        <h1 className="m-heading mb-4">Modern Interior <br /> Design Studio</h1>
                        <p className="small-text e-text mb-4">Lorem ipsum dolor sit amet consectetur,netur, <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae. sunt?</p>
                        <div className="search-bar py-3">
                            <input type="text" className="mb-3 search-input form-control  bg-transparent" placeholder='Search Products Here' />
                        </div>
                        <div className="btns-con">
                            <Link className="button-primary mx-lg-2" href="/shop/">
                                Shop Now
                            </Link>
                            <Link className="button-secondary" href="/about/">
                                About us
                            </Link>
                        </div>
                    </div>
                    <div className="col-7">
                        <Image className="img-fluid header-img d-sm-none d-md-block" src='/couch.png' width="700" height="700" />
                    </div>
                </div>
            </div>
        </section>


        </>
    )
}


