import BookingForm from "../components/BookingForm";

interface AppointmentProps {
    onBooking: () => void;
}

function Appointment({ onBooking }: AppointmentProps) {
    return (
        <div style={{ padding: "2rem" }}>
            <h2 style={{ textAlign: "center", color: "#ffffff" }}>Book an Appointment</h2>
            <BookingForm onBooking={onBooking} />
        </div>
    );
}

export default Appointment;
