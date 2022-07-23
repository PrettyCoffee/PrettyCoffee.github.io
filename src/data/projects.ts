import { getTheme } from "../components"
import avatar from "./media/avatar.webp"
import cookie from "./media/cookie.webp"
import fluidity from "./media/fluidity.svg"
import gnrc from "./media/gnrc.webp"
import goAudio from "./media/go-audio.webp"
import kitty from "./media/kitty.webp"
import minigue from "./media/minigue.webp"
import stpg from "./media/react-startpage.svg"
import smug from "./media/smug.webp"

const { color } = getTheme()

export type Project = {
  title: string
  description: string
  image: string
  repoUrl: string
  demoUrl?: string
  docsUrl?: string
}

/*
 _______________
< /r/startpages >
 ---------------
  \
  \ ^__^
    (oo)\________
    (__)\        )\/\
        ||----W ||
        ||      ||
*/

type Year = { year: number; color: string; projects: Project[] }

export const projects: Year[] = [
  {
    year: 2022,
    color: color.orange,
    projects: [
      {
        title: "[WIP] - Cookie Credit Card",
        description:
          "My first fullstack web app that helps keeping track of your cookie debts. For a colleague to whom I owe some cookies. A lot actually.",
        image: cookie,
        repoUrl: "https://github.com/PrettyCoffee/cookie-credit-card",
      },
      {
        title: "MiniguePT (Frontend)",
        description:
          "Web chat client for MiniguePT, a chatbot created by a lovely friend <3 \nThis is also my first SolidJs project.",
        image: minigue,
        demoUrl: "https://chatty.rhostruct.de/",
        repoUrl: "https://github.com/Eeeeelias/miniguept-chat",
      },
      {
        title: "Yet another generic startpage",
        description:
          "The fourth startpage in the list, demonstrating the usage of the @startpage library.",
        image: gnrc,
        repoUrl:
          "https://github.com/PrettyCoffee/yet-another-generic-startpage",
        demoUrl: "https://prettycoffee.github.io/yet-another-generic-startpage",
      },
    ],
  },
  {
    year: 2021,
    color: color.red,
    projects: [
      {
        title: "@startpage",
        description:
          "A library that provides tools and components to facilitate the process of creating a browser start page.",
        image: stpg,
        repoUrl: "https://github.com/PrettyCoffee/startpage",
        docsUrl: "https://prettycoffee.github.io/startpage/",
      },
      {
        title: "Portfolio v3",
        description:
          "The latest version of my portfolio. You are currently looking at it.",
        image: avatar,
        repoUrl: "https://github.com/PrettyCoffee/PrettyCoffee.github.io",
      },
      {
        title: "Fluidity",
        description:
          "My third browser startpage featuring a unique design and many options for customizability such as appearance, bookmarks and keyword forwarding.",
        image: fluidity,
        repoUrl: "https://github.com/PrettyCoffee/fluidity",
        demoUrl: "https://prettycoffee.github.io/fluidity/",
      },
    ],
  },
  {
    year: 2020,
    color: color.purple,
    projects: [
      {
        title: "B/W Kitty",
        description:
          "My second browser startpage, featuring bookmarks, a searchbar and color theming.",
        image: kitty,
        repoUrl: "https://github.com/PrettyCoffee/b-w-kitty",
        demoUrl: "https://prettycoffee.github.io/b-w-kitty/",
      },
      {
        title: "Raspberry Pi Audio-API",
        description:
          "A go library which allows to programmatically time and mix the playback of sound files.",
        image: goAudio,
        repoUrl: "https://gitlab.com/PrettyCoffee/raspberry-pi-audio-api",
      },
    ],
  },
  {
    year: 2019,
    color: color.blue,
    projects: [
      {
        title: "smugLoader",
        description: 'A browser startpage based on the "smug dancin" meme.',
        image: smug,
        repoUrl: "https://gitlab.com/PrettyCoffee/smugloader",
      },
    ],
  },
]
