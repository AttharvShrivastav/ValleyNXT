import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

import PageHero from '../components/PageHero'; // ✅ IMPORT: Added the PageHero component
import ProfileCard from '../components/ProfileCard';
import AnandSaklechaImage from '../assets/AnandSaklecha.png';
import DrMadhuImage from '../assets/DrMadhu.png';
import DrNikhilImage from '../assets/DrNikhil.png';
import MrSureshImage from '../assets/MrSureshImage.png';

import DrInderjitImage from '../assets/DrInderjit.png';
import DrNaziaImage from '../assets/DrNazia.png';
import MrApurvaImage from '../assets/MrApurva.png';

import HarshwardhanSaklechaImage from '../assets/1.png';
import DhairyaJainImage from '../assets/2.png';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// --- Static Data ---
const founders = [
  {
    id: 1,
    name: "CA Anand Saklecha",
    title: "Capitalizing Ideas",
    bio: "Veteran fund manager, structuring over ₹4,500 Cr in deals and guiding entrepreneurs from inception to IPO.",
    image: AnandSaklechaImage,
    linkedin: "#"
  },
  {
    id: 2,
    name: "Dr. Madhu Vasepalli",
    title: "Managing Partner",
    bio: "Serial healthtech entrepreneur and investor in 17+ startups. Mentor to founders at the intersection of tech and healthcare.",
    image: DrMadhuImage,
    linkedin: "#"
  },
  {
    id: 3,
    name: "Dr. Nikhil Agarwal",
    title: "Founder & Advisor",
    bio: "Architect behind India's leading incubators and 175+ startups. Pioneer in innovation ecosystems and startup policy.",
    image: DrNikhilImage,
    linkedin: "#"
  },
  {
    id: 4,
    name: "Mr. Suresh Goyal",
    title: "Partner & Fund Manager",
    bio: "Infrastructure finance leader with 30+ years experience. Scaled India's largest PPP platform and managed global assets.",
    image: MrSureshImage,
    linkedin: "#"
  }
];
const investmentTeam = [
    {
        id: 8,
        name: "CA Harshwardhan Saklecha",
        title: "Vice President",
        bio: "Chartered Accountant and AIF Fund Manager. Brings advanced skills in VC, financial modeling, and deal structuring.",
        image: HarshwardhanSaklechaImage,
        linkedin: "#"
    },
    {
        id: 9,
        name: "CS Dhairya Jain",
        title: "Investor Relation & Compliance Officer",
        bio: "Company Secretary with expertise in fund-raise, due diligence, and compliance. Experience handling global investments.",
        image: DhairyaJainImage,
        linkedin: "#"
    },
];
const advisory = [
    {
        id: 10,
        name: "Mr. Apurva Chamaria",
        title: "Global Head of VC & Startup Partnerships, Google",
        bio: "Top angel investor with 100+ startup investments and 10+ exits. Ecosystem builder shaping India’s tech landscape.",
        image: MrApurvaImage,
        linkedin: "#"
    },
    {
        id: 11,
        name: "Dr. Inderjit Singh",
        title: "Ex-Member of Parliament, Singapore",
        bio: "Co-founded a $2B unicorn; global startup leader and mentor. Supports deep tech and innovation ventures.",
        image: DrInderjitImage,
        linkedin: "#"
    },
    {
        id: 12,
        name: "Dr. Nazia M. Habib",
        title: "Professor, University of Cambridge",
        bio: "Expert in sustainable development and blended finance. Mentored global founders and mobilized $10M+ capital.",
        image: DrNaziaImage,
        linkedin: "#"
    },
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
        // ✅ CLEANUP: Removed the hero heading animation, as it's now handled by the PageHero component.
        
        // This animation for the profile cards remains.
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
            
            {/* ✅ CHANGE: Replaced the hardcoded hero with the reusable PageHero component */}
            <PageHero 
                subtitle="MEET OUR TEAM"
                titleLine1="CONNECTED TO THE VISIONARIES"
                titleLine2="shaping tomorrow's market"
                titleLine2Serif={true}
                buttonText="Contact us for available positions"
            />

            <TeamCategorySection title="THE FOUNDERS" members={founders} />
            <TeamCategorySection title="THE ADVISORY" members={advisory} />
            <TeamCategorySection title="THE INVESTMENT TEAM" members={investmentTeam} />
        </div>
    );
};

export default TeamsPage;