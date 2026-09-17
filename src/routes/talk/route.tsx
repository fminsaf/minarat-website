import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/talk")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<header className="flex items-center justify-around gap-5 animate-appear-from-top">
				<Link to="/" className="text-3xl font-bold tracking-widest">
					[ Minarat ].
				</Link>
			</header>

			<Outlet />
		</>
	);
}
