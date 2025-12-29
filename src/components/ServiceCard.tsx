interface ServiceCardProps {
    title: string;
    description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
    const isMobile = window.innerWidth <= 768;

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: isMobile ? "1rem" : "1rem",
            borderRadius: "8px",
            color: "#ffffff",
            minWidth: isMobile ? "100%" : "200px",
            maxWidth: isMobile ? "100%" : "300px",
            flex: isMobile ? "1" : "0 1 auto"
        }}>
            <h3 style={{
                color: "#ffffff",
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                marginBottom: "0.5rem"
            }}>
                {title}
            </h3>
            <p style={{
                color: "#ffffff",
                fontSize: isMobile ? "0.9rem" : "1rem"
            }}>
                {description}
            </p>
        </div>
    );
}

export default ServiceCard;
