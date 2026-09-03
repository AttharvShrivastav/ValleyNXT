import React, { useMemo, useState } from "react";

import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

import { newsData } from "../utils/insightsData";

// ============================================================
// CONFIGURATION
// ============================================================
//
// If a Media Coverage story contains more than 6 sources:
//
// - First 6 are visible initially.
// - Remaining sources are hidden.
// - A VIEW X MORE ARTICLES control appears.
//
const INITIAL_VISIBLE_SOURCES = 6;

// ============================================================
// GENERAL HELPERS
// ============================================================

const hasValidLink = (link) => {
  if (!link) {
    return false;
  }

  if (typeof link !== "string") {
    return false;
  }

  const trimmedLink = link.trim();

  if (!trimmedLink) {
    return false;
  }

  if (trimmedLink === "#") {
    return false;
  }

  return true;
};

// ============================================================
// NEWS DATA HELPERS
// ============================================================

const getSources = (item) => {
  if (!Array.isArray(item?.sources)) {
    return [];
  }

  return item.sources;
};

const isMediaCoverageStory = (item) => {
  return getSources(item).length > 1;
};

// ============================================================
// BALANCED STANDARD NEWS ROW LOGIC
// ============================================================
//
// STANDARD STORIES ARE COMPOSED IN BALANCED ROWS.
//
// Examples:
//
// 1  → 1
// 2  → 2
// 3  → 3
// 4  → 2 + 2
// 5  → 3 + 2
// 6  → 3 + 3
// 7  → 3 + 2 + 2
// 8  → 3 + 3 + 2
// 9  → 3 + 3 + 3
// 10 → 3 + 3 + 2 + 2
//
// We intentionally avoid:
// 3 + 1
// 3 + 3 + 1
//
// because those layouts look visually unfinished.
//
// ============================================================

const getBalancedRowSizes = (itemCount) => {
  if (itemCount <= 0) {
    return [];
  }

  if (itemCount === 1) {
    return [1];
  }

  if (itemCount === 2) {
    return [2];
  }

  if (itemCount === 3) {
    return [3];
  }

  const fullRowsOfThree = Math.floor(itemCount / 3);
  const remainder = itemCount % 3;

  // ----------------------------------------------------------
  // PERFECT DIVISION BY 3
  //
  // 6 → 3 + 3
  // 9 → 3 + 3 + 3
  // ----------------------------------------------------------

  if (remainder === 0) {
    return Array(fullRowsOfThree).fill(3);
  }

  // ----------------------------------------------------------
  // REMAINDER OF 1
  //
  // Instead of:
  //
  // 3 + 1
  //
  // transform the final four cards into:
  //
  // 2 + 2
  //
  // Examples:
  //
  // 4  → 2 + 2
  // 7  → 3 + 2 + 2
  // 10 → 3 + 3 + 2 + 2
  // ----------------------------------------------------------

  if (remainder === 1) {
    const rows = [];

    const initialRowsOfThree = fullRowsOfThree - 1;

    for (
      let index = 0;
      index < initialRowsOfThree;
      index += 1
    ) {
      rows.push(3);
    }

    rows.push(2);
    rows.push(2);

    return rows;
  }

  // ----------------------------------------------------------
  // REMAINDER OF 2
  //
  // 5 → 3 + 2
  // 8 → 3 + 3 + 2
  // ----------------------------------------------------------

  if (remainder === 2) {
    const rows = [];

    for (
      let index = 0;
      index < fullRowsOfThree;
      index += 1
    ) {
      rows.push(3);
    }

    rows.push(2);

    return rows;
  }

  return [];
};

// ============================================================
// BUILD STANDARD NEWS ROWS
// ============================================================

const createStandardRows = (stories) => {
  if (!Array.isArray(stories) || stories.length === 0) {
    return [];
  }

  const rowSizes = getBalancedRowSizes(stories.length);

  const rows = [];

  let currentIndex = 0;

  rowSizes.forEach((rowSize, rowIndex) => {
    const rowItems = stories.slice(
      currentIndex,
      currentIndex + rowSize
    );

    rows.push({
      id: `standard-row-${rowIndex}`,
      items: rowItems,
    });

    currentIndex += rowSize;
  });

  return rows;
};

