import allianceCreditThumbnail from '../assets/images/alliance_credit_thumbnail.jpg'
import vibrantThumbnail from '../assets/images/vibrant_thumbnail.jpg'


let projects = {
    allianceCredit : {
        projectTitle: "Alliance Credit - Credit Bureau",
        projectDescription: "Alliance credit is almong the leading credit information providing bureau in Quebec, Canada. They help business to take informed and data driven decisions which helps them to reduce any potential business risk. We have developed their web-application from the ground up and has been their trusted digital partner from the last 2 Years ."
    },
    vibrant : {
        projectTitle: "VIBRANT - INJECT PERSONALITY INTO YOUR LIVING SPACE",
        projectDescription: "Vibrant is an e-commerce platform from where customers can buy personalized wall arts, a wide range of predesigned wall arts and more."
    } 
}


export default function ProjectsSection() {
    return (
        <>
            <div className="w-full py-20 md:py-32 bg-white" id='projects-section'>
                <div className="container flex flex-col items-center gap-16 md:gap-24">
                    <div className="text-lg md:text-2xl text-slate-700 font-light">RECENT PROJECTS</div>

                    <div className="flex flex-col w-full items-center gap-12 md:gap-24 lg:gap-28">
                        <Project thumbnailSide="left" thumbnail={allianceCreditThumbnail} projectContent={projects.allianceCredit} />
                        <Project thumbnailSide="right" thumbnail={vibrantThumbnail} projectContent={projects.vibrant} />
                    </div>
                </div>
            </div>
        </>
    )
}

function Project({ thumbnailSide, thumbnail, projectContent }) {

    return (
        <>
            <div className = {`flex gap-4 w-full flex-col  ${thumbnailSide == "right" ? "md:flex-row-reverse" : "md:flex-row" }`}>
                <ProjectThumbnail thumbnail={thumbnail} />
                <ProjectContent content = {projectContent} />
            </div>
        </>
    )

}

function ProjectThumbnail({ thumbnail }) {
    return <div className="rounded-3xl border-slate-100 border aspect-[3/2] w-full md:w-1/2 overflow-hidden relative">
        <img src={thumbnail} className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="Projects Thumbnail" />
    </div>
}

function ProjectContent({content}) {
    return (
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-4 lg:px-14">
            {/* Project Title */}
            <div className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-2 lg:mb-4 leading-normal">{content.projectTitle}</div>

            {/* Project Description */}
            <div className="text-sm lg:text-base text-slate-700 mb-4 lg:mb-6">{content.projectDescription}</div>

        </div>
    )
}
