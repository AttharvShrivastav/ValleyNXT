// import React from 'react';
// import FallbackLogo from '../assets/FallbackLogo.svg';

// const CompanyCard = ({ company }) => {
//     return (
//         <div className="company-card relative bg-[#1C1C1C] rounded-2xl border border-gray-800 flex justify-center items-center cursor-pointer p-4">
//             {/* The content container */}
//             <div className="relative w-full h-full flex justify-center items-center">
//                 {/* Logo - always visible but fades when active */}
//                 <div className="logo-panel w-full h-full flex justify-center items-center transition-opacity duration-300">
//                     <img
//                         src={company.logo || FallbackLogo}
//                         alt={`${company.name} logo`}
//                         className="max-w-full max-h-[60%] object-contain"
//                     />
//                 </div>

//                 {/* Details panel - visibility is controlled by the parent's animation */}
//                 <div className="details-panel absolute inset-0 w-full h-full p-6 sm:p-8 flex flex-col justify-center text-left opacity-0 pointer-events-none">
//                     <h3 className="text-2xl sm:text-3xl font-bold text-[#F47A36] mb-3">{company.name}</h3>
//                     <p className="text-sm sm:text-base text-gray-200 leading-snug">{company.description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyCard;

import React from 'react';
import FallbackLogo from '../assets/FallbackLogo.svg';

const CompanyCard = ({ company, onClick, isExpanded, ...props }) => {
    return (
        <div 
            onClick={onClick}
            {...props}
            className="company-card relative aspect-[4/3] bg-black rounded-2xl border border-[#F85C20] flex justify-center items-center cursor-pointer p-4"
        >
            <div className="relative w-full h-full flex justify-center items-center">
                <div className={`logo-panel w-full h-full flex justify-center items-center transition-opacity duration-300 ${isExpanded ? 'opacity-10' : 'opacity-100'}`}>
                    <img 
                        src={FallbackLogo} 
                        alt={`${company.name} logo`} 
                        className="max-w-full max-h-[60%] object-contain"
                    />
                </div>

                <div className="details-panel absolute inset-0 w-full h-full p-6 sm:p-8 flex flex-col items-center justify-center text-left opacity-0 pointer-events-none">
                    <div>
                        <img src={FallbackLogo} alt="" />
                    </div>
                    <div className='text-center'>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F47A36] mb-3">{company.name}</h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-snug">{company.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;