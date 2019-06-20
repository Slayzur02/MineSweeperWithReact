import React from 'react';

const Instructions = ({ className }) => {
	return (
		<div className="flex flex-col w-full text-center text-lg mb-4">
			<p>Press the blue button to check off the squares</p>
			<p className="">Press the red button to flag bombed squares</p>
			<p className="">400 squares, and 100 bombs. Good luck! </p>
		</div>
		);
};

export default Instructions;
