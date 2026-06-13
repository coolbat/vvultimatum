import { site } from "./site";

export type VerificationStatus = "verified" | "cross_checked" | "conflict" | "needs_recheck";

export type SourceKey =
  | "officialRoblox"
  | "rolimons"
  | "vvNetHome"
  | "vvNetCodes"
  | "vvNetRaces"
  | "vvOrgHome"
  | "bloxRaces"
  | "bloxHollow"
  | "bloxQuincy"
  | "bloxCharms"
  | "destructoidLinks"
  | "pggLinks"
  | "pggBeginner"
  | "pggCodes"
  | "pcgamesnCodes"
  | "pggQuincy"
  | "pggShinigami"
  | "pggHollow"
  | "pggClans"
  | "pggCharms"
  | "pggSkills"
  | "gamezeboQuincy"
  | "beebomHollow"
  | "fandomHollow"
  | "fandomArrancar"
  | "sportskeedaControls"
  | "destructoidClans"
  | "destructoidCharms"
  | "gamesggTierList"
  | "gamesggCharms"
  | "beebomTierList"
  | "vvBuilder"
  | "pocketTacticsCodes";

export type SourceRef = {
  key: SourceKey;
  label: string;
  url: string;
  checkedAt: string;
  note: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  primaryKeyword: string;
  cluster: "getting-started" | "progression" | "systems" | "reference";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  status: VerificationStatus;
  checkedAt: string;
  quickAnswer: string;
  intro: string;
  keyFacts: string[];
  steps: string[];
  commonMistakes: string[];
  faq: Faq[];
  sections?: GuideSection[];
  videos?: VideoReference[];
  sources: SourceKey[];
  related: string[];
};

export type GuideSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type VideoReference = {
  title: string;
  youtubeId: string;
  url: string;
  note: string;
};

export type Race = {
  slug: "shinigami" | "quincy" | "hollow";
  name: string;
  summary: string;
  bestFor: string;
  progression: string[];
  risks: string[];
  sources: SourceKey[];
};

export type CodeEntry = {
  code: string;
  reward: string;
  status: "active" | "source_conflict" | "reported_expired";
  note: string;
  sources: SourceKey[];
};

export type BossNote = {
  name: string;
  purpose: string;
  route: string;
  confidence: VerificationStatus;
  sources: SourceKey[];
};

export const sources: Record<SourceKey, SourceRef> = {
  officialRoblox: {
    key: "officialRoblox",
    label: "Official Roblox game page",
    url: site.officialGameUrl,
    checkedAt: "2026-06-12",
    note: "Primary source for game description, developer group, public play link, and 130+ skills claim.",
  },
  rolimons: {
    key: "rolimons",
    label: "Rolimon's game stats",
    url: "https://www.rolimons.com/game/6270290407",
    checkedAt: "2026-06-12",
    note: "Third-party Roblox stats snapshot used only for public traction context, not gameplay facts.",
  },
  vvNetHome: {
    key: "vvNetHome",
    label: "vvultimatum.net fan wiki home",
    url: "https://vvultimatum.net/",
    checkedAt: "2026-06-12",
    note: "Competitor IA reference: wiki hub, races, bosses, builds, tier lists, and updates.",
  },
  vvNetCodes: {
    key: "vvNetCodes",
    label: "vvultimatum.net codes page",
    url: "https://vvultimatum.net/codes",
    checkedAt: "2026-06-12",
    note: "Code status and redemption requirements cross-check.",
  },
  vvNetRaces: {
    key: "vvNetRaces",
    label: "vvultimatum.net races overview",
    url: "https://vvultimatum.net/races",
    checkedAt: "2026-06-12",
    note: "Race hub and progression IA reference.",
  },
  vvOrgHome: {
    key: "vvOrgHome",
    label: "vvultimatum.org starter guide",
    url: "https://www.vvultimatum.org/",
    checkedAt: "2026-06-12",
    note: "Source-labeled lightweight guide reference and official-link treatment.",
  },
  bloxRaces: {
    key: "bloxRaces",
    label: "BloxInformer races page",
    url: "https://bloxinformer.com/wikis/vvultimatum/races/",
    checkedAt: "2026-06-12",
    note: "Race list and high-level Shinigami, Quincy, Hollow mechanics.",
  },
  bloxHollow: {
    key: "bloxHollow",
    label: "BloxInformer Hollow page",
    url: "https://bloxinformer.com/wikis/vvultimatum/hollow/",
    checkedAt: "2026-06-12",
    note: "Hollow variants, Menos branch, Adjuchas and Vasto Lorde route notes.",
  },
  bloxQuincy: {
    key: "bloxQuincy",
    label: "BloxInformer Quincy page",
    url: "https://bloxinformer.com/wikis/vvultimatum/qunicy/",
    checkedAt: "2026-06-12",
    note: "Quincy milestones: Soldat Cap, Sanrei Glove, Evolved Spirit Weapon, Letzt Stil.",
  },
  bloxCharms: {
    key: "bloxCharms",
    label: "BloxInformer Spirit Charms page",
    url: "https://bloxinformer.com/wikis/vvultimatum/charms/",
    checkedAt: "2026-06-12",
    note: "Spirit Charm binding, notch risk, Valley of Screams removal, and merge basics.",
  },
  destructoidLinks: {
    key: "destructoidLinks",
    label: "Destructoid links roundup",
    url: "https://www.destructoid.com/vv-ultimatum-trello-wiki-and-discord/",
    checkedAt: "2026-06-12",
    note: "Secondary source for Trello, wiki, Discord, Roblox group, and YouTube link intent.",
  },
  pggLinks: {
    key: "pggLinks",
    label: "Pro Game Guides links hub",
    url: "https://progameguides.com/roblox/vv-ultimatum-discord-trello-wiki-links/",
    checkedAt: "2026-06-12",
    note: "SERP-backed links intent page covering Discord, Trello, wiki, Roblox group, YouTube, and TikTok.",
  },
  pggBeginner: {
    key: "pggBeginner",
    label: "Pro Game Guides beginner guide",
    url: "https://progameguides.com/roblox/vv-ultimatum-beginners-guide-2/",
    checkedAt: "2026-06-12",
    note: "Beginner SERP source for tutorial value, controls, mission tickets, level-up loop, and level 25/60 milestones.",
  },
  pggCodes: {
    key: "pggCodes",
    label: "Pro Game Guides codes page",
    url: "https://progameguides.com/roblox/vv-ultimatum-codes/",
    checkedAt: "2026-06-12",
    note: "Cross-check for active and inactive code status.",
  },
  pcgamesnCodes: {
    key: "pcgamesnCodes",
    label: "PCGamesN codes page",
    url: "https://www.pcgamesn.com/vv-ultimatum/codes",
    checkedAt: "2026-06-12",
    note: "Code list and redemption flow cross-check, including source conflicts.",
  },
  pggQuincy: {
    key: "pggQuincy",
    label: "Pro Game Guides Quincy progression",
    url: "https://progameguides.com/roblox/vv-ultimatum-quincy-progression-guide/",
    checkedAt: "2026-06-12",
    note: "Detailed Quincy route, mission loop, Sanrei Glove materials, and Securis fight context.",
  },
  pggShinigami: {
    key: "pggShinigami",
    label: "Pro Game Guides Shinigami progression",
    url: "https://progameguides.com/roblox/vv-ultimatum-shinigami-progression-guide/",
    checkedAt: "2026-06-12",
    note: "Shinigami route source for Main Story, Soul Society missions, Soul Pager, meditation, and Shikai unlock sequence.",
  },
  pggHollow: {
    key: "pggHollow",
    label: "Pro Game Guides Hollow progression",
    url: "https://progameguides.com/roblox/complete-vv-ultimatum-hollow-progression-guide/",
    checkedAt: "2026-06-12",
    note: "Hollow SERP source for Arrancar, Vasto Lorde, resurrection meditation, and update-sensitive branch details.",
  },
  pggClans: {
    key: "pggClans",
    label: "Pro Game Guides clans tier list",
    url: "https://progameguides.com/roblox/vv-ultimatum-clans-tier-list/",
    checkedAt: "2026-06-12",
    note: "Clan SERP source covering Quincy, Shinigami, and Arrancar clan passive categories and build matching.",
  },
  pggCharms: {
    key: "pggCharms",
    label: "Pro Game Guides Spirit Charm tier list",
    url: "https://progameguides.com/roblox/vv-ultimatum-best-spirit-charms-tier-list/",
    checkedAt: "2026-06-12",
    note: "Charm SERP source noting 50+ Spirit Charms and tier/effect evaluation demand.",
  },
  pggSkills: {
    key: "pggSkills",
    label: "Pro Game Guides skill tree tier list",
    url: "https://progameguides.com/roblox/vv-ultimatum-skill-tree-tier-list-best-skills/",
    checkedAt: "2026-06-12",
    note: "Skill tree source for Hakuda, Sense, Strength, Quincy, Shinigami, Hollow, Misc, and Speed trees.",
  },
  gamezeboQuincy: {
    key: "gamezeboQuincy",
    label: "Gamezebo Quincy progression",
    url: "https://www.gamezebo.com/walkthroughs/vv-ultimatum-quincy-progression/",
    checkedAt: "2026-06-12",
    note: "Quincy walkthrough cross-check for Securis, Schrift, and Letzt Stil progression wording.",
  },
  beebomHollow: {
    key: "beebomHollow",
    label: "Beebom Hollow progression",
    url: "https://beebom.com/vv-ultimatum-hollow-progression-guide/",
    checkedAt: "2026-06-12",
    note: "Hollow progression cross-check describing Fishbone to Menos, Adjuchas, Vasto Lorde, and Arrancar path.",
  },
  fandomHollow: {
    key: "fandomHollow",
    label: "VV Ultimatum Fandom Hollow progression",
    url: "https://vv-ultimatum.fandom.com/wiki/Hollow_Progression",
    checkedAt: "2026-06-12",
    note: "Community wiki source for Hollow stages, Menos branch warning, Adjuchas quest requirements, and Vasto Lorde trait-slot caution.",
  },
  fandomArrancar: {
    key: "fandomArrancar",
    label: "VV Ultimatum Fandom Arrancar page",
    url: "https://vv-ultimatum.fandom.com/wiki/Arrancar",
    checkedAt: "2026-06-12",
    note: "Community wiki source for Arrancar versus Vastocar trait slots and Resurreccion access warnings.",
  },
  sportskeedaControls: {
    key: "sportskeedaControls",
    label: "Sportskeeda controls guide",
    url: "https://www.sportskeeda.com/roblox-news/vv-ultimatum-controls-guide-pc-ps-xbox",
    checkedAt: "2026-06-12",
    note: "Controls SERP source for PC, PlayStation, Xbox, and keybind-change search intent.",
  },
  destructoidClans: {
    key: "destructoidClans",
    label: "Destructoid clan tier list",
    url: "https://www.destructoid.com/vv-ultimatum-clan-tier-list/",
    checkedAt: "2026-06-12",
    note: "Clan competitor page with race-specific clan recommendations and high-intent tier-list framing.",
  },
  destructoidCharms: {
    key: "destructoidCharms",
    label: "Destructoid charm tier list",
    url: "https://www.destructoid.com/vv-ultimatum-charm-tier-list/",
    checkedAt: "2026-06-12",
    note: "Charm competitor page focused on PvP usefulness, downside risk, and S-through-D tier search intent.",
  },
  gamesggTierList: {
    key: "gamesggTierList",
    label: "GAMES.GG tier list",
    url: "https://games.gg/roblox/guides/vv-ultimatum-tier-list/",
    checkedAt: "2026-06-12",
    note: "SERP competitor for best races, clans, skills, and builds with concise meta conclusions.",
  },
  gamesggCharms: {
    key: "gamesggCharms",
    label: "GAMES.GG Spirit Charm tier list",
    url: "https://games.gg/roblox/guides/vv-ultimatum-spirit-charm-tier-list/",
    checkedAt: "2026-06-12",
    note: "Charm competitor page targeting PvP/PvE, notch costs, locations, and best combinations.",
  },
  beebomTierList: {
    key: "beebomTierList",
    label: "Beebom VV Ultimatum tier list",
    url: "https://beebom.com/vv-ultimatum-tier-list/",
    checkedAt: "2026-06-12",
    note: "Cross-check for clans, race, skill tree, build, and permanent-stat framing.",
  },
  vvBuilder: {
    key: "vvBuilder",
    label: "VV Builder competitor",
    url: "https://vvbuilder.com/",
    checkedAt: "2026-06-12",
    note: "Exact-match build planner competitor showing tool-intent demand around skill tree, stat route, and build summaries.",
  },
  pocketTacticsCodes: {
    key: "pocketTacticsCodes",
    label: "Pocket Tactics codes page",
    url: "https://www.pockettactics.com/vv-ultimatum-codes",
    checkedAt: "2026-06-12",
    note: "Additional code list and redemption requirement cross-check.",
  },
};

