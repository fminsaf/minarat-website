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

const options = [
	{
		to: "/talk/discuss-idea",
		option: "Discuss an idea",
		desc: "I have an idea I'd like to explore.",
		Icon: LuLightbulb,
	},
	{
		to: "/talk/new-project",
		option: "Start a Project",
		desc: "I have a project I'd like Minarat to build",
		Icon: LuRocket,
	},
	{
		to: "/talk/improve-something",
		option: "Improve something",
		desc: "I have an existing website, app, or product.",
		Icon: LuWrench,
	},
	{
		to: "/talk/something-else",
		option: "Something else",
		desc: "I want to talk about something else.",
		Icon: LuMessageCircle,
	},
];

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center gap-10">
			<h2 className="text-2xl font-bold animate-appear-from-bottom">
				What would you like to talk about ?
			</h2>

			<ul className="max-w-3xl flex flex-wrap gap-3 justify-center animate-appear-from-top">
				{options.map(({ to, option, desc, Icon }) => (
					<li key={to}>
						<Link
							to={to}
							className="grid grid-cols-[auto_auto] gap-2 rounded-2xl p-4 border-2 bg-taupe-800 text-taupe-200 hover:-translate-y-1 duration-300"
						>
							<Icon size={30} className="place-self-center" />
							<span className="font-bold text-xl w-fit">{option}</span>
							<span className="text-sm col-span-2 text-taupe-400">{desc}</span>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
