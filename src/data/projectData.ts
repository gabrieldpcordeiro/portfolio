import { Project } from '../types/types'
import { getImageUrl } from '../utils/utils';
export const Projects: Project[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: getImageUrl('puppy.jpg'),
        technologies: ['React', 'TypeScript'],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Pellentesque ac enim a justo convallis fermentum.',
        imageUrl: getImageUrl('puppy.jpg'),
        technologies: ['JavaScript', 'HTML', 'CSS'],
        features: ['Feature 1', 'Feature 2'],
    },
    // Add more projects as needed
];
