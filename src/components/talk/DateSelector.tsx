type DateSelectorProps = {
	next14Days: Date[];
	date: Date | null;
	onSelectDate: (date: Date) => void;
};

const DateSelector = ({
	next14Days,
	date,
	onSelectDate,
}: DateSelectorProps) => {
	return (
		<div className="space-y-5 animate-appear-from-bottom">
			<h2 className="text-2xl font-bold text-center">
				When would you like to talk?
			</h2>

			<div className="flex flex-wrap justify-center max-w-2xl gap-2">
				{next14Days.map((curDate) => {
					const isSelected = date?.toDateString() === curDate.toDateString();

					return (
						<button
							key={curDate.toDateString()}
							type="button"
							onClick={() => onSelectDate(curDate)}
							className={`flex flex-col justify-center rounded-2xl w-20 border-2 border-taupe-800 overflow-hidden cursor-pointer hover:-translate-y-1 duration-300 ${
								isSelected ? "bg-taupe-800 text-taupe-100" : ""
							}`}
						>
							<span
								className={
									isSelected
										? "bg-taupe-100 text-taupe-800"
										: "bg-taupe-800 text-taupe-100"
								}
							>
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
					);
				})}
			</div>
		</div>
	);
};

export default DateSelector;
