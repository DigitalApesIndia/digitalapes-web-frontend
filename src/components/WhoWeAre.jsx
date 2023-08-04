import whoWeAre_Section_Img from '../assets/images/who_we_are_image.jpg'

export default function WhoWeAre() {
    return (
        <>
            <div className="w-full py-20 md:py-32 bg-white">
                <div className="container flex flex-col items-center justify-center">
                    {/* Section Heading */}
                    <div className="text-lg md:text-2xl text-center text-slate-700 font-light mb-12 md:mb-16">WHO WE ARE</div>
                    
                    {/* Main Text */}
                    <div className="text-2xl md:text-4xl lg:text-5xl text-slate-900 text-center font-semibold lg:leading-snug mb-6 md:mb-14">We're a team of creative ands tech-savvy professionals who are all about helping businesses grow and succeed online. </div>

                    {/* Image */}
                    <img src={whoWeAre_Section_Img} className='w-3-4 sm:w-2/3 lg:w-1/2' alt="Who are are illustration" />
                </div>
            </div>

        </>
    )
}


