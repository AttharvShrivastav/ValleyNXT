// ============================================================
// INSIGHTS / NEWS DATA
// ============================================================
//
// CONTENT MODEL:
//
// ONE OBJECT = ONE REAL-WORLD NEWS EVENT.
//
// 1 source:
// → Standard news card
//
// 2–6 sources:
// → Media Coverage card
// → All sources visible
//
// 7+ sources:
// → Media Coverage card
// → First 6 visible
// → Remaining sources expandable
//
// ============================================================

export const newsData = [
  // ==========================================================
  // REAL NEWS EVENT 1
  // SINGLE SOURCE
  // ==========================================================

  {
    id: 1,

    date: "AUGUST 2026",

    title:
      "ValleyNXT Ventures partners with iHub Anubhuti at IIIT Delhi",

    excerpt:
      "ValleyNXT Ventures has entered into a strategic partnership with iHub Anubhuti, the Technology Innovation Hub at IIIT Delhi, to strengthen research-led innovation, startup acceleration and venture funding under Bharat Breakthrough Fund – I.",

    image:
      "/events/iiit-delhi-partnership.jpg",

    sources: [
      {
        entity:
          "ValleyNXT Ventures x iHub Anubhuti, IIIT Delhi",

        date: "AUGUST 2026",

        link: "#",
      },
    ],
  },

  // ==========================================================
  // REAL NEWS EVENT 2
  // SINGLE SOURCE
  // ==========================================================

  {
    id: 2,

    date: "AUGUST 2026",

    title:
      "ValleyNXT Ventures partners with Vellore Institute of Technology",

    excerpt:
      "The partnership will strengthen collaboration across innovation, entrepreneurship, startup engagement and technology commercialization, while supporting founder sourcing, mentorship, ecosystem events and research-industry collaboration.",

    image:
      "/events/vit-partnership.jpg",

    sources: [
      {
        entity:
          "ValleyNXT Ventures x VIT",

        date: "AUGUST 2026",

        link: "#",
      },
    ],
  },

  // ==========================================================
  // REAL NEWS EVENT 3
  // SIX SOURCES
  //
  // EXPECTED:
  //
  // Media Coverage card
  // All 6 publications visible
  // NO "VIEW MORE" button
  // ==========================================================

  {
    id: 3,

    date: "FEBRUARY 2026",

    title:
      "ValleyNXT launches ₹400 Cr Bharat Breakthrough Fund I",

    excerpt:
      "ValleyNXT Ventures launched Bharat Breakthrough Fund I, a ₹400 crore early-stage fund designed to back seed to pre-Series A startups, with a focus on deep-tech, artificial intelligence and other emerging technology sectors.",

    image:
      "/events/bharat-breakthrough-fund.webp",

    sources: [
      {
        entity: "Entrackr",

        date: "FEB 14, 2026",

        link:
          "https://entrackr.com/snippets/valleynxt-ventures-floats-rs-400-cr-fund-to-back-seed-to-pre-series-a-startups-11110461",
      },

      {
        entity: "Entrepreneur India",

        date: "FEB 14, 2026",

        link:
          "https://www.entrepreneur.com/en-in/news-and-trends/valleynxt-launches-inr-400-cr-bharat-breakthrough-fund-to/502734",
      },

      {
        entity: "Outlook Business",

        date: "FEB 15, 2026",

        link:
          "https://www.outlookbusiness.com/corporate/valleynxt-ventures-launches-400-cr-bharat-breakthrough-fund-i-to-bridge-start-up-valley-of-death",
      },

      {
        entity: "YourStory",

        date: "FEB 15, 2026",

        link:
          "https://yourstory.com/2026/02/valleynxt-ventures-launches-rs-400-crore-early-stage-fund-deep-tech-startups",
      },

      {
        entity: "Analytics India Mag",

        date: "FEB 16, 2026",

        link:
          "https://analyticsindiamag.com/ai-news/valleynxt-ventures-launches-400-cr-bharat-breakthrough-fund-i-to-back-deep-tech-startups",
      },

      {
        entity: "ET Entrepreneur",

        date: "FEB 17, 2026",

        link:
          "https://b2b.economictimes.indiatimes.com/news/entrepreneur/valleynxt-ventures-unveils-400-crore-bharat-breakthrough-fund-i-for-seed-to-pre-series-a-startups/128353485",
      },
    ],
  },

];