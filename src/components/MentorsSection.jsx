import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfileCard from '../components/ProfileCard'; 
import { useTheme } from '../context/ThemeProvider';

// --- UPDATED IMPORTS: Pointing to 'assets/Mentors' folder ---
// Make sure the file extensions (.png vs .jpg) match what you saved.
import RahulGargImage from '../assets/Mentors/RahulGarg.png';
import DeepikaNaharasImage from '../assets/Mentors/DeepikaNaharas.png';
import SanjeevRaoImage from '../assets/Mentors/SanjeevRao.png';
import SanjeevAgrawalImage from '../assets/Mentors/SanjeevAgrawal.png';
import UmeshSharmaImage from '../assets/Mentors/UmeshSharma.png';
import ArunKanodiyaImage from '../assets/Mentors/ArunKanodiya.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// --- Data: 6 Mentors ---
const mentors = [
  {
    id: 1,
    name: "Mr. Rahul Garg",
    title: "CEO, Moglix, Singapore",
    bio: "Leading one of Asia's largest B2B commerce platforms.",
    image: RahulGargImage,
    linkedin: "#"
  },
  {
    id: 2,
    name: "Mrs. Deepika Naharas",
    title: "Director KongBasile Consulting, Silicon Valley",
    bio: "Expert in bridging Silicon Valley innovation with global markets.",
    image: DeepikaNaharasImage,
    linkedin: "#"
  },
  {
    id: 3,
    name: "Mr. Sanjeev Rao",
    title: "Partner, Priscus Finance, Paris",
    bio: "Veteran in cross-border finance and strategic investments.",
    image: SanjeevRaoImage,
    linkedin: "#"
  },
  {
    id: 4,
    name: "Mr. Sanjeev Agrawal",
    title: "Ex- CEO/CFO/COO Standard Chartered Bank India/ASEAN",
    bio: "Veteran banker with leadership roles across India and ASEAN markets.",
    image: SanjeevAgrawalImage,
    linkedin: "#"
  },
  {
    id: 5,
    name: "CA. Umesh Sharma",
    title: "Chairman, AI Committee, ICAI",
    bio: "Driving AI adoption and standards within the accounting profession.",
    image: UmeshSharmaImage,
    linkedin: "#"
  },
  {
    id: 6,
    name: "CA. Arun Kanodiya",
    title: "Independent Director, Aether Industries",
    bio: "Expert in corporate governance and industrial strategy.",
    image: ArunKanodiyaImage,
    linkedin: "#"
  }
];

const MentorsSection = () => {
    const sectionRef = useRef(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useGSAP(() => {
        const cards = gsap.utils.toArray('.mentor-card');
        
        // Force refresh to ensure positions are correct after theme/layout changes
        ScrollTrigger.refresh();

        ScrollTrigger.batch(cards, {
            onEnter: batch => gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                overwrite: true,
                ease: "power2.out"
            }),
            start: "top 85%",
        });
        
        gsap.set(cards, { autoAlpha: 0, y: 50 });

    }, { 
        scope: sectionRef,
        // CRITICAL FIX: Re-run animation logic when theme changes
        dependencies: [theme], 
        revertOnUpdate: true 
    });

    return (
        <section ref={sectionRef} className="w-full bg-background py-20 px-6 sm:px-12">
            
            {/* CONTAINER: Matches other sections */}
            <div className="w-full max-w-[1400px] mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-primary font-normal mb-4 text-text-main`}>
                        Meet Our <span className="text-text-secondary">Mentors</span>
                    </h2>
                    <p className={`text-sm md:text-base font-primary max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Industry veterans and domain experts guiding the next generation of founders.
                    </p>
                </div>

                {/* GRID LAYOUT: 3 Columns x 2 Rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {mentors.map(person => (
                        <div key={person.id} className="mentor-card w-full flex justify-center max-w-[400px]">
                            <ProfileCard person={person} className="w-full" />
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default MentorsSection;