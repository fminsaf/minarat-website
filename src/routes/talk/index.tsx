import { createFileRoute, Link, linkOptions } from "@tanstack/react-router";
import {
	LuLightbulb,
	LuMessageCircle,
	LuRocket,
	LuWrench,
} from "react-icons/lu";

export const Route = createFileRoute("/talk/")({
	component: RouteComponent,
});

const options = linkOptions([
	{
		to: "/talk/new-project",
		option: "Start a Project",
		desc: "I have a project I'd like Minarat to build",
		Icon: LuRocket,
	},
	{
		to: "/talk/new-project",
		option: "Start a Project",
		desc: "I have a project I'd like Minarat to build",
		Icon: LuWrench,
	},
	{
		to: "/talk/new-project",
		option: "Start a Project",
		desc: "I have a project I'd like Minarat to build",
		Icon: LuLightbulb,
	},
	{
		to: "/talk/new-project",
		option: "Start a Project",
		desc: "I have a project I'd like Minarat to build",
		Icon: LuMessageCircle,
	},
]);

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center gap-10">
			<h2 className="text-2xl font-bold animate-appear-from-bottom">
				What would you like to talk about ?
			</h2>

			<ul className="flex flex-wrap gap-3 justify-center animate-appear-from-top">
				{options.map(({ to, option, desc, Icon }) => (
					<li key={to}>
						<Link
							to="/talk/new-project"
							className="flex flex-col items-center justify-center gap-3 rounded-2xl px-2 py-4 text-center border-2 bg-taupe-800 text-taupe-200 hover:scale-105 hover:-translate-y-2 duration-300"
						>
							<Icon size={60} />
							<span className="font-bold">{option}</span>
							<span className="text-sm w-40 text-taupe-400">{desc}</span>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
