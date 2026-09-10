import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { LiaGithub, LiaLinkedinIn } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Minarat",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="bg-fixed bg-linear-150 from-taupe-300 via-taupe-100 to-taupe-200 text-taupe-800">
				<div className="max-w-7xl h-screen mx-auto p-3 flex flex-col justify-between">
					<header className="sticky backdrop-blur-2xl top-0 flex items-center justify-between animate-appear-from-top">
						<nav>
							<ul className="flex gap-3">
								<li className="underline-offset-8 hover:underline">
									Our Projects
								</li>
								<li className="underline-offset-8 hover:underline">
									Contact us
								</li>
							</ul>
						</nav>

						<Link
							to="/"
							className="text-3xl font-bold tracking-widest animate-appear-from-top"
							activeProps={{ className: "hidden" }}
						>
							[ Minarat ] .
						</Link>

						<button
							type="button"
							className="border-2 border-taupe-800 px-3 py-2 font-semibold hover:bg-taupe-800 hover:text-taupe-100 duration-300 cursor-pointer"
						>
							Book a meeting
						</button>
					</header>

					{children}

					<footer className="p-3 bg-taupe-800 text-mauve-100 text-xs grid grid-cols-2 md:grid-cols-3 place-items-center gap-5">
						<ul className="flex gap-3">
							<li className="underline-offset-8 hover:underline">
								Privacy Policy
							</li>
						</ul>

						<span className="max-md:col-span-2 max-md:order-3">
							© All rights reserved by Team Minarat
						</span>

						<ul className="flex gap-3">
							<li>
								<TfiEmail size={20} />
							</li>
							<li>
								<LiaLinkedinIn size={20} />
							</li>
							<li>
								<LiaGithub size={20} />
							</li>
						</ul>
					</footer>
				</div>

				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
