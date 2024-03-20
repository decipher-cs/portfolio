import { Button } from "./Button"

export const Navbar = () => (
    <nav className="fixed bottom-6 z-50 ml-[50%] -translate-x-1/2 ">
        <ul className="flex content-center items-center gap-6 rounded-xl border border-border  bg-secondary p-4">
            <li>
                <a href={"#" + "home"}>
                    <Button>Home</Button>
                </a>
            </li>
            <li>
                <a href={"#" + "projects"}>
                    <Button>Projects</Button>
                </a>
            </li>
            <li>
                <a href={"#" + "contact"}>
                    <Button>Contact</Button>
                </a>
            </li>
        </ul>
    </nav>
)
