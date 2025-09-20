// import React, { useState, useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { Chart } from "react-google-charts";
// import MyLogo from "../assets/logoblack.svg";
// import TheTheatreProject from "../assets/Dashboard/TheTheatreProject.png";
// import Navkars from "../assets/Dashboard/Navkars.png";
// import Kyari from "../assets/Dashboard/Kyari.png";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const stats = [
//     { label: "Total Fund Size", value: 200, prefix: "INR ", suffix: "Cr+" },
//     { label: "Startups Screened", value: 3500, suffix: "+" },
//     { label: "Startups Evaluated", value: 800, suffix: "+" },
//     { label: "Startups Funded", value: 10, suffix: "+" },
// ];
// const chartSlides = [
//     { name: "The Theatre Project", title: "Financial Growth", logo: TheTheatreProject, chartData: [["Year", "Value (in Cr)"], ["FY23", 3.80], ["FY24", 5.07], ["FY25", 9.64]], chartType: "LineChart" },
//     { name: "Kyari", title: "Financial Growth", logo: Kyari, chartData: [["Year", "Financial Growth (in Cr)"], ["FY23", 3.8], ["FY24", 12.8], ["FY25", 18.72]], chartType: "LineChart" },
//     { name: "Navars", title: "Financial Growth", logo: Navkars, chartData: [["Year", "Financial Growth(in Cr)"], ["FY23", 2.25], ["FY24", 5.85], ["FY25", 7.09]], chartType: "LineChart" }
// ];
// const pieChartData = [
//     ["Sector", "Value"], ["Deeptech", 130], ["Healthtech", 65], ["Cybersec", 60], ["Fintech", 54], ["D2C", 50], ["UAV & Robotics", 50], ["Cleantech", 45], ["Foodtech", 40], ["Other", 80],
// ];
// const pieChartColors = ['#F47A36', '#BA5B26', '#FFC7A8', '#916B55', '#FA9D79', '#4D1600', '#E64910', '#D98D62', '#8B4017'];

// function AnimatedNumber({ value, prefix = "", suffix = "" }) {
//     const ref = useRef(null);
//     useGSAP(() => {
//         const counter = { val: 0 };
//         gsap.to(counter, {
//             val: value, duration: 2.5, ease: "power2.out",
//             scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
//             onUpdate: () => { ref.current.innerText = `${prefix}${Math.floor(counter.val)}${suffix}`; },
//         });
//     }, { dependencies: [value, prefix, suffix] });
//     return (<span ref={ref} className="text-[#F47A36] font-primary text-3xl md:text-5xl">0{suffix}</span>);
// }

// export default function DashboardSection() {
//     const sectionRef = useRef(null);
//     const contentBoxRef = useRef(null);
//     const presentationButton = useRef(null);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const chartContentRef = useRef(null);
//     const chartTitleRef = useRef(null);
//     const chartLogoRef = useRef(null);
//     const [pieHeaderText, setPieHeaderText] = useState("Startups by Sector");
//     const pieHeaderRef = useRef(null);
//     const dataValues = pieChartData.slice(1).map(row => row[1]);
//     const totalValue = dataValues.reduce((sum, value) => sum + value, 0);

//     const pieChartOptions = {
//         backgroundColor: 'transparent',
//         legend: 'none',
//         pieSliceText: 'none',
//         sliceVisibilityThreshold: .03,
//         pieHole: 0.5,
//         colors: pieChartColors,
//         chartArea: { left: 10, top: 10, width: '90%', height: '90%' },
//         tooltip: { trigger: 'none' }, // Important to keep this to disable default tooltips
//     };

//     const handleLegendEnter = (sector, percentage) => {
//         if (pieHeaderText.startsWith(sector)) return;
//         gsap.to(pieHeaderRef.current, { autoAlpha: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: () => setPieHeaderText(`${sector}: ${percentage}%`) });
//     };
//     const handleLegendLeave = () => {
//         if (pieHeaderText === "Startups by Sector") return;
//         gsap.to(pieHeaderRef.current, { autoAlpha: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: () => setPieHeaderText("Startups by Sector") });
//     };

//     const handleSlideChange = (direction) => {
//         const newIndex = (currentSlide + direction + chartSlides.length) % chartSlides.length;
//         gsap.timeline().to([chartContentRef.current, chartTitleRef.current, chartLogoRef.current], { autoAlpha: 0, y: 15, duration: 0.4, ease: 'power2.in', onComplete: () => setCurrentSlide(newIndex) });
//     }

