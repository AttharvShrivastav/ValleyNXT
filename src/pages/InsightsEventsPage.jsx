import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { newsData, eventsData } from '../utils/insightsData';

const InsightsEventsPage = () => {
    const [activeEventTab, setActiveEventTab] = useState('ALL');
    const tabs = ["ALL", "DEMO DAYS", "WORKSHOPS", "INVESTOR SESSIONS", "SINGAPORE"];

    const filteredEvents = activeEventTab === 'ALL' 
        ? eventsData 
        : eventsData.filter(event => event.category === activeEventTab);

    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main overflow-x-hidden pt-32">
            
            <div className="relative">
                <PageHero 
                    subtitle="VALLEYNXT INSIGHTS"
                    titleLine1="IMPACT ACROSS"
                    titleLine2="Ecosystems"
                    titleLine2Serif={true}
                />
            </div>

            <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto flex-grow flex flex-col pb-24 mt-12">
                
                <section className="mb-24 w-full">
                    <h2 className="text-3xl md:text-4xl font-primary font-bold text-center mb-16">
                        In The <span className="font-serifa italic text-accent font-normal">News</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {newsData.map(item => (
                            <a 
                                key={item.id} 
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-container-bg border-2 border-accent/20 rounded-[2rem] p-6 flex flex-col hover:shadow-lg transition-shadow duration-300 group cursor-pointer block"
                            >
                                <div className="w-full h-48 rounded-2xl mb-6 bg-background/30"
                                     style={{
                                         backgroundImage: 'repeating-linear-gradient(45deg, var(--color-background) 25%, transparent 25%, transparent 75%, var(--color-background) 75%, var(--color-background)), repeating-linear-gradient(45deg, var(--color-background) 25%, var(--color-container-bg) 25%, var(--color-container-bg) 75%, var(--color-background) 75%, var(--color-background))',
                                         backgroundPosition: '0 0, 10px 10px',
                                         backgroundSize: '20px 20px',
                                         opacity: 0.6
                                     }}>
                                </div>

                                <div className="flex justify-between items-center text-[10px] md:text-xs font-primary font-bold uppercase text-text-main mb-3">
                                    <span>{item.entity}</span>
                                    <span className="text-text-main/70 font-medium normal-case">{item.date}</span>
                                </div>

                                <div className="w-full h-[1px] bg-accent/30 mb-6"></div>

                                <div className="text-accent/30 text-5xl font-serifa font-bold leading-[0.5] mb-2 text-left">
                                    “
                                </div>

                                <h3 className="text-lg md:text-xl font-primary font-bold leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-text-main/70 font-light mb-8 flex-grow">
                                    {item.excerpt}
                                </p>

                                <span className="text-accent font-primary font-bold text-xs uppercase tracking-wider flex items-center mt-auto w-max">
                                    VIEW CLIPPING
                                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="w-full">
                    <h2 className="text-3xl md:text-4xl font-primary font-bold text-center mb-12">
                        Glimpses of <br />
                        <span className="font-serifa italic text-accent font-normal">Our Ecosystem</span>
                    </h2>

                    <div className="w-full flex justify-center mb-12 px-4">
                        <div className="inline-flex w-full md:w-auto overflow-x-auto border border-accent rounded-full p-1.5 space-x-1 custom-scrollbar">
                            {tabs.map(tab => (
                                <button 
                                    key={tab}
                                    onClick={() => setActiveEventTab(tab)}
                                    className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full font-primary text-xs md:text-sm font-bold uppercase transition-colors whitespace-nowrap ${
                                        activeEventTab === tab 
                                        ? 'bg-accent text-background' 
                                        : 'text-text-main bg-transparent hover:bg-accent/10'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                        {filteredEvents.map(event => (
                            <div 
                                key={event.id} 
                                className={`w-full rounded-2xl overflow-hidden break-inside-avoid ${event.height}`}
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, var(--color-background) 25%, transparent 25%, transparent 75%, var(--color-background) 75%, var(--color-background)), repeating-linear-gradient(45deg, var(--color-background) 25%, var(--color-container-bg) 25%, var(--color-container-bg) 75%, var(--color-background) 75%, var(--color-background))',
                                    backgroundPosition: '0 0, 15px 15px',
                                    backgroundSize: '30px 30px',
                                    opacity: 0.6
                                }}
                            >
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default InsightsEventsPage;