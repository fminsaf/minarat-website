import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/talk")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<header className="mx-auto animate-appear-from-top">
				<Link
					to="/"
					className="text-3xl font-bold tracking-widest animate-appear-from-top"
				>
					[ Minarat ].
				</Link>
			</header>

			<Outlet />
		</>
	);
}