//     useGSAP(() => {
//         const button = presentationButton.current;
//         if (!button) return;
//         const svg = button.querySelector('svg');
//         const buttonEnter = () => { gsap.to(svg, { rotation: 45, duration: 0.5, ease: 'elastic.out(1, 0.75)' }); };
//         const buttonLeave = () => { gsap.to(svg, { rotation: 0, duration: 0.5, ease: 'elastic.out(1, 0.75)' }); };
//         button.addEventListener('mouseenter', buttonEnter);
//         button.addEventListener('mouseleave', buttonLeave);
        
//         return () => {
//             if(button) {
//                 button.removeEventListener('mouseenter', buttonEnter);
//                 button.removeEventListener('mouseleave', buttonLeave);
//             }
//         }
//     }, { scope: sectionRef });

//     useGSAP(() => {
//         gsap.fromTo([chartContentRef.current, chartTitleRef.current, chartLogoRef.current], 
//             { autoAlpha: 0, y: -15 }, 
//             { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
//         );
//     }, { dependencies: [currentSlide], scope: sectionRef });
    
//     useGSAP(() => {
//         gsap.fromTo(pieHeaderRef.current, 
//             { autoAlpha: 0, y: -10 }, 
//             { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }
//         );
//     }, { dependencies: [pieHeaderText], scope: sectionRef });

//     useLayoutEffect(() => {
//         const adjustScale = () => {
//             if (!sectionRef.current || !contentBoxRef.current) return;
//             const viewportWidth = window.innerWidth;
//             const viewportHeight = window.innerHeight;
//             const contentRect = contentBoxRef.current.getBoundingClientRect();
//             const sectionStyle = window.getComputedStyle(sectionRef.current);
//             const sectionPaddingX = parseFloat(sectionStyle.paddingLeft) + parseFloat(sectionStyle.paddingRight);
//             const sectionPaddingY = parseFloat(sectionStyle.paddingTop) + parseFloat(sectionStyle.paddingBottom);
//             const availableWidth = viewportWidth - sectionPaddingX;
//             const availableHeight = viewportHeight - sectionPaddingY;
//             const scaleX = availableWidth / contentRect.width;
//             const scaleY = availableHeight / contentRect.height;
//             const finalScale = Math.min(scaleX, scaleY, 1);

//             gsap.set(contentBoxRef.current, { scale: finalScale, transformOrigin: "center center" });
//         };
//         adjustScale();
//         window.addEventListener('resize', adjustScale);
//         return () => window.removeEventListener('resize', adjustScale);
//     }, []);

//     const activeSlide = chartSlides[currentSlide];

//     return (
//         <section ref={sectionRef} className="bg-black w-full text-brown-900 flex justify-center items-center py-6 px-4 md:py-10 md:px-4 min-h-screen">
//             <div ref={contentBoxRef} className="w-full max-w-[1200px] bg-[#FFC7A8] rounded-3xl p-6 md:p-8 shadow-lg flex flex-col gap-4 md:gap-8">
//                 <div className="w-full flex items-center justify-between flex-shrink-0">
//                     <img src={MyLogo} alt="ValleyNXT Ventures Logo" className="w-28 md:w-40" />
//                     <button ref={presentationButton} className="w-44 md:w-52 px-4 rounded-full flex-shrink-0 text-sm md:text-[15px] font-primary font-bold flex items-center justify-center gap-3 h-12 bg-[#F47A36] text-[#330000] transition-colors hover:bg-[#1C0800] hover:text-[#FFC7A8]">
//                         <span>Explore VN Club</span>
//                         <svg className="w-2 md:w-auto" height="18" viewBox="0 0 15 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.22732 0.771729L0.259766 2.75703L10.3514 12.9397L0.259766 23.1224L2.22732 25.1077L14.223 12.9397L2.22732 0.771729Z" /></svg>
//                     </button>
//                 </div>
//                 <div className="w-full flex-grow flex flex-col md:flex-row gap-8 md:gap-12 text-[#330000] min-h-0">
//                     <div className="w-full md:w-1/4 flex flex-col gap-6 min-h-0">
//                         <div>
//                             <h2 className="text-4xl md:text-5xl font-serifa leading-none">One Look<br />At Us</h2>
//                             <p className="text-base md:text-lg font-primary mt-4">What we have achieved is presented here.</p>
//                         </div>
//                         <div className="bg-[#1C0800] rounded-2xl px-4 py-6 flex-grow flex flex-col overflow-y-auto" onMouseLeave={handleLegendLeave}>
//                             <div className="w-full h-full flex flex-col items-center justify-center gap-2">
//                                 <div className="h-8 flex items-center flex-shrink-0">
//                                     <p ref={pieHeaderRef} className="text-center font-primary text-lg">
//                                         {pieHeaderText === "Startups by Sector" ? (
//                                             <>
//                                                 <span className="text-[#FFC7A8]">Startups by </span>
//                                                 <span className="font-serifa text-2xl ml-1.5 align-bottom text-[#F47A36]">Sector</span>
//                                             </>
//                                         ) : (
//                                             <span className="text-[#F47A36]">{pieHeaderText}</span>
//                                         )}
//                                     </p>
//                                 </div>
//                                 <div className="flex-shrink-0 w-36 h-36">
//                                     <Chart
//                                         chartType="PieChart"
//                                         width="100%"
//                                         height="100%"
//                                         data={pieChartData}
//                                         options={pieChartOptions}
//                                         loader={<div>...</div>}
//                                         chartEvents={[
//                                             {
//                                                 eventName: 'onmouseover',
//                                                 callback: ({ chartWrapper, row }) => {
//                                                     // This event provides the data row index directly.
//                                                     // row will be null if the mouse is not over a slice.
//                                                     if (row === null) return;
                                                    
