import React, { useState } from "react";
import logoPlaceholder from "../assets/phc-logo.png";

interface NavbarProps {
    setPage: (page: "home" | "services" | "appointment" | "success") => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems = [
        { id: "home", label: "Home", page: "home" as const },
        { id: "services", label: "Services", page: "services" as const },
        { id: "appointment", label: "Book", page: "appointment" as const }
    ];

    return (
        <nav style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: "1rem",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
        }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", cursor: "pointer" }} onClick={() => setPage("home")}>
                <img
                    src={logoPlaceholder}
                    alt="Permata Hatiku Clinic Logo"
                    style={{ height: "40px", width: "auto" }}
                />
                <div style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    lineHeight: "1.2",
                    whiteSpace: "pre-line"
                }}>
                    Permata{'\n'}Hatiku{'\n'}Medical{'\n'}Clinic
                </div>
            </div>
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
        </nav>
    );
};

export default Navbar;
