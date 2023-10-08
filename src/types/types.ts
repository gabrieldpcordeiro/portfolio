export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    features: string[];
    app: string[];
}

// workExperience.ts

export interface About {
    bio: string;
    imageUrl: string;
    skills: string[];

}

export interface ImageProps {
    name: string;
    alt: string;
}