//                                                     const dataTable = chartWrapper.getDataTable();
//                                                     // The row index corresponds to the data rows (after the header)
//                                                     const sector = dataTable.getValue(row, 0);
//                                                     const value = dataTable.getValue(row, 1);
//                                                     const percentage = ((value / totalValue) * 100).toFixed(1);
                                                    
//                                                     handleLegendEnter(sector, percentage);
//                                                 },
//                                             },
//                                             {
//                                                 eventName: 'onmouseout',
//                                                 callback: () => {
//                                                     handleLegendLeave();
//                                                 },
//                                             },
//                                         ]}
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-2 gap-x-5 gap-y-1.5 text-[11px] text-[#FFC7A8] p-2">
//                                     {pieChartData.slice(1).map(([sector, value], index) => {
//                                         const percentage = ((value / totalValue) * 100).toFixed(1);
//                                         return (
//                                             <div key={sector} onMouseEnter={() => handleLegendEnter(sector, percentage)} className="flex items-center gap-2 cursor-default p-1 rounded transition-colors hover:bg-[#4d16004d]">
//                                                 {/* ✅ Simplified color lookup using the map index */}
//                                                 <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: pieChartColors[index] }}></div>
//                                                 <span>{sector}</span>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full md:w-3/4 flex flex-col gap-6 min-h-0">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                             {stats.map((stat) => ( <div key={stat.label} className="bg-[#1C0800] text-center rounded-2xl p-6 flex flex-col justify-center"> <p className="text-[#FFC7A8] font-primary text-lg md:text-xl mb-1">{stat.label}</p> <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /> </div> ))}
//                         </div>
//                         <div className="bg-[#1C0800] rounded-2xl p-4 md:p-6 flex-grow flex flex-col min-h-[350px] md:min-h-0 overflow-hidden">
//                             <div className="flex justify-between items-center mb-2 md:mb-4 flex-shrink-0">
//                                 <p ref={chartTitleRef} className="text-[#FFC7A8] text-left font-primary text-lg md:text-xl">{activeSlide.title}</p>
//                                 <div className="flex gap-2">
//                                     <button onClick={() => handleSlideChange(-1)} className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors" aria-label="Previous Chart"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
//                                     <button onClick={() => handleSlideChange(1)} className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors" aria-label="Next Chart"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
//                                 </div>
//                             </div>
//                             <div className="flex-grow w-full h-full flex flex-col md:flex-row items-center gap-4">
//                                 <div ref={chartContentRef} className="w-full h-3/4 md:h-full md:w-3/4">
//                                     <Chart chartType={activeSlide.chartType} width="100%" height="100%" data={activeSlide.chartData} options={{ backgroundColor: "transparent", legend: { position: "none" }, hAxis: { textStyle: { color: "#FFC7A8" }, gridlines: { color: "rgba(255, 199, 168, 0.2)" } }, vAxis: { textStyle: { color: "#FFC7A8" }, gridlines: { color: "rgba(255, 199, 168, 0.2)" }, baselineColor: "transparent" }, colors: ["#F47A36"], chartArea: { backgroundColor: "transparent", left: 50, top: 20, width: '85%', height: '70%' }, curveType: "function", pointSize: 7, }} key={activeSlide.name} />
//                                 </div>
//                                 <div ref={chartLogoRef} className="w-full h-1/4 md:h-full md:w-1/4 flex items-center justify-center p-2">
//                                     <img src={activeSlide.logo} alt={`${activeSlide.name} Logo`} className="max-w-full max-h-16 md:max-h-24 object-contain hidden md:block" />
//                                     <p className="text-xl font-bold text-[#FFC7A8] block md:hidden">{activeSlide.name}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Chart } from "react-google-charts";
import MyLogo from "../assets/logoblack.svg";
import TheTheatreProject from "../assets/Dashboard/TheTheatreProject.png";
import Navkars from "../assets/Dashboard/Navkars.png";
import Kyari from "../assets/Dashboard/Kyari.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    { label: "Total Fund Size", value: 200, prefix: "INR ", suffix: "Cr+" },
    { label: "Startups Screened", value: 3500, suffix: "+" },
    { label: "Startups Evaluated", value: 800, suffix: "+" },
    { label: "Startups Funded", value: 10, suffix: "+" },
];
const chartSlides = [
    { name: "The Theatre Project", title: "Financial Growth", logo: TheTheatreProject, chartData: [["Year", "Value (in Cr)"], ["FY23", 3.80], ["FY24", 5.07], ["FY25", 9.64]], chartType: "LineChart" },
    { name: "Kyari", title: "Financial Growth", logo: Kyari, chartData: [["Year", "Financial Growth (in Cr)"], ["FY23", 3.8], ["FY24", 12.8], ["FY25", 18.72]], chartType: "LineChart" },
    { name: "Navars", title: "Financial Growth", logo: Navkars, chartData: [["Year", "Financial Growth(in Cr)"], ["FY23", 2.25], ["FY24", 5.85], ["FY25", 7.09]], chartType: "LineChart" }
];
const pieChartData = [
    ["Sector", "Value"], ["Deeptech", 130], ["Healthtech", 65], ["Cybersec", 60], ["Fintech", 54], ["D2C", 50], ["UAV & Robotics", 50], ["Cleantech", 45], ["Foodtech", 40], ["Other", 80],
];
const pieChartColors = ['#F47A36', '#BA5B26', '#FFC7A8', '#916B55', '#FA9D79', '#4D1600', '#E64910', '#D98D62', '#8B4017'];

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
    const ref = useRef(null);
    useGSAP(() => {
        const counter = { val: 0 };
        gsap.to(counter, {
            val: value, duration: 2.5, ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
            onUpdate: () => { ref.current.innerText = `${prefix}${Math.floor(counter.val)}${suffix}`; },
        });
    }, { dependencies: [value, prefix, suffix] });
    return (<span ref={ref} className="text-[#F47A36] font-primary text-3xl md:text-5xl">0{suffix}</span>);
}

