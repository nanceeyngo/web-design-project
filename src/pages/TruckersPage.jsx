import React from 'react';
import THeroSection from '../truckerspageComponent/THeroSection';
import TruckersWhyPartnerSection from '../truckerspageComponent/TruckersWhyPartnerSection';
import TruckersHowSection from '../truckerspageComponent/TruckersHowSection';
import TruckersBenefitSection from '../truckerspageComponent/TruckersBenefitSection';
import TruckersReviewSection from '../truckerspageComponent/TruckersReviewSection';
import TruckersReadySection from '../truckerspageComponent/TruckersReadySection';
import TruckersFAQSection from '../truckerspageComponent/TruckersFAQSection';

const TruckersPage = () => {
    return (
        <>
          <THeroSection/>
          <TruckersWhyPartnerSection/>  
          <TruckersHowSection/>  
          <TruckersBenefitSection/>  
          <TruckersFAQSection/>  
          <TruckersReviewSection/>  
          <TruckersReadySection/>  
        </>
    );
};

export default TruckersPage;
