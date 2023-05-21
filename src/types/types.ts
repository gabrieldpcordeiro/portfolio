export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    features: string[];
}

// workExperience.ts

export interface workExperiences {
    id: number;
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];

}