export default function DashboardSection() {
    const sectionRef = useRef(null);
    const contentBoxRef = useRef(null);
    const presentationButton = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const chartContentRef = useRef(null);
    const chartTitleRef = useRef(null);
    const chartLogoRef = useRef(null);
    const [pieHeaderText, setPieHeaderText] = useState("Startups by Sector");
    const pieHeaderRef = useRef(null);
    const dataValues = pieChartData.slice(1).map(row => row[1]);
    const totalValue = dataValues.reduce((sum, value) => sum + value, 0);

    const pieChartOptions = {
        backgroundColor: 'transparent',
        legend: 'none',
        pieSliceText: 'none',
        sliceVisibilityThreshold: .03,
        pieHole: 0.5,
        colors: pieChartColors,
        chartArea: { left: 10, top: 10, width: '90%', height: '90%' },
        tooltip: { trigger: 'none' },
    };

    const handleLegendEnter = (sector, percentage) => {
        if (pieHeaderText.startsWith(sector)) return;
        gsap.to(pieHeaderRef.current, { autoAlpha: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: () => setPieHeaderText(`${sector}: ${percentage}%`) });
    };
    const handleLegendLeave = () => {
        if (pieHeaderText === "Startups by Sector") return;
        gsap.to(pieHeaderRef.current, { autoAlpha: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: () => setPieHeaderText("Startups by Sector") });
    };

    const handleSlideChange = (direction) => {
        const newIndex = (currentSlide + direction + chartSlides.length) % chartSlides.length;
        gsap.timeline().to([chartContentRef.current, chartTitleRef.current, chartLogoRef.current], { autoAlpha: 0, y: 15, duration: 0.4, ease: 'power2.in', onComplete: () => setCurrentSlide(newIndex) });
    }

    // ✅ FIX: Moved the scaling logic into useGSAP and wrapped it in matchMedia
    useGSAP(() => {
        const mm = gsap.matchMedia();

        // This logic will ONLY run on screens wider than 768px
        mm.add("(min-width: 768px)", () => {
            const adjustScale = () => {
                if (!sectionRef.current || !contentBoxRef.current) return;
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const contentRect = contentBoxRef.current.getBoundingClientRect();
                const sectionStyle = window.getComputedStyle(sectionRef.current);
                const sectionPaddingX = parseFloat(sectionStyle.paddingLeft) + parseFloat(sectionStyle.paddingRight);
                const sectionPaddingY = parseFloat(sectionStyle.paddingTop) + parseFloat(sectionStyle.paddingBottom);
                const availableWidth = viewportWidth - sectionPaddingX;
                const availableHeight = viewportHeight - sectionPaddingY;
                const scaleX = availableWidth / contentRect.width;
                const scaleY = availableHeight / contentRect.height;
                const finalScale = Math.min(scaleX, scaleY, 1);

                gsap.set(contentBoxRef.current, { scale: finalScale, transformOrigin: "center center" });
            };
            
            adjustScale();
            window.addEventListener('resize', adjustScale);
            
            // Cleanup function for when the media query no longer matches
            return () => {
                window.removeEventListener('resize', adjustScale);
                gsap.set(contentBoxRef.current, { clearProps: "scale,transformOrigin" }); // Resets the scale on mobile
            }
        });
        
        // Button hover animation (runs on all screen sizes)
        const button = presentationButton.current;
        if (!button) return;
        const svg = button.querySelector('svg');
        const buttonEnter = () => { gsap.to(svg, { rotation: 360, duration: 0.5, ease: 'power2.inOut' }); };
        const buttonLeave = () => { gsap.to(svg, { rotation: 0, duration: 0.5, ease: 'elastic.out(1, 0.75)' }); };
        button.addEventListener('mouseenter', buttonEnter);
        button.addEventListener('mouseleave', buttonLeave);
        
        return () => {
             mm.revert(); // Cleanup for matchMedia
            if(button) {
                button.removeEventListener('mouseenter', buttonEnter);
                button.removeEventListener('mouseleave', buttonLeave);
            }
        }
    }, { scope: sectionRef });

    useGSAP(() => {
        gsap.fromTo([chartContentRef.current, chartTitleRef.current, chartLogoRef.current], 
            { autoAlpha: 0, y: -15 }, 
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
        );
    }, { dependencies: [currentSlide], scope: sectionRef });
    
    useGSAP(() => {
        gsap.fromTo(pieHeaderRef.current, 
            { autoAlpha: 0, y: -10 }, 
            { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
    }, { dependencies: [pieHeaderText], scope: sectionRef });

    const activeSlide = chartSlides[currentSlide];

    return (
        <section ref={sectionRef} className="bg-black w-full text-brown-900 flex justify-center items-center py-6 px-4 md:py-10 md:px-4 min-h-screen">
            <div ref={contentBoxRef} className="w-full max-w-[1200px] bg-[#FFC7A8] rounded-3xl p-6 md:p-8 shadow-lg flex flex-col gap-4 md:gap-8">
                <div className="w-full flex items-center justify-between flex-shrink-0">
                    <img src={MyLogo} alt="ValleyNXT Ventures Logo" className="w-28 md:w-40" />
                    <a href="https://vclub.valleynxtventures.com/investor/signup/Mg==" ref={presentationButton} className="w-44 md:w-52 px-4 rounded-full flex-shrink-0 text-sm md:text-[15px] font-primary font-bold flex items-center justify-center gap-3 h-12 bg-[#F47A36] text-[#330000] transition-colors hover:bg-[#1C0800] hover:text-[#FFC7A8]">
                        <span>Explore VN Club</span>
                        <svg className="w-2 md:w-auto" height="18" viewBox="0 0 15 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.22732 0.771729L0.259766 2.75703L10.3514 12.9397L0.259766 23.1224L2.22732 25.1077L14.223 12.9397L2.22732 0.771729Z" /></svg>
                    </a>
                </div>
                <div className="w-full flex-grow flex flex-col md:flex-row gap-8 md:gap-12 text-[#330000] min-h-0">
                    <div className="w-full md:w-1/4 flex flex-col gap-6 min-h-0">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serifa leading-none">One Look<br />At Us</h2>
                            <p className="text-base md:text-lg font-primary mt-4">What we have achieved is presented here.</p>
                        </div>
                        <div className="bg-[#1C0800] rounded-2xl px-4 py-6 flex-grow flex flex-col overflow-y-auto" onMouseLeave={handleLegendLeave}>
                            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                <div className="h-8 flex items-center flex-shrink-0">
                                    <p ref={pieHeaderRef} className="text-center font-primary text-lg">
                                        {pieHeaderText === "Startups by Sector" ? (
                                            <>
                                                <span className="text-[#FFC7A8]">Startups by </span>
                                                <span className="font-serifa text-2xl ml-1.5 align-bottom text-[#F47A36]">Sector</span>
                                            </>
                                        ) : (
                                            <span className="text-[#F47A36]">{pieHeaderText}</span>
                                        )}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 w-36 h-36">
                                    <Chart chartType="PieChart" width="100%" height="100%" data={pieChartData} options={pieChartOptions} loader={<div>...</div>}
                                        chartEvents={[
                                            {
                                                eventName: 'onmouseover',
                                                callback: ({ chartWrapper, row }) => {
                                                    if (row === null) return;
                                                    const dataTable = chartWrapper.getDataTable();
                                                    const sector = dataTable.getValue(row, 0);
                                                    const value = dataTable.getValue(row, 1);
                                                    const percentage = ((value / totalValue) * 100).toFixed(1);
                                                    handleLegendEnter(sector, percentage);
                                                },
                                            },
                                            { eventName: 'onmouseout', callback: () => { handleLegendLeave(); }, },
                                        ]}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-x-5 gap-y-1.5 text-[11px] text-[#FFC7A8] p-2">
                                    {pieChartData.slice(1).map(([sector, value], index) => {
                                        const percentage = ((value / totalValue) * 100).toFixed(1);
                                        return (
                                            <div key={sector} onMouseEnter={() => handleLegendEnter(sector, percentage)} className="flex items-center gap-2 cursor-default p-1 rounded transition-colors hover:bg-[#4d16004d]">
                                                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: pieChartColors[index] }}></div>
                                                <span>{sector}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6 min-h-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat) => ( <div key={stat.label} className="bg-[#1C0800] text-center rounded-2xl p-6 flex flex-col justify-center"> <p className="text-[#FFC7A8] font-primary text-lg md:text-xl mb-1">{stat.label}</p> <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /> </div> ))}
                        </div>
                        <div className="bg-[#1C0800] rounded-2xl p-4 md:p-6 flex-grow flex flex-col min-h-[350px] md:min-h-0 overflow-hidden">
                            <div className="flex justify-between items-center mb-2 md:mb-4 flex-shrink-0">
                                <p ref={chartTitleRef} className="text-[#FFC7A8] text-left font-primary text-lg md:text-xl">{activeSlide.title}</p>
                                <div className="flex gap-2">
                                    <button onClick={() => handleSlideChange(-1)} className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors" aria-label="Previous Chart"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                    <button onClick={() => handleSlideChange(1)} className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors" aria-label="Next Chart"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                                </div>
                            </div>
                            <div className="flex-grow w-full h-full flex flex-col md:flex-row items-center gap-4">
                                <div ref={chartContentRef} className="w-full h-3/4 md:h-full md:w-3/4">
                                    <Chart chartType={activeSlide.chartType} width="100%" height="100%" data={activeSlide.chartData} options={{ backgroundColor: "transparent", legend: { position: "none" }, hAxis: { textStyle: { color: "#FFC7A8" }, gridlines: { color: "rgba(255, 199, 168, 0.2)" } }, vAxis: { textStyle: { color: "#FFC7A8" }, gridlines: { color: "rgba(255, 199, 168, 0.2)" }, baselineColor: "transparent" }, colors: ["#F47A36"], chartArea: { backgroundColor: "transparent", left: 50, top: 20, width: '85%', height: '70%' }, curveType: "function", pointSize: 7, }} key={activeSlide.name} />
                                </div>
                                <div ref={chartLogoRef} className="w-full h-1/4 md:h-full md:w-1/4 flex items-center justify-center p-2">
                                    <img src={activeSlide.logo} alt={`${activeSlide.name} Logo`} className="max-w-full max-h-16 md:max-h-24 object-contain hidden md:block" />
                                    <p className="text-xl font-bold text-[#FFC7A8] block md:hidden">{activeSlide.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}