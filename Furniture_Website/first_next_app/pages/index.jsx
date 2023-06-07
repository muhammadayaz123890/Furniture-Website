import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Header from './components/header';
import Navbar from './components/navbar';
import Image from 'next/image';
import Card from './components/card';
import Footer from './components/footer';
import { useState } from 'react';


export const getStaticProps = async() => {

  const response = await fetch('http://127.0.0.1:8000/product/')
  const data = await response.json()

  return {
    props : {
      data,
    }
  }
}


export default function Home({data}){

  const [len, setLen] = useState(2);


  
  
  return(

    <>    
      <Navbar />
      <Header />

      <section className="hero-1 mb-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around flex-wrap-reverse ">
            <div className="col-sm-12 col-lg-3 col-md-8">
              <h1 className='h-s-1 mt-3'>Featured Products</h1>
              <p className='mt-3 e-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio necessitatibus perferendis reprehenderit, voluptatem dignissimos ullam eius molestiae laboriosam ducimus eum.</p>
              <div className="btns-area mt-4">
                <Link href='/' className='button-secondary btn-oth'>See More</Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 d-flex flex-wrap flex-column justify-content-between  col-sm-12 col-md-12">
              <div className="row ">
                {
                  data.slice(-3).map(child => {

                    return(

                        <div class="product-card col-sm-12 col-md-6 col-lg-4 mb-md-0" key={child.id}>
                          <Card id={child.id}  source={`http://127.0.0.1:8000/media/${child.img}`} alt_text={child.name} name={child.name} price={child.price} />
                        </div>
                    )
                  })
                }      
                
              </div>
            </div>
          </div>
        </div>
      </section>  


      <hr />

      <section className="hero-2 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-sm-3 col-sm-12">
              <h2 className='why-h'>Why Choose Us</h2>
              <p className='e-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo quod consequuntur inventore neque repellat nulla ratione autem, vitae corporis!</p>
              <div className="row mt-5 w-100 d-flex flex-row flex-wrap">
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <Image src="/truck.svg" width='40' height="40"  alt='icon-image' />
                  <p className="some-b mb-2 mt-3">
                    Fast And Free Shipping
                  </p>
                  <p className="m-0 e-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.
                  </p>
                </div>
                <div className="col-lg-6 col-sm-12  col-md-6">
                  <Image src="/bag.svg" width='40' height="40"  alt='icon-image' />
                  <p className=" mb-2 mt-3">
                    <strong>Fast And Free Shipping</strong>
                  </p>
                  <p className="m-0 e-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.
                  </p>
                </div>
                <div className="col-lg-6 col-sm-12 mt-5 col-md-6">
                  <Image src="/return.svg" width='40' height="40"  alt='icon-image' />
                  <p className="some-b mb-2 mt-3">
                    Easy and Secure Returns
                  </p>
                  <p className="m-0 e-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.
                  </p>
                </div>
                <div className="col-lg-6 col-sm-12 mt-5 col-md-6">
                  <Image src="/support.svg" width='40' height="40"  alt='icon-image' />
                  <p className="some-b mb-2 mt-3">
                    24/7 Support
                  </p>
                  <p className="m-0 e-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
						<div class="img-wrap">
							<Image src="/why-choose-us-img.jpg" alt="Image" class="img-fluid img-why" width='700' height='100' />
						</div>
					</div>
          </div>

        </div>
      </section>
      
<hr />

      
      
      <section className="help">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img-con">
                <Image src="/img-grid-1.jpg" width='1000' height='500' alt="" />
              </div>
            </div>
            <div className="col-lg-7 text">
              <h2 className="help-heading">We help you <br /> choose best interior designs</h2>
              <p className="some-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto ut voluptas doloribus illia. Veniam molestias explicabo iure sunt aspernatur! Pariatur distinctio unde ipsum perspiciatis harum deserunt ea id!
              </p>
              <div className="items-section d-flex flex-wrap flex-row">
                <div className="item-d">
                  <p className='ph'>Heading</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, qui?</p>
                </div>
                <div className="item-d">
                  <p className='ph'>Heading</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, qui?</p>
                </div>
                <div className="item-d">
                  <p className='ph'>Heading</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, qui?</p>
                </div>
                <div className="item-d">
                  <p className='ph'>Heading</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, qui?</p>
                </div>
              </div>
              <div className="btn-section text-center mt-5">
                <Link href='/' className='button-secondary btn-oth' >Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      
      <hr />
      
      <section className="solo-section">
        <div className="container">
          <div className="row d-flex flex-row flex-wrap">
            <div className="col-lg-4 d-flex align-items-center justify-content-center flex-row col-md-6 col-sm-8">
              <Image src='/product-2.png' className='b-img' width='110' height='110' />
              <div className="text-area mx-4">
                <h6><strong>Nordic Chair</strong></h6>
                <p className="e-text m-0">Lorem  amet consectetur adipisicing elit. Deserunt, iste?</p>
                <Link className='a-custom mt-1' href='/'>Read more</Link>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center flex-row col-md-6 col-sm-8">
              <Image src='/product-3.png' className='b-img' width='110' height='110' />
              <div className="text-area mx-4">
                <h6><strong>Nordic Chair</strong></h6>
                <p className="e-text m-0">Lorem  amet consectetur adipisicing elit. Deserunt, iste?</p>
                <Link className='a-custom mt-1' href='/'>Read more</Link>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center flex-row col-md-6 col-sm-8">
              <Image src='/product-1.png' className='b-img' width='110' height='110' />
              <div className="text-area mx-4">
                <h6><strong>Nordic Chair</strong></h6>
                <p className="e-text m-0">Lorem  amet consectetur adipisicing elit. Deserunt, iste?</p>
                <Link className='a-custom mt-1' href='/'>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="blog-section">
        <div className="container">
          <div className="row d-flex flex-row justify-content-between">
            <div className="col-lg-4 col-sm-2">
              <h2>Recent Blog</h2>
            </div>
            <div className="col-lg-2 d-flex align-items-end col-sm-2">
              <Link href='/' className='s-a'>View all Blogs</Link>
            </div>
          </div>
          <div className="row d-flex flex-row flex-wrap justify-content-around align-items-center mt-5">
            <Link className='blog-link' href="">
            <div className="col d-flex flex-column ">
              <Image className='blog-img ' src='/post-1.jpg' width='400' height='350' />
              <h5 className='mt-2 mx-3'>Furniture designs for you</h5>
              <p className='e-text mx-3'>Lorem ipsum dolor sit amet.</p>
            </div>
            </Link>
            <Link className='blog-link' href="">
            <div className="col d-flex flex-column ">
              <Image className='blog-img' src='/post-2.jpg' width='400' height='350' />
              <h5 className='mt-2 mx-3'>Furniture designs for you</h5>
              <p className='e-text mx-3'>Lorem ipsum dolor sit amet.</p>
            </div>
            </Link>
            <Link className='blog-link' href="">
            <div className="col d-flex flex-column ">
              <Image className='blog-img' src='/post-3.jpg' width='400' height='350' />
              <h5 className='mt-2 mx-3'>Furniture designs for you</h5>
              <p className='e-text mx-3'>Lorem ipsum dolor sit amet.</p>
            </div>
            </Link>
            
          </div>
        </div>
      </section>


      <section className="testimonial-section">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2 className='mb-3'>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            
          </div>
        </div>
      </section>


      <Footer />

      


    </>

  )
}