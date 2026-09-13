import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="mx-auto w-full max-w-4xl px-6 py-20 my-5 overflow-y-scroll">
			<div className="mb-16">
				<p className="mb-4 text-sm font-medium tracking-wide">Legal</p>

				<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
					Privacy Policy
				</h1>

				<p className="mt-4 text-sm opacity-60">
					Last updated: September 13, 2026
				</p>
			</div>

			<div className="space-y-14">
				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">
						1. Introduction
					</h2>

					<p className="leading-7 opacity-70">
						Welcome to Minarat. We respect your privacy and are committed to
						protecting the personal information you share with us.
					</p>

					<p className="leading-7 opacity-70">
						This Privacy Policy explains what information we may collect when
						you use our website, how we use it, and the choices you have
						regarding your information.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">
						2. Information We Collect
					</h2>

					<p className="leading-7 opacity-70">
						When you contact Minarat through our website, we may collect
						information that you voluntarily provide, such as:
					</p>

					<ul className="list-disc space-y-2 pl-6 opacity-70">
						<li>Your name</li>
						<li>Your email address</li>
						<li>Your company or business information</li>
						<li>Information included in your message or project enquiry</li>
					</ul>

					<p className="leading-7 opacity-70">
						We only request information that is reasonably necessary to respond
						to your enquiry and communicate with you.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">
						3. How We Use Your Information
					</h2>

					<p className="leading-7 opacity-70">
						We may use the information you provide to:
					</p>

					<ul className="list-disc space-y-2 pl-6 opacity-70">
						<li>Respond to your enquiries and messages</li>
						<li>Discuss potential projects and services</li>
						<li>Provide and manage our services</li>
						<li>Communicate with you about your project</li>
						<li>Maintain the security and functionality of our website</li>
						<li>Improve our website and services</li>
					</ul>

					<p className="leading-7 opacity-70">
						We do not sell or rent your personal information to third parties.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">4. Cookies</h2>

					<p className="leading-7 opacity-70">
						Minarat may use essential cookies or similar technologies required
						for the website to function properly.
					</p>

					<p className="leading-7 opacity-70">
						If we introduce analytics, advertising, or other non-essential
						cookies in the future, we will update this Privacy Policy
						accordingly.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">
						5. Data Security
					</h2>

					<p className="leading-7 opacity-70">
						We take reasonable measures to protect the information we hold
						against unauthorised access, disclosure, alteration, or destruction.
					</p>

					<p className="leading-7 opacity-70">
						However, no method of transmitting or storing information online can
						be guaranteed to be completely secure.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">
						6. Changes to This Privacy Policy
					</h2>

					<p className="leading-7 opacity-70">
						We may update this Privacy Policy from time to time to reflect
						changes to our services, technology, or legal requirements.
					</p>

					<p className="leading-7 opacity-70">
						Any updates will be published on this page with a revised "Last
						updated" date.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-xl font-semibold tracking-tight">
						7. Contact Us
					</h2>

					<p className="leading-7 opacity-70">
						If you have any questions about this Privacy Policy or how Minarat
						handles your information, you can contact us at:
					</p>

					<div className="rounded-2xl border p-5">
						<p className="font-medium">Minarat</p>

						<a
							href="mailto:itsmefminsaf@gmail.com"
							className="mt-1 inline-block text-sm underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
						>
							itsmefminsaf@gmail.com
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}
