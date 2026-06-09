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
import AdityaSharmaImage from '../assets/AdityaSharma.png';
import AnkitSaxenaImage from '../assets/AnkitSaxena.png';
import Footer from '../components/Footer';


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// --- Static Data ---
const founders = [
  {
        id: 1,
        name: "Dr. Madhu Vasepalli",
        title: "Founder and Managing Partner",
        bio: "Serial Healthtech entrepreneur and investor in 17+ Indian American startups, having founded and mentored 12+ ventures while guiding tech founders via Shark Tank and panels in India's ecosystem.",
        image: DrMadhuImage,
        linkedin: "https://www.linkedin.com/in/dr-madhu-vasepalli-mds-43a24812/"
      },
      {
        id: 2,
        name: "Dr. Nikhil Agarwal",
        title: "Founder & Advisor",
        bio: "MD of FITT at IIT Delhi empowering 175+ startups, former leader of top-ranked SIIC incubator at IIT Kanpur with 300+ startups, Head of C3iHub, ex-CEO drafting Andhra Pradesh's first startup policy, and Founder of Entrepreneur Café supporting 45,000+ entrepreneurs globally.",
        image: DrNikhilImage,
        linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
      },
    {
      id: 3,
      name: "CA Anand Saklecha",
      title: "Founder and Head of Investment Committee",
      bio: "ICAI Startup and MSME Committee member, having 25+ years of experience in advising over 500 MSMEs and Startups. Serves as MD & CEO of ASCO Capital, a boutique investment banking company, and Founder and Head of IC.",
      image: AnandSaklechaImage,
      linkedin: "https://www.linkedin.com/in/anand-saklecha-18a57716/"
    },
    {
      id: 4,
      name: "Mr. Suresh Goyal",
      title: "Partner & Fund Manager",
      bio: "Infrastructure finance veteran with 30+ years in investing and asset management, former MD & CEO scaling NHIT to ₹48,000 Cr PPP platform and leading Macquarie’s funds across India-Southeast Asia, expert in boardrooms, policy, and capital markets.",
      image: MrSureshImage,
      linkedin: "https://www.linkedin.com/in/suresh-goyal-4534364/"
    }
];

const investmentTeam = [
    {
        id: 14, // Assigned a new unique ID
        name: "Ankit Saxena",
        title: "Head Acceleration",
        bio: "Startup acceleration and investment leader focusing on driving profitability above valuation. Formerly led investments at SIIC IIT Kanpur and served as VP of Investments at FITT, IIT Delhi, bringing extensive experience in entrepreneurship promotion and scaling government-backed innovation ecosystems.",
        image: AnkitSaxenaImage,
        linkedin: "https://www.linkedin.com/in/ankitsaxena771/"
    },
    {
        id: 8,
        name: "CA Harshwardhan Saklecha",
        title: "Vice President",
        bio: "Vice President at ValleyNXT Ventures, expert in venture capital, financial modeling, deal structuring, investment banking, and alternative investments, with Management Development Program from ISB Hyderabad.",
        image: HarshwardhanSaklechaImage,
        linkedin: "https://www.linkedin.com/in/harshwardhan-saklecha/"
    },
    {
        id: 9,
        name: "CS Dhairya Jain",
        title: "Investor Relation & Compliance Officer",
        bio: "Company Secretary (ICSI) at ValleyNXT Ventures specializing in investor relations and compliance, handling fund-raising, due diligence, FEMA, valuation, IP, and offshore entities in US, UK, Singapore for seamless governance.",
        image: DhairyaJainImage,
        linkedin: "https://www.linkedin.com/in/jaindhairya/"
    },
    {
        id: 13,
        name: "Aditya Sharma",
        title: "Investment Associate",
        bio: "Venture capital professional with 1.5+ years in early-stage deeptech, consumer, mobility, fintech investments, skilled in due diligence, modeling, valuation, and founder support on strategy and fundraising; MBA Finance & Analytics (BML Munjal) and B.Com.",
        image: AdityaSharmaImage,
        linkedin: "https://www.linkedin.com/in/aditya-sharma88/"
    },
];


const advisory = [
    {
        id: 10,
        name: "Dr. Apurva Chamaria",
        title: "Global Head of VC & Startup Partnerships, Google",
        bio: "Top angel investor with 100+ startup investments and 10+ exits. Ecosystem builder shaping India's tech landscape.",
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
        {/* ✅ FINAL FIX: Using Flexbox with `justify-center` provides the most robust and adaptive centering for any number of cards. */}
        <div className="flex flex-wrap justify-center gap-6">
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
                titleLine1="Visionary Leaders"
                titleLine2="shaping tomorrow"
                titleLine2Serif={true}
                // buttonText="Contact us for available positions"
            />

            <TeamCategorySection title="THE LEADERS" members={founders} />
            <TeamCategorySection title="THE ADVISORS" members={advisory} />
            <TeamCategorySection title="THE INVESTMENT TEAM" members={investmentTeam} />
            <Footer />
        </div>
    );
};

export default TeamsPage;