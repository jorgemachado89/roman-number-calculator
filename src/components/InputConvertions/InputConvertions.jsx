import React from 'react';

import './InputConvertions.scss';

export const InputCovertions = ({inputLabel, valueToConvert, isRoman, cb}) => {
	const onChangeInput = ({target: {value}}) => {
		cb(value, isRoman);
	};

	return (
		<>
			<div className="inputGroup">
				<label className="inputLabel">{inputLabel}</label>
				<input className="input" type={isRoman ? 'text' : 'number'} onChange={onChangeInput} value={valueToConvert}/>
			</div>
		</>
	)
};