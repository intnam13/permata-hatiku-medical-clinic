import React, { useState } from "react";
import "./navbar.css";
import logoPlaceholder from "../assets/phc-logo.png";

interface NavbarProps {
    setPage: (page: "home" | "about" | "services" | "appointment" | "success") => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: "home", label: "Home", page: "home" as const },
        { id: "about", label: "About", page: "about" as const },
        { id: "services", label: "Services", page: "services" as const },
        { id: "appointment", label: "Book", page: "appointment" as const }
    ];

    const isMobile = window.innerWidth <= 768;

    return (
        <nav className="navbar">
            {/* Logo section - always on the left */}
            <div className="logo" onClick={() => setPage("home")}>
                <img
                    src={logoPlaceholder}
                    alt="Permata Hatiku Clinic Logo"
                />
                <div className="logo-text">
                    <div>Permata</div>
                    <div>Hatiku</div>
                    <div>Medical</div>
                    <div>Clinic</div>
                </div>
            </div>

            {isMobile ? (
                // Mobile hamburger menu
                <div className="mobile-menu">
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </button>
                    {isMobileMenuOpen && (
                        <ul className="mobile-dropdown">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="mobile-menu-item"
                                    onClick={() => {
                                        setPage(item.page);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                // Desktop centered menu - positioned in the center of the navbar
                <div className="desktop-menu">
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className="desktop-menu-item"
                                onClick={() => setPage(item.page)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
