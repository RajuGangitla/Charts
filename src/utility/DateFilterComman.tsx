import { IDateRange } from '@/interface/types';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdClear } from "react-icons/md";
import GetDate from './GetDate';


export default function DateFilterComman({ state, setState }: { state: IDateRange[], setState: React.Dispatch<React.SetStateAction<IDateRange[]>> }) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleDateChange = (dates: any) => {
        if (dates) {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);

            // Update state with selected start and end dates
            setState([{ startDate: start, endDate: end }]);
        }
    };

    const clearDate = () => {
        setStartDate(null);
        setEndDate(null);
        setState([]);
    };

    return (
        <div className="p-4">
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="d MMM yyyy"
                placeholderText='select range'
                className="w-full border border-gray-300 rounded px-3 py-2 "
            />
            {startDate && endDate && (
                <div className="flex items-center mt-2">
                    <span className="inline-block bg-gray-200 rounded px-2 py-1">
                        {GetDate(startDate)} - {GetDate(endDate)}
                    </span>
                    <button onClick={clearDate} className="ml-4 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"><MdClear /></button>
                </div>
            )}
        </div>
    );
}