// ============================================================
// EXTERNAL LINK ICON
// ============================================================

const ExternalLinkIcon = ({
  className = "w-4 h-4",
}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
};

// ============================================================
// CHEVRON ICON
// ============================================================

const ChevronIcon = ({
  expanded = false,
  className = "w-4 h-4",
}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`
        ${className}
        transition-transform
        duration-300
        ${
          expanded
            ? "rotate-180"
            : "rotate-0"
        }
      `}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 9l6 6 6-6"
      />
    </svg>
  );
};

// ============================================================
// STANDARD NEWS CARD
// ============================================================
//
// Used when a story contains zero or one source.
//
// The card itself never decides its width.
// StandardNewsRow controls the editorial composition.
//
// ============================================================

const StandardNewsCard = ({
  item,
}) => {
  const sources = getSources(item);

  const primarySource =
    sources.length > 0
      ? sources[0]
      : null;

  const sourceName =
    primarySource?.entity ||
    "ValleyNXT Ventures";

  const sourceDate =
    primarySource?.date ||
    item?.date ||
    "";

  const sourceLink =
    primarySource?.link ||
    "";

  const isClickable =
    hasValidLink(sourceLink);

  const CardWrapper =
    isClickable
      ? "a"
      : "article";

  return (
    <CardWrapper
      href={
        isClickable
          ? sourceLink
          : undefined
      }
      target={
        isClickable
          ? "_blank"
          : undefined
      }
      rel={
        isClickable
          ? "noopener noreferrer"
          : undefined
      }
      className={`
        w-full
        h-full

        bg-container-bg

        border-2
        border-accent/20

        rounded-[2rem]

        p-6

        flex
        flex-col

        transition-all
        duration-300

        group

        ${
          isClickable
            ? `
                cursor-pointer
                hover:shadow-lg
                hover:border-accent/40
              `
            : ""
        }
      `}
    >
      {/* =====================================================
          IMAGE
          ===================================================== */}

      {item?.image && (
        <div
          className="
            w-full

            h-48
            md:h-52

            rounded-2xl

            mb-6

            overflow-hidden

            bg-background/30
          "
        >
          <img
            src={item.image}
            alt={
              item?.title ||
              "ValleyNXT news"
            }
            loading="lazy"
            className="
              w-full
              h-full

              object-cover

              transition-transform
              duration-500
              ease-out

              group-hover:scale-[1.03]
            "
          />
        </div>
      )}

      {/* =====================================================
          SOURCE + DATE
          ===================================================== */}

      <div
        className="
          flex
          justify-between
          items-start

          gap-4

          text-[10px]
          md:text-xs

          font-primary
          font-bold

          uppercase

          text-text-main

          mb-3
        "
      >
        <span className="leading-relaxed">
          {sourceName}
        </span>

        {sourceDate && (
          <span
            className="
              text-text-main/70

              font-medium

              whitespace-nowrap
            "
          >
            {sourceDate}
          </span>
        )}
      </div>

      {/* =====================================================
          DIVIDER
          ===================================================== */}

      <div
        className="
          w-full
          h-[1px]

          bg-accent/30

          mb-6
        "
      />

      {/* =====================================================
          QUOTE MARK
          ===================================================== */}

      <div
        className="
          text-accent/30

          text-5xl

          font-serifa
          font-bold

          leading-[0.5]

          mb-2

          text-left
        "
      >
        “
      </div>

      {/* =====================================================
          TITLE
          ===================================================== */}

      {item?.title && (
        <h3
          className="
            text-lg
            md:text-xl

            font-primary
            font-bold

            leading-snug

            mb-4

            group-hover:text-accent

            transition-colors
            duration-300
          "
        >
          {item.title}
        </h3>
      )}

      {/* =====================================================
          DESCRIPTION
          ===================================================== */}

      {item?.excerpt && (
        <p
          className="
            text-sm

            text-text-main/70

            font-light

            leading-relaxed

            mb-8

            flex-grow
          "
        >
          {item.excerpt}
        </p>
      )}

      {/* =====================================================
          CTA
          ===================================================== */}

      {isClickable && (
        <span
          className="
            text-accent

            font-primary
            font-bold

            text-xs

            uppercase
            tracking-wider

            flex
            items-center

            mt-auto

            w-max
          "
        >
          VIEW CLIPPING

          <ExternalLinkIcon
            className="
              w-4
              h-4

              ml-1.5

              group-hover:translate-x-1
              group-hover:-translate-y-1

              transition-transform
              duration-300
            "
          />
        </span>
      )}
    </CardWrapper>
  );
};

