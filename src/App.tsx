import { TechCarousal } from "./components/TechCarousal"
import { Button } from "./components/Button"
import githubLogoSvg from "./assets/github-mark-white.svg"
import emailSvg from "./assets/email.svg"
import kriptpharmaThumbnail from "./assets/kriptpharma.netlify.app_.png"
import pathfinderThumbnail from "./assets/pathfinder thumbnail.png"

function App() {
    return (
        <>
            <div className={"px-4 pb-48 pt-11 text-white"}>
                <h1 className="text-center font-azonix text-5xl md:text-6xl ">
                    De_cipher
                </h1>

                <span className="relative my-9 flex justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-customRed to-transparent opacity-75"></div>

                    <span className="z-10 px-6 text-center font-azonix text-sm font-medium md:text-lg">
                        Full Stack Web Developer
                    </span>
                </span>

                <TechCarousal />
                <Projects />
            </div>
            <ContactSection />
        </>
    )
}

const projects = [
    {
        thumbnailUrl: pathfinderThumbnail,
        name: "Pathfinder Visualizer",
        technologies: ["javascript", "typescript", "react"],
        features: ["virtualization", "web workers"],
        appUrl: "https://tranquil-cat-414e66.netlify.app/",
        sourceCode:
            "https://github.com/decipher-cs/Trailblazer-Pathfinder-Visualizer",
        description:
            "Visualizer and maze solver. Supports multiple algorithms like Astar, BFS, DFS, and Dijkstra",
    },
    {
        thumbnailUrl:
            "https://github.com/decipher-cs/cipher-connect/raw/main/assets/design_source.jpg",
        name: "Multimedia Messaging App",
        technologies: [
            "javascript",
            "typescript",
            "react",
            "node",
            "express",
            "sockets",
            "MYSQL",
            "Prisma",
        ],
        features: ["sockets"],
        appUrl: "https://cipher-connect.onrender.com/",
        sourceCode: "https://github.com/decipher-cs/cipher-connect/",
        description: "A feature rich messaging app",
    },
    {
        thumbnailUrl: kriptpharmaThumbnail,
        name: "Kriptpharma",
        technologies: ["javascript", "typescript", "react"],
        features: [],
        appUrl: "https://kriptpharma.netlify.app/",
        sourceCode: "https://github.com/decipher-cs/kriptpharma",
        description: "Catalog website for a pharmaceutical company",
    },
    {
        thumbnailUrl:
            "https://res.cloudinary.com/dz209s6jk/image/upload/v1554827486/Challenges/jfrcfmcisi1xiwm4rl1s.jpg",
        name: "Restful Countries",
        technologies: ["Vanilla JS", "REST API"],
        features: [],
        appUrl: "https://benevolent-wisp-773a15.netlify.app/",
        sourceCode: "https://github.com/decipher-cs/Restful-Countries",
        description:
            "Frontend website displaying statistics for more than 220 countries using the official rest countries API",
    },
    {
        thumbnailUrl: "",
        name: "Stateful Task Tracker",
        technologies: ["React", "MUI", "MYSQL", "Node", "Express", "Docker"],
        features: [],
        appUrl: "https://golden-liger-9ba371.netlify.app/",
        sourceCode: "https://github.com/decipher-cs/React-Task-Tracker",
        description:
            "A fullstack stateful paginated task tracker to keep track of items",
    },
] satisfies {
    thumbnailUrl: string
    name: string
    technologies: string[]
    appUrl: string
    sourceCode: string
    features: string[]
    description: string
}[]

const Projects = () => {
    return (
        <section className="grid justify-center gap-10">
            {projects.map(
                ({
                    technologies,
                    name,
                    description,
                    features,
                    sourceCode,
                    appUrl,
                    thumbnailUrl,
                }) => (
                    <article
                        key={name}
                        className="grid grid-cols-1 gap-8 rounded-md border border-customBorder bg-customBlackDark px-4 py-10 sm:max-w-screen-sm sm:px-6  md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-2 lg:gap-16 lg:px-8"
                    >
                        <div className="relative h-64 overflow-hidden rounded-lg border border-customBorder md:h-80 lg:order-first lg:h-96">
                            <img
                                alt={name + " thumbnail"}
                                src={thumbnailUrl}
                                className="absolute inset-0 size-full object-cover"
                            />
                        </div>

                        <div className="grid gap-5 py-6">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                {name}
                            </h2>

                            <p className="text-xl leading-8 text-gray-200">
                                {description}
                            </p>

                            <div className="my-3 flex flex-wrap items-center gap-3">
                                {technologies.map((val, i) => (
                                    <span
                                        key={i}
                                        className="whitespace-nowrap rounded-full bg-customBlack px-5 py-2 text-sm text-gray-200"
                                    >
                                        {val.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 flex w-full gap-4">
                                <a
                                    href={appUrl}
                                    target="_blank"
                                    className="inline-block"
                                >
                                    <Button>Demo</Button>
                                </a>
                                <a
                                    href={sourceCode}
                                    target="_blank"
                                    className="inline-block"
                                >
                                    <Button>Source Code</Button>
                                </a>
                            </div>
                        </div>
                    </article>
                )
            )}
        </section>
    )
}

const ContactSection = () => {
    const contacts = [
        {
            logoUrl: githubLogoSvg,
            account: "github",
            href: "https://www.github.com/decipher-cs",
            handle: "decipher-cs",
        },
        {
            logoUrl:
                "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",

            account: "twitter",
            href: "https://twitter.com/de_cipher0",
            handle: "decipher-cs",
        },
        {
            logoUrl: emailSvg,
            account: "email",
            href: "mailto:7h6ms082@duck.com",
            handle: "7h6ms082@duck.com",
        },
    ] satisfies {
        logoUrl: string
        account: string
        href: string
        handle: string
    }[]
    return (
        <article className="fixed bottom-2 right-4 w-fit rounded-3xl md:top-2">
            <ul className="grid gap-3 md:flex">
                {contacts.map(({ href, handle, account, logoUrl }) => (
                    <li key={account}>
                        <a
                            href={href}
                            className="block rounded-full border border-customBorder bg-customBlackDark  p-3 hover:border-customRed"
                            title={account}
                            target="_blank"
                        >
                            <img
                                src={logoUrl}
                                alt={account}
                                className="size-6 md:size-8"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default App
