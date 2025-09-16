import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

import ProfileCard from '../components/ProfileCard';
import AnandSaklechaImage from '../assets/AnandSaklecha.png';

gsap.registerPlugin(ScrollTrigger, SplitText);

// --- Static Data ---
const founders = [
    { id: 1, name: "CA Anand Saklecha", title: "Capitalizing Ideas", bio: "Bio text for Anand Saklecha.", image: AnandSaklechaImage },
    { id: 2, name: "Founder Two", title: "Chief Visionary", bio: "Bio text for Founder Two.", image: 'https://i.ibb.co/L5hYJmN/person2.png' },
    { id: 3, name: "Founder Three", title: "Lead Strategist", bio: "Bio text for Founder Three.", image: 'https://i.ibb.co/c8m6w7p/person3.png' },
    { id: 4, name: "Founder Four", title: "Growth Hacker", bio: "Bio text for Founder Four.", image: AnandSaklechaImage },
];
const advisory = [
    { id: 5, name: "Advisor One", title: "Industry Expert", bio: "Bio text for Advisor One.", image: AnandSaklechaImage },
    { id: 6, name: "Advisor Two", title: "Market Analyst", bio: "Bio text for Advisor Two.", image: 'https://i.ibb.co/L5hYJmN/person2.png' },
    { id: 7, name: "Advisor Three", title: "Legal Counsel", bio: "Bio text for Advisor Three.", image: 'https://i.ibb.co/c8m6w7p/person3.png' },
];
const investmentTeam = [
    { id: 8, name: "Investor One", title: "Portfolio Manager", bio: "Bio text for Investor One.", image: null },
    { id: 9, name: "Investor Two", title: "Due Diligence", bio: "Bio text for Investor Two.", image: AnandSaklechaImage },
];


const TeamCategorySection = ({ title, members }) => (
    <section className="w-full max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-normal font-primary text-[#FFC7A8] text-center mb-12">{title}</h2>
        <div className="flex flex-wrap justify-center gap-8">
            {members.map(person => (
                <ProfileCard key={person.id} person={person} className="profile-card" />
            ))}
        </div>
    </section>
);


const TeamsPage = () => {
    const pageRef = useRef(null);
    
    useGSAP(() => {
        const heroHeading = pageRef.current.querySelector('.hero-heading');
        const split = new SplitText(heroHeading, { type: "words,chars", wordsClass: "word" });
        gsap.from(split.words, {
            duration: 0.8,
            yPercent: 110,
            ease: 'power3.out',
            stagger: 0.05,
        });

        const cards = gsap.utils.toArray('.profile-card');
        cards.forEach(card => {
            gsap.from(card, {
                autoAlpha: 0,
                y: 70,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });

    }, { scope: pageRef });

    return (
        <div ref={pageRef} className="bg-black text-white">
            {/* --- CHANGE IS ON THIS LINE --- */}
            <div className="h-[54vh] font-primary w-full flex flex-col justify-center items-center text-center px-4">
                <p className="text-lg font-semibold text-[#916B55] mb-2">MEET OUR TEAM</p>
                <div className="overflow-hidden mb-8">
                    <h1 className="hero-heading font-primary font-normal text-5xl md:text-6xl text-[#FFC7A8] leading-tight">
                        <span className='font-bold'> CONNECTED TO THE VISIONARIES</span>
                        <br />
                        <span className='font-serifa font-normal text-7xl md:text-7xl text-[#F47A36]'>
                            shaping tomorrow's market
                        </span>
                    </h1>
                </div>
                <a href="#" className="px-8 py-3 bg-[#F47A36] text-[#FFC7A8] font-semibold rounded-full hover:bg-opacity-80 transition-colors">
                    Contact us for available positions
                </a>
            </div>

            <TeamCategorySection title="THE FOUNDERS" members={founders} />
            <TeamCategorySection title="THE ADVISORY" members={advisory} />
            <TeamCategorySection title="THE INVESTMENT TEAM" members={investmentTeam} />
        </div>
    );
};

export default TeamsPage;