// ============================================================
// STANDARD NEWS ROW
// ============================================================
//
// DESKTOP:
//
// 1 card:
// → normal card width
// → approximately one-third of row
// → trailing space is allowed
//
// 2 cards:
// → 50 / 50
//
// 3 cards:
// → 33 / 33 / 33
//
// MOBILE:
// → stacked.
//
// TABLET:
// → sensible two-column behavior.
//
// ============================================================

const StandardNewsRow = ({
  items,
}) => {
  const count = items.length;

  // ==========================================================
  // ONE CARD
  //
  // IMPORTANT:
  //
  // We DO NOT make this full width.
  //
  // A single standard story should still look like a normal
  // news card, even when it happens to be the last card.
  // ==========================================================

  if (count === 1) {
    return (
      <div
        className="
          grid
          grid-cols-1

          md:grid-cols-2
          lg:grid-cols-3

          gap-6
          md:gap-8

          items-stretch
        "
      >
        <div className="w-full">
          <StandardNewsCard
            item={items[0]}
          />
        </div>
      </div>
    );
  }

  // ==========================================================
  // TWO CARDS
  //
  // Two cards should use the entire row.
  // Each receives 50%.
  // ==========================================================

  if (count === 2) {
    return (
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2

          gap-6
          md:gap-8

          items-stretch
        "
      >
        {items.map((item) => (
          <StandardNewsCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  }

  // ==========================================================
  // THREE CARDS
  //
  // Desktop:
  // 3 equal columns.
  //
  // Tablet:
  // first two occupy halves,
  // third becomes full width.
  //
  // Mobile:
  // stacked.
  // ==========================================================

  return (
    <div
      className="
        grid
        grid-cols-1

        md:grid-cols-2
        lg:grid-cols-3

        gap-6
        md:gap-8

        items-stretch
      "
    >
      {items.map(
        (item, index) => (
          <div
            key={item.id}
            className={`
              w-full

              ${
                index === 2
                  ? `
                      md:col-span-2
                      lg:col-span-1
                    `
                  : ""
              }
            `}
          >
            <StandardNewsCard
              item={item}
            />
          </div>
        )
      )}
    </div>
  );
};

// ============================================================
// MEDIA SOURCE ITEM
// ============================================================

const MediaSourceItem = ({
  source,
  index,
}) => {
  const sourceName =
    source?.entity ||
    `Source ${index + 1}`;

  const sourceDate =
    source?.date ||
    "";

  const sourceLink =
    source?.link ||
    "";

  const isClickable =
    hasValidLink(sourceLink);

  // ==========================================================
  // CLICKABLE SOURCE
  // ==========================================================

  if (isClickable) {
    return (
      <a
        href={sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          media-source-link

          group/source

          flex
          items-center
          justify-between

          gap-4

          py-4

          border-t
          border-accent/20

          transition-colors
          duration-300

          hover:text-accent
        "
      >
        <div
          className="
            flex
            flex-col
            gap-1

            min-w-0
          "
        >
          <span
            className="
              text-sm

              font-primary
              font-semibold

              leading-tight

              text-text-main

              group-hover/source:text-accent

              transition-colors
              duration-300
            "
          >
            {sourceName}
          </span>

          {sourceDate && (
            <span
              className="
                text-[10px]
                md:text-xs

                font-primary
                font-medium

                uppercase
                tracking-wider

                text-text-main/50
              "
            >
              {sourceDate}
            </span>
          )}
        </div>

        <ExternalLinkIcon
          className="
            w-4
            h-4

            flex-shrink-0

            text-accent

            group-hover/source:translate-x-1
            group-hover/source:-translate-y-1

            transition-transform
            duration-300
          "
        />
      </a>
    );
  }

  // ==========================================================
  // NON-CLICKABLE SOURCE
  // ==========================================================

  return (
    <div
      className="
        flex
        items-center
        justify-between

        gap-4

        py-4

        border-t
        border-accent/20
      "
    >
      <div
        className="
          flex
          flex-col
          gap-1

          min-w-0
        "
      >
        <span
          className="
            text-sm

            font-primary
            font-semibold

            leading-tight

            text-text-main
          "
        >
          {sourceName}
        </span>

        {sourceDate && (
          <span
            className="
              text-[10px]
              md:text-xs

              font-primary
              font-medium

              uppercase
              tracking-wider

              text-text-main/50
            "
          >
            {sourceDate}
          </span>
        )}
      </div>
    </div>
  );
};

// ============================================================
// MEDIA COVERAGE CARD
// ============================================================
//
// Any story with 2+ sources becomes this layout.
//
// Desktop:
//
// ┌──────────────────┬──────────────────┐
// │                  │ MEDIA COVERAGE   │
// │    WIDE IMAGE    │ Headline         │
// │                  │ Description      │
// │                  │ Sources          │
// └──────────────────┴──────────────────┘
//
// Image ≈ 52%
// Content ≈ 48%
//
// 2–6 sources:
// → all visible.
//
// 7+:
// → first 6 visible
// → View More
//
// ============================================================

const MediaCoverageCard = ({
  item,
}) => {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const sources =
    getSources(item);

  const sourceCount =
    sources.length;

  // ==========================================================
  // EXPANSION LOGIC
  // ==========================================================

  const hasHiddenSources =
    sourceCount >
    INITIAL_VISIBLE_SOURCES;

  const hiddenSourceCount =
    Math.max(
      0,
      sourceCount -
        INITIAL_VISIBLE_SOURCES
    );

  const visibleSources =
    isExpanded ||
    !hasHiddenSources
      ? sources
      : sources.slice(
          0,
          INITIAL_VISIBLE_SOURCES
        );

  const coverageLabel =
    sourceCount === 1
      ? "1 ARTICLE"
      : `${sourceCount} ARTICLES`;

  const handleToggleSources = () => {
    setIsExpanded(
      (current) => !current
    );
  };

  return (
    <article
      className="
        w-full

        bg-container-bg

        border-2
        border-accent/20

        rounded-[2rem]

        overflow-hidden

        transition-all
        duration-300

        hover:shadow-lg
        hover:border-accent/40
      "
    >
      {/* =====================================================
          MEDIA COVERAGE INTERNAL LAYOUT
          ===================================================== */}

      <div
        className="
          grid
          grid-cols-1

          lg:grid-cols-[1.08fr_1fr]

          w-full
        "
      >
        {/* ===================================================
            LEFT — WIDE IMAGE
            =================================================== */}

        {item?.image && (
          <div
            className="
              relative

              w-full

              min-h-[320px]
              sm:min-h-[400px]
              lg:min-h-[570px]

              flex
              items-center
              justify-center

              bg-background/20

              px-5
              py-8

              sm:px-8
              sm:py-10

              lg:px-8
              lg:py-12

              border-b

              lg:border-b-0
              lg:border-r

              border-accent/10
            "
          >
            <div
              className="
                w-full

                flex
                items-center
                justify-center

                overflow-hidden
              "
            >
              <img
                src={item.image}
                alt={
                  item?.title ||
                  "ValleyNXT media coverage"
                }
                loading="lazy"
                className="
                  block

                  w-full
                  h-auto

                  max-w-full
                  max-h-[470px]

                  object-contain
                  object-center

                  transition-transform
                  duration-700
                  ease-out

                  hover:scale-[1.01]
                "
              />
            </div>
          </div>
        )}

        {/* ===================================================
            RIGHT — STORY + COVERAGE
            =================================================== */}

        <div
          className="
            w-full

            p-6
            sm:p-8
            lg:p-10

            flex
            flex-col
          "
        >
          {/* =================================================
              TOP META
              ================================================= */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between

              gap-x-6
              gap-y-3

              mb-8
            "
          >
            <div
              className="
                flex
                items-center
                flex-wrap

                gap-3
              "
            >
              <span
                className="
                  text-[10px]
                  md:text-xs

                  font-primary
                  font-bold

                  tracking-[0.16em]

                  uppercase

                  text-accent
                "
              >
                MEDIA COVERAGE
              </span>

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-accent/50
                "
              />

              <span
                className="
                  text-[10px]
                  md:text-xs

                  font-primary
                  font-bold

                  tracking-[0.12em]

                  uppercase

                  text-text-main/50
                "
              >
                {coverageLabel}
              </span>
            </div>

            {item?.date && (
              <span
                className="
                  text-[10px]
                  md:text-xs

                  font-primary
                  font-medium

                  uppercase
                  tracking-wider

                  text-text-main/50

                  whitespace-nowrap
                "
              >
                {item.date}
              </span>
            )}
          </div>

          {/* =================================================
              TITLE
              ================================================= */}

          {item?.title && (
            <h3
              className="
                text-lg
                md:text-xl

                font-primary
                font-bold

                leading-snug

                text-text-main

                mb-5
              "
            >
              {item.title}
            </h3>
          )}

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          {item?.excerpt && (
            <p
              className="
                text-sm

                font-primary
                font-light

                leading-relaxed

                text-text-main/70

                mb-10
              "
            >
              {item.excerpt}
            </p>
          )}

          {/* =================================================
              COVERAGE AREA
              ================================================= */}

          <div className="mt-auto">
            {/* ===============================================
                COVERAGE HEADER
                =============================================== */}

            <div
              className="
                flex
                items-center
                justify-between

                gap-4

                pb-3
              "
            >
              <span
                className="
                  text-[10px]
                  md:text-xs

                  font-primary
                  font-bold

                  tracking-[0.14em]

                  uppercase

                  text-text-main/70
                "
              >
                COVERED BY
              </span>

              <span
                className="
                  text-[10px]
                  md:text-xs

                  font-primary
                  font-medium

                  text-text-main/40

                  whitespace-nowrap
                "
              >
                {sourceCount}{" "}
                {sourceCount === 1
                  ? "publication"
                  : "publications"}
              </span>
            </div>

            {/* ===============================================
                SOURCE LINKS
                =============================================== */}

            <div
              className="
                grid
                grid-cols-1

                sm:grid-cols-2

                sm:gap-x-8
              "
            >
              {visibleSources.map(
                (
                  source,
                  index
                ) => (
                  <MediaSourceItem
                    key={`${item.id}-${source.entity || "source"}-${index}`}
                    source={
                      source
                    }
                    index={
                      index
                    }
                  />
                )
              )}
            </div>

            {/* ===============================================
                EXPAND / COLLAPSE
                =============================================== */}

            {hasHiddenSources && (
              <button
                type="button"
                onClick={
                  handleToggleSources
                }
                aria-expanded={
                  isExpanded
                }
                className="
                  group/more

                  w-full

                  mt-2
                  pt-4

                  border-t
                  border-accent/20

                  flex
                  items-center
                  justify-between

                  gap-4

                  text-left

                  cursor-pointer
                "
              >
                <span
                  className="
                    text-[10px]
                    md:text-xs

                    font-primary
                    font-bold

                    uppercase
                    tracking-[0.14em]

                    text-accent
                  "
                >
                  {isExpanded
                    ? "SHOW LESS"
                    : `VIEW ${hiddenSourceCount} MORE ${
                        hiddenSourceCount === 1
                          ? "ARTICLE"
                          : "ARTICLES"
                      }`}
                </span>

                <div
                  className="
                    w-8
                    h-8

                    rounded-full

                    border
                    border-accent/30

                    flex
                    items-center
                    justify-center

                    text-accent

                    transition-all
                    duration-300

                    group-hover/more:bg-accent
                    group-hover/more:text-background
                    group-hover/more:border-accent
                  "
                >
                  <ChevronIcon
                    expanded={
                      isExpanded
                    }
                    className="
                      w-3.5
                      h-3.5
                    "
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

// ============================================================
// INSIGHTS PAGE
// ============================================================

const InsightsEventsPage = () => {
  // ==========================================================
  // SEPARATE CONTENT TYPES
  // ==========================================================
  //
  // STANDARD STORIES:
  //
  // All single-source stories are gathered together and
  // composed into balanced editorial rows.
  //
  // MEDIA COVERAGE:
  //
  // All multi-source stories are displayed afterward using
  // the wide Media Coverage treatment.
  //
  // IMPORTANT:
  //
  // The person editing insightsData.js does not configure any
  // of this.
  //
  // ==========================================================

  const {
    standardRows,
    coverageStories,
  } = useMemo(() => {
    const safeNewsData =
      Array.isArray(newsData)
        ? newsData
        : [];

    const standardStories =
      safeNewsData.filter(
        (item) =>
          !isMediaCoverageStory(
            item
          )
      );

    const multiSourceStories =
      safeNewsData.filter(
        (item) =>
          isMediaCoverageStory(
            item
          )
      );

    return {
      standardRows:
        createStandardRows(
          standardStories
        ),

      coverageStories:
        multiSourceStories,
    };
  }, []);

  const hasNews =
    standardRows.length > 0 ||
    coverageStories.length > 0;

  return (
    <main
      className="
        min-h-screen

        flex
        flex-col

        bg-background
        text-text-main

        overflow-x-hidden

        pt-32
      "
    >
      {/* =====================================================
          HERO
          ===================================================== */}

      <div className="relative">
        <PageHero
          subtitle="VALLEYNXT INSIGHTS"
          titleLine1="IMPACT ACROSS"
          titleLine2="Ecosystems"
          titleLine2Serif={true}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="
          w-[90%]
          md:w-[85%]

          max-w-7xl

          mx-auto

          flex-grow

          flex
          flex-col

          pb-24

          mt-12
        "
      >
        {/* ===================================================
            NEWS SECTION
            =================================================== */}

        <section
          className="
            mb-24

            w-full
          "
        >
          {/* =================================================
              SECTION TITLE
              ================================================= */}

          <h2
            className="
              text-3xl
              md:text-4xl

              font-primary
              font-bold

              text-center

              mb-16
            "
          >
            In The{" "}
            <span
              className="
                font-serifa
                italic

                text-accent

                font-normal
              "
            >
              News
            </span>
          </h2>

          {/* =================================================
              NEWS CONTENT
              ================================================= */}

          {hasNews ? (
            <div
              className="
                flex
                flex-col

                gap-6
                md:gap-8

                w-full
              "
            >
              {/* =============================================
                  STANDARD NEWS
                  ============================================= */}

              {standardRows.map(
                (row) => (
                  <StandardNewsRow
                    key={row.id}
                    items={row.items}
                  />
                )
              )}

              {/* =============================================
                  MEDIA COVERAGE
                  ============================================= */}

              {coverageStories.map(
                (item) => (
                  <MediaCoverageCard
                    key={`coverage-${item.id}`}
                    item={item}
                  />
                )
              )}
            </div>
          ) : (
            // =================================================
            // EMPTY STATE
            // =================================================

            <div
              className="
                w-full

                py-16

                text-center

                border
                border-accent/20

                rounded-[2rem]

                bg-container-bg
              "
            >
              <p
                className="
                  text-sm
                  md:text-base

                  font-primary

                  text-text-main/60
                "
              >
                News updates will appear here soon.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />
    </main>
  );
};

export default InsightsEventsPage;