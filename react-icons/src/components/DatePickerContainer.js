import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerContainer(props) {
    const [selectedDate, setSelectedDate] = useState(null);
    // minDate and maxDate also available
    return (
            <DatePicker selected={selectedDate} onChange={date =>  setSelectedDate(date)}
            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable showYearDropdown scrollableMonthYearDropdown />
    );
}

export default DatePickerContainer;