# [Apple iPhone 15 Pro website clone](https://iphone-clone-ltnt3qbeh-renaldas-bendikas-projects.vercel.app/)

![Screenshot (299)](https://github.com/user-attachments/assets/827e6e32-3497-46b1-bfcf-a8e764204651)

## Description

I developed an exact replica of the Apple website where they sell the iPhone 15 Pro and iPhone 15 Pro Max. *This is not MY own design or website* just a clone of Apple's design and they own all the rights.
The website's only purpose is to showcase my ability to replicate websites and be used on my portfolio to display my skills of recreating a design.
This website also taught me how to use some new technologies and was a great way to learn these such as setting up Sentry for receiving user metrics and being notified of any errors from users in real time.
I also learned how to implement three.js into my projects and the vast amount of versatility available.
Finally I discovered GSAP to simplify the use of Animations inside of React projects.

## Getting Started
To get started, first I set up my project using Vite. To learn how to start a Vite project visit : [Vite](https://vitejs.dev/guide/)
Afterwards I installed my dependencies for GSAP and Three.js.
[GSAP](https://gsap.com/docs/v3/Installation?tab=npm&module=esm&method=private+registry&tier=free&club=false&require=false&trial=true) | [Three.js](https://threejs.org/docs/#manual/en/introduction/Installation).

## Key Features
Animations using GSAP and delays set within to add seamless appearance of text and images.
3D iPhone Model is rendered in multiple Colors and 2 different sizes. 
The model can be manipulated and spun around using the mouse of finger on mobile/ipads.
A video carousel that plays when scrolled to using a Scroll Trigger which needs to be imported. Functionality to pause and play video at any time and be shown the video timeline.
A fully responsive design for all devices.

### Tech Stack:
React.js: Library used to build the User Interface.
Three.js: To render 3D models of the iPhone.
React Three Fiber: To integrate Three.js with React.[Learn about React three fiber](https://github.com/pmndrs/react-three-fiber)
React Three Drei: A helper library for React Three Fiber.[Learn about React three drei](https://github.com/pmndrs/drei)
GSAP: A faster and easier way to use animations within React.
Vite: For lightning fast development and build.
Tailwind CSS: For easy and quick styling.
Vercel: For deployment.
Github: For hosting the code base.

#### Vercel
To host on vercel simply make sure your project is pushed to github.
Check your package.json file for the correct script to run for the deployment build such as.. npm run build
On vercel, create a new project.
Select your repository from Github after linking your account to vercel.
Enter your root directory, the rest should get autofilled in.
And finally deploy.
