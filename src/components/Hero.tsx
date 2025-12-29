import { useState } from "react";

interface HeroProps {
    setPage: (page: "home" | "services" | "appointment" | "success") => void;
}

function Hero({ setPage }: HeroProps) {
    const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
    const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

    const isMobile = window.innerWidth <= 768;

    return (
        <div style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: "center",
            minHeight: isMobile ? "calc(100vh - 120px)" : "calc(100vh - 200px)",
            padding: isMobile ? "2rem 1rem" : "3rem",
            backgroundColor: "transparent",
            color: "#ffffff",
            textAlign: isMobile ? "center" : "left"
        }}>
            <div style={{
                textAlign: isMobile ? "center" : "left",
                maxWidth: isMobile ? "100%" : "600px",
                paddingRight: isMobile ? "0" : "2rem",
                width: "100%"
            }}>
                <h2 style={{
                    color: "#ffffff",
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                    fontWeight: "normal",
                    marginBottom: "1rem"
                }}>
                    We love seeing a healthy life
                </h2>
                <h1 style={{
                    color: "#ffffff",
                    fontSize: isMobile ? "1.5rem" : "2.0rem",
                    fontWeight: "normal",
                    marginBottom: "1.5rem",
                    lineHeight: "1.2"
                }}>
                    Stay healthy with ease. Visit our clinic or let our team bring care to you.
                </h1>
                <div style={{
                    display: "flex",
                    gap: "1rem",
                    marginTop: "2rem",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "center" : "flex-start"
                }}>
                    <button
                        onClick={() => setPage("services")}
                        onMouseEnter={() => setIsPrimaryHovered(true)}
                        onMouseLeave={() => setIsPrimaryHovered(false)}
                        style={{
                            padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "#90CAF9",
                            color: isPrimaryHovered ? "#ffffff" : "#000000",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease, transform 0.2s ease",
                            transform: isPrimaryHovered ? "translateY(-2px)" : "translateY(0)",
                            width: isMobile ? "100%" : "auto",
                            maxWidth: isMobile ? "300px" : "none"
                        }}
                    >
                        CHECK OUR SERVICES
                    </button>
                    <button
                        onClick={() => setPage("appointment")}
                        onMouseEnter={() => setIsSecondaryHovered(true)}
                        onMouseLeave={() => setIsSecondaryHovered(false)}
                        style={{
                            padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
                            backgroundColor: isSecondaryHovered ? "#90CAF9" : "#ffffff",
                            color: isSecondaryHovered ? "#ffffff" : "#000000",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease, transform 0.2s ease, color 0.3s ease",
                            transform: isSecondaryHovered ? "translateY(-2px)" : "translateY(0)",
                            width: isMobile ? "100%" : "auto",
                            maxWidth: isMobile ? "300px" : "none"
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
