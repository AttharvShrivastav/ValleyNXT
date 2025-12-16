import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Content for the FAQ section
const faqData = [
    {
        question: "What is ValleyNXT Ventures and what is its objective?",
        answer: "ValleyNXT Ventures is an early-stage venture platform focused on backing bold and innovative founders building transformative technologies. Our objective is to support startups that drive self-reliance, innovation, and sustainable growth across emerging sectors."
    },
    {
        question: "Who can be part of ValleyNXT Ventures?",
        answer: "Entrepreneurs, innovators, and early-stage founders with scalable, tech-driven ideas can become part of ValleyNXT Ventures's ecosystem. We also collaborate with angel investors, mentors, and industry experts who share our vision for enabling deep-tech and impact-led innovation."
    },
    {
        question: "How can we connect with ValleyNXT Ventures?",
        answer: "You can reach us through our website's Contact or Apply section, email us at info@valleynxt.com, or follow our updates on LinkedIn. Founders can also submit their startup pitch decks directly via our online form for evaluation."
    },
    {
        question: "How many companies are part of ValleyNXT Ventures's portfolio?",
        answer: "ValleyNXT Ventures has invested in 10+ portfolio companies spanning sectors like deep-tech, healthtech, fintech, and sustainability — with several more in the pipeline."
    },
    {
        question: "At what stage does ValleyNXT Ventures invest?",
        answer: "We primarily invest at the pre-seed to Series A stages, supporting founders from idea validation to market expansion."
    },
    {
        question: "What type of startups does ValleyNXT Ventures focus on?",
        answer: "Our focus areas include deep-tech, AI, healthtech, SaaS, and sustainability-driven innovations that solve real-world challenges and have global potential."
    },
    {
        question: "Does ValleyNXT Ventures provide only funding or also mentorship?",
        answer: "Beyond capital, ValleyNXT Ventures provides hands-on support, mentorship, access to industry experts, and investor networks to help startups scale sustainably."
    },
    {
        question: "What makes ValleyNXT Ventures different from other venture funds?",
        answer: "ValleyNXT Ventures stands out by backing founders early, pairing them with mentors who've built before, and giving them real market access — not red tape. With global connections and deep India roots, we enable startups to scale faster and smarter."
    },
    {
        question: "Where is ValleyNXT Ventures based?",
        answer: "ValleyNXT Ventures is headquartered in India, with a growing network of partners, investors, and mentors across global innovation hubs."
    }
];

// This is a sub-component for individual FAQ items to keep the logic clean.
const FaqItem = ({ item, index, activeIndex, handleToggle }) => {
    const answerRef = useRef(null);
    const iconRef = useRef(null);
    const isOpen = activeIndex === index;

    // useGSAP hook to animate the height and icon rotation based on the open state
    useGSAP(() => {
        gsap.to(answerRef.current, {
            height: isOpen ? 'auto' : 0,
            duration: 0.5,
            ease: 'power3.inOut',
            overwrite: 'auto'
        });
        gsap.to(iconRef.current, {
            rotation: isOpen ? 45 : 0,
            duration: 0.3,
            ease: 'power2.inOut'
        });
    }, [isOpen]);

    return (
        // ✅ CHANGE: Replaced `border-b` with a full border, rounded corners, margin, and overflow-hidden.
        <div className="border border-accent/30 mb-3 overflow-hidden">
            <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full px-6 py-3 text-left transition-colors hover:bg-accent/5"
                aria-expanded={isOpen}
            >
                <span className="text-lg md:text-lg font-medium font-primary text-text-main">
                    {item.question}
                </span>
                <div ref={iconRef} className="relative w-5 h-5 flex-shrink-0 ml-4">
                    {/* Plus icon made with spans */}
                    <span className="absolute inset-0 w-full h-0.5 bg-accent top-1/2 -translate-y-1/2"></span>
                    <span className="absolute inset-0 w-0.5 h-full bg-accent left-1/2 -translate-x-1/2"></span>
                </div>
            </button>
            <div ref={answerRef} className="overflow-hidden h-0">
                {/* ✅ CHANGE: Adjusted padding to be symmetrical (`px-6`). */}
                <p className="px-6 pb-6 text-base text-text-main/80 leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

// This is the main component you will import into your page.
const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        // This allows clicking an open item to close it.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-primary text-text-main text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="w-full">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            index={index}
                            activeIndex={activeIndex}
                            handleToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;