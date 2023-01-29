type ProjectDetails = {
  description: string
  imagePath: string
  name: string
  projectLink: string
}

export const projectsDetails: ProjectDetails[] = [
  {
    name: 'Tickerdex',
    imagePath: '/Tickerdex/banner.jpg',
    description:
      "Tool for in-depth stock analysis I'm currently working on. It's far from finished but I believe it will be truly useful and easy to understand even for beginners.",
    projectLink: '/projects/tickerdex',
  },
  {
    name: 'Cutest Pokémon',
    imagePath: '/CutestMon/banner.jpg',
    description:
      'Fun little app where everyone can choose from 2 Pokémons and decide which one is more cute. Results are stored in PlanetScale cloud mySQL database using Prisma ORM.',
    projectLink: '/projects/cutest-mon',
  },
  {
    name: 'ServiceNow Incidents',
    imagePath: '/SNIncident/banner.jpg',
    description:
      'Small single page app I built to show on our work team meeting and present basics of React. I also wanted to test Next.js new /app directory and React server components.',
    projectLink: '/projects/sn-incident',
  },
  {
    name: 'Jumpy Knight',
    imagePath: '/JumpyKnight/banner.jpg',
    description:
      'Simple game written in Python using pygame library where you play as a knight that jumps to avoid monsters.',
    projectLink: '/projects/jumpy-knight',
  },
  {
    name: 'Guess the Hex',
    imagePath: '/GuessTheHex/banner.jpg',
    description:
      'Another single page app where you can test how good you are at guessing which color is represented by displayed hex code.',
    projectLink: '/projects/guess-the-hex',
  },
  {
    name: 'My Portfolio',
    imagePath: '/Portfolio/banner.jpg',
    description:
      'This website you are currently browsing! 🔥 I hope you like it.',
    projectLink: '/projects/portfolio',
  },
]
