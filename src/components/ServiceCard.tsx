interface ServiceCardProps {
    title: string;
    description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", color: "#ffffff" }}>
            <h3 style={{ color: "#ffffff" }}>{title}</h3>
            <p style={{ color: "#ffffff" }}>{description}</p>
        </div>
    );
}

export default ServiceCard;
