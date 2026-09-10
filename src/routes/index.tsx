import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex-1 flex items-center justify-center">
			<h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-widest animate-appear-from-bottom">
				[ Minarat ] .
			</h1>
		</main>
	);
}
