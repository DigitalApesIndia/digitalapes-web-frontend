
export default function ServicesOverview() {
    return (
        <>
            <div className="w-full py-20 md:py-32 bg-slate-950 services-overview-main-container">
                <div className="container h-full flex flex-col items-center justify-center gap-16 md:gap-24">
                    <div className="text-lg md:text-2xl text-center text-white font-light">OUR SERVICES</div>

                    <div className="flex flex-col items-center gap-12 lg:gap-16">
                        <div className="flex flex-col items-center justify-center">
                            <ServiceHeading headingText="DESIGN" />
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative -top-4 sm:-top-7 md:-top-5 xl:-top-3">
                                <ServiceName serviceNameText="Graphics Design" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="UI/UX Design" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="Packaging Design" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <ServiceHeading headingText="WEB DEVELOPMENT" />
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative -top-4 sm:-top-7 md:-top-5 xl:-top-3">
                                <ServiceName serviceNameText="Custom Web Application" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="Business & Marekging Websites" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="E-Commerce" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <ServiceHeading headingText="APP DEVELOPMENT" />
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative -top-4 sm:-top-7 md:-top-5 xl:-top-3">
                                <ServiceName serviceNameText="Androind Apps" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="iOS Apps" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="Cross-Platform Apps" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <ServiceHeading headingText="DIGITAL MARKETING" />
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative -top-4 sm:-top-7 md:-top-5 xl:-top-3">
                                <ServiceName serviceNameText="social Media Ads" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="Google Ads" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="Search Engine Optimization" />
                                <ServiceNameDotDivider />
                                <ServiceName serviceNameText="Content Marketing" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export function ServiceHeading({ headingText }) {
    return <div className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl text-center font-bold outline-heading-services-overview tracking-wider text-slate-950">{headingText}</div>
}

function ServiceName({ serviceNameText }) {
    return <span className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white font-bold text-center">{serviceNameText}</span>
}

function ServiceNameDotDivider() {
    return <span className="hidden md:inline services-overview-dot-divider bg-white rounded"></span>
}
