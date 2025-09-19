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

const lineChartOptions = {
  backgroundColor: "transparent",
  legend: { position: "none" },
  hAxis: { textStyle: { color: "#FFC7A8" }, gridlines: { color: "rgba(255, 199, 168, 0.2)" } },
  vAxis: { textStyle: { color: "#FFC7A8" }, gridlines: { color: "rgba(255, 199, 168, 0.2)" }, baselineColor: "transparent" },
  colors: ["#F47A36"],
  chartArea: { backgroundColor: "transparent", left: 50, top: 20, width: '85%', height: '70%' },
  curveType: "function",
  pointSize: 7,
};

const pieChartData = [
  ["Sector", "Value"],
  ["Deeptech", 130],
  ["Healthtech", 65],
  ["Cybersec", 60],
  ["Fintech", 54],
  ["D2C", 50],
  ["UAV & Robotics", 50],
  ["Cleantech", 45],
  ["Foodtech", 40],
  ["Other", 80],
];

const pieChartOptions = {
    backgroundColor: 'transparent',
    legend: 'none',
    pieSliceText: 'none',
    pieHole: 0.4,
    colors: ['#F47A36', '#BA5B26', '#FFC7A8', '#916B55', '#FA9D79', '#4D1600', '#E64910', '#D98D62', '#8B4017'],
    chartArea: { left: 10, top: 10, width: '90%', height: '90%' },
    tooltip: { showColorCode: true },
};

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
     const ref = useRef(null);
     useGSAP(() => {
          const counter = { val: 0 };
          gsap.to(counter, {
               val: value,
               duration: 2.5,
               ease: "power2.out",
               scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
               onUpdate: () => { ref.current.innerText = `${prefix}${Math.floor(counter.val)}${suffix}`; },
          });
     }, { scope: ref, dependencies: [value, prefix, suffix] });
     return (<span ref={ref} className="text-[#F47A36] font-primary text-3xl md:text-5xl">0{suffix}</span>);
}

const PieChart = () => (
    <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={pieChartData}
        options={pieChartOptions}
        loader={<div>Loading Chart...</div>}
    />
);

