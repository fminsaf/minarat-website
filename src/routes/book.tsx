import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex items-center justify-center">
			Book a meeting here
		</main>
	);
}
