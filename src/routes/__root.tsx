import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { LiaGithub, LiaLinkedinIn } from "react-icons/lia";
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
			<body className="bg-fixed bg-linear-150 from-taupe-300 via-taupe-100 to-taupe-200 text-taupe-800 min-h-screen flex flex-col items-center p-3">
				<header className="animate-appear-from-top">
					<Link
						to="/"
						activeProps={{ className: "hidden" }}
						className="text-3xl font-bold tracking-widest"
					>
						[ Minarat ].
					</Link>
				</header>

				{children}

				<footer className="px-5 py-3 rounded-3xl bg-taupe-800 text-mauve-100 text-xs flex flex-wrap items-center justify-center gap-5">
					<ul className="flex gap-3">
						<li>
							<Link
								to="/privacy-policy"
								className="underline-offset-8 hover:underline"
								activeProps={{ className: "hidden" }}
							>
								Privacy Policy
							</Link>
						</li>
					</ul>

					<span className="max-[461px]:order-3">
						© All rights reserved by Team Minarat
					</span>

					<ul className="flex gap-3">
						<li>
							<a
								href="https://www.linkedin.com/company/minarat/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LiaLinkedinIn size={20} />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Team-Minarat"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LiaGithub size={20} />
							</a>
						</li>
					</ul>
				</footer>

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
