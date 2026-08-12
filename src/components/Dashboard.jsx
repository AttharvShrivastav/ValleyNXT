import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// Import all necessary Recharts components
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// Import assets
import MyLogo from "../assets/logoblack.svg";
import TheTheatreProject from "../assets/logos/TheatreProject.png";
import Navkars from "../assets/logos/NavarsWhite.png";
import Kyari from "../assets/logos/Kyari.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    { label: "Startups Screened", value: 3500, suffix: "+" },
    { label: "Startups Evaluated", value: 800, suffix: "+" },
    { label: "Startups Pitched", value: 40, suffix: "+" },
    { label: "Startups Funded", value: 10, suffix: "+" },
];

// Helper function to reformat the chartData for recharts LineChart
const formatLineChartData = (chartData) => {
    // chartData is like: [["Year", "Value (in Cr)"], ["FY23", 3.80], ["FY24", 5.07], ["FY25", 9.64]]
    const dataKey = chartData[0][1]; // The name of the value, e.g., "Value (in Cr)"
    return chartData.slice(1).map(item => ({
        year: item[0], // X-axis label
        [dataKey]: item[1], // Y-axis value
    }));
};

const chartSlides = [
    { name: "The Theatre Project", title: "Financial Growth", logo: TheTheatreProject, chartData: [["Year", "Value (in Cr)"], ["FY23", 3.80], ["FY24", 5.07], ["FY25", 9.64]] },
    { name: "Kyari", title: "Financial Growth", logo: Kyari, chartData: [["Year", "Financial Growth (in Cr)"], ["FY23", 3.8], ["FY24", 12.8], ["FY25", 18.72]] },
    // 🐞 FIX: Corrected the header string from "Financial Growth(in Cr)" to "Financial Growth (in Cr)"
    { name: "Navars", title: "Financial Growth", logo: Navkars, chartData: [["Year", "Financial Growth (in Cr)"], ["FY23", 2.25], ["FY24", 5.85], ["FY25", 7.09]] }
];
const pieChartData = [
    ["Sector", "Value"], ["Deeptech", 130], ["Healthtech", 65], ["Cybersec", 60], ["Fintech", 54], ["D2C", 50], ["UAV & Robotics", 50], ["Cleantech", 45], ["Foodtech", 40], ["Other", 80],
];
const pieChartColors = [
    '#E64910', // A vibrant orange-red
    '#F47A36', // Original orange
    '#FF9F43', // Lighter orange
    '#FFAF6A', // Even lighter orange
    '#D98D62', // Muted orange-brown
    '#BA5B26', // Darker orange-brown
    '#8B4017', // Deep brown
    '#66300D', // Darkest brown
    '#FFC7A8', // Very light peach (for 'Other' or subtle contrast)
];

const formattedPieData = pieChartData.slice(1).map(item => ({ name: item[0], value: item[1] }));

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

// Custom Tooltip for the Line Chart
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const dataKey = payload[0].dataKey;
        return (
            <div className="bg-dashboard-internal-bg/80 p-2 border border-[#F47A36] rounded-md shadow-lg backdrop-blur-sm">
                <p className="text-[#F47A36] font-bold">{`Year: ${label}`}</p>
                {/* Displaying value with "Cr" suffix */}
                <p className="text-[#FFC7A8]">{`${dataKey.split(' ')[0]}: ${payload[0].value.toFixed(2)} Cr`}</p>
            </div>
        );
    }
    return null;
};

