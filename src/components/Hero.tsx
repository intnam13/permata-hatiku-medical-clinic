import { useState } from "react";

interface HeroProps {
    setPage: (page: "home" | "services" | "appointment" | "success") => void;
}

function Hero({ setPage }: HeroProps) {
    const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
    const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            minHeight: "calc(100vh - 200px)",
            padding: "3rem",
            backgroundColor: "transparent",
            color: "#ffffff"
        }}>
            <div style={{
                textAlign: "left",
                maxWidth: "600px",
                paddingRight: "2rem"
            }}>
                <h2 style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "normal", marginBottom: "1rem" }}>
                    We love seeing a healthy life
                </h2>
                <h1 style={{ color: "#ffffff", fontSize: "2.0rem", fontWeight: "normal", marginBottom: "1.0rem", lineHeight: "1.0" }}>
                    Stay healthy with ease. Visit our clinic or let our team bring care to you.
                </h1>
                <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                    <button
                        onClick={() => setPage("services")}
                        onMouseEnter={() => setIsPrimaryHovered(true)}
                        onMouseLeave={() => setIsPrimaryHovered(false)}
                        style={{
                            padding: "1rem 2rem",
                            backgroundColor: "#90CAF9",
                            color: isPrimaryHovered ? "#ffffff" : "#000000",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease, transform 0.2s ease",
                            transform: isPrimaryHovered ? "translateY(-2px)" : "translateY(0)"
                        }}
                    >
                        CHECK OUR SERVICES
                    </button>
                    <button
                        onClick={() => setPage("appointment")}
                        onMouseEnter={() => setIsSecondaryHovered(true)}
                        onMouseLeave={() => setIsSecondaryHovered(false)}
                        style={{
                            padding: "1rem 2rem",
                            backgroundColor: isSecondaryHovered ? "#90CAF9" : "#ffffff",
                            color: isSecondaryHovered ? "#ffffff" : "#000000",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease, transform 0.2s ease, color 0.3s ease",
                            transform: isSecondaryHovered ? "translateY(-2px)" : "translateY(0)"
                        }}
                    >
                        BOOK AN APPOINTMENT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
