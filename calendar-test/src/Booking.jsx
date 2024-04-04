import React from 'react';
import "./App.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const Booking = () => {
    return (
        <>
            <div class="size-test">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
            </div>
            

            <div>
                <h1>Booking Page</h1>
                <p>This is the Booking page of our application.</p>
            </div>
        </>
    );
};

export default Booking;