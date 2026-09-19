import { finalMessages, type TopicId, topicList } from "./config";

type TopicSelectorProps = {
	topic: TopicId | null;
	onSelectTopic: (topicId: TopicId) => void;
	onResetTopic: () => void;
};

const TopicSelector = ({
	topic,
	onSelectTopic,
	onResetTopic,
}: TopicSelectorProps) => {
	if (!topic) {
		return (
			<div className="space-y-5 animate-appear-from-bottom">
				<h2 className="text-2xl font-bold text-center">
					What would you like to talk about?
				</h2>

				<div className="flex flex-wrap justify-center gap-2">
					{topicList.map(({ Icon, topicId, topicName }) => (
						<button
							key={topicId}
							type="button"
							onClick={() => onSelectTopic(topicId)}
							className="flex items-center gap-2 px-3 py-2 rounded-2xl font-bold border-2 border-taupe-800 hover:-translate-y-1 duration-300 cursor-pointer"
						>
							<Icon size={20} />
							{topicName}
						</button>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center gap-3 text-center animate-appear-from-bottom">
			<h2 className="text-2xl font-bold">{finalMessages[topic]}</h2>

			<button
				type="button"
				onClick={onResetTopic}
				className="text-sm underline cursor-pointer"
			>
				Change topic
			</button>
		</div>
	);
};

export default TopicSelector;