export const codes: CodeEntry[] = [
  {
    code: "FULLRELEASE",
    reward: "Limited Manipulator's Eyepatch plus clan rerolls.",
    status: "active",
    note: "Consistently listed as active by the strongest code sources checked.",
    sources: ["vvNetCodes", "pggCodes", "pcgamesnCodes", "pocketTacticsCodes"],
  },
  {
    code: "75KLIKES",
    reward: "Ability or weapon rerolls, depending on source wording.",
    status: "active",
    note: "Active across the main June 2026 code pages, but reward wording differs.",
    sources: ["vvNetCodes", "pggCodes", "pcgamesnCodes", "pocketTacticsCodes"],
  },
  {
    code: "SDFIX",
    reward: "Reported as either weapon rerolls or Hogyoku shard/Reiatsu color rerolls.",
    status: "source_conflict",
    note: "Pro Game Guides marks it inactive while PCGamesN and Pocket Tactics still list it. Recheck in game before publishing as active.",
    sources: ["pggCodes", "pcgamesnCodes", "pocketTacticsCodes"],
  },
  {
    code: "30KLIKES",
    reward: "Clan rerolls and Reiatsu color rerolls reported by several sources.",
    status: "source_conflict",
    note: "Older milestone code with conflicting active/expired treatment. Keep below active codes.",
    sources: ["pggCodes", "pcgamesnCodes", "pocketTacticsCodes"],
  },
  {
    code: "day1",
    reward: "Clan rerolls, token booster, and focus elixir reported by code sites.",
    status: "source_conflict",
    note: "Launch code with conflicting source status. Treat as test-only until confirmed in game.",
    sources: ["pggCodes", "pcgamesnCodes", "pocketTacticsCodes"],
  },
];

export const races: Race[] = [
  {
    slug: "quincy",
    name: "Quincy",
    summary: "A ranged spirit-weapon route with the clearest mission ladder and a defined Level 25 progression gate.",
    bestFor: "Players who want structured missions, ranged pressure, and a target path toward Schrift and Letzt Stil.",
    progression: ["Reach Soldat Cap at Level 25", "Run Lieutenant missions and report each task", "Buy and craft the Sanrei Glove", "Meditate and push toward Evolved Spirit Weapon", "Clear Securis in Arctic Plains for Schrift"],
    risks: ["Do not waste mission cooldowns by rerolling tasks without a reason.", "Do not spread stats too widely before your build direction is clear."],
    sources: ["bloxQuincy", "pggQuincy", "vvOrgHome"],
  },
  {
    slug: "hollow",
    name: "Hollow",
    summary: "A monster-evolution route built around variants, eating Hollows, traits, and branch choices that can lock future options.",
    bestFor: "Players who like evolution decisions, trait hunting, and higher-risk progression with powerful end forms.",
    progression: ["Start as one of four Hollow variants", "Consume Hollows until Menos", "Choose Menoscar for speed or Adjuchas for deeper progression", "Push Adjuchas toward Vasto Lorde if you want maximum trait potential", "Convert to Arrancar/Vastocar only when the route is worth locking"],
    risks: ["Pressing L at the wrong branch can stop deeper Hollow evolution.", "Trait and form choices should be checked before irreversible steps."],
    sources: ["bloxHollow", "bloxRaces", "vvOrgHome"],
  },
  {
    slug: "shinigami",
    name: "Shinigami",
    summary: "A Zanpakuto-focused blade route with Shikai and Bankai-style milestones and a strong melee identity.",
    bestFor: "Players who want weapon-form progression, Soul Reaper fantasy, and close-range commitment.",
    progression: ["Choose Shinigami if Zanpakuto forms are the main draw", "Build around your weapon pool before chasing rerolls", "Unlock Shikai only after you understand the fight requirement", "Treat Bankai details as update-sensitive until verified", "Use race and build pages before wiping"],
    risks: ["Current public sources are thinner than Quincy/Hollow data.", "Avoid writing permanent claims about Bankai until checked against current in-game evidence."],
    sources: ["bloxRaces", "vvNetRaces", "vvNetHome"],
  },
];

export const bosses: BossNote[] = [
  {
    name: "Securis",
    purpose: "Quincy route checkpoint tied to Schrift and Letzt Stil progression.",
    route: "Arctic Plains solo fight after the Sanrei Glove and meditation loop.",
    confidence: "cross_checked",
    sources: ["bloxQuincy", "pggQuincy"],
  },
  {
    name: "Rogue Quincy Commander",
    purpose: "Reported route for Broken Quincy Medallion, a Sanrei Glove material.",
    route: "Arctic Plains near the large gate, with Quincy soldiers nearby.",
    confidence: "needs_recheck",
    sources: ["pggQuincy"],
  },
  {
    name: "Shikai Spirit",
    purpose: "Shinigami progression fight searched by players after choosing the Zanpakuto route.",
    route: "Keep this page conservative until a source-checked walkthrough is added.",
    confidence: "needs_recheck",
    sources: ["vvNetHome", "vvNetRaces"],
  },
  {
    name: "Resurreccion Spirit",
    purpose: "Hollow/Arrancar progression fight searched by players approaching final route choices.",
    route: "Use Hollow route context first; publish exact moves only after direct verification.",
    confidence: "needs_recheck",
    sources: ["bloxHollow", "vvNetHome"],
  },
];

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    title: "VV Ultimatum Beginner Guide",
    metaTitle: "VV Ultimatum Beginner Guide",
    description: "A first-session VV Ultimatum route: choose a race, avoid irreversible mistakes, claim safe codes, and keep official links open.",
    primaryKeyword: "VV Ultimatum beginner guide",
    cluster: "getting-started",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Start by choosing between Quincy, Hollow, and Shinigami based on progression style, then finish the tutorial, join the Midnight Continent group for code redemption, and avoid race or stat resets until you know your route.",
    intro:
      "VV: ULTIMATUM is a Roblox fighting RPG where early choices matter more than most code-first guides imply. This route keeps the first hour focused on race selection, code eligibility, and low-regret progression.",
    keyFacts: ["Official Roblox page lists Midnight Continent as developer.", "The game description emphasizes factions, dangerous worlds, and 130+ skills.", "Current guide sources agree that the three core race paths are Shinigami, Quincy, and Hollow."],
    steps: [
      "Open the official Roblox game page rather than a copied experience.",
      "Pick a race by progression style, not by a single tier-list screenshot.",
      "Finish the tutorial before spending rerolls or chasing codes.",
      "Join the Midnight Continent Roblox group if you plan to redeem codes.",
      "Read your route guide before pressing branch keys, wiping, or locking stats.",
    ],
    commonMistakes: ["Spending rerolls before understanding race locks.", "Following fake pre-release code lists.", "Treating Hollow branch choices as reversible.", "Ignoring official Discord and Roblox links."],
    faq: [
      {
        question: "What is VV Ultimatum?",
        answer: "VV: ULTIMATUM is a fan-described Bleach-inspired Roblox fighting RPG by Midnight Continent with faction routes, monsters, boss fights, and more than 130 skills listed on the official game page.",
      },
      {
        question: "Which VV Ultimatum race is easiest to start?",
        answer: "Quincy currently has the clearest documented route because multiple sources describe its Level 25 Soldat Cap, Lieutenant missions, Sanrei Glove, and Securis progression.",
      },
      {
        question: "Should I use codes immediately?",
        answer: "Claim clearly active codes after completing the tutorial and group verification, but avoid spending rerolls until you know whether your race, traits, and build are worth keeping.",
      },
    ],
    videos: [
      {
        title: "The Full VV: Ultimatum Guide (LVL 1-100)",
        youtubeId: "0sILhj-jm5Q",
        url: "https://www.youtube.com/watch?v=0sILhj-jm5Q",
        note: "Useful as a broad visual route reference for first-session players. Use it beside the source-checked checklist below.",
      },
      {
        title: "VV: ULTIMATUM GUIDE! Codes, progression, controls and locations",
        youtubeId: "YElikc23KHk",
        url: "https://www.youtube.com/watch?v=YElikc23KHk",
        note: "Good companion video for seeing the game flow and common search topics in one place.",
      },
    ],
    sections: [
      {
        title: "First 15 minutes",
        body: [
          "Treat the tutorial as mandatory. Pro Game Guides calls out the tutorial because it teaches the green and orange deflect timing that later prevents random NPC deaths.",
          "Do not rush straight into rerolls after spawning. Your first job is to understand movement, block, counter, Sense, and how your chosen route changes the keys you will use later.",
        ],
        bullets: [
          "Finish tutorial and boss reward before spending rare rewards.",
          "Try block, counter, light attack, heavy attack, fast movement, and Sense once.",
          "Open the codes page only after you know whether the account route is worth keeping.",
        ],
      },
      {
        title: "Race choice before progression",
        body: [
          "Current sources agree the three main routes are Quincy, Shinigami, and Hollow, but they are not equally forgiving. Quincy is the easiest documented first route because its mission ladder, Soldat Cap, Sanrei Glove, and Securis gate have the clearest source coverage.",
          "Hollow offers stronger evolution fantasy but carries branch risk. Shinigami is attractive if Zanpakuto and Shikai are the goal, but it asks you to understand Soul Society missions, Sense, Soul Pager, meditation, and Shikai EXP.",
        ],
        bullets: [
          "Pick Quincy for structure and ranged pressure.",
          "Pick Hollow for evolution, traits, and later Arrancar/Vastocar choices.",
          "Pick Shinigami for Soul Reaper identity and Shikai route.",
        ],
      },
      {
        title: "Mission tickets and early leveling",
        body: [
          "PGG highlights Main Story quests, Daily quests, faction missions, random NPCs, monsters, chests, and exploration as the early leveling loop. The key idea is not to camp one place forever; roam between villages and route areas so more EXP opportunities appear.",
          "Mission Tickets matter because missions are one of the repeatable sources of rewards and progression. If you are stuck, go back to quests, chests, NPCs, and exploration before assuming your race route is broken.",
        ],
        bullets: [
          "Use quests and missions as the primary EXP loop.",
          "Farm tickets from quests, NPCs, players, creatures, chests, and missions where applicable.",
          "After level 25, check the matching race page because meditation starts to matter.",
        ],
      },
      {
        title: "What not to spend early",
        body: [
          "Codes often give rerolls, boosters, or cosmetics, but a reroll has more value after you know your race, clan, Spirit Charm direction, and build goal. The safest first-account rule is to delay irreversible spending until the route is stable.",
        ],
        bullets: [
          "Do not spend clan rerolls before reading the clan tier list page.",
          "Do not equip high-notch Spirit Charms before reading charm downsides.",
          "Do not wipe or branch Hollow before checking the Hollow progression page.",
        ],
      },
    ],
    sources: ["officialRoblox", "bloxRaces", "vvOrgHome", "vvNetHome", "pggBeginner"],
    related: ["best-race", "controls-keybinds", "leveling-guide", "quincy-progression", "hollow-progression"],
  },
  {
    slug: "best-race",
    title: "Best Race to Pick in VV Ultimatum",
    metaTitle: "Best VV Ultimatum Race",
    description: "Compare Shinigami, Quincy, and Hollow by progression clarity, risk, build direction, and first-account friendliness.",
    primaryKeyword: "best race VV Ultimatum",
    cluster: "getting-started",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Pick Quincy if you want the most structured route, Hollow if you enjoy evolution branches and trait hunting, and Shinigami if Zanpakuto progression is the fantasy you care about most.",
    intro:
      "Race choice defines the entire account loop. Instead of ranking one race as universally best, compare how much route structure, lock-in risk, and combat identity you want.",
    keyFacts: ["BloxInformer and the checked guide sites list three main race paths.", "Quincy route data is currently the most detailed in public sources.", "Hollow has explicit branch risks around Menoscar, Adjuchas, and Vasto Lorde progression."],
    steps: [
      "Choose Quincy for a mission-driven route and ranged spirit weapon focus.",
      "Choose Hollow only after reading the evolution branches and trait-slot consequences.",
      "Choose Shinigami for Zanpakuto identity, but verify current Shikai/Bankai details before committing resources.",
      "Delay wipe or defection decisions until your current route is clearly unsalvageable.",
    ],
    commonMistakes: ["Copying a tier list without checking playstyle.", "Underestimating Hollow branch lockouts.", "Picking Shinigami while expecting the same route clarity as Quincy."],
    faq: [
      {
        question: "Is Quincy beginner friendly?",
        answer: "Yes, based on current public guide coverage. It has a clear Level 25 progression gate, Lieutenant missions, Sanrei Glove materials, and a named boss checkpoint.",
      },
      {
        question: "Is Hollow stronger than Quincy?",
        answer: "The better question is whether you want Hollow's evolution and trait route. It can be powerful, but wrong branch choices can limit later progression.",
      },
      {
        question: "Can I change race later?",
        answer: "Race switching appears intentionally expensive or rare in current guide coverage. Plan as if your first choice matters, and use wipe guidance before spending resources.",
      },
    ],
    videos: [
      {
        title: "The BEST Race + Which Race To Choose In VV: Ultimatum",
        youtubeId: "HellD5cKp_0",
        url: "https://www.youtube.com/watch?v=HellD5cKp_0",
        note: "Use as a visual comparison point, then confirm the route tradeoffs with the source-checked sections below.",
      },
      {
        title: "VV: ULTIMATUM BEST RACES GUIDE",
        youtubeId: "L0hKBRNJGEs",
        url: "https://www.youtube.com/watch?v=L0hKBRNJGEs",
        note: "Useful for seeing how creators frame race strengths and weaknesses shortly after release.",
      },
    ],
    sections: [
      {
        title: "Best race for a first character",
        body: [
          "Quincy is the safest recommendation for most new accounts because public sources describe its Level 25 gate, Lieutenant missions, Sanrei Glove, meditation loop, Securis fight, and Schrift route in more detail than the other paths.",
          "That does not mean Quincy is automatically the best endgame character. It means the first-account failure rate is lower because the checklist is clearer and the ranged toolkit gives more room to learn enemy timing.",
        ],
        bullets: [
          "Choose Quincy if you want structure, ranged pressure, and the clearest public progression route.",
          "Choose Hollow only if you are comfortable with evolution branches and trait planning.",
          "Choose Shinigami if the Zanpakuto/Shikai fantasy matters more than early route clarity.",
        ],
      },
      {
        title: "Why Hollow is high upside but higher risk",
        body: [
          "Hollow progression is powerful because the route can lead through Fishbone, Menos, Adjuchas, Vasto Lorde, and Arrancar/Vastocar decisions. The risk is that mask-rip timing and trait slots matter; rushing a branch can leave the account with fewer long-term options.",
          "If you enjoy evolution routes and do not mind reading ahead before each branch, Hollow is one of the most interesting choices. If you want a relaxed first run, start elsewhere and come back once you understand combat and build systems.",
        ],
      },
      {
        title: "Why Shinigami is a style pick right now",
        body: [
          "Shinigami has strong fantasy value because it routes through Zanpakuto, Soul Society missions, meditation, Spirit Whispers, Inner World, and Shikai fights. That makes it more involved than a simple sword class.",
          "The main reason this site stays cautious is update risk. Shikai has solid source coverage, while late Bankai-specific details are still more volatile and should be checked before you spend around them.",
        ],
      },
      {
        title: "Race decision checklist",
        body: [
          "Before locking a race, decide what you want the account to do in the next five hours rather than chasing a one-word tier. Progression comfort, reroll cost, PvP goal, charm downsides, and clan passives all change the answer.",
        ],
        bullets: [
          "For leveling: choose the route whose missions you can follow without guesswork.",
          "For PvP: choose the route whose movement and range fit your hands.",
          "For buildcraft: choose the route with clan, skill tree, and Spirit Charm support you actually plan to use.",
        ],
      },
    ],
    sources: ["bloxRaces", "bloxHollow", "bloxQuincy", "vvNetRaces", "gamesggTierList", "beebomTierList"],
    related: ["quincy-progression", "hollow-progression", "shinigami-progression", "clans-tier-list", "build-planning"],
  },
  {
    slug: "controls-keybinds",
    title: "Controls and Keybinds Guide",
    metaTitle: "VV Ultimatum Controls and Keybinds",
    description: "PC, console, and combat-control notes for VV Ultimatum players who need keybinds, parry timing, Sense, portals, and safe remapping advice.",
    primaryKeyword: "VV Ultimatum controls",
    cluster: "getting-started",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Use the tutorial to learn green and orange deflect timing, keep Sense on a reachable key, and do not remap combat inputs until you know which buttons your race route uses for meditation, portals, and special forms.",
    intro:
      "Controls and keybinds are a separate search intent from beginner advice. Players landing here are usually stuck on parry timing, controller setup, or a route-specific key such as Sense, meditation, or portal travel.",
    keyFacts: [
      "Beginner SERP sources call out the tutorial because it teaches the deflect timing players need later.",
      "Shinigami and Hollow progression sources mention route-specific inputs such as Sense, portals, and meditation.",
      "Console and keybind searches are visible enough to deserve a dedicated page rather than a paragraph inside the beginner guide.",
    ],
    steps: [
      "Finish the tutorial and practice both green and orange deflect reactions before rushing into route quests.",
      "Keep movement, dash, block, and camera controls comfortable before changing ability keys.",
      "Keep Sense reachable because Shinigami guidance uses it to find nearby NPCs and quest targets.",
      "Do not remap route keys until you know whether your path needs meditation, Soul Society portal access, or Hollow resurrection inputs.",
      "On controller, test one fight and one travel loop after any keybind change before committing to progression.",
    ],
    commonMistakes: [
      "Skipping the tutorial and then missing deflect windows against normal NPCs.",
      "Copying a PvP keybind layout before learning the default route controls.",
      "Changing a key that a later race route depends on.",
      "Assuming a console binding works the same as keyboard input without testing it.",
    ],
    faq: [
      {
        question: "What is the most important VV Ultimatum control to learn first?",
        answer: "Deflect timing is the first priority because the tutorial introduces green and orange attacks, and that timing affects normal fights later.",
      },
      {
        question: "Should I change keybinds immediately?",
        answer: "No. Learn the default combat loop first, then remap only the keys that feel uncomfortable after one tutorial, travel, and mission loop.",
      },
      {
        question: "Why does Sense matter?",
        answer: "Current Shinigami guidance uses Sense to locate nearby NPCs, so keeping it accessible helps route progression and quest finding.",
      },
    ],
    videos: [
      {
        title: "The Full VV: Ultimatum Guide (LVL 1-100)",
        youtubeId: "0sILhj-jm5Q",
        url: "https://www.youtube.com/watch?v=0sILhj-jm5Q",
        note: "Includes broad beginner gameplay context and console-control commentary from the video result snippet.",
      },
    ],
    sections: [
      {
        title: "Core PC keys to learn first",
        body: [
          "The current PGG control table lists movement on W/A/S/D, jump on Space, fast movement on Q, sprint on Shift, light attack on left mouse, heavy attack on scroll wheel press, block on right mouse, counter on F, weapon equip on X, form activation on E, execute on B, maim on V, power up/down on G/H, interact on T, Sense on C, and menu on Tab.",
          "Do not treat that as a static MMO hotbar. Several progression routes change the meaning of keys once you unlock meditation, portals, or form systems, so test controls again after each route unlock.",
        ],
        bullets: [
          "Movement: W/A/S/D, Space, Q, Shift.",
          "Combat: left mouse, scroll wheel press, right mouse, F.",
          "Route utility: X, E, T, C, Tab.",
        ],
      },
      {
        title: "Deflect and counter practice",
        body: [
          "The tutorial introduces green and orange deflect patterns. This is one of the few tutorial pieces that should not be skipped because the same timing affects normal route fights and mission survival.",
          "If you keep dying to basic NPCs, do not immediately blame your race. Re-run the mental loop: block first, identify attack color, counter only when timing is stable, then add abilities after the core rhythm works.",
        ],
      },
      {
        title: "Route-specific keys",
        body: [
          "Shinigami guidance uses Sense to find nearby NPCs, then Soul Society access and Soul Pager missions create a separate route loop. Quincy guidance changes the L key once the Sanrei Glove is equipped, because it becomes the meditation trigger. Hollow and Arrancar guidance calls out meditation and form-equipping moments that are easy to miss if you remap blindly.",
        ],
        bullets: [
          "Keep Sense accessible for Shinigami quest routing.",
          "Expect Quincy meditation behavior to change after Sanrei Glove.",
          "Do not remap form activation until you understand your race's form route.",
        ],
      },
      {
        title: "Controller and console notes",
        body: [
          "Sportskeeda has a dedicated PC, PlayStation, and Xbox controls result, which confirms console/keybind intent is real. Because route unlocks can change what a button needs to do, test a full loop after every change: travel, talk to an NPC, fight one enemy, use Sense or equivalent utility, and open the menu.",
        ],
      },
    ],
    sources: ["pggBeginner", "pggShinigami", "pggHollow", "sportskeedaControls"],
    related: ["beginner-guide", "leveling-guide", "shinigami-progression", "hollow-progression"],
  },
  {
    slug: "leveling-guide",
    title: "Leveling Guide Level 1-100",
    metaTitle: "VV Ultimatum Leveling Guide",
    description: "A source-checked Level 1-100 leveling route for tutorial, quests, faction missions, meditation gates, PvP, and route-specific progression.",
    primaryKeyword: "VV Ultimatum leveling guide",
    cluster: "getting-started",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Level by finishing the tutorial, rotating Main Story and Daily quests, running faction missions, roaming instead of camping one spawn, then using race-specific meditation and PvP/event loops after the midgame opens.",
    intro:
      "Leveling has its own SERP because new players want a direct 1-100 path, not a general wiki dump. This page keeps the route broad where exact farm spots are update-sensitive and links into race pages when the leveling loop becomes faction-specific.",
    keyFacts: [
      "Pro Game Guides highlights tutorial completion, Daily quests, Main Story quests, faction missions, exploration, and NPC/monster fights as the main fast-leveling loop.",
      "The same source calls out level 25 and level 60 as meaningful progression moments.",
      "Race pages still matter because meditation, missions, and boss routes become faction-specific after the starter loop.",
    ],
    steps: [
      "Level 1-10: complete the tutorial, learn deflect timing, and claim safe rewards only after the route is stable.",
      "Level 10-25: rotate Main Story quests, Daily quests, and nearby faction tasks instead of camping one spot.",
      "Level 25+: start race-specific meditation and mission loops, especially Quincy Soldat Cap and Shinigami mission systems.",
      "Midgame: roam between areas so random NPCs, monsters, and route events keep feeding progress.",
      "Level 60+: add PvP, raids, or event loops only if your build can survive the risk.",
    ],
    commonMistakes: [
      "Camping a single location when exploration creates more opportunities.",
      "Ignoring meditation once race abilities become the real power gate.",
      "Trying PvP too early with a scattered stat build.",
      "Using a level guide without checking the matching race progression page.",
    ],
    faq: [
      {
        question: "How do I level up fast in VV Ultimatum?",
        answer: "Use Main Story quests, Daily quests, faction missions, exploration encounters, and NPC or monster fights instead of relying on one static farm spot.",
      },
      {
        question: "What changes at level 25?",
        answer: "Level 25 is important because sources connect it to deeper race progression, including Quincy Soldat Cap and meditation-related power growth.",
      },
      {
        question: "When should I start PvP?",
        answer: "Treat PvP as a later leveling and progression layer after your route, stats, and basic survival are stable.",
      },
    ],
    videos: [
      {
        title: "The Full VV: Ultimatum Guide (LVL 1-100)",
        youtubeId: "0sILhj-jm5Q",
        url: "https://www.youtube.com/watch?v=0sILhj-jm5Q",
        note: "Broad level-range walkthrough reference for players who want to see the route flow before reading the checklist.",
      },
      {
        title: "FULL FACTION / RACE MAX LEVEL GUIDE",
        youtubeId: "bdUc-0tIn2Y",
        url: "https://www.youtube.com/watch?v=bdUc-0tIn2Y",
        note: "Faction-focused leveling video useful when comparing Hollow, Quincy, and Shinigami pacing.",
      },
    ],
    sections: [
      {
        title: "Level 1-10: finish the tutorial cleanly",
        body: [
          "The first leveling mistake is skipping the combat lesson and then losing time to basic NPCs. Finish the tutorial, defeat the starter boss, and use the reward as an account head start rather than a reason to gamble rerolls.",
          "Your goal in this band is not max damage. It is learning deflect timing, movement, block, counter, weapon equip, Sense, and interaction keys so later route gates do not feel bugged.",
        ],
      },
      {
        title: "Level 10-25: rotate quests and tickets",
        body: [
          "PGG's beginner guide points players toward Main Story quests, Daily quests, faction missions, random NPCs/monsters, chests, and exploration. Convert that into a loop: take the best available quest, fight while traveling, open chests, and move areas when spawns dry up.",
          "Mission Tickets are worth protecting because missions feed rewards, EXP, shards, and faction progress. If a route feels slow, look for tickets and nearby quests before grinding one enemy camp for too long.",
        ],
        bullets: [
          "Do one quest loop before farming random enemies.",
          "Open chests while moving between villages and route areas.",
          "Ask for group help only after you know which mission is blocking you.",
        ],
      },
      {
        title: "Level 25: switch from generic leveling to race progression",
        body: [
          "Level 25 is the point where the account starts becoming its route. Quincy moves toward Soldat Cap and Lieutenant missions, Shinigami starts meaningful meditation for Shikai progress, and Hollow players should already be checking branch choices before making permanent decisions.",
          "From this point forward, do not read a leveling page alone. Keep the matching race progression guide open so EXP farming, meditation, boss fights, and skill spending all support the same goal.",
        ],
      },
      {
        title: "Level 25-60: build one route, not three builds",
        body: [
          "Midgame is where players lose hours by spreading stats across every attractive tree. Pick one pressure type first: weapon damage, Kido, Hakuda, ranged pressure, mobility, or survivability. Then spend points and rerolls only when they support that pressure.",
          "If you are Quincy, Lieutenant missions and Sanrei materials matter. If you are Shinigami, Spirit Whispers and Shikai EXP matter. If you are Hollow, mask-rip timing and trait slots matter more than generic EXP speed.",
        ],
      },
      {
        title: "Level 60+: add PvP, raids, and events carefully",
        body: [
          "PGG calls out Human World PvP, events, and raids around level 60. Treat those as optional acceleration only after your route can survive them. A weak build can lose more time in PvP than it gains.",
          "Before pushing endgame content, review clan passives, Spirit Charm notch cost, and route boss requirements. This is where a planned account starts pulling ahead of a rushed one.",
        ],
      },
    ],
    sources: ["pggBeginner", "pggQuincy", "pggShinigami", "pggHollow"],
    related: ["beginner-guide", "controls-keybinds", "quincy-progression", "shinigami-progression", "hollow-progression"],
  },
  {
    slug: "hollow-progression",
    title: "Hollow Progression Guide",
    metaTitle: "VV Ultimatum Hollow Progression",
    description: "Understand Hollow variants, Menos, Adjuchas, Vasto Lorde, Menoscar risk, trait slots, and when to avoid pressing L.",
    primaryKeyword: "VV Ultimatum Hollow progression",
    cluster: "progression",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Hollow progression starts with a random variant, moves through consuming Hollows to Menos, then branches. Menoscar is faster but blocks deeper evolution; Adjuchas keeps the path open toward Vasto Lorde and stronger later forms.",
    intro:
      "Hollow is the route where a short guide can prevent the biggest mistake: taking an early branch because the key prompt appears before you understand what it locks.",
    keyFacts: ["Four starting variants are currently documented: Turtle, Gorilla, Centipede, and Lizard.", "Menoscar grants a simpler branch but stops deeper evolution.", "Adjuchas and Vasto Lorde routes preserve more late-game potential."],
    steps: [
      "Identify your starting Hollow variant and its speed or defense tradeoff.",
      "Consume Hollows until the Menos stage triggers.",
      "Do not press L into Menoscar unless you knowingly accept the shorter route.",
      "Use Adjuchas if you want to continue toward Vasto Lorde.",
      "Only convert into the final Arrancar/Vastocar direction after checking trait slots and build goals.",
    ],
    commonMistakes: ["Pressing L as soon as the prompt appears.", "Ignoring trait-slot differences.", "Assuming every Hollow branch can reach the same final state.", "Spending rare rerolls before choosing the branch."],
    faq: [
      {
        question: "Should Hollow players press L at Menos?",
        answer: "Only if they deliberately want Menoscar. If the goal is deeper progression, current guides suggest continuing through Adjuchas toward Vasto Lorde instead.",
      },
      {
        question: "What are Hollow starting variants?",
        answer: "Current BloxInformer coverage lists Turtle, Gorilla, Centipede, and Lizard, each with different speed or defense tradeoffs.",
      },
      {
        question: "Why is Hollow risky for a first account?",
        answer: "The route has branch decisions and trait-slot consequences that are easier to mishandle than a straightforward mission ladder.",
      },
    ],
    videos: [
      {
        title: "FULL Hollow Progression Guide (Vastolorde, Arrancar, Resurrection)",
        youtubeId: "5C97HyQcDHA",
        url: "https://www.youtube.com/watch?v=5C97HyQcDHA",
        note: "Visual route reference for Fishbone to Vasto Lorde, Arrancar, and Resurrection decisions.",
      },
      {
        title: "The FULL Hollow Progression Guide (Vastocar To Resurrection)",
        youtubeId: "rop73fnN4j0",
        url: "https://www.youtube.com/watch?v=rop73fnN4j0",
        note: "Companion creator route for comparing Vasto/Vastocar timing against the written checklist.",
      },
    ],
    sections: [
      {
        title: "Fishbone and starting variants",
        body: [
          "Hollow starts as a variant-driven route rather than a normal class pick. BloxInformer lists Turtle, Gorilla, Centipede, and Lizard as current starting variants, while Fandom frames the early route as Basic Hollow or Fishbone into Menos.",
          "Do not over-optimize the first variant before you understand the later branch. The big account decisions happen when mask ripping, trait slots, and Arrancar timing enter the route.",
        ],
      },
      {
        title: "Menos branch warning",
        body: [
          "Fandom explicitly warns that ripping the mask at Menos is not recommended if your goal is deeper Hollow progression, because it limits the later Arrancar result to three traits and blocks the fourth trait-slot path.",
          "The practical rule is simple: if you want the strongest long-term Hollow route, do not press the mask-rip prompt just because it appears. Continue toward Adjuchas and Vasto Lorde first.",
        ],
        bullets: [
          "Menoscar is faster but lower ceiling.",
          "Adjuchas keeps deeper progression open.",
          "Vasto Lorde is the trait-planning checkpoint before Arrancar/Vastocar.",
        ],
      },
      {
        title: "Adjuchas and Vasto Lorde grind",
        body: [
          "Community wiki details describe the Adjuchas route as a quest-and-combat grind, including object destruction and Hollow kills. These numbers can shift after updates, so this page treats the specific kill counts as source-dependent and prioritizes the decision logic.",
          "Before becoming Vasto Lorde, keep checking whether your traits support the build you actually want. The route is slower, but the payoff is higher control before the final Hollow-to-Arrancar step.",
        ],
      },
      {
        title: "Arrancar versus Vastocar",
        body: [
          "The important split is not just the name; it is what the account keeps. Fandom's Arrancar page notes that early Arrancar paths can be limited to three traits, while a Vasto-origin route can preserve the fourth trait-slot potential.",
          "If you only want to unlock Resurrection quickly, early Arrancar can be tempting. If you care about long-term build quality, plan traits first and convert after Vasto Lorde when the route supports it.",
        ],
      },
      {
        title: "Resurrection meditation",
        body: [
          "PGG's Hollow guide says Resurrection requires becoming Arrancar first, then meditating with the active weapon equipped. It also notes that meditations are most effective when Inner World whispers appear as yellow text.",
          "If meditation keeps putting you to sleep, treat that as a progression signal rather than a bug. Go back to quests, missions, fights, and Hollow route work, then meditate again when whispers appear.",
        ],
        bullets: [
          "Equip the active weapon before meditating.",
          "Watch for yellow whisper text.",
          "Expect the Resurrection fight to involve your original Hollow type.",
        ],
      },
    ],
    sources: ["bloxHollow", "bloxRaces", "vvOrgHome", "vvNetRaces", "pggHollow", "beebomHollow", "fandomHollow", "fandomArrancar"],
    related: ["best-race", "spirit-charms", "build-planning"],
  },
  {
    slug: "quincy-progression",
    title: "Quincy Progression Guide",
    metaTitle: "VV Ultimatum Quincy Progression",
    description: "Follow the Quincy route from Soldat Cap to Lieutenant missions, Sanrei Glove, Evolved Spirit Weapon, Securis, Schrift, and Letzt Stil.",
    primaryKeyword: "VV Ultimatum Quincy progression",
    cluster: "progression",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Quincy progression opens at Level 25 with Soldat Cap. From there, complete and report Lieutenant missions, craft the Sanrei Glove, meditate toward Evolved Spirit Weapon, then clear the Securis route to unlock Schrift and Letzt Stil.",
    intro:
      "Quincy has the strongest public documentation right now, which makes it the easiest route to turn into a dependable checklist. The main risk is wasting mission credit or delaying route milestones.",
    keyFacts: ["Soldat Cap unlocks the route at Level 25.", "Sanrei Glove recipe is reported at 300 Soul Tokens from a Wandenreich NPC.", "Securis is tied to the Schrift route in current guide coverage."],
    steps: [
      "Reach Level 25 and unlock Soldat Cap.",
      "Start Lieutenant missions immediately and report each completed task.",
      "Buy the Sanrei Glove recipe in Wandenreich when prompted.",
      "Collect the glove materials before pushing meditation.",
      "Meditate and keep doing missions until the route points you to the Securis fight.",
      "Clear Securis, return to the Lieutenant, and finish the post-fight mission loop.",
    ],
    commonMistakes: ["Completing a mission but not reporting it.", "Resetting mission cooldowns unnecessarily.", "Ignoring Sanrei material prep.", "Spreading stats across too many trees before the route is stable."],
    faq: [
      {
        question: "When does Quincy progression start?",
        answer: "Current guide sources place the real route start at Level 25, when Soldat Cap unlocks Lieutenant mission progression.",
      },
      {
        question: "How do I get the Sanrei Glove?",
        answer: "The checked sources describe buying the recipe from a Wandenreich NPC for 300 Soul Tokens, then gathering Broken Quincy Medallion, Frost Alloy, and Strange Essences.",
      },
      {
        question: "What boss matters for Quincy?",
        answer: "Securis is the main named boss checkpoint tied to the Schrift and Letzt Stil route in the current public guides.",
      },
    ],
    videos: [
      {
        title: "The FULL Quincy Progression Guide (Letz Stil To Schrift)",
        youtubeId: "C9zHNOFtSVo",
        url: "https://www.youtube.com/watch?v=C9zHNOFtSVo",
        note: "Current creator walkthrough for the full Quincy route from early missions toward Letzt Stil and Schrift.",
      },
      {
        title: "How To Get Schrift, Letz, Evolved Weapon Fast",
        youtubeId: "cfbe7cJe1cE",
        url: "https://www.youtube.com/watch?v=cfbe7cJe1cE",
        note: "Useful visual cross-check for the Sanrei Glove, Evolved Spirit Weapon, Letzt Stil, and Securis sequence.",
      },
    ],
    sections: [
      {
        title: "Level 25 and Soldat Cap",
        body: [
          "Quincy progression starts becoming specific at Level 25. PGG describes the route as a sequence: Lieutenant missions, Sanrei Glove, Evolved Spirit Weapon, Letzt Stil, and then Schrift through Securis.",
          "Do not spend the 25-35 window grinding random mobs while ignoring the route NPC. The sources repeatedly emphasize missions because they are progression credit, not just side rewards.",
        ],
      },
      {
        title: "Lieutenant missions without wasting cooldown",
        body: [
          "After the route opens, the Lieutenant mission board becomes the main loop. PGG notes that higher-star missions carry more weight, but the important operational detail is reporting completed missions and not resetting the task cooldown by selecting a new task unnecessarily.",
          "Use the Lieutenant dialogue as a progress bar. If the report text says the job is not done, keep running missions. If it signals higher-ups are happy or asks you to report later, you are moving to the next gate.",
        ],
        bullets: [
          "Pick missions you can clear reliably rather than only chasing stars.",
          "Always press Report Task after finishing a mission.",
          "Avoid Get New Task unless you intentionally accept the cooldown loss.",
        ],
      },
      {
        title: "Sanrei Glove material plan",
        body: [
          "Current PGG and vvultimatum.net coverage agree that the Sanrei Glove recipe costs 300 Soul Tokens, then asks for Broken Quincy Medallion, Frost Alloy, and Strange Essence materials. The glove also changes your input loop because L becomes meditation once equipped.",
          "Material farming should follow route prompts. Farming a rare medallion before the glove step is active can waste time if an update changes the source or your account is not eligible yet.",
        ],
        bullets: [
          "Strange Essence: light-blue Hollow sources, with a waterfall spot called out by PGG.",
          "Frost Alloy: crafted from Frost Deviant Shard, Great Soul Essence, and Spirit Alloy in PGG's route.",
          "Broken Quincy Medallion: Commander route is higher confidence than low-rate archer farming.",
        ],
      },
      {
        title: "Evolved Spirit Weapon and Letzt Stil",
        body: [
          "After the glove, stay with Lieutenant missions until the route moves into meditation. PGG and Gamezebo both describe the 70 Max Reiatsu meditation step as a repeated loop, commonly around three to five meditations before the next signal appears.",
          "Do not expect one meditation to solve the route. Let the Reiatsu drain, recover, repeat, then check the Lieutenant dialogue and fight strong enemies if the route asks for combat proof.",
        ],
      },
      {
        title: "Securis and Schrift",
        body: [
          "Securis is the strongest named boss checkpoint in current Quincy sources. PGG places the final target in Arctic Plains after Letzt Stil, while broader walkthroughs frame the fight as the path into Schrift.",
          "Because boss tuning can shift quickly, this site keeps Securis mechanics high-level here and points detailed boss/drop claims to the bosses tracker. Use the route guide to know why you fight Securis, then recheck current fight footage for attack patterns.",
        ],
      },
    ],
    sources: ["bloxQuincy", "pggQuincy", "vvOrgHome", "gamezeboQuincy", "vvNetHome"],
    related: ["sanrei-glove", "bosses-and-drops", "build-planning"],
  },
  {
    slug: "sanrei-glove",
    title: "Sanrei Glove Route",
    metaTitle: "VV Ultimatum Sanrei Glove",
    description: "Sanrei Glove checklist for Quincy players: when it appears, what materials are reported, and how to avoid route stalls.",
    primaryKeyword: "VV Ultimatum Sanrei Glove",
    cluster: "progression",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "The Sanrei Glove is a Quincy milestone after enough Lieutenant missions. Current sources describe a Wandenreich recipe cost of 300 Soul Tokens and materials including Broken Quincy Medallion, Frost Alloy, and Strange Essences.",
    intro:
      "This focused page exists because Sanrei Glove queries are more specific than broad Quincy progression. Treat exact material drop claims as route-sensitive and recheck after updates.",
    keyFacts: ["Sanrei Glove changes the Quincy L-key behavior to meditation.", "Broken Quincy Medallion is the highest-friction reported material.", "Frost Alloy and Strange Essence sources should be checked before long farms."],
    steps: [
      "Complete enough Lieutenant missions to trigger the glove prompt.",
      "Go to Wandenreich and buy the recipe when available.",
      "Farm or trade for Strange Essences and Frost Alloy components.",
      "Target Broken Quincy Medallion sources only after checking current route confidence.",
      "Equip the glove and begin the meditation loop.",
    ],
    commonMistakes: ["Farming rare drops before the route prompt is active.", "Trusting exact drop rates without current confirmation.", "Forgetting that the glove changes your next input loop."],
    faq: [
      {
        question: "What does the Sanrei Glove do?",
        answer: "It moves Quincy progression into the meditation and Evolved Spirit Weapon phase after the Lieutenant mission gate.",
      },
      {
        question: "Where is the Sanrei Glove recipe?",
        answer: "Current public guides point to a Wandenreich NPC selling the recipe for 300 Soul Tokens.",
      },
      {
        question: "Is the Broken Quincy Medallion guaranteed?",
        answer: "One checked guide reports a commander route as guaranteed and archer drops as very low. Treat this as update-sensitive until confirmed in game.",
      },
    ],
    videos: [
      {
        title: "The FULL Quincy Progression Guide (Letz Stil To Schrift)",
        youtubeId: "C9zHNOFtSVo",
        url: "https://www.youtube.com/watch?v=C9zHNOFtSVo",
        note: "Best fit for players who want to see where the Sanrei Glove sits inside the larger Quincy route.",
      },
    ],
    sections: [
      {
        title: "When to start the glove farm",
        body: [
          "Do not farm Sanrei materials just because you saw the item name in a video. The safer route is to reach Level 25, complete Lieutenant missions, and wait until the Lieutenant prompt sends you toward the glove.",
          "Starting after the prompt matters because this page is about progression, not only inventory. You want the recipe, materials, and next meditation step to line up.",
        ],
      },
      {
        title: "Recipe cost and input change",
        body: [
          "PGG reports the Sanrei Glove recipe as a Wandenreich NPC purchase costing 300 Soul Tokens. Once equipped, the glove changes the L key into the meditation input, so confirm your keybinds before assuming the route is stuck.",
        ],
        bullets: [
          "Save Soul Tokens until the glove prompt appears.",
          "Buy the recipe from the Wandenreich route NPC.",
          "After crafting, test meditation before running more missions.",
        ],
      },
      {
        title: "Material checklist",
        body: [
          "The current source set points to three categories: Strange Essence, Frost Alloy, and Broken Quincy Medallion. Strange Essence has the clearest farm hint, Frost Alloy is a sub-craft, and Broken Quincy Medallion is the friction point.",
        ],
        bullets: [
          "Strange Essence: target unusual light-blue Hollows; PGG calls out a waterfall spot near Society Outskirts spawn.",
          "Frost Alloy: prepare Frost Deviant Shard, Great Soul Essence, and Spirit Alloy based on the PGG material table.",
          "Broken Quincy Medallion: prioritize the Rogue Quincy Commander route if available; low-rate archer drops are a fallback.",
        ],
      },
      {
        title: "After crafting",
        body: [
          "The glove is not the end of Quincy progression. It is the bridge into meditation, Evolved Spirit Weapon, Letzt Stil, and eventually Securis/Schrift. Keep the Quincy progression page open after crafting so the next gate is clear.",
        ],
      },
    ],
    sources: ["bloxQuincy", "pggQuincy", "gamezeboQuincy"],
    related: ["quincy-progression", "bosses-and-drops", "build-planning"],
  },
  {
    slug: "shinigami-progression",
    title: "Shinigami Progression Guide",
    metaTitle: "VV Ultimatum Shinigami Progression",
    description: "A Shinigami route guide for Zanpakuto, Soul Society missions, Soul Pager, meditation, Shikai EXP, and source-safe Bankai notes.",
    primaryKeyword: "VV Ultimatum Shinigami progression",
    cluster: "progression",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Shinigami progression starts with Main Story quests and Soul Society missions, then moves through Soul Pager access, repeated meditation, Shikai EXP, and a self-fight sequence before deeper Bankai claims should be treated as update-sensitive.",
    intro:
      "Shinigami searches split into Soul Reaper progression, Shikai unlock, and later Bankai curiosity. This page now treats Shikai route information as cross-checked while keeping late-game claims clearly marked until stronger evidence exists.",
    keyFacts: [
      "The race centers on Zanpakuto weapon progression and Soul Society mission routing.",
      "PGG describes Main Story quests, Soul Society missions, Soul Pager purchase, meditation, Shikai EXP, and a Shikai NPC/self-fight sequence.",
      "Bankai details remain more update-sensitive than the Shikai route and should not be overclaimed.",
    ],
    steps: [
      "Finish the tutorial and early Fort Adam or Soul Society Outskirts quests before chasing Shikai.",
      "Unlock Soul Society access and buy or use the Soul Pager route when available.",
      "Run Soul Society missions and Main Story quests to build the required progress.",
      "Meditate repeatedly once your route unlocks the meditation loop.",
      "Collect Shikai EXP and prepare for the Inner World or self-fight sequence.",
      "Treat Bankai guides as separate, update-sensitive content until direct proof is recorded.",
    ],
    commonMistakes: [
      "Skipping Soul Society mission unlocks and wondering why Shikai progress stalls.",
      "Ignoring Sense when looking for nearby quest NPCs.",
      "Spending rerolls before the Zanpakuto and build direction are clear.",
      "Using old Roblox Bleach game assumptions for VV Ultimatum.",
    ],
    faq: [
      {
        question: "How do I progress as Shinigami in VV Ultimatum?",
        answer: "Current Shinigami guidance points to Main Story quests, Soul Society missions, Soul Pager access, meditation, Shikai EXP, and a Shikai self-fight sequence.",
      },
      {
        question: "How do I find Shinigami quest NPCs?",
        answer: "PGG guidance calls out Sense as a way to see nearby NPCs, so keep that input accessible while routing quests.",
      },
      {
        question: "Is Bankai fully verified here?",
        answer: "No. This page focuses on Shinigami and Shikai progression. Bankai-specific claims should stay separate until they are checked against current gameplay or strong sources.",
      },
    ],
    videos: [
      {
        title: "How To UNLOCK Shikai (FULL SOULREAPER GUIDE)",
        youtubeId: "8xRKIVax0D4",
        url: "https://www.youtube.com/watch?v=8xRKIVax0D4",
        note: "Full Soul Reaper/Shikai visual route for players who need to see the meditation and fight sequence.",
      },
      {
        title: "Full Shikai Progression Guide Video",
        youtubeId: "ERFyF5GXSfE",
        url: "https://www.youtube.com/watch?v=ERFyF5GXSfE",
        note: "Companion Shikai progression video to compare Inner World and Shikai fight steps.",
      },
    ],
    sections: [
      {
        title: "Trainee to Zanpakuto",
        body: [
          "vvultimatum.net frames the Shinigami route as starting in Fort Adams, completing the tutorial questline, learning combat basics, and receiving the first Zanpakuto. That keeps the opening simple: finish the starter route before chasing Shikai terminology.",
          "PGG then broadens the loop into Main Story quests, Daily quests, Soul Society missions, NPC/monster fights, player fights, chests, and Mission Ticket farming. You need that foundation before the Level 25 meditation gate matters.",
        ],
      },
      {
        title: "Soul Society and Soul Pager loop",
        body: [
          "Shinigami progression is not only leveling. PGG points to Soul Society missions and Soul Pager access as part of the route, so treat those unlocks as mandatory infrastructure rather than optional side systems.",
          "If you cannot find the next NPC, use Sense and re-check the route area. Sense is a practical progression tool because Shinigami quests can fail simply from missing a nearby NPC.",
        ],
        bullets: [
          "Use Sense when the next quest target is unclear.",
          "Run Soul Society missions instead of grinding unrelated mobs forever.",
          "Farm Mission Tickets from quests, enemies, chests, and missions when the route stalls.",
        ],
      },
      {
        title: "Level 25 meditation and Spirit Whispers",
        body: [
          "PGG states that Shikai progression begins at Level 25 with meditation. The first successful meditation produces a green-aura signal, then Spirit Whispers appear as one-liners above the HP bar.",
          "When a whisper appears, meditate immediately. Ignoring whispers can make Shikai obtainment harder, so players should keep their route loop flexible rather than being locked into one farming spot.",
        ],
      },
      {
        title: "Inner World and Bells Puzzle",
        body: [
          "Once enough Shikai EXP is built, meditation during a whisper sends the player into the Inner World. PGG describes a white void with blue orbs, white bells, fights, and riddles; solved bells persist even if the full puzzle is not completed in one attempt.",
          "The key SEO-safe advice is to treat the Bells Puzzle as a checkpoint, not the full unlock. After the bells, the route still asks for more meditation, level progress, fog clearing, and Shikai NPC fights.",
        ],
      },
      {
        title: "Shikai NPC fights and Bankai caution",
        body: [
          "PGG describes the Shikai NPC as having no fixed spawn location and requiring enough Shikai EXP before fights are available. Expect more than one visit to the Inner World rather than assuming the first fight ends the progression.",
          "Bankai deserves its own future page only when current gameplay and source coverage are stronger. Until then, this page keeps the verified focus on Soul Reaper progression into Shikai.",
        ],
      },
    ],
    sources: ["bloxRaces", "vvNetRaces", "pggShinigami", "vvNetHome"],
    related: ["best-race", "controls-keybinds", "leveling-guide", "build-planning", "bosses-and-drops"],
  },
  {
    slug: "spirit-charms",
    title: "Spirit Charms Guide",
    metaTitle: "VV Ultimatum Spirit Charms",
    description: "Understand Spirit Charm tiers, binding, notch count risk, merging, and when to remove charms through Valley of Screams.",
    primaryKeyword: "VV Ultimatum Spirit Charms",
    cluster: "systems",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Spirit Charms are passive modifiers with tiered power and downsides. Once equipped, they bind to you; exceeding three total notches can cost max HP, and removal is tied to Valley of Screams access.",
    intro:
      "Charm pages age quickly because players focus on tier lists. This guide starts with durable rules: binding, notches, downsides, and merge costs before ranking any individual charm.",
    keyFacts: ["Equipped charms become bound.", "A total notch count above three can create a max HP penalty.", "Merging requires an Energy Cell and a Hueco Mundo secret location in current BloxInformer coverage."],
    steps: [
      "Read the downside before equipping a charm.",
      "Track total notch cost before stacking higher-tier charms.",
      "Do not merge simply because a tier number goes up.",
      "Use Valley of Screams removal guidance before committing to a build.",
      "Evaluate charms by build purpose: PvP burst, bossing, mobility, farming, or survivability.",
    ],
    commonMistakes: ["Equipping charms without understanding binding.", "Stacking notches past the HP penalty threshold.", "Following tier lists without matching race and build.", "Merging away a useful low-risk charm too early."],
    faq: [
      {
        question: "Are Spirit Charms permanent?",
        answer: "They are not necessarily permanent, but BloxInformer states equipped charms bind to you and removal requires access to Valley of Screams.",
      },
      {
        question: "What happens if I exceed three notches?",
        answer: "Current BloxInformer coverage says you start losing max HP if total notch count exceeds three.",
      },
      {
        question: "Should I merge charms early?",
        answer: "Usually no. Merging can improve power but raises tier cost and risk, so wait until your race and stat plan are stable.",
      },
    ],
    videos: [
      {
        title: "THE BEST SPIRIT CHARMS + EVERY SPIRIT CHARMS!! VV",
        youtubeId: "VkgITflu0SQ",
        url: "https://www.youtube.com/watch?v=VkgITflu0SQ",
        note: "Broad Spirit Charm showcase reference for players comparing effects before equipping.",
      },
      {
        title: "THE BEST SPIRIT CHARMS FOR YOUR BUILD",
        youtubeId: "IVRjLtCd9Ww",
        url: "https://www.youtube.com/watch?v=IVRjLtCd9Ww",
        note: "Build-oriented charm discussion that pairs well with the notch and downside checklist here.",
      },
    ],
    sections: [
      {
        title: "Charm rule before tier list rule",
        body: [
          "Spirit Charms are not normal gear upgrades. BloxInformer documents binding, notches, merging, and Valley of Screams removal, while tier-list sources emphasize that stronger effects often carry larger costs.",
          "Read the rule layer first: what the charm does, how many notches it uses, whether it binds, how removal works, and what downside it adds. Only then should you rank it.",
        ],
      },
      {
        title: "Notches and HP pressure",
        body: [
          "GAMES.GG frames Spirit Charms as a build-defining system with more than 50 charms across four in-game tiers, and warns that bad notch choices can cost a large chunk of maximum HP. That is why this page recommends tracking total notch count before equipping anything expensive.",
          "A charm that wins one PvP exchange can still be bad for leveling if the HP penalty makes every boss or invasion unstable.",
        ],
        bullets: [
          "Count total notches before equipping.",
          "Compare the downside to your weakest survival stat.",
          "Favor low-risk charms while leveling or learning a route.",
        ],
      },
      {
        title: "PvP, PvE, and bossing filters",
        body: [
          "Destructoid focuses heavily on PvP-relevant charms, while GAMES.GG explicitly separates PvP/PvE and combinations. Use those rankings as filters, not universal commands.",
          "For PvP, reliable procs and burst windows matter. For PvE and bossing, uptime, sustain, and avoiding self-inflicted HP loss can matter more than peak damage.",
        ],
      },
      {
        title: "Merge and removal caution",
        body: [
          "Merging can make a charm stronger, but it can also push the account into a higher-risk notch profile. BloxInformer connects removal to Valley of Screams, which means correcting a mistake may require a separate access loop.",
          "Before merging, ask whether the current charm is actually limiting your route. If the account still lacks a stable race, clan, or stat plan, keep the charm decision reversible for as long as possible.",
        ],
      },
      {
        title: "Beginner charm policy",
        body: [
          "New players should treat Spirit Charms as late early-game planning rather than instant power. Equip only when the downside is understandable, the build goal is clear, and you can explain why the charm helps your race route.",
        ],
        bullets: [
          "Quincy: prioritize charms that support ranged safety, Reiatsu comfort, or survival.",
          "Hollow/Arrancar: check trait and Resurrection goals before committing.",
          "Shinigami: avoid charm downsides that punish meditation, Kido, or melee consistency.",
        ],
      },
    ],
    sources: ["bloxCharms", "vvOrgHome", "vvNetHome", "pggCharms", "gamesggCharms", "destructoidCharms"],
    related: ["spirit-charm-tier-list", "build-planning", "hollow-progression", "valley-of-screams"],
  },
  {
    slug: "spirit-charm-tier-list",
    title: "Spirit Charm Tier List Notes",
    metaTitle: "VV Ultimatum Spirit Charm Tier List",
    description: "A source-confidence Spirit Charm tier list page that explains notch costs, downsides, PvP/PvE intent, and why charm rankings change after updates.",
    primaryKeyword: "VV Ultimatum spirit charm tier list",
    cluster: "systems",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Use Spirit Charm tier lists as a filter, not a build command. First check notch cost, downside, PvP or PvE role, and race synergy; then compare high-ranked charms against your actual build route.",
    intro:
      "Spirit Charm tier list searches are active because players want quick answers, but charm pages become misleading when they rank power without explaining notch limits and downsides. This page targets the tier-list intent while keeping the safer rules visible.",
    keyFacts: [
      "PGG reports more than 50 unique Spirit Charms, which explains why players search for ranked summaries.",
      "BloxInformer documents binding, notch pressure, merge rules, and Valley of Screams removal context.",
      "Destructoid and GAMES.GG both target charm tier list SERPs, confirming this is a distinct page opportunity.",
    ],
    steps: [
      "Start with the general Spirit Charms guide so binding, notches, and removal are clear.",
      "Sort charms by your use case: PvP burst, PvE farming, boss survival, mobility, or resource comfort.",
      "Downgrade any charm whose downside breaks your race route, even if it appears high on a tier list.",
      "Avoid stacking high-notch charms until you know the HP and survivability cost.",
      "Recheck tier claims after major patches because charm values depend on skill, weapon, and race meta.",
    ],
    commonMistakes: [
      "Equipping the highest ranked charm without reading the downside.",
      "Using a PvP tier list for leveling or boss farming.",
      "Ignoring notch count because the individual charm looks strong.",
      "Treating one creator's tier list as permanent after a patch.",
    ],
    faq: [
      {
        question: "What is the best Spirit Charm in VV Ultimatum?",
        answer: "There is no safe universal answer without build context. Start with high-ranked charms, then filter by notch cost, downside, race route, and whether you play PvP or PvE.",
      },
      {
        question: "Why do Spirit Charm tier lists disagree?",
        answer: "They weigh different goals. A charm can be strong for PvP pressure but bad for leveling, bossing, or a low-survivability build.",
      },
      {
        question: "Should beginners follow Spirit Charm tier lists?",
        answer: "Beginners should read notch and binding rules first, then use tier lists only after the race route and build direction are stable.",
      },
    ],
    videos: [
      {
        title: "The COMPLETE BEST Charms Tier List",
        youtubeId: "4cpm9Px5XCY",
        url: "https://www.youtube.com/watch?v=4cpm9Px5XCY",
        note: "Tier-list video reference for players comparing creator rankings with the written risk filters.",
      },
      {
        title: "VV: ULTIMATUM Best Spirit Charm Tierlist Ranked",
        youtubeId: "f-F5rL_6_VM",
        url: "https://www.youtube.com/watch?v=f-F5rL_6_VM",
        note: "Useful for seeing how current PvP charm rankings are framed shortly after release.",
      },
    ],
    sections: [
      {
        title: "How to read this tier-list intent",
        body: [
          "Searchers typing 'best Spirit Charms' want a ranking, but the correct answer still depends on notch cost, race, route stage, PvP/PvE goal, and downside tolerance. This page intentionally ranks decision criteria before naming one universal winner.",
          "Use external tier lists to build a shortlist, then downgrade charms that break your survival, route, or resource plan.",
        ],
      },
      {
        title: "S-tier candidate filters",
        body: [
          "The strongest candidates usually share three traits: reliable activation, low or manageable downside, and clear synergy with a real build. A charm that only works in a rare combo should not be treated as beginner S-tier.",
        ],
        bullets: [
          "Reliable in normal fights, not only clips.",
          "Downside does not erase your route's core strength.",
          "Works with your clan, skill tree, and weapon pressure.",
        ],
      },
      {
        title: "PvP versus PvE scoring",
        body: [
          "Destructoid's tier framing is useful for PvP-heavy players, while GAMES.GG explicitly covers PvP/PvE, notch costs, locations, and combinations. That split is why this site avoids one flat table for every player.",
          "In PvP, opening pressure, burst, and reliable triggers can outrank comfort. In PvE, sustain, consistency, and not overpaying HP are often better.",
        ],
      },
      {
        title: "When to ignore a high-ranked charm",
        body: [
          "Ignore a high-ranked charm if it pushes total notches past your survivability limit, conflicts with your race route, or only becomes good after gear you do not have. Tier lists are snapshots; your account state is the filter.",
        ],
      },
    ],
    sources: ["bloxCharms", "pggCharms", "destructoidCharms", "gamesggCharms"],
    related: ["spirit-charms", "build-planning", "clans-tier-list", "valley-of-screams"],
  },
  {
    slug: "valley-of-screams",
    title: "Valley of Screams Removal Notes",
    metaTitle: "VV Ultimatum Valley of Screams",
    description: "What to know before removing Spirit Charms, chasing the purple portal, or repairing a bad charm setup.",
    primaryKeyword: "VV Ultimatum Valley of Screams",
    cluster: "systems",
    difficulty: "Intermediate",
    status: "needs_recheck",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Current charm coverage says Valley of Screams is tied to charm removal and accessed by a random purple portal. Exact portal routing should be confirmed before publishing a farm route.",
    intro:
      "This page exists to keep charm removal claims separate from charm rankings. The durable rule is clear; the exact portal route needs ongoing verification.",
    keyFacts: ["Valley of Screams is linked to removing bound Spirit Charms.", "Access is described as a randomly appearing purple portal.", "Exact location timing should be rechecked after updates."],
    steps: [
      "Confirm the charm is actually hurting your build before seeking removal.",
      "Keep total notch count under control to avoid HP penalties.",
      "Watch for current player reports on purple portal appearances.",
      "Update the route only when screenshots or direct gameplay confirm it.",
    ],
    commonMistakes: ["Turning a removal note into a fake guaranteed route.", "Ignoring notches while waiting for portal access.", "Overwriting a build based on one outdated portal report."],
    faq: [
      {
        question: "Why go to Valley of Screams?",
        answer: "Current charm documentation ties it to removing bound Spirit Charms.",
      },
      {
        question: "Is the purple portal guaranteed?",
        answer: "The checked source describes it as random, so this guide avoids publishing a fixed route without current proof.",
      },
      {
        question: "Should I avoid Spirit Charms until I find it?",
        answer: "No, but you should avoid careless high-notch stacks and read downsides before equipping.",
      },
    ],
    sources: ["bloxCharms"],
    related: ["spirit-charms", "build-planning"],
  },
  {
    slug: "bosses-and-drops",
    title: "Bosses and Drops Tracker",
    metaTitle: "VV Ultimatum Bosses and Drops",
    description: "A source-confidence boss tracker for Securis, Rogue Quincy Commander, Shikai Spirit, Resurreccion Spirit, and future drop pages.",
    primaryKeyword: "VV Ultimatum bosses",
    cluster: "reference",
    difficulty: "Intermediate",
    status: "needs_recheck",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Use boss pages as route context first and drop tables second. Securis is cross-checked for Quincy progression; other boss drops should be marked proof-needed until current gameplay confirms them.",
    intro:
      "Drop-table pages can create SEO traffic quickly, but they also become wrong quickly. This tracker preserves confidence labels so boss pages can expand without pretending every drop claim is verified.",
    keyFacts: ["Securis is the best-supported route boss in current sources.", "Rogue Quincy Commander is linked to Broken Quincy Medallion in a detailed Quincy guide.", "Exact drop rates and respawns need direct verification before high-confidence publication."],
    steps: [
      "Start with the progression reason you need a boss.",
      "Check whether the boss is route-gated or solo.",
      "Separate guaranteed route rewards from low-rate drops.",
      "Record last-checked dates when adding respawn or drop claims.",
    ],
    commonMistakes: ["Publishing exact drop rates without proof.", "Mixing old community Trello claims into current release pages.", "Writing one boss page without internal links to progression pages."],
    faq: [
      {
        question: "Which boss matters most for Quincy?",
        answer: "Securis is the main named checkpoint in current Quincy progression sources.",
      },
      {
        question: "Are boss drop rates verified?",
        answer: "Not yet for this starter build. Drop rates should stay proof-needed until direct gameplay or official source evidence is recorded.",
      },
      {
        question: "Why track confidence?",
        answer: "Roblox RPG updates can change drops quickly. Confidence labels prevent a guide page from becoming stale misinformation.",
      },
    ],
    sources: ["bloxQuincy", "pggQuincy", "vvNetHome"],
    related: ["quincy-progression", "sanrei-glove", "shinigami-progression"],
  },
  {
    slug: "clans-tier-list",
    title: "Clans Tier List by Race",
    metaTitle: "VV Ultimatum Clans Tier List",
    description: "A race-aware VV Ultimatum clans tier list guide for Quincy, Hollow, and Shinigami players choosing reroll targets and passive bonuses.",
    primaryKeyword: "VV Ultimatum clans tier list",
    cluster: "systems",
    difficulty: "Intermediate",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Do not chase one universal best clan. Match the clan passive to your race route: Quincy often values ranged or Kido support, Hollow builds may want Hakuda, Kido, or weapon damage, and Shinigami builds should choose based on weapon, mobility, or survivability.",
    intro:
      "Clan tier list queries are high intent because they connect directly to rerolls and code rewards. This page uses a race-first framework instead of pretending the same S-tier clan fits every account.",
    keyFacts: [
      "PGG, Destructoid, FRVR, and GAMES.GG all publish clan or broad tier-list pages, so this keyword cluster is visibly active.",
      "PGG separates Quincy, Hollow/Arrancar, and Shinigami clan passives, which supports a race-aware page structure.",
      "Reroll rewards from codes make clan decisions commercially and behaviorally important for players.",
    ],
    steps: [
      "Pick race route first: Quincy, Hollow/Arrancar, or Shinigami.",
      "Identify your build pressure: Kido, weapon damage, Hakuda, mobility, posture, health, or resistance.",
      "Use tier lists to shortlist clans that match that pressure instead of copying a universal rank.",
      "Spend clan rerolls only after the route and build are stable.",
      "Record the passive that changed after a reroll so you can judge whether it actually improves your route.",
    ],
    commonMistakes: [
      "Rolling for a clan that is S-tier for another race.",
      "Spending code rewards before choosing a build identity.",
      "Ignoring survivability passives on a beginner or boss route.",
      "Copying PvP rankings into a leveling build.",
    ],
    faq: [
      {
        question: "What is the best clan in VV Ultimatum?",
        answer: "The best clan depends on race and build. Quincy, Hollow, and Shinigami use different passives, so start by matching clan bonuses to your route.",
      },
      {
        question: "Should I reroll clans immediately?",
        answer: "No. Save rerolls until you know your race, playstyle, and whether the current passive is actually blocking progress.",
      },
      {
        question: "Are clan tier lists stable?",
        answer: "Not completely. They can shift after balance changes, new content, and meta discovery, so use checked-date pages and source confidence.",
      },
    ],
    videos: [
      {
        title: "Best Clans Tier List - VV Ultimatum",
        youtubeId: "jVzIMrR1IYQ",
        url: "https://www.youtube.com/watch?v=jVzIMrR1IYQ",
        note: "Video tier-list reference for seeing current reroll targets and race-specific clan discussion.",
      },
    ],
    sections: [
      {
        title: "Why clan choice is high-risk",
        body: [
          "PGG notes that VV Ultimatum launched with more than 25 clans and that rerolls can be rare or expensive. Beebom frames clans as permanent stat bonuses that become more visible once builds are optimized for PvP, bossing, or endgame progression.",
          "That makes clan pages code-adjacent: if a code gives rerolls, players need this page before spending them.",
        ],
      },
      {
        title: "Quincy clan filter",
        body: [
          "Quincy players should start with combat role. Ranged and Kido pressure benefit from different passives than weapon-focused or survival-first builds. PGG's clan page separates Quincy clans because their bonuses map directly to those route pressures.",
          "If you are still before Sanrei Glove or Securis, prioritize reliable progression value over narrow PvP flex picks.",
        ],
        bullets: [
          "Ranged/Kido build: value Reiatsu, Kido, and uptime support.",
          "Weapon build: value weapon damage, posture pressure, and mobility.",
          "Beginner route: do not throw away a useful survivability roll for a tiny damage upgrade.",
        ],
      },
      {
        title: "Hollow and Arrancar clan filter",
        body: [
          "Hollow/Arrancar clan value depends on whether the build is Hakuda, Cero/Bala/Kido pressure, weapon damage, or Resurrection uptime. GAMES.GG calls out Cifer and Jaegerjaquez as strong Arrancar examples, but the broader lesson is to match passive to final route.",
          "Do not reroll aggressively before deciding whether you are early Arrancar, Vasto-route Arrancar, or still trait planning.",
        ],
      },
      {
        title: "Shinigami clan filter",
        body: [
          "PGG frames Shinigami clans around Shunpo-based combat, weapon damage, Kido damage, survivability, and defensive scaling. That is exactly how to evaluate them: what does the passive make easier in the Shikai route and later fights?",
          "If you are still learning Shikai, mobility and survivability can be worth more than a pure damage stat you cannot consistently apply.",
        ],
      },
      {
        title: "Reroll spending policy",
        body: [
          "The safest policy is to reroll only when the current passive actively misses the build. A lower-tier clan that supports your exact route can outperform a famous clan that boosts a stat you never use.",
        ],
        bullets: [
          "Save code rerolls until race and build direction are stable.",
          "Record what passive changed so you can judge the reroll objectively.",
          "Stop rolling once you hit a clan that solves your current bottleneck.",
        ],
      },
    ],
    sources: ["pggClans", "destructoidClans", "gamesggTierList", "beebomTierList", "pggCodes"],
    related: ["best-race", "build-planning", "spirit-charm-tier-list", "quincy-progression", "hollow-progression"],
  },
  {
    slug: "build-planning",
    title: "Build Planning Before Rerolls",
    metaTitle: "VV Ultimatum Build Planning",
    description: "A pre-reroll checklist for stats, race route, Spirit Charms, weapons, and code rewards before you spend rare resources.",
    primaryKeyword: "VV Ultimatum build guide",
    cluster: "systems",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Before spending rerolls, decide your race route, pick one main damage or utility direction, check charm notch risk, and keep active-code rewards until you know the account is worth protecting.",
    intro:
      "A build guide is most useful before the player spends resources. This page links code rewards to race and charm decisions instead of acting like rerolls are always free power.",
    keyFacts: ["Code rewards include rerolls that can be wasted on an unplanned account.", "Quincy sources warn against spreading points across too many stats.", "Spirit Charms add powerful effects but also downsides and notch penalties.", "VV Builder search results show a tool-intent cluster for players who want build planning before committing points."],
    steps: [
      "Pick race route first.",
      "Choose whether the build needs melee, ranged, kido, mobility, bossing, or PvP pressure.",
      "Keep rerolls until you know the route is keepable.",
      "Match Spirit Charms to the build rather than tier-list rank alone.",
      "Record what changed after each reroll so you can roll back decisions mentally.",
    ],
    commonMistakes: ["Spending FULLRELEASE rewards immediately.", "Mixing every stat because each looks useful.", "Equipping high-tier charms before checking notches.", "Changing race because a single video build looked strong."],
    faq: [
      {
        question: "What should I spend rerolls on first?",
        answer: "Wait until race and account direction are clear. Rerolls matter more after you know which route you are keeping.",
      },
      {
        question: "Are tier lists enough for builds?",
        answer: "No. Tier lists help, but race route, stat spread, weapon identity, charm downsides, and update timing matter more.",
      },
      {
        question: "What is the safest early build rule?",
        answer: "Commit to one primary direction and avoid irreversible choices until your route guide says the account is stable.",
      },
    ],
    videos: [
      {
        title: "The BEST Build For Each Race + The Ultimate Build Guide",
        youtubeId: "ugJiYsmlo_A",
        url: "https://www.youtube.com/watch?v=ugJiYsmlo_A",
        note: "Race-by-race build discussion to compare against the written pre-reroll checklist.",
      },
      {
        title: "The BEST Build For Every Race In VV: Ultimatum",
        youtubeId: "pLAeihfXPs8",
        url: "https://www.youtube.com/watch?v=pLAeihfXPs8",
        note: "Current creator perspective on race-specific builds; use as inspiration, not a full calculator.",
      },
    ],
    sections: [
      {
        title: "Start with route, then goal",
        body: [
          "A build is not a tier list pasted onto a fresh account. Start by choosing Quincy, Hollow/Arrancar, or Shinigami, then decide whether the account is for leveling comfort, PvP pressure, boss farming, or late-game experimentation.",
          "This order matters because the same clan, charm, or skill tree can be correct for one goal and wasteful for another.",
        ],
      },
      {
        title: "Pick one pressure type",
        body: [
          "PGG's skill-tree coverage highlights multiple branches: race-specific trees plus Hakuda, Sense, Strength, Misc, and Speed. GAMES.GG similarly frames Hakuda, Speed, Quincy, Strength, Shinigami, and Hollow/Arrancar trees by combat role.",
          "Do not split early points just because every tree has attractive nodes. Pick one primary pressure and one support pressure, then let the route guide decide when to branch.",
        ],
        bullets: [
          "Weapon/Strength: posture damage and heavier trades.",
          "Hakuda: close-range pressure and combo extensions.",
          "Kido/ranged: ability pressure, control, and safer spacing.",
          "Speed: universal mobility support once core damage is defined.",
        ],
      },
      {
        title: "Clan and charm compatibility check",
        body: [
          "Before spending rerolls, compare the clan passive and Spirit Charm downside to the same build goal. A clan that improves Kido and a charm that rewards melee trades may pull the account in opposite directions.",
          "If you cannot explain how a clan, charm, weapon, and skill tree combine, keep the account conservative and save rare resources.",
        ],
      },
      {
        title: "Beginner-safe build templates",
        body: [
          "These are not final meta builds; they are low-regret directions for new accounts while exact formulas remain unverified.",
        ],
        bullets: [
          "Quincy safety: ranged pressure, Reiatsu comfort, mobility, and survivability.",
          "Hollow evolution: trait planning first, then Hakuda/Kido/Resurrection support.",
          "Shinigami route: weapon or Kido focus with enough mobility to handle Inner World and Shikai fights.",
        ],
      },
      {
        title: "When to copy a creator build",
        body: [
          "Copy a creator build only after checking whether the video assumes endgame unlocks, specific clans, rare charms, or PvP execution. If the build depends on resources you do not have, convert it into a goal list rather than a point-for-point template.",
        ],
      },
    ],
    sources: ["pggQuincy", "bloxCharms", "vvNetHome", "pggCodes", "vvBuilder", "pggSkills", "gamesggTierList", "beebomTierList"],
    related: ["vv-builder-build-planner", "best-race", "clans-tier-list", "spirit-charms"],
  },
  {
    slug: "vv-builder-build-planner",
    title: "Build Planner and VV Builder Notes",
    metaTitle: "VV Ultimatum Build Planner",
    description: "A build planner landing page for VV Ultimatum players comparing VV Builder-style skill trees, stat routes, race builds, and safe reroll decisions.",
    primaryKeyword: "VV Ultimatum build planner",
    cluster: "systems",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Use a VV Ultimatum build planner to choose race, goal, playstyle, stats, clans, weapons, and Spirit Charms before spending rerolls. Treat exact damage math as unverified unless a planner has current node data.",
    intro:
      "The SERP has exact-match VV Builder and build-planner pages, which means players want a tool-like route, not just a guide paragraph. This page targets that intent while avoiding fake calculator claims until reliable skill-node data exists.",
    keyFacts: [
      "VV Builder competitors position around race routes, stat routes, skill tree ideas, PvP, progression, and boss planning.",
      "A first SEO-safe planner can be principle-based: race, goal, combat feel, stat focus, charm risk, and next guide.",
      "Exact skill node costs, formulas, and damage numbers should wait for stable verified data.",
    ],
    steps: [
      "Choose one route: Shinigami, Quincy, or Hollow.",
      "Choose one goal: beginner safety, leveling, PvP pressure, bossing, or farming.",
      "Pick one main pressure: weapon damage, Kido, Hakuda, mobility, posture, or survivability.",
      "Check clan passives and Spirit Charm downsides before spending rerolls.",
      "Use the matching progression guide to verify route gates before copying a build.",
    ],
    commonMistakes: [
      "Treating a lightweight planner as a full damage simulator.",
      "Copying PvP builds while still leveling.",
      "Ignoring race-specific route gates such as Sanrei Glove, Shikai, or Hollow evolution choices.",
      "Stacking charms and clans that boost different goals.",
    ],
    faq: [
      {
        question: "Is this a full VV Builder calculator?",
        answer: "No. This page is an SEO-safe build planner and route checklist. A full calculator needs verified node costs, prerequisites, formulas, and patch tracking.",
      },
      {
        question: "What should a beginner build first?",
        answer: "Beginners should choose race, survivability, and one clear damage direction before chasing PvP-specific skill or charm combinations.",
      },
      {
        question: "Can a build planner tell me the best build?",
        answer: "It can narrow the decision, but the best build depends on route, goal, patch state, clan passive, weapon, and Spirit Charm setup.",
      },
    ],
    videos: [
      {
        title: "VV: ULTIMATUM GUIDE! Codes, progression, controls and locations",
        youtubeId: "YElikc23KHk",
        url: "https://www.youtube.com/watch?v=YElikc23KHk",
        note: "Includes build-builder search context and broad gameplay flow for users comparing planner intent.",
      },
      {
        title: "VV Ultimatum Weapon Guide",
        youtubeId: "f7xWj12zlmM",
        url: "https://www.youtube.com/watch?v=f7xWj12zlmM",
        note: "Weapon-focused companion video for planner users deciding which pressure type their build should support.",
      },
    ],
    sections: [
      {
        title: "What this page can safely plan now",
        body: [
          "A real VV Builder-style calculator needs verified skill-node costs, prerequisites, formulas, weapon stats, clan data, charm effects, and patch history. This site does not pretend that data is complete yet.",
          "What it can safely do now is guide the decision sequence: route, goal, pressure type, clan passive, charm risk, weapon feel, and the next progression page.",
        ],
      },
      {
        title: "Planner inputs",
        body: [
          "Use the same six inputs every time you plan a build. They make the difference between a coherent route and a collection of high-ranked parts.",
        ],
        bullets: [
          "Race: Quincy, Hollow/Arrancar, or Shinigami.",
          "Goal: leveling, PvP, bossing, farming, or testing.",
          "Pressure: weapon, Hakuda, Kido, ranged, mobility, or defense.",
          "Resources: clan rerolls, charm access, weapon rerolls, Soul Tokens.",
          "Gate: Sanrei, Shikai, Vasto/Arrancar, Resurrection, or boss route.",
          "Risk: notch HP loss, reroll scarcity, branch lock, or update uncertainty.",
        ],
      },
      {
        title: "Skill tree data gap",
        body: [
          "PGG confirms the existence of race-specific trees plus major branches such as Hakuda, Sense, Strength, Quincy, Shinigami, Hollow/Arrancar, Misc, and Speed. GAMES.GG adds meta framing around Hakuda, Speed, race-specific options, and build interactions.",
          "That is enough for an SEO-safe planner, but not enough for a damage simulator. Exact node math should stay out of copy until verified data is collected.",
        ],
      },
      {
        title: "Output format for future calculator",
        body: [
          "When the site has verified node and stat data, the planner should output a route summary rather than a single opaque score. A useful output would include primary stat path, secondary tree, recommended clan category, charm caution, next progression gate, and sources checked date.",
        ],
      },
      {
        title: "Internal link strategy",
        body: [
          "This page should not trap users. It should route them to the exact next action: Quincy progression for Sanrei/Schrift, Hollow progression for trait and mask-rip choices, Shinigami progression for Shikai, clans for rerolls, and Spirit Charms for notch decisions.",
        ],
      },
    ],
    sources: ["vvBuilder", "pggBeginner", "pggClans", "pggCharms", "gamesggTierList", "pggSkills"],
    related: ["build-planning", "clans-tier-list", "spirit-charm-tier-list", "best-race"],
  },
  {
    slug: "trello-discord-wiki",
    title: "Trello, Discord and Wiki Links",
    metaTitle: "VV Ultimatum Trello Discord Wiki",
    description: "Safe VV Ultimatum Discord, Trello, wiki, Roblox, YouTube, and source-checking notes for players trying to avoid fake links.",
    primaryKeyword: "VV Ultimatum Trello Discord wiki",
    cluster: "reference",
    difficulty: "Beginner",
    status: "cross_checked",
    checkedAt: "2026-06-12",
    quickAnswer:
      "Use the official Roblox game page as the starting point, then verify Discord, wiki, YouTube, and Trello links through official descriptions or reputable link hubs. Treat community Trello and wiki pages as helpful but not official unless clearly stated.",
    intro:
      "The search results mix official pages, fan wikis, community Trello boards, copied Roblox experiences, and expired Discord invites. This page targets that exact links query while keeping source status visible.",
    keyFacts: [
      "Official Roblox place ID checked: 6270290407.",
      "PGG and Destructoid both have SERP pages for Trello, wiki, Discord, and official-link intent.",
      "PGG labels the Trello as unofficial/community-led and the BloxInformer wiki as unofficial but thorough.",
    ],
    steps: [
      "Open the Roblox page for place ID 6270290407.",
      "Use the game description and official social links before joining random Discord invites.",
      "Treat community Trello and wiki data as reference material, not final proof.",
      "Prefer link hubs that label which resources are official and which are community maintained.",
      "Record checked dates on every page that uses volatile game information.",
    ],
    commonMistakes: ["Clicking duplicate Roblox experiences from search results.", "Calling a community Trello official without proof.", "Using Reddit or YouTube comments as direct fact sources."],
    faq: [
      {
        question: "Is this VV Ultimatum site official?",
        answer: "No. It is a fan-made guide site and is not affiliated with Roblox, Midnight Continent, or Bleach rights holders.",
      },
      {
        question: "What is the safest game link?",
        answer: "The checked official Roblox game page is https://www.roblox.com/games/6270290407/VV-ULTIMATUM.",
      },
      {
        question: "Can community guides be used?",
        answer: "Yes, but pages should label source confidence and recheck update-sensitive facts before presenting them as current.",
      },
    ],
    sources: ["officialRoblox", "pggLinks", "destructoidLinks", "vvOrgHome", "rolimons"],
    related: ["beginner-guide", "controls-keybinds", "bosses-and-drops", "leveling-guide"],
  },
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));

export const homeFaq: Faq[] = [
  {
    question: "What is the best first page for VV Ultimatum?",
    answer: "Start with the beginner guide if you are new, the codes page if you are claiming rewards, or the best race page if you have not locked in a route yet.",
  },
  {
    question: "Are the VV Ultimatum codes verified?",
    answer: "The site separates active code consensus from source conflicts. FULLRELEASE and 75KLIKES are currently the strongest active-code consensus.",
  },
  {
    question: "Does VV Ultimatum have three races?",
    answer: "Yes. Current public guide sources list Shinigami, Quincy, and Hollow as the three core playable race paths.",
  },
  {
    question: "Why does this guide show source confidence?",
    answer: "VV Ultimatum changed quickly around release, and public guide pages sometimes disagree. Confidence labels make update risk visible.",
  },
  {
    question: "Is this an official VV Ultimatum site?",
    answer: "No. This is an independent fan guide that links to the official Roblox game and labels external sources.",
  },
];
