import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
  


    <div className="hero">
        <img src="/images/hero.png" alt="" className="w-[1365px] h-[442px]" />

    </div>

  {/* Featured Section */}

    <section className="feature">
        <h1>Featured</h1>
        <div className="container">
            <div className="box">
                <img src="/images/four.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <a href="Purchase/buynow.html"><button className="btn">Buy Now</button></a>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            
            <div className="box">
                <img src="/images/three.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/two.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/five.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/1.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/15.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
        </div>

        <h1>Shop By Men</h1>
        <div className="container feature">
            
            <div className="box">
                <img src="/images/kes tshirt back.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/STARK-FRONT.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/धर्मो रक्षति रक्षितः.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/PngItem_27846.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/tshirt design 2.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
            <div className="box">
                <img src="/images/kes_tshirt1-removebg-preview.png" alt=""/>
                <h3>Nike T-shirt</h3>
                <h5>Price: Rs. 499</h5>
                <div className="btn-gr">
                <button className="btn">Buy Now</button>
                <button className="btn">Add To Cart</button>
            </div>
            </div>
        </div>

    </section>

    
   
    
    <Footer/>
    </>
  )
}

export default Home