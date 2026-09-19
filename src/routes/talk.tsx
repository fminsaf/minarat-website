import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import BookingButton from "../components/talk/BookingButton";
import { formatTime, type TopicId, topicList } from "../components/talk/config";
import DateSelector from "../components/talk/DateSelector";
import TimeSelector from "../components/talk/TimeSelector";
import TopicSelector from "../components/talk/TopicSelector";

export const Route = createFileRoute("/talk")({
	component: RouteComponent,
});

function RouteComponent() {
	const [topic, setTopic] = useState<TopicId | null>(null);
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

	const handleBooking = () => {
		if (!topic || !date || time === null) return;

		const topicName = topicList.find(
			(item) => item.topicId === topic,
		)?.topicName;

		const message = `
Assalamu Alaikum,

I'd like to schedule a meeting with Minarat.

Topic: ${topicName}
Date: ${date.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		})}
Time: ${formatTime(time)}
Timezone: Sri Lanka (GMT+5:30)

Thank you.
		`.trim();

		const whatsappNumber = "94723142657";
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
			message,
		)}`;

		window.open(whatsappUrl, "_blank");
	};

	return (
		<main className="flex-1 flex flex-col items-center justify-center gap-10">
			<TopicSelector
				topic={topic}
				onSelectTopic={setTopic}
				onResetTopic={() => setTopic(null)}
			/>

			<DateSelector
				next14Days={next14Days}
				date={date}
				onSelectDate={setDate}
			/>

			<TimeSelector time={time} onSelectTime={setTime} />

			<BookingButton
				topic={topic}
				date={date}
				time={time}
				onClick={handleBooking}
			/>
		</main>
	);
}

export default RouteComponent;
