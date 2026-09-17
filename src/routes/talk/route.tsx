import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { BsArrowLeft } from "react-icons/bs";

export const Route = createFileRoute("/talk")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<header className="flex items-center justify-around gap-5 animate-appear-from-top">
				<Link
					to="/talk"
					activeOptions={{ exact: true }}
					activeProps={{ className: "hidden" }}
					className="group px-4 py-1 flex items-center justify-center gap-1 text-sm bg-taupe-800 text-taupe-200 w-fit rounded-full"
				>
					<BsArrowLeft
						size={20}
						className="group-hover:-translate-x-2 duration-300"
					/>
					Go back
				</Link>

				<Link to="/" className="text-3xl font-bold tracking-widest">
					[ Minarat ].
				</Link>
			</header>

			<Outlet />
		</>
	);
}
