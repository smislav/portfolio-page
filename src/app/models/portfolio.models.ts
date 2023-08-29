interface About {
    name: string;
    title: string;
    about: string;
    skills: Array<string>;
}

interface Education {
    startDate: string;
    endDate: string;
    name: string;
    desc: string;
    link: string;
}

interface Experience {
    startDate: string;
    endDate: string;
    name: string;
    desc: string;
    link: string;
}

interface Project {
    name: string;
    desc: string;
    link: string;
}

interface Certificate {
    date: string;
    name: string;
    desc: string;
    link: string;
}

interface Profile {
    about: About;
    educations: Array<Education>;
    experience: Array<Experience>;
    projects: Array<Project>;
    certificates: Array<Certificate>;
    languages?: Array<string>;
    contact: string;
}
