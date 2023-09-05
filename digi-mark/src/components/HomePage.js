import img3 from "./hero-banner.png"
import ImageSlider from "./Imageslider"
import Footer from "./Footer"

function HomePage () {
    return (
        <>
        <section className="home">
            <div className="box1">
            <h4 className="heading1">Digi-Mark Marketing Agency</h4>
            <h1 className="heading2">We are available for marketing</h1>
            <h3 className="heading3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et dolore magna aliqua</h3>
           <div>
           <a className="btn5" href="/">Get Started <i class="fa-solid fa-arrow-right-long"></i></a>
           </div>
            </div>
            <img className="main-img" alt="" src={img3} />
        </section>
        <ImageSlider />
        <Footer />
        </>
    )
}
export default HomePage