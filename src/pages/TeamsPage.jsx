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
        name: "Dr. Madhu Vasepalli",
        title: "Founder and Managing Partner",
        bio: "Investor in 17+ Indian and American startups and a serial healthtech entrepreneur. Founded and mentored 12+ ventures, including Ocimum Clinics, Yira Healthcare, BHS Robotics, and DEEP Trust. Actively participates in India’s startup ecosystem through Shark Tank events and panel discussions, guiding tech-first founders on innovation and growth.",
        image: DrMadhuImage,
        linkedin: "https://www.linkedin.com/in/dr-madhu-vasepalli-mds-43a24812/"
      },
      {
        id: 2,
        name: "Dr. Nikhil Agarwal",
        title: "Founder & Advisor",
        bio: "As MD of FITT at IIT Delhi, empowered 175+ startups leading in innovation. Led SIIC at IIT Kanpur, building India’s largest tech incubator with 300+ startups, ranked #1 in NIRF Innovation Ranking 2023. Headed C3iHub, India’s first cybersecurity hub, and served as former CEO of Andhra Pradesh Innovation, drafting the state’s first startup policy. Founded Entrepreneur Café, creating a global network across 110 cities supporting 45,000+ entrepreneurs.",
        image: DrNikhilImage,
        linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
      },
    {
      id: 3,
      name: "CA Anand Saklecha",
      title: "Founder and Head of Investment Committee",
      bio: "As an ICAI MSME & Startups Committee Co-opted Member, brings 25+ years of experience in deal structuring, IPOs, and startup investments. Serves as MD & CEO of ASCO Capital, a boutique investment banking company, and Founder and Head of IC. Has structured ₹4,500+ Cr in corporate finance across 1,000+ projects, consulted 500+ companies across 50+ industries in 10+ countries, and leverages diversified global exposure with strong investor networks.",
      image: AnandSaklechaImage,
      linkedin: "https://www.linkedin.com/in/anand-saklecha-18a57716/"
    },
    {
      id: 4,
      name: "Mr. Suresh Goyal",
      title: "Partner & Fund Manager",
      bio: "Finance veteran with 30+ years in infrastructure investing and asset management. As former MD & CEO of NHIT, scaled India’s largest PPP road platform to ₹48,000 Cr and led Macquarie’s Infrastructure Funds across India and Southeast Asia. Brings deep expertise in boardrooms, policy, and capital markets for public and private sector investments.",
      image: MrSureshImage,
      linkedin: "https://www.linkedin.com/in/suresh-goyal-4534364/"
    }
];
const investmentTeam = [
    {
        id: 8,
        name: "CA Harshwardhan Saklecha",
        title: "Vice President",
        bio: "Chartered Accountant and AIF Fund Manager. Brings advanced skills in VC, financial modeling, and deal structuring.",
        image: HarshwardhanSaklechaImage,
        linkedin: "https://www.linkedin.com/in/harshwardhan-saklecha/"
    },
    {
        id: 9,
        name: "CS Dhairya Jain",
        title: "Investor Relation & Compliance Officer",
        bio: "Company Secretary with expertise in fund-raise, due diligence, and compliance. Experience handling global investments.",
        image: DhairyaJainImage,
        linkedin: "https://www.linkedin.com/in/jaindhairya/"
    },
];
const advisory = [
    {
        id: 10,
        name: "Mr. Apurva Chamaria",
        title: "Global Head of VC & Startup Partnerships, Google",
        bio: "Top angel investor with 100+ startup investments and 10+ exits. Ecosystem builder shaping India’s tech landscape.",
        image: MrApurvaImage,
        linkedin: "https://www.linkedin.com/in/apurvachamaria/"
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
        linkedin: "https://www.linkedin.com/in/naziamhabib/"
    },
];

const TeamCategorySection = ({ title, members }) => (
    <section className="w-full max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-normal font-primary text-text-main text-center mb-12">{title}</h2>
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

        const cards = gsap.utils.toArray('.profile-card');
        cards.forEach(card => {
            gsap.from(card, {
                autoAlpha: 0,
                y: 70,
                opacity: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });

    }, { scope: pageRef });

    return (
        <div ref={pageRef} className="bg-background text-text-main">
            
            {/* ✅ CHANGE: Replaced the hardcoded hero with the reusable PageHero component */}
            <PageHero 
                subtitle="MEET OUR TEAM"
                titleLine1="THE FOURTH PILLAR"
                titleLine2="of our story"
                titleLine2Serif={true}
                buttonText="Contact us for available positions"
            />

            <TeamCategorySection title="THE LEADERS" members={founders} />
            <TeamCategorySection title="THE ADVISORY" members={advisory} />
            <TeamCategorySection title="THE INVESTMENT TEAM" members={investmentTeam} />
        </div>
    );
};

export default TeamsPage;