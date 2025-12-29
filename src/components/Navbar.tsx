import React, { useState } from "react";
import logoPlaceholder from "../assets/phc-logo.png";

interface NavbarProps {
    setPage: (page: "home" | "services" | "appointment" | "success") => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: "home", label: "Home", page: "home" as const },
        { id: "services", label: "Services", page: "services" as const },
        { id: "appointment", label: "Book", page: "appointment" as const }
    ];

    const isMobile = window.innerWidth <= 768;

    return (
        <nav style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: isMobile ? "0.5rem" : "1rem",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
        }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: isMobile ? "0.25rem" : "0.5rem",
                    cursor: "pointer",
                    flex: 1
                }}
                onClick={() => setPage("home")}
            >
                <img
                    src={logoPlaceholder}
                    alt="Permata Hatiku Clinic Logo"
                    style={{ height: isMobile ? "30px" : "40px", width: "auto" }}
                />
                <div style={{
                    fontSize: isMobile ? "1rem" : "1.5rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    lineHeight: "1.2",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div>Permata</div>
                    <div>Hatiku</div>
                    <div>Medical</div>
                    <div>Clinic</div>
                </div>
            </div>

            {isMobile ? (
                // Mobile hamburger menu
                <div style={{ position: "relative" }}>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#ffffff",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                            padding: "0.5rem"
                        }}
                    >
                        ☰
                    </button>
                    {isMobileMenuOpen && (
                        <ul style={{
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            listStyle: "none",
                            padding: "1rem",
                            margin: 0,
                            borderRadius: "8px",
                            minWidth: "150px"
                        }}>
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => {
                                        setPage(item.page);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    style={{
                                        cursor: "pointer",
                                        color: "#ffffff",
                                        padding: "0.5rem",
                                        borderBottom: "1px solid rgba(255,255,255,0.2)"
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                // Desktop menu
                <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            onClick={() => setPage(item.page)}
                            style={{
                                cursor: "pointer",
                                color: hoveredItem === item.id ? "#90CAF9" : "#ffffff",
                                transition: "color 0.3s ease",
                                padding: "0.5rem"
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
