"use client"
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {useCallback} from "react";
import {Engine} from "tsparticles-engine";
import portfolio from "@/app/config/portfolio.config";
import {particlesConfig} from "@/app/config/particles.config";
import Badge from "@/app/components/Badge";

export default function Home() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div>
            <main className="absolute flex flex-col min-h-screen lex-col">
                <div id="aboutPage" className="page flex flex-col min-h-screen items-center justify-center">
                    <div className="lg:w-1/2 p-10">
                        <p className="text-3xl mb-5 text-gray-300">Hi, my name is</p>
                        <p className="text-5xl mb-5">{portfolio.about.name}</p>
                        <p className="text-5xl mb-5 text-gray-500">{portfolio.about.title}</p>
                        <p className="text-3xl mb-5 text-gray-500">{portfolio.about.about}</p>
                        <div className="mb-10">
                            {(() => {
                                return portfolio.about.skills.map((item: string) => (
                                    <Badge key={item} text={item}/>
                                ));
                            })()}
                        </div>
                    </div>
                </div>
                <div id="educationPage" className="page flex flex-col h-screen items-center justify-center">
                    <div className="lg:w-1/2 p-10">
                        <p className="mb-10 text-5xl">My Education</p>
                        {(() => {
                            return portfolio.educations.map((item: Education) => (
                                <div key={item.name} className="mb-3">
                                    <p className="text-xl">{item.startDate + "-" + item.endDate}</p>
                                    <a className="text-3xl underline" href={item.link}>{item.name}</a>
                                    <p className="text-3xl text-gray-500">{item.desc}</p>
                                </div>
                            ));
                        })()}
                    </div>
                </div>
                <div id="experiencePage" className="page flex flex-col min-h-screen items-center justify-center">
                    <div className="lg:w-1/2 p-10">
                        <p className="mb-5 text-5xl">{"Where I've worked"}</p>
                        {(() => {
                            return portfolio.experience.map((item: Experience) => (
                                <div key={item.name} className="mb-3">
                                    <p className="text-xl">{item.startDate + "-" + item.endDate}</p>
                                    <a className="text-3xl underline" href={item.link}>{item.name}</a>
                                    <p className="text-3xl text-gray-500">{item.desc}</p>
                                </div>
                            ));
                        })()}
                    </div>
                </div>
                <div id="projectsPage" className="page flex flex-col h-screen items-center justify-center">
                    <div className="lg:w-1/2 p-10">
                        <p className="mb-5 text-5xl">{"What I've built"}</p>
                        {(() => {
                            return portfolio.projects.map((item: Project) => (
                                <div key={item.name} className="mb-3">
                                    <a className="text-3xl underline" href={item.link}>{item.name}</a>
                                    <p className="text-3xl text-gray-500">{item.desc}</p>
                                </div>
                            ));
                        })()}
                    </div>
                </div>
                <div id="CertificatesPage" className="page flex flex-col h-screen items-center justify-center">
                    <div className="lg:w-1/2 p-10">
                        <p className="mb-5 text-5xl">My Certificates</p>
                        {(() => {
                            return portfolio.certificates.map((item: Certificate) => (
                                <div key={item.name} className="mb-3">
                                    <p className="text-xl">{item.date}</p>
                                    <a className="text-3xl underline" href={item.link}>{item.name}</a>
                                    <p className="text-3xl text-gray-500">{item.desc}</p>
                                </div>
                            ));
                        })()}
                    </div>
                </div>
                <div id="contactPage" className="page flex flex-col h-screen items-center justify-center">
                    <div className="lg:w-1/2 p-10">
                        <p className="mb-5 text-5xl"></p>
                        <a href={`mailto:${portfolio.contact}`} className="text-5xl underline">Send me a message →</a>
                    </div>
                </div>
            </main>
            <Particles className="absolute" init={particlesInit} options={particlesConfig}/>
        </div>
    )
}
