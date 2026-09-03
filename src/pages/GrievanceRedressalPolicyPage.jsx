import React from "react";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const SectionHeading = ({ children }) => (
    <h2 className="text-xl md:text-2xl font-primary font-bold mb-4">
        {children}
    </h2>
);

const Paragraph = ({ children, className = "" }) => (
    <p
        className={`text-sm md:text-base font-primary text-text-main/80 leading-relaxed ${className}`}
    >
        {children}
    </p>
);

const GrievanceRedressalPolicyPage = () => {
    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main overflow-x-hidden pt-32">

            {/* HERO */}
            <div className="relative">
                <PageHero
                    subtitle="INVESTOR POLICIES"
                    titleLine1="GRIEVANCE REDRESSAL"
                    titleLine2="Policy"
                    titleLine2Serif={true}
                />
            </div>

            {/* CONTENT */}
            <div className="w-[90%] md:w-[85%] max-w-5xl mx-auto flex-grow flex flex-col pb-24 mt-4">

                <div className="bg-container-bg border-[3px] border-accent rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16 w-full">

                    {/* DOCUMENT DETAILS */}
                    <div className="mb-12 pb-8 border-b border-accent/20">
                        <div className="space-y-2 text-sm md:text-base font-primary text-text-main/80">
                            <p>
                                <strong className="font-bold text-text-main">
                                    Fund:
                                </strong>{" "}
                                Bharat Breakthrough Fund I
                            </p>

                            <p>
                                <strong className="font-bold text-text-main">
                                    Trust:
                                </strong>{" "}
                                ValleyNXT Ventures Trust
                            </p>

                        </div>
                    </div>

                    {/* A */}
                    <section className="mb-12">
                        <SectionHeading>A. Background</SectionHeading>

                        <Paragraph>
                            The Securities and Exchange Board of India (“SEBI”) vide SEBI
                            (Alternative Investment Funds) Regulations, 2012 (“AIF
                            Regulations”) and the following circulars, has mandated
                            Investment Manager to address all investor grievances and
                            prescribes an intermediary (including AIF), by itself or through
                            the investment manager or sponsor, to lay down the procedure
                            for resolution of disputes between the investors, AIF,
                            Investment Manager or Sponsor through arbitration or any such
                            mechanism as mutually decided between the investors and the AIF.
                        </Paragraph>

                        <ul className="list-disc pl-5 md:pl-7 mt-6 space-y-3 text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                            <li>
                                SEBI Circular No. CIR/MIRSD/3/2014 dated August 28, 2014
                                on Information regarding Grievance Redressal Mechanism.
                            </li>

                            <li>
                                SEBI Master Circular No.
                                SEBI/HO/AFD-1/AFD-1-PoD/P/CIR/2024/39dated May 7, 2024
                                for Alternative Investment Funds (AIFs)
                            </li>

                            <li>
                                SEBI Master Circular No.
                                SEBI/HO/OIAE/OIAE_IAD-3/P/CIR/2023/195 dated December
                                28, 2023 for Online Resolution of Disputes in the Indian
                                Securities Market
                            </li>

                            <li>
                                SEBI Circular No.
                                SEBI/HO/OIAE/IGRD/CIR/P/2023/156 dated September 20,
                                2023 on Redressal of investor grievances through the SEBI
                                Complaint Redressal (SCORES) Platform and linking it to
                                Online Dispute Resolution platform.
                            </li>
                        </ul>
                    </section>

                    {/* B */}
                    <section className="mb-12">
                        <SectionHeading>B. Purpose</SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                ValleyNXT Management LLP (“Investment Manager”) is acting
                                as the investment manager to ValleyNXT Ventures Trust
                                (“Trust”), organised in India and registered with SEBI as a
                                Category I Alternative Investment Fund (sub-category
                                Venture Capital Fund), and various schemes launched under
                                the Trust from time to time including its first scheme -
                                Bharat Breakthrough Fund I.
                            </Paragraph>

                            <Paragraph>
                                Investment Manager believes that investor service is a
                                vital element for sustained business growth and wants to
                                ensure that the investors receive exemplary service.
                                Prompt and efficient service is essential to retaining
                                existing relationships and therefore investor satisfaction
                                becomes critical to Investment Manager. Investor queries
                                and complaints constitute an important voice of investor,
                                and this policy details grievance handling through a
                                structured grievance redressal framework. Grievance
                                redressal is supported by a review mechanism, to minimize
                                the recurrence of similar issues in future.
                            </Paragraph>

                            <Paragraph>
                                In compliance with the aforesaid requirements, Investment
                                Manager has framed the Investor Grievance Redressal Policy
                                (the “Policy”) to lay down the grievance redressal
                                framework and the dispute resolution mechanism it will
                                follow in the event an investor raises a grievance with
                                respect to the activities of the fund. The Policy will be
                                read in accordance with the provisions of the Contribution
                                Agreements (as entered and will be entered from time to
                                time and to the extent relevant in the current context) and
                                the latter will prevail in case of any differences.
                            </Paragraph>
                        </div>
                    </section>

                    {/* C */}
                    <section className="mb-12">
                        <SectionHeading>C. Objective</SectionHeading>

                        <ol className="list-decimal pl-5 md:pl-7 space-y-3 text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                            <li>
                                To ensure that all the investors are treated fairly at all
                                times;
                            </li>

                            <li>
                                To deal with all the complaints raised by the investors in
                                a timely manner;
                            </li>

                            <li>
                                To make the investors aware about all the avenues of
                                grievance redressal available to them for the resolution of
                                their complaint(s);
                            </li>

                            <li>
                                To warrant that all the queries and complaints are treated
                                efficiently and fairly.
                            </li>
                        </ol>
                    </section>

                    {/* D */}
                    <section className="mb-12">
                        <SectionHeading>D. Scope</SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                A grievance is defined under this Policy as a written or
                                verbal expression of dissatisfaction against the operation
                                of the fund or Investment Manager and its employees
                                resulting from a potential damage or wrongdoing to an
                                investor or from a violation of SEBI guidelines or related
                                laws/regulations which may or may not request for a claim
                                for compensation.
                            </Paragraph>

                            <Paragraph>
                                Grievances will include allegations such as failure to
                                disclose conflicts of interest, misrepresentations, etc.
                                Such grievances may be regarding processing of drawdown
                                transactions, distribution of units etc. Investor
                                feedbacks, queries or clarifications will not be considered
                                as instances of complaint or grievance.
                            </Paragraph>

                            <Paragraph>
                                Such grievances if not addressed in due course will hamper
                                the fund’s reputation and functioning. Hence, this Policy
                                provides for the framework to be adopted by Investment
                                Manager with respect to effective redressal, in the event
                                of any investor grievance.
                            </Paragraph>
                        </div>
                    </section>

                    {/* E */}
                    <section className="mb-12">
                        <SectionHeading>
                            E. Grievance Redressal Framework
                        </SectionHeading>

                        <div className="space-y-10">

                            {/* Investment Manager */}
                            <div>
                                <h3 className="text-base md:text-lg font-primary font-bold mb-4">
                                    • Registration of investor’s grievance with Investment Manager
                                </h3>

                                <div className="space-y-5">
                                    <Paragraph>
                                        Investors can seek clarifications to their query
                                        and are further entitled to make a complaint in
                                        writing, orally or telephonically. Any grievances
                                        received from the investors will be directed and
                                        acknowledged by the Compliance Officer of the
                                        fundInvestor Relation Officer. Investment Manager
                                        shall address such grievance promptly within a time
                                        period of 21 (twenty-one) calendar days from the
                                        date of receipt of the grievance.
                                    </Paragraph>

                                    <div className="space-y-3 text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                                        <p>
                                            <strong className="text-text-main font-bold">
                                                Contact Centre:
                                            </strong>{" "}
                                            Investors can contact the Compliance Officer
                                            named in the Private Placement Memorandum of
                                            the respective fund
                                        </p>

                                        <p>
                                            <strong className="text-text-main font-bold">
                                                Email:
                                            </strong>{" "}
                                            info@valleynxtventures.com
                                        </p>

                                        <p>
                                            <strong className="text-text-main font-bold">
                                                Letter:
                                            </strong>{" "}
                                            Investors can write to Investment Manager with
                                            their query or complaint at the below given
                                            address:
                                        </p>

                                        <p>
                                            Plot Number - 195 Scheme No.- 78 Part-II, Near
                                            Daisy Dales School, Indore, Madhya Pradesh,
                                            India, 452001
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SCORES */}
                            <div>
                                <h3 className="text-base md:text-lg font-primary font-bold mb-4">
                                    • Registration of investor’s grievance on the SEBI Complaints Redress System (SCORES) website
                                </h3>

                                <div className="space-y-5">
                                    <Paragraph>
                                        Without prejudice to anything stated above, any
                                        investor may further register their grievance/
                                        complaint through SCORES (SEBI Complaints
                                        Redress System) available at
                                        http://scores.sebi.gov.in, post which SEBI may
                                        forward the complaint to Investment Manager and
                                        Investment Manager will suitably address the same.
                                    </Paragraph>

                                    <Paragraph>
                                        Upon receiving complaints through the SCORES
                                        platform, Investment Manager will ensure its
                                        resolution within 21 (twenty-one) calendar days
                                        date of receipt of such complaint. During such
                                        period, the investor will be kept duly informed of
                                        the status and actions taken.
                                    </Paragraph>

                                    <Paragraph>
                                        Investors may also send their complaints to:
                                        Office of Investor Assistance and Education,
                                        Securities and Exchange Board of India, SEBI
                                        Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla
                                        Complex, Bandra (E), Mumbai – 400051.
                                    </Paragraph>
                                </div>
                            </div>

                            {/* DISPUTE */}
                            <div>
                                <h3 className="text-base md:text-lg font-primary font-bold mb-4">
                                    • Dispute resolution mechanism
                                </h3>

                                <Paragraph>
                                    Any dispute unresolved by the above internal grievance
                                    redressal mechanism of Investment Manager, may be
                                    submitted to arbitration under the Arbitration and
                                    Conciliation Act, 1996. The arbitration shall be held
                                    in accordance with the terms of the Contribution
                                    Agreement. The dispute resolution mechanism between
                                    Investment Manager and/ or the trustee and the investors
                                    of the fund will be as specified in the relevant fund
                                    documents and will be complied with at all times. The
                                    investor may register itself on the SMART ODR portal
                                    https://smartodr.in/ for online dispute resolution.
                                </Paragraph>
                            </div>

                            {/* INTERNAL */}
                            <div>
                                <h3 className="text-base md:text-lg font-primary font-bold mb-6">
                                    • Internal mechanism for handling Queries/Complaints
                                </h3>

                                <div className="space-y-7">

                                    <div>
                                        <h4 className="font-primary font-bold text-sm md:text-base mb-3">
                                            a) Resolution of Grievances
                                        </h4>

                                        <Paragraph>
                                            Investment Manager after receiving the
                                            complaint is responsible for ensuring that the
                                            query / complaint is resolved to the investor’s
                                            satisfaction and must attempt to offer the
                                            investor alternate solutions, however if the
                                            investor remains unsatisfied with the
                                            resolution, he can escalate the issue through
                                            the grievance redressal mechanism.
                                        </Paragraph>
                                    </div>

                                    <div>
                                        <h4 className="font-primary font-bold text-sm md:text-base mb-3">
                                            b) Timeline for handling the queries
                                        </h4>

                                        <Paragraph>
                                            Queries/ complaints are investigated within
                                            the stipulated timelines for handling queries/
                                            complaints received at the different levels of
                                            escalation. Certain types of queries/
                                            complaints, involving fraud, legal inputs and
                                            third party (other banks/ aggregator), needing
                                            more time for investigation, are acknowledged
                                            accordingly and the turnaround time is
                                            communicated to the investors.
                                        </Paragraph>
                                    </div>

                                    <div>
                                        <h4 className="font-primary font-bold text-sm md:text-base mb-3">
                                            c) Staff training on handling complaints
                                        </h4>

                                        <Paragraph>
                                            The Compliance Officer and their team are
                                            specially trained for handling queries/
                                            complaints by trainers. Training includes both
                                            operations and soft skills, as different
                                            investors perceive and react differently to the
                                            aspects of complaint handling. The staff is
                                            encouraged to have an open attitude towards
                                            service recovery and winning the investor’s
                                            confidence.
                                        </Paragraph>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* F */}
                    <section className="mb-12">
                        <SectionHeading>
                            F. Disclosure of Queries/ Complaints
                        </SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                Queries/ complaints with the resolution time will be
                                uploaded on the website or intimated via email on a monthly
                                basis, for information of investors.
                            </Paragraph>

                            <Paragraph>
                                For effective monitoring, Investment Manager will also
                                maintain data on investor complaints as per prescribed
                                format, which shall be compiled latest within 7 (seven)
                                days from the end of quarter.
                            </Paragraph>
                        </div>
                    </section>

                    {/* G */}
                    <section className="mb-12">
                        <SectionHeading>G. Maintenance of Records</SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                All documents relating to investors grievances and
                                resolutions, including escalated matters will be maintained
                                for records. Investment Manager will submit periodic
                                reports to SEBI/ the trustee on the complaints received,
                                status and steps taken to address the same.
                            </Paragraph>

                            <Paragraph>
                                The same shall also be updated in respective Private
                                Placement Memorandum (PPM), etc. as may be required under
                                AIF Regulations, as amended from time to time.
                            </Paragraph>
                        </div>
                    </section>

                    {/* H */}
                    <section className="mb-12">
                        <SectionHeading>H. Review of Complaint</SectionHeading>

                        <ul className="list-disc pl-5 md:pl-7 space-y-3 text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
                            <li>
                                The Compliance Officer shall regularly monitor and review
                                complaints according to its nature, originating branch,
                                against a particular employee and/or sub‐brokers,
                                authorized person etc. and on the basis of such analysis,
                                inform the management to take adequate steps to strengthen
                                the systems.
                            </li>

                            <li>
                                Investment Manager shall review the status of the pending
                                complaints.
                            </li>
                        </ul>
                    </section>

                    {/* I */}
                    <section>
                        <SectionHeading>I. Review of the Policy</SectionHeading>

                        <Paragraph>
                            The Policy will be reviewed as and when warranted due to the
                            changes in the regulatory framework, business or operational
                            reasons and best practices as may be deemed appropriate.
                        </Paragraph>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
};

export default GrievanceRedressalPolicyPage;