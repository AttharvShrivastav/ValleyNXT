import React from "react";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

export const AccessibilityGrievancePage = () => {
    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main overflow-x-hidden pt-32">

            {/* HERO SECTION */}
            <div className="relative">
                <PageHero
                    subtitle="Accessibility Grievance"
                    titleLine1="DIGITAL ACCESSIBILITY GRIEVANCE"
                    titleLine2="redressal mechanism"
                    titleLine2Serif={true}
                />
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-[90%] md:w-[85%] max-w-5xl mx-auto flex-grow flex flex-col pb-24 mt-4">

                {/* Outlined Content Box */}
                <div className="bg-container-bg border-[3px] border-accent rounded-[2rem] p-8 md:p-12 lg:p-16 w-full">

                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-xl md:text-2xl font-primary font-bold mb-3">
                            Our Commitment
                        </h2>

                        <p className="text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                            At{" "}
                            <span className="text-accent font-medium">
                                ValleyNXT Ventures
                            </span>
                            , accessibility is part of our responsibility toward
                            transparent and inclusive communication. We strive to
                            ensure that our website and digital information are
                            accessible to all users, including persons with
                            disabilities.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-xl md:text-2xl font-primary font-bold mb-3">
                            How to Share Feedback
                        </h2>

                        <p className="text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                            If you face any difficulty while using our website,
                            accessing information, navigating pages, reading
                            content, or using any digital feature, please let us
                            know. Your feedback helps us improve accessibility
                            across our digital platforms.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-10">
                        <h2 className="text-xl md:text-2xl font-primary font-bold mb-4">
                            Dedicated Channel
                        </h2>

                        <div className="space-y-2 text-sm md:text-base font-primary text-text-main/80">
                            <p>
                                <strong className="font-bold text-text-main">
                                    Point of Contact:
                                </strong>{" "}
                                Compliance Officer
                            </p>

                            <p>
                                <strong className="font-bold text-text-main">
                                    Email:
                                </strong>{" "}
                                <a
                                    href="mailto:dhairya@valleynxtventures.com"
                                    className="hover:text-accent transition-colors underline underline-offset-4"
                                >
                                    dhairya@valleynxtventures.com
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-10">
                        <h2 className="text-xl md:text-2xl font-primary font-bold mb-4">
                            Escalation Matrix
                        </h2>

                        <p className="text-sm md:text-base font-primary text-text-main/80 mb-6 leading-relaxed">
                            If your grievance is not resolved through the primary
                            contact channel, you may escalate the matter through
                            the following contact:
                        </p>

                        <div className="text-sm md:text-base font-primary text-text-main/80 space-y-2">
                            <p>
                                <strong className="font-bold text-text-main">
                                    Level 1 Escalation
                                </strong>
                            </p>

                            <p>
                                <strong className="font-bold text-text-main">
                                    Email:
                                </strong>{" "}
                                <a
                                    href="mailto:madhu@valleynxtventures.com"
                                    className="hover:text-accent transition-colors underline underline-offset-4"
                                >
                                    madhu@valleynxtventures.com
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-10">
                        <h2 className="text-xl md:text-2xl font-primary font-bold mb-4">
                            Response Timeline
                        </h2>

                        <p className="text-sm md:text-base font-primary text-text-main/80 mb-3">
                            We aim to:
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base font-primary text-text-main/80 marker:text-text-main">
                            <li>
                                Acknowledge accessibility-related complaints
                                within 5 business days.
                            </li>

                            <li>
                                Provide a response or resolution within 21
                                business days.
                            </li>

                            <li>
                                Clearly communicate with the complainant if a
                                complex issue requires additional time.
                            </li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-primary font-bold mb-3">
                            Need Help Accessing Information?
                        </h2>

                        <p className="text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                            If you experience any difficulty accessing
                            information on our website or digital platforms,
                            please contact us through the dedicated accessibility
                            grievance channel above.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
};