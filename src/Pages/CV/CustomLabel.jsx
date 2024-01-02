const CustomLabel = ({ children, target }) => {
	return (
		<label
			htmlFor={target}
			className='text-lg font-serif text-gray-700 font-medium tracking-tight'>
			{children}
		</label>
	);
};

export default CustomLabel;
