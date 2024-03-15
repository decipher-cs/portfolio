import { PropsWithChildren } from "react"

export const Tooltip = (
    props: {
        direction: "top" | "left" | "right" | "bottom"
        label: string
    } & PropsWithChildren
) => {
    const { direction, label, children } = props
    let tooltip = null

    switch (direction) {
        case "top":
            tooltip = (
                <div className="group relative">
                    <span>{children}</span>
                    <div className="absolute -top-2 left-1/2 hidden -translate-x-1/2 -translate-y-full rounded-md bg-zinc-800 p-2 group-hover:flex">
                        <span className="whitespace-nowrap text-zinc-400">
                            {label}
                        </span>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-inherit p-1"></div>
                    </div>
                </div>
            )
            break
        case "left":
            tooltip = (
                <div className="group relative">
                    <span>{children}</span>
                    <div className="absolute -left-2 top-1/2 hidden -translate-x-full -translate-y-1/2 rounded-md bg-zinc-800 p-2 group-hover:flex">
                        <span className="whitespace-nowrap text-zinc-400">
                            {label}
                        </span>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 bg-inherit p-1"></div>
                    </div>
                </div>
            )
            break
        case "right":
            tooltip = (
                <div className="group relative">
                    <span>{children}</span>
                    <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 translate-x-full rounded-md bg-zinc-800 p-2 group-hover:flex">
                        <span className="whitespace-nowrap text-zinc-400">
                            {label}
                        </span>
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-inherit p-1"></div>
                    </div>
                </div>
            )
            break
        case "bottom":
            tooltip = (
                <div className="group relative">
                    <div className="group relative" />
                    <span>{children}</span>
                    <div className="absolute -bottom-2 left-1/2 hidden -translate-x-1/2 translate-y-full rounded-md bg-zinc-800 p-2 group-hover:flex">
                        <span className="whitespace-nowrap text-zinc-400">
                            {label}
                        </span>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-inherit p-1"></div>
                    </div>
                </div>
            )
            break
        default:
            break
    }

    return <>{tooltip}</>
}
