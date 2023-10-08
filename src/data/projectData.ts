import { Project } from '../types/types'

export const Projects: Project[] = [
    {
        id: 1,
        title: 'Protospace',
        description: 'Accelerate laboratory research workflow in post-secondary institutions',
        imageUrl: 'protospace_thumbnail.png',
        technologies: ['React', 'Javascript', 'MySQL', 'Express.js', 'SASS'],
        features: ['Monitor experiment progress', 'Dynamic Protocols', ' Scientific components', 'Export results'],
        app: ['WEB']
    },
    {
        id: 2,
        title: 'TradeUp',
        description: 'Learn to trade with paper money in real-time market data',
        imageUrl: 'tradeup_thumbnail.png',
        technologies: ['React Native', 'Expo', 'mongoDB', 'Express.js', 'AWS EC2', 'Firebase'],
        features: ['Buy/Sell Crypto', 'Notifications', 'Tutorials', 'Leaderboard', 'User Dashboard'],
        app: ['WEB']
    },
    // {
    //     id: 3,
    //     title: 'Project 3',
    //     description: 'Pellentesque ac enim a justo convallis fermentum.',
    //     imageUrl: 'puppy.jpg',
    //     technologies: ['JavaScript', 'HTML', 'CSS'],
    //     features: ['Feature 1', 'Feature 2'],
    //     app: ['MOBILE']
    // },
    // {
    //     id: 4,
    //     title: 'Project 4',
    //     description: 'Pellentesque ac enim a justo convallis fermentum.',
    //     imageUrl: 'puppy.jpg',
    //     technologies: ['JavaScript', 'HTML', 'CSS'],
    //     features: ['Feature 1', 'Feature 2'],
    //     app: ['WEB']
    // },
    // {
    //     id: 5,
    //     title: 'Project 5',
    //     description: 'Pellentesque ac enim a justo convallis fermentum.',
    //     imageUrl: 'puppy.jpg',
    //     technologies: ['JavaScript', 'HTML', 'CSS'],
    //     features: ['Feature 1', 'Feature 2'],
    //     app: ['WEB']
    // },
    // Add more projects as needed
];
