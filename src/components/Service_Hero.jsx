import ServiceBlock from "./ServiceBlock";

import designServiceImage from "../assets/images/design_service_img.jpg";
import webServiceImage from "../assets/images/web_service_img.jpg";
import appServiceImage from "../assets/images/app_service_img.jpg";
import digitalMarketingServiceImage from "../assets/images/digital_marketing_service_img.jpg";

let designServicesObj = [
  {
    serviceName: "UI/UX Design",
    subServices: [
      "User Research and Experience Design",
      "User Interface Design",
      "Interaction Design",
      "Prototyping",
    ],
  },
  {
    serviceName: "Graphics Desgin",
    subServices: [
      "Logo Design",
      "Illustrations Design",
      "Motion Graphics and Animations",
    ],
  },
];

let webDevelopmentServicesObj = [
  {
    serviceName: "E-Commerce",
    subServices: ["Shopify", "Woo-Commerce", "Custom Solution"],
  },
  {
    serviceName: "Business & Marketing Websites",
  },
  {
    serviceName: "Custom web-applications",
  },
];

let appDevelopmentServicesObj = [
  {
    serviceName: "Android App Development",
  },
  {
    serviceName: "iOS App Development",
  },
  {
    serviceName: "Cross-platform App Development",
  },
];

let digitalMarketingServicesObj = [
  {
    serviceName: "social media Ads",
  },
  {
    serviceName: "pay per click Ads",
  },
  {
    serviceName: "Search engine optimization (SEO)",
  },
  {
    serviceName: "content marketing",
  },
  {
    serviceName: "Email marketing",
  },
];

let designServiceDescription =
  "Good design is essential for digital products as it enhances user experience, increases usability builds credibility, and drives user engagement and satisfaction.";

let webServiceDescription =
  "Boost your business's potential with a cutting-edge website and web applications. Seamlessly reach a wider audience, increase brand visibility, and drive sales. From captivating user experiences to enhanced functionality, our agency crafts digital solutions tailored to your unique goals.";

let appServiceDescription =
  "Elevate your business to new heights with our mobile application development services. Tap into the vast mobile user base and connect with customers on the go. Drive engagement, foster brand loyalty, and optimize business processes with customized mobile apps tailored to your specific needs. Embrace the mobile revolution and stay ahead of the competition.";

let digitalMarketingServiceDescription =
  "Supercharge your business growth and profitability with our agency's comprehensive digital solutions. Harness the power of social media ads, Google ads, and SEO strategies to increase brand visibility, reach your target audience, and drive conversions. Maximize your ROI, unlock new revenue streams, and stay ahead in the competitive market. ";

export default function Service_Hero() {
  return (
    <div className="w-full bg-slate-950 pb-20 md:pb-40 lg:pb-60 overflow-hidden relative">

      <div className="absolute -top-32 sm:-top-52 md:-top-40 w-100 flex left-1/2 -translate-x-1/2">
        <div
          className="services-bg-capsule inline-block -rotate-[22deg] mr-24 sm:mr-40 rounded-full"
          style={{
            backgroundColor: "#FF9900"
          }}
        ></div>

        <div
          className="inline-block -rotate-[22deg] mt-40 sm:mt-52 lg:mt-60 rounded-full services-bg-capsule"
          style={{
            backgroundColor: "#CA40FB"
          }}
        ></div>
      </div>

      <div className="container pt-40 pb-28 h-auto lg:h-screen flex flex-col items-center justify-center relative z-20">
        <div className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl mb-6 lg:mb-8">
          OUR
        </div>
        <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-9xl mb-10">
          SERVICES
        </h1>
        <div className="text-slate-300 text-center text-base lg:text-lg lg:w-3/4">Unleash your digital potential with our expert design and development solutions. Elevate your online presence and make an impact that lasts.</div>
      </div>

      <div className="flex flex-col gap-24 lg:gap-60">
        <ServiceBlock
          outlineHeadingText="DESIGN"
          servicesObj={designServicesObj}
          serviceImage={designServiceImage}
          serviceDescription={designServiceDescription}
          blockNumber={1}
        />

        <ServiceBlock
          outlineHeadingText="WEB DEVELOPMENT"
          servicesObj={webDevelopmentServicesObj}
          serviceImage={webServiceImage}
          serviceDescription={webServiceDescription}
          blockNumber={2}
        />

        <ServiceBlock
          outlineHeadingText="APP DEVELOPMENT"
          servicesObj={appDevelopmentServicesObj}
          serviceImage={appServiceImage}
          serviceDescription={appServiceDescription}
          blockNumber={3}
        />

        <ServiceBlock
          outlineHeadingText="DIGITAL MARKETING"
          servicesObj={digitalMarketingServicesObj}
          serviceImage={digitalMarketingServiceImage}
          serviceDescription={digitalMarketingServiceDescription}
          blockNumber={4}
        />
      </div>
    </div>
  );
}
