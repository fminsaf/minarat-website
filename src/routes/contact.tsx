import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BsSend } from "react-icons/bs";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

function RouteComponent() {
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [clientMessage, setClientMessage] = useState("");

	const agencyEmail = "itsmefminsaf@gmail.com";

	const sendMessage = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const subject = encodeURIComponent(`New inquiry from ${clientName}`);
		const body = encodeURIComponent(
			`Name: ${clientName}\nEmail: ${clientEmail}\n\nMessage:\n${clientMessage}`,
		);

		window.location.href = `mailto:${agencyEmail}?subject=${subject}&body=${body}`;

		return;
	};

	return (
		<main className="flex flex-col items-center justify-center gap-5">
			<h2 className="text-3xl font-bold text-center">Contact us</h2>

			<form
				className="flex flex-col gap-3 max-w-lg w-full"
				onSubmit={sendMessage}
			>
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Enter your name / company name</label>
					<input
						id="name"
						type="text"
						value={clientName}
						onChange={(e) => setClientName(e.currentTarget.value)}
						className="px-3 py-2 border-2"
						placeholder="Ex: Muhammad Insaf"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="name">Enter your email / business email</label>
					<input
						id="name"
						type="email"
						value={clientEmail}
						onChange={(e) => setClientEmail(e.currentTarget.value)}
						className="px-3 py-2 border-2"
						placeholder="Ex: contact@example.com"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="name">Enter your message</label>
					<textarea
						id="name"
						value={clientMessage}
						onChange={(e) => setClientMessage(e.currentTarget.value)}
						className="px-3 py-2 border-2 h-20"
						placeholder="Ex: I would like to ..."
					/>
				</div>

				<button
					type="submit"
					className="group flex items-center justify-center gap-3 bg-taupe-900 text-taupe-100 px-3 py-2"
				>
					<BsSend className="size-5 group-hover:-rotate-12 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-90 duration-300" />
					<span>Send Message</span>
				</button>
			</form>
		</main>
	);
}
