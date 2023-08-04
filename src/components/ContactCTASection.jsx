import noiseTexture from "../assets/images/noise_texture.png";

// Importing from React Router don
import {Link} from 'react-router-dom'

function ContactCTASection() {
  return (
    <section
      className=" w-full py-20 md:py-40 relative px-2 md:px-0"
      style={{ background: "linear-gradient(135deg, #F90 0%, #7000FF 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 add-noise"></div>
      <div className="container flex flex-col align-center relative z-20">
        <div className="text-3xl lg:text-6xl font-bold text-white text-left sm:text-center mb-6">
          Let’s Discuss Your Projects!
        </div>
        <div className="text-white/80 text-lg lg:text-xl text-left sm:text-center mb-10">
          Let us know your project idea and Get free consultation to turn it
          into an amazing digital product.
        </div>
        <Link to="/contact" className="self-center w-full sm:w-auto">
          <button className="py-3 px-6 bg-white hover:bg-black text-slate-900 hover:text-white rounded-full transition-all duration-200 self-center w-full sm:w-auto">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ContactCTASection;
