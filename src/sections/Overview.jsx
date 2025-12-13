import React from 'react';
import image from '../assets/home/overviewembassy.png';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
        
Embassy Astra: Premium High-Rise Living in Hebbal
         </span>
          <br />
          
            <span>
        <br />    <p>Embassy Astra is a premium G+23 development in Hebbal featuring four towers across 10.5 acres. The project offers spacious 3 BHK + SR (2100–2500 sq.ft.) and 4 BHK + SR (3000 sq.ft.) homes with high-end specifications and marble-finish flooring. Each tower welcomes residents with a grand double-height lobby and dedicated drop-off zone, all connected via a wide 100 ft approach road for smooth access..<p/>
            <br/>
            <p>With a 35% building footprint and 65% open spaces, Embassy Astra is designed for elevated urban living. A 27,000 sq.ft. clubhouse, landscaped zones, and thoughtfully planned amenities create a refined lifestyle environment in the heart of Hebbal. Perfect for those seeking luxury, space, and connectivity. </p></p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
