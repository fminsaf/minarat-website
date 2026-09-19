import { BsWhatsapp } from "react-icons/bs";
import type { TopicId } from "./config";

type BookingButtonProps = {
	topic: TopicId | null;
	date: Date | null;
	time: number | null;
	onClick: () => void;
};

const BookingButton = ({ topic, date, time, onClick }: BookingButtonProps) => {
	if (!topic || !date || time === null) {
		return null;
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className="bg-taupe-800 text-taupe-100 flex items-center gap-2 px-4 py-2 rounded-2xl animate-appear-from-bottom cursor-pointer"
		>
			<BsWhatsapp />
			Schedule meeting via WhatsApp
		</button>
	);
};

export default BookingButton;
