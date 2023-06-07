import Link from "next/link"
import Image from "next/image"



export default function Navbar () {

    return(
        <>

<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark" arial-label="Furni navigation bar">

<div className="container">
    <Link className="navbar-brand c-link"  href="/">Ayaz Furni<span>.</span></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div clLinkss="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
                <Link className="nav-link" href="/">Home</Link>
            </li>
            <li><Link className="nav-link" href="/shop/">Shop</Link></li>
            <li><Link className="nav-link" href="/about/">About us</Link></li>
            <li><Link className="nav-link" href="/">Services</Link></li>
            <li><Link className="nav-link" href="/">Blog</Link></li>
            <li><Link className="nav-link" href="/">Contact us</Link>
            </li>
            <li><Link className="nav-link" href="contact.html"><Image src='/user.svg' width='30' height='20' /></Link>
            </li>
            <li><Link className="nav-link" href="contact.html"><Image src='/cart.svg' width='30' height='20' /></Link>
            </li>
            
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">

        </ul>
    </div>
</div>
</nav>

        </>
    )
}