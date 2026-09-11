import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex-1 flex flex-col items-center justify-center gap-10 md:gap-20">
			<h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-widest animate-appear-from-bottom">
				[ Minarat ] .
			</h1>

			<div className="space-y-5 animate-appear-from-top">
				<h2 className="text-xl text-center lg:text-3xl font-bold">
					Elevating Businesses with Scalable Web Systems.
				</h2>

				<p className="mx-auto max-w-xl text-justify text-taupe-600">
					At Minarat, we build fast, scalable, and beautifully engineered user
					friendly web applications tailored to turn complex business needs into
					seamless digital experiences.
				</p>
			</div>

			<div className="flex gap-3 items-center justify-center">
				<Link
					to="/projects"
					className="px-3 py-2 border-2 hover:bg-taupe-700 hover:text-taupe-100 duration-300"
				>
					Explore selected projects
				</Link>
				<Link
					to="/book"
					className="px-3 py-2 border-2 bg-taupe-900 text-taupe-100 hover:scale-110 duration-300"
				>
					Let's talk
				</Link>
			</div>
		</main>
	);
}
