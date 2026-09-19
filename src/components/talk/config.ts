import type { IconType } from "react-icons";
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

export type TopicId = "new" | "idea" | "improve" | "other";

export type TopicOption = {
	topicName: string;
	topicId: TopicId;
	Icon: IconType;
};

export const topicList: TopicOption[] = [
	{ topicName: "Start a Project", topicId: "new", Icon: LuRocket },
	{ topicName: "Discuss an Idea", topicId: "idea", Icon: LuLightbulb },
	{ topicName: "Improve Something", topicId: "improve", Icon: LuWrench },
	{ topicName: "Something Else", topicId: "other", Icon: LuMessageCircle },
];

export const timeRange: Array<{ range: number; Icon: IconType }> = [
	{ range: 6, Icon: LuClock6 },
	{ range: 8, Icon: LuClock8 },
	{ range: 9, Icon: LuClock9 },
	{ range: 10, Icon: LuClock10 },
	{ range: 11, Icon: LuClock11 },
	{ range: 14, Icon: LuClock2 },
	{ range: 17, Icon: LuClock5 },
	{ range: 21, Icon: LuClock9 },
];

export const finalMessages: Record<TopicId, string> = {
	new: "Let's talk about your project.",
	idea: "Let's discuss your idea.",
	improve: "Let's talk about what you'd like to improve.",
	other: "Let's talk about what you have in mind.",
};

export function formatTime(time: number) {
	return time < 12 ? `${time}:00 AM` : `${time === 12 ? 12 : time - 12}:00 PM`;
}
