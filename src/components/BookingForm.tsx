import React, { useState } from "react";

interface BookingFormProps {
    onBooking: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBooking }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, date });
        onBooking();
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default BookingForm;
