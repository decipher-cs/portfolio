import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren & { fullWidth?: boolean }) => {
    const { children, fullWidth } = props
    return (
        <button
            className={
                "border border-border bg-secondary px-8 py-3 hover:border-accent "
            }
        >
            <span className="">{children}</span>
        </button>
    )
}
