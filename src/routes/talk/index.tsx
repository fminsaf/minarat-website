import { createFileRoute, Link } from "@tanstack/react-router";
import {
	LuLightbulb,
	LuMessageCircle,
	LuRocket,
	LuWrench,
} from "react-icons/lu";

export const Route = createFileRoute("/talk/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center gap-10">
			<h2 className="text-2xl font-bold">
				What would you like to talk about ?
			</h2>

			<div className="grid gap-3 grid-cols-2">
				<Link
					to="/talk/new-project"
					className="group flex flex-col items-center justify-center gap-2 size-44 rounded-2xl p-3 text-center border-2 border-taupe-800 hover:bg-taupe-800 hover:text-taupe-200 hover:scale-105 hover:-translate-y-2 duration-300"
				>
					<LuRocket size={60} className="group-hover:hidden" />
					<span className="font-bold">Start a project</span>
					<span className="text-sm hidden group-hover:inline">
						I have a project I'd like Minarat to build.
					</span>
				</Link>
				<Link
					to="/talk/improve-something"
					className="group flex flex-col items-center justify-center gap-2 size-44 rounded-2xl p-3 text-center border-2 border-taupe-800 hover:bg-taupe-800 hover:text-taupe-200 hover:scale-105 hover:-translate-y-2 duration-300"
				>
					<LuWrench size={60} className="group-hover:hidden" />
					<span className="font-bold">Improve something</span>
					<span className="text-sm hidden group-hover:inline">
						I have an existing website, app, or product that needs work.
					</span>
				</Link>
				<Link
					to="/talk/discuss-idea"
					className="group flex flex-col items-center justify-center gap-2 size-44 rounded-2xl p-3 text-center border-2 border-taupe-800 hover:bg-taupe-800 hover:text-taupe-200 hover:scale-105 hover:-translate-y-2 duration-300"
				>
					<LuLightbulb size={60} className="group-hover:hidden" />
					<span className="font-bold">Discuss an idea</span>
					<span className="text-sm hidden group-hover:inline">
						I have an idea and want to explore what's possible.
					</span>
				</Link>
				<Link
					to="/talk/something-else"
					className="group flex flex-col items-center justify-center gap-2 size-44 rounded-2xl p-3 text-center border-2 border-taupe-800 hover:bg-taupe-800 hover:text-taupe-200 hover:scale-105 hover:-translate-y-2 duration-300"
				>
					<LuMessageCircle size={60} className="group-hover:hidden" />
					<span className="font-bold">Something else</span>
					<span className="text-sm hidden group-hover:inline">
						I'd like to discuss something different with the team.
					</span>
				</Link>
			</div>
		</main>
	);
}
