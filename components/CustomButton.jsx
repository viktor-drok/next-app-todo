const CustomButton = ({ className = "", children, onDragEnter, style }) => {
	return (
		<div
			style={style}
			onDragEnter={onDragEnter}
			className={`${className} flex justify-center items-center h-[50px] text-[22px] border-none rounded-[8px] w-[254px] cursor-pointer`}
		>
			{children}
		</div>
	);
};
export default CustomButton;
