import ServiceCard from "../components/ServiceCard";

function Services() {
    const services = [
        { title: "Service 1", description: "under maintainance" },
        { title: "Service 2", description: "under maintainance" },
        { title: "Service 3", description: "under maintainance" },
    ];

    return (
        <div style={{ padding: "2rem" }}>
            <h2 style={{ textAlign: "center", color: "#ffffff" }}>Our Services</h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
                {services.map((s, index) => <ServiceCard key={index} {...s} />)}
            </div>
        </div>
    );
}

export default Services;
