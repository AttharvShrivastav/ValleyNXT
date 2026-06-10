import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const SingleBlogPage = () => {
    const location = useLocation();
    const blog = location.state?.blog;

    // Fallback if data doesn't exist
    if (!blog) {
        return <Navigate to="/wiki" />;
    }

    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main overflow-x-hidden pt-12 md:pt-24 transition-colors duration-300">
            
            {/* Back Navigation */}
            <div className="w-[90%] md:w-[80%] max-w-4xl mx-auto pt-8 mb-[-2rem] relative z-20">
                <Link to="/wiki" className="inline-flex items-center space-x-2 text-sm font-primary text-subtext hover:text-accent transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Back to VNV Pedia</span>
                </Link>
            </div>

            {/* 1. HERO SECTION */}
            <div className="relative">
                <PageHero 
                    subtitle={`${blog.category} • ${blog.date} • ${blog.readTime}`}
                    titleLine1="ValleyNXT Weekly"
                    titleLine2={blog.content?.issueNumber || "Insights"}
                    titleLine2Serif={true}
                />
            </div>

            {/* 2. ARTICLE CONTENT */}
            <article className="flex-grow w-[90%] md:w-[80%] max-w-4xl mx-auto pb-24">
                
                {/* Main Article Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold leading-snug mb-10 text-text-main">
                    {blog.title}
                </h2>

                {/* Intro Paragraph */}
                <p className="text-base md:text-lg text-subtext font-secondary font-light leading-relaxed mb-10 transition-colors duration-300">
                    {blog.content?.intro}
                </p>

                {/* Funding Highlights mapped to Accelerator interactive card variables */}
                <div className="flex flex-col space-y-6 mb-12">
                    {blog.content?.highlights?.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col p-6 rounded-2xl group cursor-default transition-all duration-300 bg-card-bg-light border border-accent text-lightcard-text hover:bg-card-bg-dark hover:border-transparent hover:text-darkcard-text"
                        >
                            <p className="text-base font-secondary font-light leading-relaxed opacity-90 transition-colors duration-300 group-hover:text-darkcard-text group-hover:opacity-100">
                                <strong className="font-bold font-primary">{item.company}</strong>{' '}
                                <strong className="font-bold font-primary text-accent group-hover:text-white transition-colors">{item.amount}</strong>{' '}
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Conclusion / Summary mapped to the Dark Card fallback style for high contrast */}
                {blog.content?.summary && (
                    <div className="p-6 mb-12 rounded-2xl bg-card-bg-dark text-darkcard-text border-l-4 border-accent transition-colors duration-300">
                        <p className="text-base md:text-lg font-secondary font-light leading-relaxed italic opacity-90">
                            {blog.content.summary}
                        </p>
                    </div>
                )}

                {/* Contributors */}
                {blog.content?.contributors?.length > 0 && (
                    <div className="pt-8 border-t border-accent/20">
                        <p className="text-xs font-primary text-subtext tracking-widest uppercase mb-4">Contributors</p>
                        <div className="flex flex-wrap gap-2">
                            {blog.content.contributors.map((name, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-4 py-2 bg-card-bg-light text-lightcard-text text-xs font-medium font-secondary rounded-full border border-accent/20 transition-colors duration-300"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            <Footer />
        </main>
    );
};

export default SingleBlogPage;