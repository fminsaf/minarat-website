import { ImInfo } from "react-icons/im";
import { formatTime, timeRange } from "./config";

type TimeSelectorProps = {
	time: number | null;
	onSelectTime: (time: number) => void;
};

const TimeSelector = ({ time, onSelectTime }: TimeSelectorProps) => {
	return (
		<div className="space-y-5 animate-appear-from-bottom">
			<h2 className="text-2xl font-bold text-center">
				What time works for you?
			</h2>

			<div className="flex flex-wrap justify-center max-w-2xl gap-2">
				{timeRange.map(({ range, Icon }) => {
					const isSelected = time === range;

					return (
						<button
							key={range}
							type="button"
							onClick={() => onSelectTime(range)}
							className={`flex items-center gap-2 rounded-2xl px-3 py-2 border-2 border-taupe-800 cursor-pointer hover:-translate-y-1 duration-300 ${
								isSelected ? "bg-taupe-800 text-taupe-100" : ""
							}`}
						>
							<Icon />
							{formatTime(range)}
						</button>
					);
				})}
			</div>

			<p className="text-xs flex items-center gap-2 mx-auto w-fit">
				<ImInfo />
				Times are shown in Sri Lanka time (GMT+5:30).
			</p>
		</div>
	);
};

export default TimeSelector;
