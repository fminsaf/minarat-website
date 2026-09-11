import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex flex-col items-center justify-center gap-5">
			<h2 className="text-3xl font-bold text-center">Contact us</h2>

			<form className="flex flex-col gap-3 max-w-lg w-full">
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Enter your name / company name</label>
					<input
						id="name"
						type="text"
						className="px-3 py-2 border-2"
						placeholder="Ex: Muhammad Insaf"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="name">Enter your email / business email</label>
					<input
						id="name"
						type="email"
						className="px-3 py-2 border-2"
						placeholder="Ex: contact@example.com"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="name">Enter your message</label>
					<textarea
						id="name"
						className="px-3 py-2 border-2 h-20"
						placeholder="Ex: I would like to ..."
					/>
				</div>
			</form>
		</main>
	);
}
