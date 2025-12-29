import ServiceCard from "../components/ServiceCard";

function Services() {
    const services = [
        { title: "Service 1", description: "under maintainance" },
        { title: "Service 2", description: "under maintainance" },
        { title: "Service 3", description: "under maintainance" },
    ];

    const isMobile = window.innerWidth <= 768;

    return (
        <div style={{
            padding: isMobile ? "1rem" : "2rem",
            textAlign: "center"
        }}>
            <h2 style={{
                textAlign: "center",
                color: "#ffffff",
                fontSize: isMobile ? "1.5rem" : "2rem",
                marginBottom: "2rem"
            }}>
                Our Services
            </h2>
            <div style={{
                display: "flex",
                gap: isMobile ? "1rem" : "1rem",
                justifyContent: "center",
                marginTop: "1rem",
                flexWrap: "wrap",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start"
            }}>
                {services.map((s, index) => (
                    <ServiceCard key={index} {...s} />
                ))}
            </div>
        </div>
    );
}

export default Services;
