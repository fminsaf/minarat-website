import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/talk")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-1 flex flex-col items-center justify-center gap-10">
			<h2 className="text-2xl font-bold animate-appear-from-bottom">
				What would you like to talk about ?
			</h2>
		</main>
	);
}
