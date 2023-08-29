interface About {
    name: string;
    photo?: string;
    title: string;
    about: string;
    skills: string;
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

interface Contact {
    contact: string;
}

interface Portfolio {
    about: About | null;
    education: Array<Education> | null;
    experience: Array<Experience> | null;
    projects: Array<Project> | null;
    certificates: Array<Certificate> | null;
    contact: Contact | null;
}
