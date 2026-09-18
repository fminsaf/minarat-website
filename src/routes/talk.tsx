import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImInfo } from "react-icons/im";
import {
	LuClock2,
	LuClock5,
	LuClock6,
	LuClock8,
	LuClock9,
	LuClock10,
	LuClock11,
	LuLightbulb,
	LuMessageCircle,
	LuRocket,
	LuWrench,
} from "react-icons/lu";

export const Route = createFileRoute("/talk")({
	component: RouteComponent,
});

const topicList = [
	{ topicName: "Start a Project", topicId: "new", Icon: LuRocket },
	{ topicName: "Discuss an Idea", topicId: "idea", Icon: LuLightbulb },
	{ topicName: "Improve Something", topicId: "improve", Icon: LuWrench },
	{ topicName: "Something Else", topicId: "other", Icon: LuMessageCircle },
];

const timeRange = [
	{ range: 6, Icon: LuClock6 },
	{ range: 8, Icon: LuClock8 },
	{ range: 9, Icon: LuClock9 },
	{ range: 10, Icon: LuClock10 },
	{ range: 11, Icon: LuClock11 },
	{ range: 14, Icon: LuClock2 },
	{ range: 17, Icon: LuClock5 },
	{ range: 21, Icon: LuClock9 },
];

const finalMessages = {
	new: "Let's talk about your project.",
	idea: "Let's discuss your idea.",
	improve: "Let's talk about what you'd like to improve.",
	other: "Let's talk about what you have in mind.",
};

function formatTime(time: number) {
	return time < 12 ? `${time}:00 AM` : `${time - 12 || 12}:00 PM`;
}

function RouteComponent() {
	const [topic, setTopic] = useState<string | null>(null);
	const [date, setDate] = useState<Date | null>(null);
	const [time, setTime] = useState<number | null>(null);

	const [next14Days, setNext14Days] = useState<Date[]>([]);

	useEffect(() => {
		const today = new Date();

		const dates = Array.from({ length: 14 }, (_, index) => {
			const currentDate = new Date(today);
			currentDate.setDate(today.getDate() + index + 1);

			return currentDate;
		});

		setNext14Days(dates);
	}, []);

	const selectedTime = timeRange.find((item) => item.range === time);

	return (
		<main className="flex-1 flex flex-col items-center justify-center gap-10">
			{topic && (
				<div className="flex flex-col items-center gap-5 text-center animate-appear-from-bottom">
					<h2 className="text-2xl font-bold">
						{finalMessages[topic as keyof typeof finalMessages]}
					</h2>

					{date && (
						<>
							<button
								type="button"
								onClick={() => setDate(null)}
								className="flex flex-col justify-center rounded-2xl w-20 border-2 border-taupe-800 overflow-hidden"
							>
								<span className="bg-taupe-800 text-taupe-100">
									{date.toLocaleDateString("en-US", {
										month: "short",
									})}
								</span>

								<span className="text-3xl">{date.getDate()}</span>

								<span className="text-xs pb-1">
									{date.toLocaleDateString("en-US", {
										weekday: "short",
									})}
								</span>
							</button>

							{selectedTime && (
								<button
									type="button"
									onClick={() => setTime(null)}
									className="flex items-center gap-2 px-3 py-2 rounded-2xl border-2 border-taupe-800"
								>
									<selectedTime.Icon size={22} />
									<span>{formatTime(selectedTime.range)}</span>
								</button>
							)}
						</>
					)}
				</div>
			)}

			{!topic ? (
				<div className="space-y-5 animate-appear-from-bottom">
					<h2 className="text-2xl font-bold text-center">
						What would you like to talk about?
					</h2>

					<div className="flex flex-wrap justify-center gap-2">
						{topicList.map(({ Icon, topicId, topicName }) => (
							<button
								key={topicId}
								type="button"
								onClick={() => setTopic(topicId)}
								className="flex items-center gap-2 px-3 py-2 rounded-2xl font-bold border-2 border-taupe-800 hover:-translate-y-1 duration-300 cursor-pointer"
							>
								<Icon size={20} />
								{topicName}
							</button>
						))}
					</div>
				</div>
			) : !date ? (
				<div className="space-y-5 animate-appear-from-bottom">
					<h2 className="text-2xl font-bold text-center">
						When would you like to talk?
					</h2>

					<div className="flex flex-wrap justify-center max-w-2xl gap-2">
						{next14Days.map((curDate) => (
							<button
								key={curDate.toDateString()}
								type="button"
								onClick={() => setDate(curDate)}
								className="flex flex-col justify-center rounded-2xl w-20 border-2 border-taupe-800 hover:-translate-y-1 duration-300 cursor-pointer overflow-hidden"
							>
								<span className="bg-taupe-800 text-taupe-100">
									{curDate.toLocaleDateString("en-US", {
										month: "short",
									})}
								</span>

								<span className="text-3xl">{curDate.getDate()}</span>

								<span className="text-xs pb-1">
									{curDate.toLocaleDateString("en-US", {
										weekday: "short",
									})}
								</span>
							</button>
						))}
					</div>
				</div>
			) : !time ? (
				<div className="space-y-5 animate-appear-from-bottom">
					<h2 className="text-2xl font-bold text-center">
						What time works for you?
					</h2>

					<div className="flex flex-wrap justify-center max-w-2xl gap-2">
						{timeRange.map(({ range, Icon }) => (
							<button
								key={range}
								type="button"
								onClick={() => setTime(range)}
								className="flex items-center gap-2 rounded-2xl px-3 py-2 border-2 border-taupe-800 hover:-translate-y-1 duration-300 cursor-pointer"
							>
								<Icon />
								{formatTime(range)}
							</button>
						))}
					</div>

					<p className="text-xs flex items-center gap-2 mx-auto w-fit">
						<ImInfo />
						Times are shown in GMT+5:30.
					</p>
				</div>
			) : (
				<div className="flex flex-col items-center gap-5 animate-appear-from-bottom">
					<button
						type="button"
						className="bg-taupe-800 text-taupe-100 px-4 py-2 rounded-2xl cursor-pointer"
						onClick={() => console.log(topic, date, time)}
					>
						Book now
					</button>
				</div>
			)}
		</main>
	);
}

export default RouteComponent;
