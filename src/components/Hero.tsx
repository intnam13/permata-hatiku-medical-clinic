import { useState } from "react";
import ImageSlideshow from "./ImageSlideshow";
import doctor1 from "../assets/dr-permata-hatiku.jpeg";
import doctor2 from "../assets/dr-putri-nurul-muthia.jpeg";

interface HeroProps {
    setPage: (page: "home" | "services" | "appointment" | "success") => void;
}

function Hero({ setPage }: HeroProps) {
    const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
    const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

    const isMobile = window.innerWidth <= 768;

    // Sample medical-themed images for the slideshow
    const slideshowImages = [
        doctor1, // Dr. Permata Hatiku
        doctor2  // Dr. Putri Nurul Muthia
    ];

    return (
        <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            minHeight: isMobile ? "calc(100vh - 120px)" : "calc(100vh - 200px)",
            padding: isMobile ? "2rem 1rem" : "3rem",
            gap: isMobile ? "2rem" : "2rem",
            backgroundColor: "transparent"
        }}>
            {/* Image Slideshow - Left Side */}
            <div style={{
                flex: isMobile ? "none" : "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: isMobile ? "100%" : "50%",
                maxWidth: isMobile ? "100%" : "650px",
                order: isMobile ? -1 : 0 // Show slideshow first on mobile, then text
            }}>
                <ImageSlideshow images={slideshowImages} interval={5000} />
            </div>

            {/* Text Content - Right Side */}
            <div style={{
                flex: isMobile ? "none" : "1",
                textAlign: isMobile ? "center" : "left",
                width: "100%",
                maxWidth: isMobile ? "100%" : "600px",
                color: "#ffffff",
                padding: isMobile ? "0 1rem" : "0 0 0 3rem"
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