// Recharts Line Chart Component
function RechartsLineChart({ chartData }) {
    const data = formatLineChartData(chartData);
    const dataKey = chartData[0][1];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                // Increased left margin to ensure space for the Y-Axis label
                margin={{ top: 10, right: 30, left: 35, bottom: 20 }} 
            >
                <CartesianGrid stroke="rgba(255, 199, 168, 0.2)" strokeDasharray="3 3" vertical={false} />

                {/* X-Axis: Fixed visibility */}
                <XAxis 
                    dataKey="year" 
                    stroke="#FFC7A8" 
                    tickLine={false} 
                    // Explicitly set the axis line color and ensure it's drawn
                    axisLine={{ stroke: "#FFC7A8" }} 
                    padding={{ left: 20, right: 20 }}
                />

                {/* Y-Axis: Fixed visibility and label */}
                <YAxis 
                    stroke="#FFC7A8" 
                    tickLine={false} 
                    axisLine={false} 
                    domain={['auto', 'auto']}
                    // Simple Y-Axis Label using the 'label' prop
                    label={{ 
                        value: "Revenue (INR Crs)", 
                        angle: -90, 
                        position: 'insideLeft', 
                        fill: '#FFC7A8', 
                        style: { textAnchor: 'middle', fontSize: '12px' } 
                    }}
                />

                <Tooltip content={<CustomTooltip />} />

                {/* The Line component: Animation is disabled here */}
                <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke="#F47A36"
                    strokeWidth={3}
                    dot={{ fill: '#F47A36', stroke: '#4D1600', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive={false} // Disables the line drawing animation
                />
            </LineChart>
        </ResponsiveContainer>
    );
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
    const totalValue = formattedPieData.reduce((sum, item) => sum + item.value, 0);

    const handleLegendEnter = (sector, percentage) => {
        if (pieHeaderText.startsWith(sector)) return;
        gsap.to(pieHeaderRef.current, { autoAlpha: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: () => setPieHeaderText(`${sector}: ${percentage}%`) });
    };
    const handleLegendLeave = () => {
        if (pieHeaderText === "Startups by Sector") return;
        gsap.to(pieHeaderRef.current, { autoAlpha: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: () => setPieHeaderText("Startups by Sector") });
    };

    // RESTORED: Fade out animation before changing the state
    const handleSlideChange = (direction) => {
        const newIndex = (currentSlide + direction + chartSlides.length) % chartSlides.length;
        gsap.timeline().to([chartContentRef.current, chartTitleRef.current, chartLogoRef.current], { autoAlpha: 0, y: 15, duration: 0.4, ease: 'power2.in', onComplete: () => setCurrentSlide(newIndex) });
    }
    
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const adjustScale = () => {
                if (!sectionRef.current || !contentBoxRef.current) return;
                const finalScale = Math.min(window.innerWidth / 1200, window.innerHeight / 800, 1);
                gsap.set(contentBoxRef.current, { scale: finalScale, transformOrigin: "center center" });
            };
            adjustScale();
            window.addEventListener('resize', adjustScale);
            return () => {
                window.removeEventListener('resize', adjustScale);
                gsap.set(contentBoxRef.current, { clearProps: "scale,transformOrigin" });
            }
        });
        const button = presentationButton.current;
        if (!button) return;
        const svg = button.querySelector('svg');
        const buttonEnter = () => { gsap.to(svg, { rotation: 360, duration: 0.5, ease: 'power2.inOut' }); };
        const buttonLeave = () => { gsap.to(svg, { rotation: 0, duration: 0.5, ease: 'elastic.out(1, 0.75)' }); };
        button.addEventListener('mouseenter', buttonEnter);
        button.addEventListener('mouseleave', buttonLeave);
        return () => {
             mm.revert();
            if(button) {
                button.removeEventListener('mouseenter', buttonEnter);
                button.removeEventListener('mouseleave', buttonLeave);
            }
        }
    }, { scope: sectionRef });

    // RESTORED: Fade in animation after currentSlide state changes
    useGSAP(() => {
        gsap.fromTo([chartContentRef.current, chartTitleRef.current, chartLogoRef.current], { autoAlpha: 0, y: -15 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' });
    }, { dependencies: [currentSlide], scope: sectionRef });
    
    useGSAP(() => {
        gsap.fromTo(pieHeaderRef.current, { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    }, { dependencies: [pieHeaderText], scope: sectionRef });

    const activeSlide = chartSlides[currentSlide];

    return (
        <section ref={sectionRef} className="bg-background w-full text-brown-900 flex justify-center items-center py-6 px-4 md:py-10 md:px-4 min-h-screen">
            <div ref={contentBoxRef} className="w-full max-w-[1200px] bg-dashboard-bg rounded-3xl p-6 md:p-8 shadow-lg flex flex-col gap-4 md:gap-8">
                <div className="w-full flex items-center justify-between flex-shrink-0">
                    <img src={MyLogo} alt="ValleyNXT Ventures Logo" className="w-28 md:w-40" />
                    <a 
                        href="https://vclub.valleynxtventures.com/investor/signup/Mg==" 
                        ref={presentationButton} 
                        className="w-44 md:w-52 px-4 rounded-full flex-shrink-0 text-sm md:text-[15px] font-primary font-bold flex items-center justify-center gap-3 h-12 bg-button text-button-text transition-colors hover:bg-dashboard-internal-bg hover:text-[#FFC7A8] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                    >
                        <span>Explore VN Club</span>
                        <svg aria-hidden="true" focusable="false" className="w-2 md:w-auto" height="18" viewBox="0 0 15 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.22732 0.771729L0.259766 2.75703L10.3514 12.9397L0.259766 23.1224L2.22732 25.1077L14.223 12.9397L2.22732 0.771729Z" /></svg>
                    </a>
                </div>
                <div className="w-full flex-grow flex flex-col md:flex-row gap-8 md:gap-12 text-dashboard-text-dark min-h-0">
                    <div className="w-full md:w-1/4 flex flex-col gap-6 min-h-0">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serifa leading-none">One Look<br />At Us</h2>
                            <p className="text-base md:text-lg font-primary mt-4">What we have achieved is presented here.</p>
                        </div>
                        <div className="bg-dashboard-internal-bg rounded-2xl px-4 py-6 flex-grow flex flex-col overflow-y-auto" onMouseLeave={handleLegendLeave}>
                            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                <div className="h-8 flex items-center flex-shrink-0">
                                    <p ref={pieHeaderRef} className="text-center font-primary text-lg">
                                        {pieHeaderText === "Startups by Sector" ? ( <><span className="text-[#FFC7A8]">Startups by </span><span className="font-serifa text-2xl ml-1.5 align-bottom text-[#F47A36]">Sector</span></> ) : ( <span className="text-[#F47A36]">{pieHeaderText}</span> )}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 w-36 h-36">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={formattedPieData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={45}
                                                outerRadius={65}
                                                paddingAngle={2}
                                                onMouseEnter={(data) => {
                                                    const percentage = ((data.value / totalValue) * 100).toFixed(1);
                                                    handleLegendEnter(data.name, percentage);
                                                }}
                                            >
                                                {formattedPieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
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
                            {stats.map((stat) => ( <div key={stat.label} className="bg-dashboard-internal-bg text-center rounded-2xl p-6 flex flex-col justify-center"> <p className="text-[#FFC7A8] font-primary text-lg md:text-xl mb-1">{stat.label}</p> <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /> </div> ))}
                        </div>
                        <div className="bg-dashboard-internal-bg rounded-2xl p-4 md:p-6 flex-grow flex flex-col min-h-[350px] md:min-h-0 overflow-hidden">
                            <div className="flex justify-between items-center mb-2 md:mb-4 flex-shrink-0">
                                <div className=" w-full" ref={chartTitleRef}>
                                    <p className="text-[#FFC7a8] text-center font-primary text-lg md:text-xl">{activeSlide.title}</p>
                                    <p className="text-[#F47A36] text-center text-sm font-bold tracking-wider">MIB IMPACT</p>
                                </div>
                                <div className="flex gap-2">
                                    <button 
    onClick={() => handleSlideChange(-1)} 
    className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
    aria-label="Previous Chart"
><svg aria-hidden="true" focusable="false" className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                    <button 
    onClick={() => handleSlideChange(-1)} 
    className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
    aria-label="Previous Chart"
><svg aria-hidden="true" focusable="false" className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                                </div>
                            </div>
                            <div className="flex-grow w-full h-full flex flex-col md:flex-row items-center gap-4">
                                <div ref={chartContentRef} className="w-full h-3/4 md:h-full md:w-3/4">
                                     <RechartsLineChart chartData={activeSlide.chartData} key={activeSlide.name} />
                                </div>
                                <div ref={chartLogoRef} className="w-full h-1/4 md:h-full md:w-1/4 flex flex-col items-center justify-center p-2">
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