import React from "react";

const About: React.FC = () => {
    return (
        <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem"
        }}>
            <div style={{
                textAlign: "center",
                marginBottom: "2rem",
                padding: "2rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)"
            }}>
                <h1 style={{
                    color: "var(--about-main-title-color, #ffffff)",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    margin: 0
                }}>
                    About Permata Hatiku Medical Clinic
                </h1>
            </div>

            <div style={{ lineHeight: "1.8", color: "var(--about-body-text-color, #ffffff)", fontSize: "1.1rem" }}>
                <section style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                    <h2 style={{
                        color: "var(--about-section-header-color, #2E7BD6)",
                        marginBottom: "1rem",
                        fontSize: "1.8rem",
                        fontWeight: "600"
                    }}>
                        Our Story
                    </h2>
                    <p>
                        Permata Hatiku Medical Clinic was founded with a vision to provide exceptional healthcare services
                        that combine modern medical technology with compassionate, patient-centered care. Our journey began
                        when a group of dedicated healthcare professionals recognized the need for a clinic that truly puts
                        patients first, treating them not just as cases, but as valued individuals with unique healthcare needs.
                    </p>
                    <p>
                        Since our establishment, we have grown to become a trusted healthcare provider in our community,
                        serving thousands of patients with integrity, professionalism, and genuine care. Our commitment to
                        excellence has made us a cornerstone of healthcare in the region.
                    </p>
                </section>

                <section style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                    <h2 style={{
                        color: "var(--about-section-header-color, #2E7BD6)",
                        marginBottom: "1rem",
                        fontSize: "1.8rem",
                        fontWeight: "600"
                    }}>
                        Our Mission
                    </h2>
                    <p>
                        At Permata Hatiku, our mission is to deliver comprehensive, high-quality healthcare services that
                        improve the health and well-being of our patients. We strive to create a healing environment where
                        patients feel valued, respected, and empowered to take control of their health journey.
                    </p>
                    <p>
                        We believe that every patient deserves personalized attention and care that addresses their unique
                        needs. Our team works tirelessly to ensure that each patient receives the highest standard of medical
                        care, supported by cutting-edge technology and evidence-based practices.
                    </p>
                </section>

                <section style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                    <h2 style={{
                        color: "var(--about-section-header-color, #2E7BD6)",
                        marginBottom: "1rem",
                        fontSize: "1.8rem",
                        fontWeight: "600"
                    }}>
                        Our Values
                    </h2>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: window.innerWidth > 768 ? "repeat(2, 1fr)" : "1fr",
                        gap: "1.5rem",
                        marginTop: "1rem"
                    }}>
                        <div style={{
                            padding: "1.5rem",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "8px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderLeft: "4px solid var(--about-accent-color, #2E7BD6)"
                        }}>
                            <h3 style={{ color: "var(--about-accent-color, #2E7BD6)", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: "600" }}>
                                Compassion
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem" }}>
                                We treat every patient with empathy, understanding, and genuine care, recognizing that each
                                person has their own unique story and healthcare needs.
                            </p>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "8px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderLeft: "4px solid var(--about-accent-color, #2E7BD6)"
                        }}>
                            <h3 style={{ color: "var(--about-accent-color, #2E7BD6)", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: "600" }}>
                                Excellence
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem" }}>
                                We maintain the highest standards of medical practice, continuously updating our knowledge
                                and skills to provide the best possible care.
                            </p>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "8px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderLeft: "4px solid var(--about-accent-color, #2E7BD6)"
                        }}>
                            <h3 style={{ color: "var(--about-accent-color, #2E7BD6)", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: "600" }}>
                                Integrity
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem" }}>
                                We operate with honesty, transparency, and ethical principles in all our interactions with
                                patients, staff, and the community.
                            </p>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            borderRadius: "8px",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderLeft: "4px solid var(--about-accent-color, #2E7BD6)"
                        }}>
                            <h3 style={{ color: "var(--about-accent-color, #2E7BD6)", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: "600" }}>
                                Innovation
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.95rem" }}>
                                We embrace new technologies and treatment approaches to ensure our patients receive the most
                                advanced and effective healthcare solutions available.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={{
                    padding: "1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                    <h2 style={{
                        color: "var(--about-section-header-color, #2E7BD6)",
                        marginBottom: "1rem",
                        fontSize: "1.8rem",
                        fontWeight: "600"
                    }}>
                        Our Commitment to Community
                    </h2>
                    <p>
                        Permata Hatiku Medical Clinic is deeply committed to serving our community. We actively participate
                        in health education programs, wellness initiatives, and charitable activities that promote better
                        health outcomes for all. Our doors are always open to those in need, and we work closely with local
                        organizations to address healthcare disparities and improve access to quality medical care.
                    </p>
                    <p>
                        As we continue to grow and evolve, our dedication to providing exceptional healthcare services remains
                        unwavering. We look forward to serving you and your family with the same level of care and compassion
                        that has defined our clinic since day one.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