export default function DashboardSection() {
     const container = useRef(null);
     const statCards = useRef([]);
     const presentationButton = useRef(null);
     const buttonSvg = useRef(null);
     const [currentSlide, setCurrentSlide] = useState(0);

     const handleSlideChange = (direction) => {
        const newIndex = (currentSlide + direction + chartSlides.length) % chartSlides.length;
        setCurrentSlide(newIndex);
     }

     useGSAP(() => {
        statCards.current.forEach((el) => {
            if (!el) return;
            const enter = () => gsap.to(el, { scale: 1.04, duration: 0.18, ease: "power1.out" });
            const leave = () => gsap.to(el, { scale: 1, duration: 0.22, ease: "power1.out" });
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });
        const button = presentationButton.current;
        const svg = buttonSvg.current;
        const svgPath = svg.querySelector('path');
        const enterButton = () => {
            gsap.to(button, { backgroundColor: '#1C0800', color: '#FFC7A8', duration: 0.3, ease: 'power1.in' });
            gsap.to(svg, { rotation: 360, duration: 0.5, ease: 'power2.inOut' });
            gsap.to(svgPath, { fill: '#FFC7A8', duration: 0.3, ease: 'power1.in' });
        };
        const leaveButton = () => {
            gsap.to(button, { backgroundColor: '#F47A36', color: '#330000', duration: 0.3, ease: 'power1.out' });
            gsap.to(svg, { rotation: 0, duration: 0.5, ease: 'power2.inOut' });
            gsap.to(svgPath, { fill: '#330000', duration: 0.3, ease: 'power1.out' });
        };
        button.addEventListener('mouseenter', enterButton);
        button.addEventListener('mouseleave', leaveButton);
     }, { scope: container });
     
     const activeSlide = chartSlides[currentSlide];

     return (
          <section ref={container} className="bg-black min-h-screen w-full text-brown-900 flex justify-center items-center py-10 px-4">
               <div className="w-full max-w-[1200px] h-auto md:h-[90vh] md:max-h-[800px] bg-[#FFC7A8] rounded-3xl p-6 md:p-8 shadow-lg flex flex-col gap-4 md:gap-8">
                    <div className="w-full flex items-center justify-between">
                         <div className="logo"><img src={MyLogo} alt="ValleyNXT Ventures Logo" className="w-28 md:w-40" /></div>
                         <button ref={presentationButton} className="w-44 md:w-52 px-4 rounded-full flex-shrink-0 text-sm md:text-[15px] font-primary font-bold flex items-center justify-evenly h-12 bg-[#F47A36] text-[#330000]">
                              <p>Explore VN Club</p>
                              <svg ref={buttonSvg} className="w-2 md:w-auto" height="18" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.22732 0.771729L0.259766 2.75703L10.3514 12.9397L0.259766 23.1224L2.22732 25.1077L14.223 12.9397L2.22732 0.771729Z" fill="#330000" /></svg>
                         </button>
                    </div>
                    <div className="w-full flex-grow flex flex-col md:flex-row gap-8 md:gap-12 text-[#330000] min-h-0">
                         <div className="w-full md:w-1/4 flex flex-col gap-6">
                              <div>
                                   {/* ✅ CHANGE: Reduced font sizes to prevent overflow on large screens */}
                                   <h2 className="text-4xl md:text-5xl font-serifa leading-none">
                                        One look<br /> At Us
                                   </h2>
                                   <p className="text-base md:text-lg font-primary mt-4">
                                        What have we done till now is presented to you here
                                   </p>
                                   <a href="#" className="text-base md:text-lg font-primary text-[#F47A36] mt-4 inline-block hover:text-[#1C0800]" >
                                        Get to know us better!
                                   </a>
                              </div>
                              <div className="bg-[#1C0800] rounded-2xl p-6 flex-grow flex flex-col">
                                   <p className="text-[#FFC7A8] text-center font-primary text-xl">Startups by <span className="font-serifa text-2xl text-[#F47A36]">sector</span></p>
                                   <div className="w-full flex-grow flex items-center justify-center mt-4">
                                        <PieChart />
                                   </div>
                              </div>
                         </div>
                         <div className="w-full md:w-3/4 flex flex-col gap-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                   {stats.map((stat, index) => (
                                        <div key={stat.label} ref={(el) => (statCards.current[index] = el)} className="bg-[#1C0800] text-center rounded-2xl p-6 flex flex-col justify-center transform-gpu transition-transform">
                                             <p className="text-[#FFC7A8] font-primary text-lg md:text-xl mb-1">{stat.label}</p>
                                             <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                        </div>
                                   ))}
                              </div>
                              <div className="bg-[#1C0800] rounded-2xl p-4 md:p-6 flex-grow flex flex-col min-h-[300px] md:min-h-[150px]">
                                <div className="flex justify-between items-center mb-2 md:mb-4 flex-shrink-0">
                                    <p className="text-[#FFC7A8] text-left font-primary text-lg md:text-xl">{activeSlide.title}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleSlideChange(-1)} className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors" aria-label="Previous Chart"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                        <button onClick={() => handleSlideChange(1)} className="p-2 rounded-full bg-[#4D1600] hover:bg-[#F47A36] transition-colors" aria-label="Next Chart"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                                    </div>
                                </div>
                                <div className="flex-grow w-full h-full">
                                    <div className="w-full h-full flex flex-col md:flex-row items-center gap-4">
                                        <div className="w-full h-3/4 md:h-full md:w-3/4">
                                            <Chart
                                                chartType={activeSlide.chartType}
                                                width="100%"
                                                height="100%"
                                                data={activeSlide.chartData}
                                                options={lineChartOptions}
                                                key={currentSlide}
                                            />
                                        </div>
                                        <div className="w-full h-1/4 md:h-full md:w-1/4 flex items-center justify-center p-2">
                                            <img src={activeSlide.logo} alt={`${activeSlide.name} Logo`} className="max-w-full max-h-16 md:max-h-24 object-contain hidden md:block"/>
                                            <p className="text-xl font-bold text-[#FFC7A8] block md:hidden">{activeSlide.name}</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}