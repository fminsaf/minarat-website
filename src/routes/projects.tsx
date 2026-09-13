import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex items-center justify-center">
			No projects has been built yet
		</main>
	);
}
