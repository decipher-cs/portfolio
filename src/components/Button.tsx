import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren & { fullWidth?: boolean }) => {
    const { children, fullWidth } = props
    return (
        <button
            className={
                "border border-border bg-secondary px-3 py-2 hover:border-accent md:px-8 md:py-3 "
            }
            type="button"
        >
            <span className="">{children}</span>
        </button>
    )
}
