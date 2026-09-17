import { createFileRoute, Link, linkOptions } from "@tanstack/react-router";
import { CgShoppingCart, CgWebsite } from "react-icons/cg";
import { LuGlobe } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { TbWorldQuestion } from "react-icons/tb";

export const Route = createFileRoute("/talk/new-project")({
	validateSearch: (search) => ({ type: search.type as string | undefined }),
	component: RouteComponent,
});
const options = linkOptions([
	{
		to: "/talk/new-project",
		search: { type: "web-app" },
		option: "Web Application",
		Icon: MdComputer,
	},
	{
		to: "/talk/new-project",
		search: { type: "saas" },
		option: "SaaS/Digital Product",
		Icon: CgWebsite,
	},
	{
		to: "/talk/new-project",
		search: { type: "e-commerce" },
		option: "E-commerce",
		Icon: CgShoppingCart,
	},
	{
		to: "/talk/new-project",
		search: { type: "website" },
		option: "Website/Static Pages",
		Icon: LuGlobe,
	},
	{
		to: "/talk/new-project",
		search: { type: "unknown" },
		option: "I am not sure",
		Icon: TbWorldQuestion,
	},
]);

function RouteComponent() {
	const { type } = Route.useSearch();
	return (
		<main className="flex flex-col items-center justify-center gap-10">
			{!type ? (
				<>
					<h2 className="text-2xl font-bold animate-appear-from-bottom">
						What are you looking to build ?
					</h2>

					<ul className="flex flex-wrap gap-2 justify-center max-w-3xl animate-appear-from-top">
						{options.map(({ Icon, to, search, option }) => (
							<li key={to}>
								<Link
									to={to}
									search={search}
									className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-taupe-800 text-taupe-100 hover:-translate-y-1 duration-300"
								>
									<Icon size={28} />
									<span className="font-bold">{option}</span>
								</Link>
							</li>
						))}
					</ul>
				</>
			) : (
				<h1>Let's build your {type}</h1>
			)}
		</main>
	);
}
