"use client"

import portfolio from "@/app/config/portfolio.config";
import TextSecondary from "@/app/components/Text/TextSecondary";
import TextPrimary from "@/app/components/Text/TextPrimary";
import Badge from "@/app/components/Badge/Badge";
import Link from "@/app/components/Link/Link";
import {Page} from "@/app/components/Page/Page";
import MenuItem from "@/app/components/MenuItem/MenuItem";
import {isEmail, isURL} from "@/app/utils/Utils";

export default function Portfolio() {

    const isAboutAdded = Boolean(portfolio?.about);
    const isEducationAdded = Boolean(portfolio?.education);
    const isExperienceAdded = Boolean(portfolio?.experience);
    const isProjectsAdded = Boolean(portfolio?.projects);
    const isCertificatesAdded = Boolean(portfolio?.certificates);
    const isContactAdded = Boolean(portfolio?.contact);

    const onContactClick = () => {
        const contact = portfolio?.contact?.contact ?? "";
        if (isEmail(contact)) {
            window.location.href = `mailto:${contact}`;
        }
        if (isURL(contact)) {
            window.open(contact, '_blank');
        }
    }

    return (
        <Page className={"flex flex-col justify-center items-center px-5 sm:px-10"}>
            <div className="flex flex-col min-h-screen w-full lg:w-1/2">
                {isAboutAdded &&
                    <div id="about" className="flex flex-col min-h-screen justify-center">
                        <div id="navigation" className="flex flex-row justify-between items-center mb-14">
                            <TextPrimary
                                className={"text-xl font-bold hidden md:block"}>{"Portfolio"}</TextPrimary>
                            <div className="hidden sm:visible sm:flex">
                                {isExperienceAdded && <MenuItem onClick={() => {
                                    window.location.hash = "";
                                    window.location.hash = "experience";
                                }} text={"Experience"}/>}
                                {isProjectsAdded && <MenuItem onClick={() => {
                                    window.location.hash = "";
                                    window.location.hash = "projects";
                                }} text={"Projects"}/>}
                                {isEducationAdded && <MenuItem onClick={() => {
                                    window.location.hash = "";
                                    window.location.hash = "education";
                                }} text={"Education"}/>}
                                {isContactAdded && <MenuItem onClick={() => {
                                    window.location.hash = "";
                                    window.location.hash = "contact";
                                }} text={"Contact"}/>}
                            </div>
                        </div>
                        <div className={"flex flex-row mb-5 items-center "}>
                            <div>
                                <TextSecondary className="text-2xl sm:text-3xl mb-3">{"Hi, my name is"}</TextSecondary>
                                <TextPrimary className="text-4xl sm:text-5xl mb-3">{portfolio.about?.name}</TextPrimary>
                                <TextSecondary className="text-2xl sm:text-3xl mb-3">{portfolio.about?.title}</TextSecondary>
                            </div>
                            {portfolio.about?.photo && <img className={"rounded-full w-20 h-20 sm:w-32 sm:h-32 ml-3 sm:ml-5 border-4 sm:border-8 border-accent"} src={portfolio.about?.photo}/>}
                        </div>
                        <TextSecondary
                            className="text-2xl sm:text-3xl mb-5">{portfolio.about?.about}</TextSecondary>
                        <div className="mb-10">
                            {(() => {
                                return portfolio.about?.skills?.split(",").map((item: string) => (
                                    <Badge key={item} text={item}/>
                                ));
                            })()}
                        </div>
                    </div>}
                {isExperienceAdded &&
                    <div id="experience" className="flex flex-col min-h-screen justify-center py-32">
                        <TextPrimary className="text-4xl sm:text-5xl mb-5">{"Where I've worked"}</TextPrimary>
                        {(() => {
                            return portfolio.experience?.map((item: Experience) => (
                                <div key={item.name} className="mb-3">
                                    <TextSecondary
                                        className="text-md sm:text-xl">{item.startDate + "-" + item.endDate}</TextSecondary>
                                    <Link className="text-2xl sm:text-3xl" href={item.link}>{item.name}</Link>
                                    <TextSecondary className="text-2xl sm:text-3xl mt-3">{item.desc}</TextSecondary>
                                </div>
                            ));
                        })()}
                    </div>}
                {isProjectsAdded &&
                    <div id="projects" className="flex flex-col min-h-screen justify-center py-32">
                        <TextPrimary className="text-4xl sm:text-5xl mb-5">{"Personal projects"}</TextPrimary>
                        {(() => {
                            return portfolio.projects?.map((item: Project) => (
                                <div key={item.name} className="mb-3">
                                    <Link className="text-2xl sm:text-3xl" href={item.link}>{item.name}</Link>
                                    <TextSecondary className="text-2xl sm:text-3xl mt-3">{item.desc}</TextSecondary>
                                </div>
                            ));
                        })()}
                    </div>}
                {isEducationAdded &&
                    <div id="education" className="flex flex-col min-h-screen justify-center py-32">
                        <TextPrimary className="text-4xl sm:text-5xl mb-5">{"My Education"}</TextPrimary>
                        {(() => {
                            return portfolio.education?.map((item: Education) => (
                                <div className="mb-3" key={item.name}>
                                    <TextSecondary
                                        className="text-md sm:text-xl">{item.startDate + "-" + item.endDate}</TextSecondary>
                                    <Link className="text-2xl sm:text-3xl" href={item.link}>{item.name}</Link>
                                    <TextSecondary className="text-2xl sm:text-3xl mt-3">{item.desc}</TextSecondary>
                                </div>
                            ));
                        })()}
                    </div>}
                {isCertificatesAdded &&
                    <div id="certificates" className="flex flex-col min-h-screen justify-center py-32">
                        <TextPrimary className="text-4xl sm:text-5xl mb-5">My Certificates</TextPrimary>
                        {(() => {
                            return portfolio.certificates?.map((item: Certificate) => (
                                <div key={item.name} className="mb-3">
                                    <TextSecondary className="text-md sm:text-xl">{item.date}</TextSecondary>
                                    <Link className="text-2xl sm:text-3xl" href={item.link}>{item.name}</Link>
                                    <TextSecondary className="text-2xl sm:text-3xl mt-3">{item.desc}</TextSecondary>
                                </div>
                            ));
                        })()}
                    </div>}
                {isContactAdded &&
                    <div id="contact" className="flex flex-col min-h-screen justify-center py-32">
                        <TextSecondary
                            className="mb-5 text-2xl sm:text-3xl">{"Feel free to reach me, I'm open for collaboration"}</TextSecondary>
                        <Link onClick={onContactClick} className="text-4xl sm:text-5xl mt-3">Send me a message →</Link>
                    </div>}
            </div>
        </Page>
    )
}
