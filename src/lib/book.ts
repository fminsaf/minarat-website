import { createServerFn } from "@tanstack/react-start";
import z from "zod";

const bookingValidator = z.object({
	topic: z.string(),
	date: z.date(),
	time: z.number(),
});

export const bookMeeting = createServerFn({ method: "POST" })
	.validator(bookingValidator)
	.handler(({ data: { date, time, topic } }) => {
		console.log(date, time, topic);
		return { booked: true };
	});
