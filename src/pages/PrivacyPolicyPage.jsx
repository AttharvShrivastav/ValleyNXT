import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main">
            <PageHero titleLine1="Insights" titleLine2="& Events" subtitle="LATEST UPDATES" />
            <div className="flex-grow flex items-center justify-center p-8">
                <p className="text-xl font-light">Insights and Events feed placeholder</p>
            </div>
            <Footer />
        </main>
    );
};
export default PrivacyPolicyPage;