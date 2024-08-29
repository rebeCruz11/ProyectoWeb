import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calendar.css'; // Para estilos personalizados

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventTitle, setEventTitle] = useState('');
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay();
    const weeks = Math.ceil((daysInMonth + startDay) / 7);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const title = prompt('Enter Event Title:');
        if (title) {
            setEvents(prevEvents => [
                ...prevEvents,
                { date: `${currentYear}-${currentMonth}-${date}`, title }
            ]);
        }
    };

    const handleEventChange = (event) => {
        setEventTitle(event.target.value);
    };

    const handleEventSave = () => {
        if (selectedDate && eventTitle) {
            setEvents(prevEvents => [
                ...prevEvents,
                { date: selectedDate, title: eventTitle }
            ]);
            setEventTitle('');
        }
    };

    const handlePrevMonth = () => {
        setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
        if (currentMonth === 0) {
            setCurrentYear(prev => prev - 1);
        }
    };

    const handleNextMonth = () => {
        setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
        if (currentMonth === 11) {
            setCurrentYear(prev => prev + 1);
        }
    };

    const renderCalendar = () => {
        const calendar = [];
        let day = 1;

        for (let week = 0; week < weeks; week++) {
            const days = [];
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                const date = (week === 0 && dayOfWeek < startDay) || day > daysInMonth ? null : day++;
                days.push(
                    <td key={dayOfWeek} className="calendar-day" onClick={() => date && handleDateClick(date)}>
                        {date}
                        {events.filter(event => event.date === `${currentYear}-${currentMonth}-${date}`).map((event, index) => (
                            <div key={index} className="event">
                                {event.title}
                            </div>
                        ))}
                    </td>
                );
            }
            calendar.push(<tr key={week}>{days}</tr>);
        }
        return calendar;
    };

    return (
        <div className="calendar-container py-3">
            <h3>{months[currentMonth]} {currentYear}</h3>
            <div className="calendar-controls">
                <button className="btn-calendar btn-primary" onClick={handlePrevMonth}>Previous</button>
                <button className="btn-calendar btn-primary" onClick={handleNextMonth}>Next</button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr >
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCalendar()}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
