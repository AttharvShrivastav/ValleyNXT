import React from 'react';
import FallbackLogo from '../assets/FallbackLogo.svg';

const ExpandedCard = ({ company, onClose, ...props }) => {
    return (
        // This container will be animated by Flip
        <div className="expanded-card-container fixed inset-0 flex justify-center items-center p-4 md:p-8 pointer-events-auto" {...props}>
            <div 
                className="expanded-card relative w-[90%] max-w-2xl aspect-video bg-black rounded-2xl border border-[#F85C20] p-8 flex flex-col justify-center items-center text-center"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Expanded Content */}
                <div className="logo-expanded w-1/4 h-[25%] mb-4 flex justify-center items-center">
                    <img 
                       src={company.logo || FallbackLogo} 
                       alt={`${company.name} logo`} 
                       className="max-w-full max-h-full object-contain"
                    />
                </div>
                <svg className="horizontal-line w-full max-w-[200px] my-4" height="2" viewBox="0 0 200 2">
                    <line x1="0" y1="1" x2="200" y2="1" stroke="#F47A36" strokeWidth="2" />
                </svg>
                <div className="details-content flex flex-col items-center">
                    <h3 className="company-name text-2xl md:text-3xl font-bold text-[#F47A36] mb-2">{company.name}</h3>
                    <p className="company-description text-sm md:text-base text-gray-200 leading-relaxed max-w-md">{company.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExpandedCard;