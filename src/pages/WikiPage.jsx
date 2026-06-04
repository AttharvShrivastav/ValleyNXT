import React, { useState } from 'react';
import Footer from '../components/Footer';
import AnimatedCtaButton from '../components/AnimatedCtaButton'; // Adjust path if needed
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ReadMoreButton from '../components/ReadMoreButton';
import { allBlogsData } from '../utils/blogData';


const WikiPage = () => {
    // Production state for pagination
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    // Calculate pages and slice data
    const totalPages = Math.ceil((allBlogsData.length - 1) / itemsPerPage);
    const latestRelease = allBlogsData[0]; // Assuming the first item is the featured one
    const gridBlogs = allBlogsData.slice(1).slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main overflow-x-hidden pt-32">

            {/* 1. HERO SECTION */}
            <div className="relative">
                <PageHero
                    subtitle="VNV PEDIA"
                    titleLine1="INSIGHTS THAT"
                    titleLine2="shape innovation"
                    titleLine2Serif={true}
                />

            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto flex-grow flex flex-col pb-24">

                {/* 2. FEATURED BLOG (Latest Releases) */}
                <section className="mt-12 md:mt-16 w-full">
                    <h2 className="text-3xl md:text-4xl font-primary font-bold mb-8 md:mb-12">
                        Latest <span className="font-serifa text-accent font-normal">Releases</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row bg-container-bg border border-accent/20 rounded-[2.5rem] overflow-hidden">

                        {/* Left Content */}
                        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start">
                            <span className="px-4 py-1.5 rounded-full border border-accent text-[10px] text-accent tracking-widest uppercase mb-8">
                                Innovation
                            </span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold leading-snug mb-6">
                                Empowering Breakthroughs In Bharat’s Tech Ecosystem
                            </h3>
                            <p className="text-sm md:text-base text-text-main/70 font-light mb-8 max-w-lg">
                                The Bharat Breakthrough Fund Leverages The Proprietary MIB Framework To Bridge India's Technology Gap. Integrating Mentorship, Investment.........
                            </p>

                            <p className="text-[10px] text-accent tracking-widest uppercase mb-8">
                                May 22, 2026
                            </p>

                            {/* Replace the old static button with this: */}
                            <div className="mt-8">
                                <ReadMoreButton text="Read More" link={`/wiki`} />
                            </div>
                        </div>

                        {/* Right Image Placeholder */}
                        <div className="flex-1 p-4 md:p-8">
                            <div className="w-full h-64 lg:h-full min-h-[300px] rounded-3xl bg-black/5 dark:bg-white/10"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, var(--color-container-bg) 25%, transparent 25%, transparent 75%, var(--color-container-bg) 75%, var(--color-container-bg)), repeating-linear-gradient(45deg, var(--color-container-bg) 25%, var(--color-background) 25%, var(--color-background) 75%, var(--color-container-bg) 75%, var(--color-container-bg))',
                                    backgroundPosition: '0 0, 20px 20px',
                                    backgroundSize: '40px 40px'
                                }}>
                                {/* Replace the style above with an actual <img /> tag when ready */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. BLOG GRID (Read Vnvpedia) */}
                <section className="mt-24 md:mt-32 w-full">
                    <h2 className="text-3xl md:text-4xl font-primary font-bold mb-8 md:mb-12">
                        Read <span className="font-serifa text-accent font-normal">Vnvpedia</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {gridBlogs.map((blog, index) => (
        <Link 
            key={blog.id || index} 
            to={`/wiki/${blog.slug}`} 
            state={{ blog: blog }}
            className="flex flex-col bg-container-bg border border-accent/20 rounded-3xl p-8 group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            
            {/* Top Row: Badge, Date, Arrow */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 rounded-full border border-accent text-[9px] text-accent tracking-widest uppercase">
                        {blog.category}
                    </span>
                    <span className="text-[10px] text-accent/70 tracking-widest uppercase">
                        {blog.date}
                    </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v14M19 5H5" />
                    </svg>
                </div>
            </div>

            {/* Title & Excerpt */}
            <h3 className="text-xl font-primary font-bold leading-snug mb-4 pr-4">
                {blog.title}
            </h3>
            <p className="text-sm text-text-main/70 font-light mb-12 flex-grow">
                {blog.excerpt}
            </p>

            {/* Bottom Row: Divider, Index, Read Time */}
            <div className="mt-auto">
                <div className="w-full h-[1px] bg-accent/20 mb-4"></div>
                <div className="flex justify-between items-center text-[10px] text-text-main/50 font-medium tracking-widest uppercase">
                    <span>{(index + 1).toString().padStart(2, '0')}</span>
                    <span>{blog.readTime}</span>
                </div>
            </div>
        </Link>
    ))}
</div>

                    {/* Functional Pagination Dots */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center space-x-3 mt-16">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    aria-label={`Go to page ${index + 1}`}
                                    className={`transition-all duration-300 rounded-full cursor-pointer ${currentPage === index
                                            ? 'w-10 h-2.5 bg-accent'
                                            : 'w-2.5 h-2.5 bg-accent/30 hover:bg-accent/50'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default WikiPage;