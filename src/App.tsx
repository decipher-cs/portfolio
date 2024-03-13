import { PropsWithChildren } from 'react';

function App() {
    return (
        <div
            className={
                'min-w-screen relative block min-h-svh text-white ' +
                'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black '
            }
        >
            <div
                className="fixed bottom-4 w-screen"
                style={{
                    /* From https://css.glass */
                    background: 'rgba(255, 255, 255, 0)',
                    // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    // backdropFilter: 'blur(9.5px)',
                    // WebkitBackdropFilter: 'blur(9.5px)',
                }}
            >
                <nav className="absolute bottom-4 ml-[50%] -translate-x-1/2 rounded-xl border bg-customBlack px-10 py-3">
                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <Section>
                <h1 className="text-8xl">decipher</h1>
                <p> web developer</p>
                <p> javascript, typescript, react, node</p>
            </Section>
            <ProjectsSection />
            <Section>
                <h1 className="text-5xl">Get in touch</h1>
                <ul className="flex gap-6">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Email</li>
                </ul>
            </Section>
        </div>
    );
}

const Section = (props: PropsWithChildren) => {
    return (
        <section className="h-svh border-b-2 border-b-white">
            {props.children}
        </section>
    );
};

const ProjectsSection = () => {
    /* Don't nest components. This will cause avoidable re-renders... or at least use memo. */
    const Item = () => {
        return (
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    className="absolute inset-0 size-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-white">
                                How to position your furniture for positivity
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae dolores, possimus pariatur animi
                            temporibus nesciunt praesentium dolore sed nulla
                            ipsum eveniet corporis quidem, mollitia itaque minus
                            soluta, voluptates neque explicabo tempora nisi
                            culpa eius atque dignissimos. Molestias explicabo
                            corporis voluptatem?
                        </p>
                    </div>
                </div>
            </article>
        );
    };

    return (
        <section className="h-svh border-b-2 border-b-white">
            <h1 className="m-2 p-2 text-5xl">projects</h1>
            <section
                className="m-auto w-full"
                style={{
                    mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                }}
            >
                <div
                    className="m-[0_auto] flex min-h-[300px] w-[90%] items-center overflow-hidden border-2"
                    style={{
                        mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                        borderImage: 'linear-gradient(90deg, black, red) 1',
                    }}
                >
                    {Array(2)
                        .fill(null)
                        .map((v, i) => {
                            return (
                                <div className="flex animate-horizontalScroll py-6">
                                    <Item />
                                    <Item />
                                </div>
                            );
                        })}
                </div>
            </section>
        </section>
    );
};

export default App;
