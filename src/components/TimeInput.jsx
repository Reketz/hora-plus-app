import React from 'react';
import '.././App.css';

const TimeInput = ({ label, value, onChange }) => {
    return (
        <div className='Time-input'>
            <label>{label}</label>
            <input type="time" value={value} onChange={onChange} />
        </div>
    );
};

export default TimeInput;
