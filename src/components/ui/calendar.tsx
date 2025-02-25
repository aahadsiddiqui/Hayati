"use client"

import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface CalendarProps {
  selected: Date | undefined;
  onChange: (date: Date) => void;
  className?: string;
}

export function Calendar({ selected, onChange, className }: CalendarProps) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="MMMM d, yyyy"
      className={`w-full p-3 border border-prussian/20 rounded-lg focus:border-lion
                focus:outline-none focus:ring-2 focus:ring-lion/50 ${className}`}
      wrapperClassName="w-full"
      calendarClassName="!bg-white !border-prussian/20"
      showPopperArrow={false}
      minDate={new Date()}
    />
  );
} 