import Image from "next/image"
import Link from "next/link"


export default function Footer(){


    return(
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row my-section d-flex flex-wrap">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="row mb-4">
                                <h2 className="f-h2">Subscribe to Newsletter</h2>
                            </div>
                            <div className="row d-flex flex-row  flex-wrap">
                                <div className="col-5"><input placeholder='Username' type="text" className="mw form-control" /></div>
                                <div className="col-5"><input type="text" placeholder='Email Address' className="mw form-control" /></div>
                                <div className="col-2"><button className="btn btn-custom">h</button></div>
                            </div>
                        </div>
                        <div className="col-lg-6 for-border d-sm-none d-md-flex">
                            <Image className="d-none sofa-img d-lg-block" src='/sofa.png' width='1000' height='1020' />
                        </div>
                    </div>
                    <div className="row mt-5">
                    <Link class="navbar-brand c-link"  href="/">Ayaz Furni<span>.</span></Link>

                    </div>
                    <div className="row  mb-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <p className="e-text mt-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil deserunt necessitatibus officiis omnis delectus facilis in excepturi dolorum pariatur nesciunt!
                            </p>
                            <div className="social-icons d-flex flex-row">

                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-3 align-items-center justify-content-center">
                                    <ul className="f-list">
                                        <li><Link href='/' className="list-a" >Home</Link></li>
                                        <li><Link href='/' className="list-a" >About</Link></li>
                                        <li><Link href='/' className="list-a" >Contact</Link></li>
                                        <li><Link href='/' className="list-a" >Shop</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 align-items-center justify-content-center">
                                    <ul className="f-list">
                                        <li><Link href='/' className="list-a" >Home</Link></li>
                                        <li><Link href='/' className="list-a" >About</Link></li>
                                        <li><Link href='/' className="list-a" >Contact</Link></li>
                                        <li><Link href='/' className="list-a" >Shop</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 align-items-center justify-content-center">
                                    <ul className="f-list">
                                        <li><Link href='/' className="list-a" >Home</Link></li>
                                        <li><Link href='/' className="list-a" >About</Link></li>
                                        <li><Link href='/' className="list-a" >Contact</Link></li>
                                        <li><Link href='/' className="list-a" >Shop</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 align-items-center justify-content-center">
                                    <ul className="f-list">
                                        <li><Link href='/' className="list-a" >Home</Link></li>
                                        <li><Link href='/' className="list-a" >About</Link></li>
                                        <li><Link href='/' className="list-a" >Contact</Link></li>
                                        <li><Link href='/' className="list-a" >Shop</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

