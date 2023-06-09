# Project

This is my portfolio website built with React and TypeScript, showcasing my work and skills as a software engineer. The portfolio provides an overview of my projects, technical expertise, and contact information.

## Features

- **React**: The portfolio is developed using React, a popular JavaScript library for building user interfaces.
- **TypeScript**: TypeScript is used to add static typing to JavaScript, providing better code quality and tooling support.
- **Responsive Design**: The portfolio is designed to be responsive and adaptable to different screen sizes and devices.
- **Project Showcase**: The portfolio includes a section to showcase my projects, highlighting my technical skills and accomplishments.
- **Skills and Expertise**: The portfolio presents my technical skills and areas of expertise, providing a comprehensive overview of my capabilities.
- **Contact Information**: The portfolio includes my contact information, enabling potential clients or employers to get in touch easily.

## Installation

1. Clone the repository: `git clone https://github.com/gabrieldpcordeiro/portfolio.git`
2. Navigate to the project directory: `cd portfolio`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open the portfolio in your browser: `http://localhost:3000`

## Configuration

The portfolio can be easily configured to personalize the content and layout. Here are the main files to modify:

- **`src/data/projects.ts`**: Update this file to add or modify project information. Each project is represented as an object with properties like `title`, `description`, `technologies`, and `githubLink`.
- **`src/data/skills.ts`**: Modify this file to update the skills and areas of expertise. The skills are represented as an array of strings.
- **`src/components/Contact.tsx`**: Update this file to add your own contact information. Modify the fields like `email`, `phone`, and `website` with your preferred contact details.
- **`src/components/Footer.tsx`**: Customize the footer section by modifying this file. You can update the text and add your own links or information.

## Deployment

To deploy the portfolio, follow these steps:

1. Build the optimized version of the portfolio: `npm run build`
2. Deploy the contents of the `build` folder to a web server or hosting platform of your choice.

## Credits

This portfolio is inspired by modern web development practices and utilizes the following technologies:

- React: [https://reactjs.org](https://reactjs.org)
- TypeScript: [https://www.typescriptlang.org](https://www.typescriptlang.org)

## License

This portfolio is open-source and released under the [MIT License](LICENSE). Feel free to modify and customize it to suit your needs.
