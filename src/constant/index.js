import threejs from '../assets/techpng/threejs.svg'
import javascript from '../assets/techpng/javascript.png'
import typescript from '../assets/techpng/typescript.png'
import html from '../assets/techpng/html.png'
import css from '../assets/techpng/css.png'
import reactjs from '../assets/techpng/reactjs.png'
import tailwind from '../assets/techpng/tailwind.png'
import nodejs from '../assets/techpng/nodejs.png'
import mongodb from '../assets/techpng/mongodb.png'
import git from '../assets/techpng/git.png'
import { Spotify } from 'react-bootstrap-icons'

export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];

export const Project = [
    {
      name: "Spotify-Clone",
      description:
        " Dive into a world of interactive learning materials, from engaging videos to gamified quizzes. Tailoring education to your strengths and dreams. Enter immersive virtual classrooms for fun collaboration, while progress tracking ensure continuous growth.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },{
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: Spotify,
      source_code_link: "https://github.com/ANSHHVARMA/Spotify-Clone",
      live_link : "https://spotify-clone-dun-ten.vercel.app/",
    }
  ]