import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren & { fullWidth?: boolean }) => {
    const { children, fullWidth } = props
    return (
        <button
            className={
                "border border-customBorder bg-customBlackDark px-8 py-3 hover:border-customRed "
            }
        >
            <span className="">{children}</span>
        </button>
    )
}
