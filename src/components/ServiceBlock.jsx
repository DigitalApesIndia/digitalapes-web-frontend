

function ServiceBlock({
  outlineHeadingText,
  servicesObj,
  serviceImage,
  serviceDescription,
  blockNumber
}) {
  return (
    <div className="container relative z-20">
      <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl outline-heading select-none text-transparent font-bold text-center relative top-2 md:top-3 lg:top-4">{outlineHeadingText}</h1>

      <div
        className={`flex flex-col-reverse ${blockNumber%2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} w-full border-1.5 border-slate-700 rounded-3xl overflow-hidden mb-8 lg:mb-10 h-fit lg:h-120 z-10 relative add-top-dark-shadow`}
      >
        
        <div
          className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col gap-8 h-auto relative"
          style={{
            background: "linear-gradient(135deg, #15203A 0%, #0F172A 100%)",
          }}
        >
          {servicesObj.map((service) => {
            if (service.subServices === undefined)
              return (
                <div className="text-white font-bold text-2xl uppercase">
                  {service.serviceName}
                </div>
              );
            else {
              return (
                <div className="flex flex-col gap-4">
                  <div className="text-white font-bold text-2xl uppercase">
                    {service.serviceName}
                  </div>
                  <SubServices subServicesArray={service.subServices} />
                </div>
              );
            }
          })}
        </div>

        <div className="w-full lg:w-1/2 relative aspect-6/5 overflow-hidden bg-white">
          <img src={serviceImage} alt="Service Image" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

      </div>

      <p className="text-slate-400 text-lg lg:text-2xl lg:leading-relaxed px-2 text-left">
        {serviceDescription}
      </p>
    </div>
  );
}

export default ServiceBlock;

function SubServices({ subServicesArray }) {
  return (
    <ul className="flex flex-col align-bottom gap-4">
      {subServicesArray.map((sub_service) => {
        return (
          <li className="text-slate-400 text-base lg:text-xl">{sub_service}</li>
        );
      })}
    </ul>
  );
}
