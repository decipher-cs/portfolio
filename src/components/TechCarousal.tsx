export const TechCarousal = () => {
    const technologies = [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/640px-Typescript.svg.png",
            href: "",
            title: "Typescript",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
            href: "",
            title: "Javascript",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png",
            href: "",
            title: "Tailwind",
        },

        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/640px-Python_logo_51.svg.png",
            href: "",
            title: "Python",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Git_format.png/640px-Git_format.png",
            href: "",
            title: "Git",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            href: "",
            title: "React",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            href: "",
            title: "HTML 5",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817",
            href: "",
            title: "CSS",
        },
    ] satisfies { href: string; src: string; title: string }[]
    return (
        <section className="my-10 w-full" tabIndex={-1}>
            <div
                className="m-[0_auto] flex items-center overflow-hidden sm:w-full md:w-1/2 lg:w-1/2"
                style={{
                    mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
                }}
            >
                <div className="flex animate-horizontalScroll">
                    {[...technologies, ...technologies].map(
                        ({ title, href, src }, i) => (
                            <a
                                tabIndex={-1}
                                key={i}
                                className="size-20 p-5 lg:size-24"
                                title={title}
                                href={href}
                                target="_blank"
                            >
                                <img
                                    height="100%"
                                    className="object-contain"
                                    alt={title + " logo"}
                                    src={src}
                                />
                            </a>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
