import React from "react";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const SectionHeading = ({ children }) => (
    <h2 className="text-xl md:text-2xl font-primary font-bold mb-4">
        {children}
    </h2>
);

const SubHeading = ({ children }) => (
    <h3 className="text-base md:text-lg font-primary font-bold mb-3">
        {children}
    </h3>
);

const Paragraph = ({ children }) => (
    <p className="text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
        {children}
    </p>
);

const BulletList = ({ children }) => (
    <ul className="list-disc pl-5 md:pl-7 space-y-3 text-sm md:text-base font-primary text-text-main/80 leading-relaxed">
        {children}
    </ul>
);

const StewardshipCodePage = () => {
    return (
        <main className="min-h-screen flex flex-col bg-background text-text-main overflow-x-hidden pt-32">

            <div className="relative">
                <PageHero
                    subtitle="INVESTOR POLICIES"
                    titleLine1="STEWARDSHIP"
                    titleLine2="Code"
                    titleLine2Serif={true}
                />
            </div>

            <div className="w-[90%] md:w-[85%] max-w-5xl mx-auto flex-grow flex flex-col pb-24 mt-4">

                <div className="bg-container-bg border-[3px] border-accent rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16 w-full">

                    {/* DOCUMENT DETAILS */}
                    <div className="mb-12 pb-8 border-b border-accent/20">
                        <div className="space-y-2 text-sm md:text-base font-primary text-text-main/80">
                            <p>
                                <strong className="font-bold text-text-main">Fund:</strong>{" "}
                                Bharat Breakthrough Fund I
                            </p>

                            <p>
                                <strong className="font-bold text-text-main">Trust:</strong>{" "}
                                ValleyNXT Ventures Trust
                            </p>

                        </div>
                    </div>

                    {/* 1 */}
                    <section className="mb-12">
                        <SectionHeading>1. Background</SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                Securities and Exchange Board of India (“SEBI”) vide its
                                circular No. CIR/CFD/CMDI/168/2019 dated December 24,
                                2019 (“SEBI Circular”) has mandated all Alternative
                                Investment Funds (“AIFs”) to follow the Stewardship Code
                                in relation to the AIF's investments in listed equities of
                                companies. Further, SEBI vide its Master Circular No.
                                SEBI/HO/AFD-1/AFD-1-PoD/P/CIR/2024/39 dated May 07,
                                2024 (“Master Circular”) has provided guidelines on the
                                Stewardship Code for all categories of AIFs, in relation to
                                their investment in listed equities.
                            </Paragraph>

                            <Paragraph>
                                As per the Master Circular, AIFs being institutional
                                investors should have a comprehensive policy on the
                                discharge of their stewardship responsibilities.
                            </Paragraph>
                        </div>
                    </section>

                    {/* 2 */}
                    <section className="mb-12">
                        <SectionHeading>2. Applicability</SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                This Stewardship Code (“Code”) is applicable to ValleyNXT
                                Management LLP (“Investment Manager”) which is acting as
                                the investment manager to ValleyNXT Ventures Trust,
                                organised in India and registered with SEBI as a Category I
                                Alternative Investment Fund (sub-category Venture Capital
                                Fund), and various schemes launched under the Trust from
                                time to time including its first scheme - Bharat
                                Breakthrough Fund I.
                            </Paragraph>

                            <Paragraph>
                                This Code documents the guiding principles to be adopted
                                and followed by the Key Investment Team (“Investment Team”)
                                of the scheme of the Trust. This Code is prepared on the
                                basis of principles enumerated in the SEBI Circular and
                                Master Circular. This Code shall act as guidance to the
                                Investment Team for discharging the stewardship
                                responsibility, however, this Code is not intended to
                                curtail/ restrict the fund management activities of
                                Investment Manager.
                            </Paragraph>

                            <Paragraph>
                                The term ‘investee companies’ used in this Code for
                                discharge of stewardship responsibility shall mean investee
                                companies in which equity investments by the scheme of the
                                Trust are either INR [●] crores or [●]% or more of the
                                paid-up equity capital of the investee company, whichever
                                is lower.
                            </Paragraph>
                        </div>
                    </section>

                    {/* 3 */}
                    <section className="mb-12">
                        <SectionHeading>3. Objective</SectionHeading>

                        <div className="space-y-5">
                            <Paragraph>
                                The purpose of this Code is to enhance the quality of
                                engagement with the investee companies to help improve
                                corporate governance practices with a view to enhance long
                                term returns for the unitholders of the scheme(s) of the
                                Trust.
                            </Paragraph>

                            <Paragraph>
                                The Code is formulated to broadly lay down the principles
                                and guidelines to monitor and engage with the investee
                                companies on various matters including performance,
                                strategy, corporate governance, material environmental,
                                social and governance (ESG) opportunities and risk, capital
                                structure and exercising voting rights on shareholder
                                resolutions of investee companies.
                            </Paragraph>
                        </div>
                    </section>

                    {/* 4 */}
                    <section className="mb-12">
                        <SectionHeading>4. Responsibility</SectionHeading>

                        <Paragraph>
                            The roles and responsibilities under this Code are defined as
                            below:
                        </Paragraph>

                        <div className="mt-6 space-y-8">
                            <div>
                                <SubHeading>
                                    a. Investment Team: The Investment Team shall be responsible for:
                                </SubHeading>

                                <BulletList>
                                    <li>ongoing monitoring of the investee companies;</li>
                                    <li>engaging with the management of the investee companies;</li>
                                    <li>
                                        identifying situations which require intervention in
                                        the investee companies and manner of this intervention;
                                        and
                                    </li>
                                    <li>
                                        identifying situations which may give rise to a conflict
                                        of interest.
                                    </li>
                                </BulletList>
                            </div>

                            <div>
                                <SubHeading>
                                    b. Compliance Team: The compliance team shall be responsible for:
                                </SubHeading>

                                <BulletList>
                                    <li>
                                        disclosures pertaining to stewardship activities
                                        including voting reports at a frequency stated under
                                        various circulars issued by SEBI;
                                    </li>
                                    <li>
                                        maintaining the records pertaining to the voting
                                        activities; and
                                    </li>
                                    <li>
                                        maintaining a list of investee companies in which
                                        conflict of interest has been identified.
                                    </li>
                                </BulletList>
                            </div>
                        </div>
                    </section>

                    {/* 5 */}
                    <section className="mb-12">
                        <SectionHeading>5. Compliance with Code</SectionHeading>

                        <Paragraph>
                            The following are the six guiding principles provided by SEBI
                            for the Stewardship Code:
                        </Paragraph>

                        {/* 5.1 */}
                        <div className="mt-10 space-y-6">
                            <SubHeading>
                                5.1. Discharge of stewardship responsibilities
                            </SubHeading>

                            <div>
                                <p className="text-sm md:text-base font-primary font-bold mb-4">
                                    5.1.1 The primary stewardship responsibilities of Investment Manager shall be:
                                </p>

                                <BulletList>
                                    <li>
                                        to take into consideration, in the investment process,
                                        the investee companies’ policies and practices on
                                        corporate governance matters;
                                    </li>

                                    <li>
                                        to seek productive engagement with the investee
                                        companies;
                                    </li>

                                    <li>
                                        to exercise voting rights in the investee companies in
                                        a manner consistent with the best interests of its
                                        investor, and;
                                    </li>

                                    <li>
                                        to maintain transparency in reporting its voting
                                        decisions and other forms of engagement with investee
                                        companies.
                                    </li>
                                </BulletList>
                            </div>

                            <div>
                                <p className="text-sm md:text-base font-primary font-bold mb-4">
                                    5.1.2 Investment Manager shall fulfil its stewardship responsibilities in the following manner:
                                </p>

                                <BulletList>
                                    <li>
                                        It shall frame procedures on voting to guide the
                                        exercise of the fund’s voting rights in investee
                                        companies.
                                    </li>

                                    <li>
                                        It shall appropriately engage and intervene on any
                                        issue/ matter which may, potentially, affect an
                                        investee company’s ability to deliver long-term
                                        sustainable performance and value. The matter may
                                        include performance (operational, financial, etc.),
                                        strategy, corporate governance (including board
                                        structure, salary, etc.), material environmental,
                                        social and governance (ESG) opportunities or risks,
                                        capital structure, etc. Such engagement may be through
                                        detailed discussions with management, interaction with
                                        investee company boards, voting in board or shareholders
                                        meetings, etc.
                                    </li>

                                    <li>
                                        It shall endeavour to work collectively with other
                                        institutional investors and support collaborative
                                        engagements organized by representative bodies and
                                        others.
                                    </li>

                                    <li>
                                        The Code will be reviewed and updated at least
                                        annually and as and when there are regulatory
                                        requirements or business needs. The updated Code will
                                        be publicly disclosed on the fund’s website.
                                    </li>

                                    <li>
                                        The Investment Team will be provided necessary
                                        training, explaining the responsibility under the Code
                                        along with amendments, if any at least once in a
                                        two-year period. This may be done through external
                                        agency or internal team presentations. The Designated
                                        Partners of Investment Manager head of the Investment
                                        Team areis empowered to decide or amend the frequency
                                        and modalities of training under this Code.
                                    </li>
                                </BulletList>
                            </div>
                        </div>

                        {/* 5.2 */}
                        <div className="mt-12 space-y-5">
                            <SubHeading>5.2. Managing Conflicts of Interest</SubHeading>

                            <Paragraph>
                                5.2.1 Investment Manager should handle the matters carefully
                                when the interests of clients or beneficiaries diverge from
                                each other.
                            </Paragraph>

                            <Paragraph>
                                5.2.2 Investment Manager will ensure that the interest of
                                the client/ beneficiary is placed ahead of the interest of
                                the entity.
                            </Paragraph>

                            <Paragraph>
                                5.2.3 Investment Manager shall abide by high level
                                principles on avoidance of conflicts of interest while
                                managing investments of the fund.
                            </Paragraph>

                            <Paragraph>
                                5.2.4 The detailed process of avoiding, identifying and
                                managing conflict of interest is as follows:
                            </Paragraph>

                            <div className="pl-0 md:pl-4 space-y-8">

                                <div>
                                    <p className="text-sm md:text-base font-primary font-bold mb-3">
                                        a. Avoiding conflict of interest:
                                    </p>

                                    <Paragraph>
                                        Investment Manager shall undertake reasonable steps
                                        to avoid actual or potential conflict of interest
                                        situations. In the event of any doubt as to whether
                                        a particular transaction would create (or have the
                                        potential to create) a conflict-of-interest situation,
                                        it shall consult the compliance officer.
                                    </Paragraph>
                                </div>

                                <div>
                                    <p className="text-sm md:text-base font-primary font-bold mb-3">
                                        b. Identifying conflict of interest:
                                    </p>

                                    <Paragraph>
                                        While dealing with investee companies, Investment
                                        Manager may encounter conflict of interest, including
                                        but not limited to the following non-exhaustive
                                        situations:
                                    </Paragraph>

                                    <div className="mt-4">
                                        <BulletList>
                                            <li>
                                                The investee company is a client of Investment
                                                Manager for its other business activity;
                                            </li>
                                            <li>
                                                The investee company is directly or indirectly
                                                linked to another investee company of fund;
                                            </li>
                                            <li>
                                                The investee company holds an interest, in the
                                                overall business or is a distributor for
                                                Investment Manager;
                                            </li>
                                            <li>
                                                Investment Manager is a supplier of the investee
                                                company;
                                            </li>
                                            <li>
                                                A nominee of Investment Manager has been
                                                appointed as a director or a key managerial
                                                person of the investee company; or
                                            </li>
                                            <li>
                                                A partner or a key managerial person of
                                                Investment Manager has a personal interest in
                                                the investee company.
                                            </li>
                                        </BulletList>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm md:text-base font-primary font-bold mb-3">
                                        c. Managing conflict of interest:
                                    </p>

                                    <Paragraph>
                                        In order to manage/ avoid the above conflicts of
                                        interest, Investment Manager will undertake the
                                        following steps:
                                    </Paragraph>

                                    <div className="mt-4">
                                        <BulletList>
                                            <li>
                                                Any conflict of interest in relation to an
                                                investee company shall be highlighted to the
                                                Designated Partners of Investment Manager/
                                                respective committees of the fund.
                                            </li>

                                            <li>
                                                Rationale for voting on each shareholder
                                                resolution shall be recorded by Investment
                                                Manager. In situations where Investment Manager
                                                and the investee company belong to the same
                                                group, it may consider abstaining from voting,
                                                unless it documents a clear rationale for
                                                exercising such voting rights.
                                            </li>

                                            <li>
                                                Rationale behind a new investment decision
                                                shall be recorded.
                                            </li>

                                            <li>
                                                Investment Manager may consider blanket bans
                                                on investments in certain cases.
                                            </li>

                                            <li>
                                                Client relations/ sales functions should not
                                                be involved in voting decision making function.
                                            </li>

                                            <li>
                                                Employee/ member of investment committee
                                                should recuse from decision making in case they
                                                are having any actual/ potential conflict of
                                                interest in the transaction.
                                            </li>

                                            <li>
                                                Investment Manager should maintain records of
                                                decisions taken to address such conflicts.
                                            </li>
                                        </BulletList>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5.3 */}
                        <div className="mt-12 space-y-5">
                            <SubHeading>5.3. Monitoring Investee Companies</SubHeading>

                            <Paragraph>
                                5.3.1 Investment Manager will be responsible for monitoring
                                all the investee companies in which the fund has invested
                            </Paragraph>

                            <Paragraph>
                                5.3.2 While monitoring the investee companies, Investment
                                Manager shall take the following into consideration:
                            </Paragraph>

                            <BulletList>
                                <li>
                                    The Investment Team shall have the threshold level as
                                    defined in Point 1 (Applicability) of this Code for each
                                    investee company, beyond which the exposure to the
                                    investee company will be deemed to be ‘meaningful’. This
                                    threshold level will help in determining the level of
                                    engagement, monitoring and intervention with respect to
                                    the investee company;
                                </li>

                                <li>
                                    The Investment Team will monitor following areas which
                                    shall, inter-alia, include:

                                    <ul className="list-[circle] pl-6 mt-3 space-y-2">
                                        <li>
                                            Investee company’s strategy and performance -
                                            operational, financial etc.;
                                        </li>
                                        <li>
                                            Industry-level monitoring and possible impact on
                                            the investee companies;
                                        </li>
                                        <li>
                                            Quality of investee company’s management, board,
                                            leadership etc.;
                                        </li>
                                        <li>
                                            Corporate governance including remuneration,
                                            structure of the board (including board diversity,
                                            independent directors etc.) related party
                                            transactions, etc.;
                                        </li>
                                        <li>
                                            Risks, including Environmental, Social and
                                            Governance (ESG) risks;
                                        </li>
                                        <li>
                                            Shareholder rights, their grievances etc.;
                                        </li>
                                        <li>Succession planning</li>
                                    </ul>
                                </li>

                                <li>
                                    The Investment Team shall engage with investee companies
                                    as part of the research process that leads to an
                                    investment in an investee company, which might include
                                    meetings with management;
                                </li>

                                <li>
                                    Once an investment is made, the Investment Team shall
                                    continue to monitor each investee company. As a part of
                                    this process, the research team shall, where feasible,
                                    attend meetings/ conference calls conducted by the
                                    management of the investee company;
                                </li>

                                <li>
                                    While endeavour would be to ensure at least one meeting
                                    with an investee company in a year, there may be
                                    instances where the management of investee company is
                                    not accessible, not accessible at appropriate levels, or
                                    where the research team believes that no incremental
                                    information is being provided. In such cases, monitoring
                                    may be carried out through alternative sources;
                                </li>

                                <li>
                                    The Investment Team/ analysts may also use publicly
                                    available information, research and industry information;
                                </li>

                                <li>
                                    While dealing with the investee company, Investment
                                    Manager shall ensure compliance with its policy on
                                    Personal Securities Trading Policy;
                                </li>

                                <li>
                                    In case of the investee companies where larger
                                    investments are made, Investment Manager may adopt a
                                    higher level of monitoring;
                                </li>

                                <li>
                                    Investment Manager may nominate its representative on
                                    the board of an investee company, wherever it deems
                                    necessary;
                                </li>

                                <li>
                                    The Designated Partners/ respective committees shall
                                    review the monitoring and engagement activities being
                                    carried out by the Investment Team on an annual basis.
                                </li>
                            </BulletList>
                        </div>

                        {/* 5.4 */}
                        <div className="mt-12 space-y-5">
                            <SubHeading>5.4. Policy on Intervention</SubHeading>

                            <Paragraph>
                                5.4.1 Investment Manager shall intervene if, in its
                                opinion, any act or omission of an investee company is
                                considered material. Such intervention shall be determined
                                on a case-to-case basis and may relate to issues including,
                                but not limited to, insufficient disclosures, inequitable
                                treatment of shareholders, regulatory non-compliance,
                                performance concerns, governance matters, related-party
                                transactions, corporate plans or strategy, or any other
                                relevant matters.
                            </Paragraph>

                            <Paragraph>
                                5.4.2 The Investment Team may consider intervening in
                                matters below the thresholds as given in Point 1
                                (Applicability) of this Code, if in the reasonable opinion
                                of the Investment Team/ Designated Partners of the
                                Investment Manager, the issue involved may adversely impact
                                the overall corporate governance or the fund’s investment.
                            </Paragraph>

                            <Paragraph>
                                5.4.3 In case the investment is already earmarked for
                                divestment or post planned divestment holding will be below
                                threshold level, intervention may not be considered, unless
                                if in the reasonable opinion of the Investment Team/
                                Designated Partners of Investment Manager there are other
                                factors which warrant intervention.
                            </Paragraph>

                            <Paragraph>
                                5.4.4 The level of intervention may be determined based on
                                the following parameters:
                            </Paragraph>

                            <BulletList>
                                <li>
                                    <strong className="text-text-main">
                                        Communication:
                                    </strong>{" "}
                                    The Investment Team shall communicate to the investee
                                    company’s management about any concerns including steps
                                    to be taken to mitigate such concerns.
                                </li>

                                <li>
                                    <strong className="text-text-main">
                                        Engagement:
                                    </strong>{" "}
                                    If the investee company’s management fails to take
                                    constructive steps to address the concerns raised by
                                    Investment Manager within a reasonable timeframe,
                                    Investment Manager shall take all reasonable measures to
                                    engage with the management to resolve such concerns.
                                </li>

                                <li>
                                    <strong className="text-text-main">
                                        Collaboration:
                                    </strong>{" "}
                                    Investment Manager shall consider collaborating with
                                    other institutional investors, professional or industry
                                    associations, regulators, or any other relevant entities
                                    when deemed necessary particularly when collective
                                    engagement is likely to yield a higher-quality or more
                                    effective response from the investee company. It may
                                    initiate or receive approaches from other institutional
                                    shareholders to provide joint representations to investee
                                    companies to address specific concerns. Such
                                    collaboration shall not be construed as collusion or as
                                    persons acting in concert.
                                </li>

                                <li>
                                    <strong className="text-text-main">
                                        Escalation:
                                    </strong>{" "}
                                    If no progress is made after the first three steps,
                                    Investment Manager shall escalate the matter to its
                                    Designated Partners or the investment committee. If the
                                    Designated Partners or investment committee decide to
                                    proceed, Investment Manager may engage with the investee
                                    company’s board through formal written communication to
                                    elaborate on the concerns. It may also consider raising
                                    the issues at the investee company’s general body meeting
                                    and may vote against decisions at the appropriate forum
                                    on behalf of the fund.
                                </li>

                                <li>
                                    <strong className="text-text-main">
                                        Reporting to the Regulators:
                                    </strong>{" "}
                                    If the investee company fails to respond or take action
                                    despite the aforementioned steps, Investment Manager may
                                    approach the relevant authorities or consider pursuing
                                    other legal remedies.
                                </li>
                            </BulletList>
                        </div>

                        {/* 5.5 */}
                        <div className="mt-12 space-y-5">
                            <SubHeading>
                                5.5. Voting and disclosure of voting activity
                            </SubHeading>

                            <Paragraph>
                                5.5.1 Investment Manager shall make a specific decision on
                                each resolution, whether to support, oppose, or abstain from
                                voting, on a case-by-case basis, considering the potential
                                impact of the vote on shareholder value and the interests of
                                the fund’s unitholders.
                            </Paragraph>

                            <Paragraph>
                                5.5.2 Investment Manager may, at its discretion, choose to
                                abstain from voting on any resolution and maintain a neutral
                                stance if the issue is deemed to have no significant impact
                                on shareholder value or the interests of the unitholders.
                            </Paragraph>

                            <Paragraph>
                                5.5.3 The decision on whether to vote for or against a
                                resolution proposed by the company/ issuer shall be made by
                                the Designated Partners of Investment Managerhead of the
                                Investment Team.
                            </Paragraph>

                            <Paragraph>
                                5.5.4 The decision of the Designated Partners of Investment
                                Managerhead of the Investment Team regarding voting on
                                shareholder resolutions, whether at a general meeting or
                                through a postal ballot of the investee company, shall be
                                executed by Investment Manager by casting votes via the
                                e-voting facility provided by NSDL/CDSL, by attending the
                                meeting in person, or by voting through a proxy.
                            </Paragraph>

                            <Paragraph>
                                5.5.5 In cases where an investee company does not provide an
                                e-voting facility, or Investment Manager is unable to cast
                                its vote electronically, any of the representatives of
                                Investment Manager or an externally authorised agency such
                                as a custodian would be delegated the responsibility for
                                exercising the physical votes by the Designated Partners of
                                Investment Manager head of the Investment Team.
                            </Paragraph>

                            <Paragraph>
                                5.5.6 A report on the votes exercised by Investment Manager,
                                along with the rationale for each voting decision, shall be
                                presented to the Designated Partners of Investment Manager
                                from time to time. This is to ensure that Investment Manager
                                has voted on significant matters affecting investors’
                                interests and that the recorded rationale for each voting
                                decision is prudent and adequate.
                            </Paragraph>

                            <Paragraph>
                                5.5.7 While Investment Manager will ordinarily follow this
                                Code when voting, there may be occasions where it believes
                                that voting differently from the guidelines is in the best
                                interests of the fund. In such cases, it may deviate from
                                the policy to protect unitholders’ interests. Investment
                                Manager retains full discretion over the voting decisions of
                                its representatives or proxies.
                            </Paragraph>

                            <Paragraph>
                                5.5.8 Investment Manager may engage proxy voting advisory
                                services to provide recommendations, assisting the
                                Designated Partners of Investment Managerhead of the
                                Investment Team in the decision-making process
                            </Paragraph>

                            <Paragraph>
                                5.5.9 Investment Manager shall monitor potential conflicts
                                of interest in proxy voting arising from personal
                                relationships, significant investor relationships, or other
                                circumstances that may present conflicts among investors
                                during the conduct of the fund’s business.
                            </Paragraph>

                            <Paragraph>
                                5.5.10 Investment Manager will make following disclosure to
                                investors regarding the voting exercised by it:
                            </Paragraph>

                            <BulletList>
                                <li>
                                    Details of actual voting for every proposed resolution
                                    in investee companies i.e. for, against or abstain;
                                </li>
                                <li>Rationale for voting; and</li>
                                <li>
                                    Manner of disclosure - e.g. in annual report to
                                    investors, quarterly basis on website etc.
                                </li>
                            </BulletList>
                        </div>

                        {/* 5.6 */}
                        <div className="mt-12 space-y-5">
                            <SubHeading>
                                5.6. Reporting on stewardship activities
                            </SubHeading>

                            <Paragraph>
                                5.6.1 Investment Manager will periodically report to the
                                fund’s investors/ beneficiaries on their stewardship
                                activities and how it has fulfilled its stewardship
                                responsibilities, in the following manner:
                            </Paragraph>

                            <BulletList>
                                <li>
                                    It will disclose on its website the implementation of
                                    the principles enlisted in this Code. The format of
                                    disclosure will be approved by the Designated Partners
                                    of Investment Managerhead of Investment Team and will be
                                    updated periodically.
                                </li>

                                <li>
                                    Disclosures on the votes cast by Investment Manager for
                                    all the resolutions put forth by the investee companies
                                    for shareholders’ approval will be published on
                                    quarterly basis, in accordance with prevailing SEBI
                                    guidelines.
                                </li>

                                <li>
                                    This Code, as amended from time to time, shall be
                                    disclosed on the fund’s website along with other public
                                    disclosures. Any changes or modifications to the Code
                                    shall also be disclosed at the time of updating it on
                                    the website.
                                </li>

                                <li>
                                    In addition to the disclosures on its website, it shall
                                    circulate a status report to unitholders for every
                                    financial year as part of the annual communication to
                                    investors. The report shall, inter alia, include details
                                    on compliance with, or deviations from, the principles
                                    set out in this Code.
                                </li>
                            </BulletList>

                            <Paragraph>
                                5.6.2 Compliance with the aforesaid principles does not
                                amount to an invitation to manage the affairs of an investee
                                company, nor does it preclude Investment Manager from
                                deciding to sell a holding when such action is in the best
                                interests of the investors or beneficiaries of the fund.
                            </Paragraph>
                        </div>
                    </section>

                    {/* 6 */}
                    <section className="mb-12">
                        <SectionHeading>6. Responsibility:</SectionHeading>

                        <Paragraph>
                            The Compliance Officer will be responsible for implementation
                            of this Code.
                        </Paragraph>
                    </section>

                    {/* 7 */}
                    <section className="mb-12">
                        <SectionHeading>7. Deviation to Framework:</SectionHeading>

                        <Paragraph>
                            Any deviations to this Code shall be approved by the
                            Designated Partners of Investment Manager and the Compliance
                            Officer.
                        </Paragraph>
                    </section>

                    {/* 8 */}
                    <section>
                        <SectionHeading>8. Effective Date:</SectionHeading>

                        <Paragraph>
                            This Code shall be effective from April 1, 2026.
                        </Paragraph>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
};

export default StewardshipCodePage;