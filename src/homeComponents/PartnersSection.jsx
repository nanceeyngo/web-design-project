import emery from "../assets/images/Logo (1).png";
import prepworld from "../assets/images/Logo (2).png";
import didafresh from "../assets/images/Logo (3).png";
import logistics from "../assets/images/Logo (4).png";


const PartnersSection = () => {
  return (
    <>
          <section className='font-Manrope bg-[#55BB77] py-5'>
            <h1 className='text-[#001F0A] font-extrabold text-[1.2rem] md:text-[2rem] text-center'>OUR PARTNERS</h1>

            <div className='flex gap-10 vmd:gap-16 justify-center items-center mt-5 px-10 md:px-14'>
            <div>
             <img className='w-full md:w-[80%]' src={emery} alt="Emery Logo" />
            </div>

            <div>
             <img className='w-full md:w-[80%]' src={prepworld} alt="PrepWorld Logo" />
            </div>

            <div>
             <img className='w-full md:w-[80%]' src={didafresh} alt="Dida Fresh Logo" />
            </div>

            <div>
             <img className='w-full md:w-[80%]' src={logistics} alt="Fresh Fruits Logistics Logo" />
            </div>

            </div>



            </section>  
        </>
  )
}

export default PartnersSection