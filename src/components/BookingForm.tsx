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

    const isMobile = window.innerWidth <= 768;

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: isMobile ? "100%" : "400px",
                margin: "0 auto",
                padding: isMobile ? "1rem" : "0"
            }}
        >
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                style={{
                    padding: isMobile ? "0.8rem" : "0.6rem",
                    fontSize: isMobile ? "1rem" : "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                    padding: isMobile ? "0.8rem" : "0.6rem",
                    fontSize: isMobile ? "1rem" : "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            />
            <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
                style={{
                    padding: isMobile ? "0.8rem" : "0.6rem",
                    fontSize: isMobile ? "1rem" : "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                }}
            />
            <button
                type="submit"
                style={{
                    padding: isMobile ? "0.8rem" : "0.6rem",
                    fontSize: isMobile ? "1rem" : "1rem",
                    backgroundColor: "#90CAF9",
                    color: "#000000",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                Book Appointment
            </button>
        </form>
    );
};

export default BookingForm;
