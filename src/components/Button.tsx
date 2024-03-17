import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren) => {
    const { children } = props
    return (
        <button className="border-customBorder rounded-md border bg-customBlackDark px-8 py-3 hover:border-customRed">
            <span className="">{children}</span>
        </button>
    )
}
