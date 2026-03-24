export interface CurriculumModule {
  id: number;
  title: string;
  duration: string;
  mastery: string;
  actionItems: string[];
  resources: string[];
}

export const curriculumModules: CurriculumModule[] = [
  {
    id: 1,
    title: "Start Up Steps",
    duration: "8 mins",
    mastery: "You'll establish the foundational infrastructure your digital business needs before you earn your first dollar. This module walks you through domain setup, payment processors, and the exact tech stack that eliminates rookie mistakes. By the end, your business will be legally set up and technically ready to accept money.",
    actionItems: [
      "Register your business name and claim matching social handles on all platforms today.",
      "Connect a payment processor (Stripe or PayPal) and run a $1 test transaction.",
      "Write your one-sentence value proposition and pin it where you'll see it daily."
    ],
    resources: ["Business Setup Checklist PDF", "Payment Processor Comparison Guide"]
  },
  {
    id: 2,
    title: "Beginners Blueprint",
    duration: "12 mins",
    mastery: "You'll map out your complete digital business model before spending a single dollar on ads or tools. This blueprint method forces clarity on your niche, offer, and audience so every action you take from here is intentional. Students who complete this module avoid the months of random posting that kills most beginner accounts.",
    actionItems: [
      "Complete the Niche Clarity Worksheet and identify your single target customer avatar.",
      "Write your first offer concept: what you'll sell, to whom, and at what price point.",
      "Post one piece of content introducing yourself to your audience using the provided template."
    ],
    resources: ["Niche Clarity Worksheet", "Beginner Business Model Template"]
  },
  {
    id: 3,
    title: "Affiliate Setup",
    duration: "10 mins",
    mastery: "You'll launch your first affiliate funnel using platforms already built and waiting for you, requiring zero product creation. This module reveals which affiliate programs pay the highest commissions in the digital space and shows you the exact link placement strategy that converts. Most students earn their first affiliate commission within 14 days of completing this module.",
    actionItems: [
      "Apply to 3 affiliate programs from the recommended list and save your unique links.",
      "Create one piece of affiliate content (reel, story, or post) using the swipe copy provided.",
      "Set up your link-in-bio page with your affiliate links organised by category."
    ],
    resources: ["Top 20 Affiliate Programs List", "Affiliate Swipe Copy Pack"]
  },
  {
    id: 4,
    title: "The Game Plan",
    duration: "9 mins",
    mastery: "You'll build a 90-day action roadmap that shows you exactly what to do, in what order, every single week. This module eliminates the paralysis that comes from consuming content without executing — you'll end it with a concrete schedule, not just inspiration. The Game Plan is the bridge between knowing and doing.",
    actionItems: [
      "Block out your 'deep work' hours for the next 7 days and protect them like appointments.",
      "Fill in your 90-Day Revenue Roadmap template with weekly milestones.",
      "Identify your top 3 income-generating activities and schedule them first every week."
    ],
    resources: ["90-Day Revenue Roadmap Template", "Weekly Priority Planner"]
  },
  {
    id: 5,
    title: "First Impression",
    duration: "7 mins",
    mastery: "You'll redesign your social profile to convert profile visitors into followers and followers into buyers within seconds. This module applies the psychology of first impressions to your bio, profile photo, and pinned content so your page does the selling before you even post. A strong first impression multiplies every other marketing effort you make.",
    actionItems: [
      "Rewrite your bio using the Hook–Proof–CTA formula from this module.",
      "Update your profile photo to a clean, well-lit headshot or branded image.",
      "Pin your 3 highest-performing or most strategic posts to your profile today."
    ],
    resources: ["Bio Formula Swipe File", "Profile Audit Checklist"]
  },
  {
    id: 6,
    title: "Knowledge Is Power",
    duration: "6 mins",
    mastery: "You'll identify the gaps in your current knowledge and build a 30-day self-education plan that turns information into income. This module teaches you how to learn faster by consuming strategically rather than randomly scrolling for hours. The goal is not to know everything — it's to know enough to take profitable action.",
    actionItems: [
      "Audit your current learning sources and cut any that aren't directly tied to your goals.",
      "Subscribe to 3 newsletters or creators in your niche for targeted daily insight.",
      "Schedule 30 minutes of intentional study into your calendar every weekday."
    ],
    resources: ["Recommended Resource Library", "30-Day Self-Education Planner"]
  },
  {
    id: 7,
    title: "All Things Confidence",
    duration: "8 mins",
    mastery: "You'll develop the unshakeable on-camera and in-DM confidence that separates creators who convert from those who just post. This module debunks the myth that you need to be naturally outgoing to succeed online — confidence is a skill with a proven practice protocol. By the end, you'll have a repeatable warm-up routine that gets you into selling mode in under 5 minutes.",
    actionItems: [
      "Record a 60-second 'talking to camera' video — don't edit it, just watch it back once.",
      "Practice the Power Pose + Vocal Warm-Up sequence from the module before your next post.",
      "Write 5 affirmations specific to your business goals and read them aloud every morning."
    ],
    resources: ["Confidence Warm-Up Routine PDF", "On-Camera Presence Guide"]
  },
  {
    id: 8,
    title: "Authenticity Matters",
    duration: "7 mins",
    mastery: "You'll discover how to share your real story and values in a way that attracts loyal buyers, not just passive followers. Authenticity isn't about oversharing — it's a strategic framework that makes your content resonate because it's specific, honest, and human. People buy from people they trust, and this module builds that trust at scale.",
    actionItems: [
      "Write your personal origin story using the 3-Act Structure template provided.",
      "Share one vulnerable or honest moment related to your journey in your next Story or post.",
      "Identify 3 core values that guide your business and weave them into your next week of content."
    ],
    resources: ["Personal Story Framework Template", "Brand Values Worksheet"]
  },
  {
    id: 9,
    title: "Effective Selling",
    duration: "11 mins",
    mastery: "You'll master the exact sales psychology principles that top digital entrepreneurs use to close high-ticket offers through a screen. This module breaks down the anatomy of a perfect sales message — from the opening hook to the objection-busting close — so you never feel pushy or salesy again. Selling effectively is simply solving problems for the right people at the right time.",
    actionItems: [
      "Write 3 versions of your sales pitch using the PAS (Problem–Agitate–Solution) framework.",
      "Practice responding to the top 5 objections from the module until the answers feel natural.",
      "Send a personalised follow-up message to 5 warm leads in your DMs today."
    ],
    resources: ["Sales Script Swipe File", "Objection Handling Cheat Sheet"]
  },
  {
    id: 10,
    title: '"Selling" without Selling',
    duration: "9 mins",
    mastery: "You'll learn how to sell your offers every single day without ever feeling like you're pitching — using value-first content frameworks that make buying feel like the natural next step. This module reveals the 4 content types that warm up cold audiences and move them through a buying decision passively. The best sellers never feel like sellers.",
    actionItems: [
      "Plan 5 pieces of 'education sells' content using the Value Ladder template.",
      "Create one testimonial-led post or story that shows social proof without direct pitching.",
      "Add a soft CTA to every piece of content you post this week ('Link in bio for more')."
    ],
    resources: ["Value-First Content Calendar Template", "Soft CTA Phrase Bank"]
  },
  {
    id: 11,
    title: "Content Mastery",
    duration: "14 mins",
    mastery: "You'll build a sustainable content engine that produces high-converting posts, reels, and stories without burning out or running out of ideas. This module teaches the Content Batching Method — creating a week's worth of content in a single 2-hour session — alongside the hook formulas that stop the scroll. Consistency beats perfection, and this module makes consistency automatic.",
    actionItems: [
      "Batch-create 7 pieces of content in one sitting using the content batching worksheet.",
      "Write 10 hook lines using the 5 hook formulas from the module and save them for future use.",
      "Schedule your content at least 3 days in advance using a free scheduling tool."
    ],
    resources: ["Content Batching Worksheet", "100 Hook Formulas Swipe File"]
  },
  {
    id: 12,
    title: "All Things Branding",
    duration: "10 mins",
    mastery: "You'll create a cohesive, premium brand identity that makes your content instantly recognisable in a crowded feed. This module covers color palettes, typography, tone of voice, and the visual consistency that builds audience trust over time. A strong brand turns a casual follower into a loyal customer who buys without needing to be sold.",
    actionItems: [
      "Choose and save your brand color palette (3 colours max) and apply it to your next 3 posts.",
      "Select 1–2 fonts for all your graphics and update your Canva Brand Kit today.",
      "Write your brand voice guide: 3 words that describe how your brand sounds."
    ],
    resources: ["Brand Identity Kit Template (Canva)", "Brand Voice Guide Worksheet"]
  },
  {
    id: 13,
    title: "Consistency is KEY",
    duration: "6 mins",
    mastery: "You'll build a posting habit so reliable that your audience starts to expect and anticipate your content — which is exactly when the algorithm starts working for you. This module exposes the real reason most creators fail (inconsistency, not lack of talent) and provides a simple accountability system to keep you on track. One post a day changes lives; missing three weeks ends careers.",
    actionItems: [
      "Commit to a posting frequency (daily, every other day) and write it as a non-negotiable rule.",
      "Set up a content scheduling tool and pre-load the next 5 posts before you close your laptop.",
      "Find an accountability partner from your network and check in with them every Friday."
    ],
    resources: ["30-Day Consistency Challenge Tracker", "Content Scheduling Tool Comparison"]
  },
  {
    id: 14,
    title: "Let's talk Mindset",
    duration: "9 mins",
    mastery: "You'll reprogram the limiting beliefs that are silently blocking your income and replace them with the operating system of a high-earning digital entrepreneur. This module goes deep on imposter syndrome, fear of judgement, and comparison — the three invisible walls that keep most creators stuck at zero. Your mindset is your highest-leverage business asset.",
    actionItems: [
      "Write down your top 3 limiting beliefs and rewrite each as a business-expanding counter-belief.",
      "Complete the 5-Minute Morning Ritual from this module for the next 21 days.",
      "Unfollow 5 accounts that trigger comparison and replace them with 5 that inspire action."
    ],
    resources: ["Limiting Beliefs Worksheet", "Entrepreneur Mindset Morning Ritual Guide"]
  },
  {
    id: 15,
    title: "Digital Ethics",
    duration: "5 mins",
    mastery: "You'll understand the ethical and legal boundaries of digital business so you protect your reputation and stay on the right side of platform policies and consumer law. This module covers copyright, testimonial rules, income disclaimers, and the MRR license restrictions you must honour. A business built ethically is a business built to last.",
    actionItems: [
      "Add required income disclaimers to your sales pages and link-in-bio.",
      "Review the MRR license terms and confirm your usage aligns with the permitted scope.",
      "Audit your testimonials and ensure all claims are accurate, real, and verifiable."
    ],
    resources: ["Income Disclaimer Template", "Digital Business Ethics Checklist"]
  },
  {
    id: 16,
    title: "A Day In The Life",
    duration: "7 mins",
    mastery: "You'll see exactly what a productive day looks like for a full-time digital entrepreneur — from morning routine through content creation to evening revenue review. This module is a behind-the-scenes blueprint that shows you how to structure your time, protect your energy, and stay productive without working 12-hour days. The goal is a business that fits your life, not one that consumes it.",
    actionItems: [
      "Design your ideal workday schedule using the provided time-block template.",
      "Identify your peak creative hours and protect them exclusively for content creation.",
      "Set a daily 'business close' time and a shutdown ritual to separate work from rest."
    ],
    resources: ["Entrepreneur Daily Schedule Template", "Energy Management Guide"]
  },
  {
    id: 17,
    title: "Instagram Blueprint",
    duration: "13 mins",
    mastery: "You'll master the Instagram algorithm and build an audience growth strategy that compounds your reach week over week. This module covers Reels strategy, Story selling, Highlights architecture, and the engagement tactics that tell the algorithm your content is worth pushing. Instagram remains the highest-converting platform for digital product sales when used correctly.",
    actionItems: [
      "Audit your Instagram grid and reorganise it to match the aesthetic strategy from this module.",
      "Post one Reel using the Hook–Story–CTA structure and analyse the retention data 24 hours later.",
      "Create 5 Highlights covering: About, Offers, Testimonials, FAQ, and Free Value."
    ],
    resources: ["Instagram Growth Playbook PDF", "Reels Hook Library (30 hooks)"]
  },
  {
    id: 18,
    title: "Going Faceless",
    duration: "10 mins",
    mastery: "You'll discover how to build a six-figure digital business without ever showing your face on camera — using branded visuals, voiceovers, and text-based content that performs equally well or better. Going faceless removes the biggest barrier most beginners face and opens the door to a fully anonymous, highly profitable brand. This model is growing faster than any other format in the digital space right now.",
    actionItems: [
      "Choose your faceless brand aesthetic (colour palette, font, content style) using the guide.",
      "Create 3 faceless Reels using text overlays, stock visuals, and royalty-free music.",
      "Set up a faceless brand account with a niche-specific name and value-driven bio."
    ],
    resources: ["Faceless Brand Starter Kit", "Royalty-Free Visual Resource List"]
  },
  {
    id: 19,
    title: "Multi Platform Mastery",
    duration: "11 mins",
    mastery: "You'll build a cross-platform content strategy that amplifies your reach without doubling your workload — using the Repurpose First method. This module shows you how to create once and distribute everywhere: Instagram, TikTok, Pinterest, YouTube Shorts, and Threads, all from a single content piece. A multi-platform presence protects your business from single-platform algorithm changes.",
    actionItems: [
      "Map out your content repurposing flow using the platform matrix from this module.",
      "Take one existing piece of content and repurpose it for 3 different platforms today.",
      "Set up accounts on 2 additional platforms and cross-link them in your bios."
    ],
    resources: ["Platform Repurposing Matrix", "Multi-Platform Content Checklist"]
  },
  {
    id: 20,
    title: "Navigating Stan.store",
    duration: "8 mins",
    mastery: "You'll set up your complete Stan.store digital storefront from scratch and optimise it to convert visitors into buyers automatically. Stan.store is the platform used by the SWC community and thousands of leading digital creators for good reason — it's elegant, fast, and purpose-built for selling digital products. This module is a step-by-step walkthrough of every feature you need to start selling today.",
    actionItems: [
      "Create your Stan.store account and complete the full profile setup including bio and image.",
      "Upload your first digital product (or the SWC 2.0 course if you have MRR) with a compelling description.",
      "Connect Stan.store to your Instagram bio and send a Story directing followers to your link."
    ],
    resources: ["Stan.store Setup Checklist", "Digital Product Upload Guide"]
  },
  {
    id: 21,
    title: "PLR Vault",
    duration: "9 mins",
    mastery: "You'll learn how to source, rebrand, and sell Private Label Rights (PLR) content as your own digital product in a fraction of the time it takes to create from scratch. The PLR model is one of the fastest paths to a digital product library — allowing you to launch multiple offers without being a writer, designer, or expert. Done correctly, one PLR product can generate recurring income for years.",
    actionItems: [
      "Browse 3 reputable PLR marketplaces from the recommended list and download one free product.",
      "Rebrand a PLR PDF using Canva — change the cover, fonts, colours, and brand elements.",
      "List your newly branded PLR product on your Stan.store at a price between $7 and $47."
    ],
    resources: ["Top PLR Marketplace Directory", "PLR Rebranding Tutorial (Canva)"]
  },
  {
    id: 22,
    title: "Mastering Reels",
    duration: "15 mins",
    mastery: "You'll create Reels that stop the scroll, hold attention to the end, and drive measurable action — using the exact framework used by creators with millions of views. This module deconstructs viral Reels into their component parts: hook design, retention structure, audio strategy, and CTA placement. A single great Reel can bring in more new followers than months of static posts.",
    actionItems: [
      "Film and post one Reel using the 3-Second Hook Formula from this module.",
      "Audit your last 5 Reels using the Retention Checklist and identify the drop-off point.",
      "Build a 30-day Reels content calendar using the 6 content categories from this module."
    ],
    resources: ["Viral Reel Framework PDF", "30-Day Reels Content Calendar Template"]
  },
  {
    id: 23,
    title: "Email Marketing",
    duration: "12 mins",
    mastery: "You'll build an email list of qualified buyers and set up automated email sequences that sell your offers while you sleep — turning a one-time follower into a lifetime customer. Email converts 3–5× higher than social media, and this module shows you how to capture, nurture, and monetise that list using proven templates. Your email list is the one digital asset no algorithm can take from you.",
    actionItems: [
      "Choose an email platform (Kit, MailerLite, or Flodesk) and create your account today.",
      "Write and activate a 3-email welcome sequence using the provided template.",
      "Create a lead magnet (free PDF, checklist, or mini-course) to grow your list this week."
    ],
    resources: ["3-Email Welcome Sequence Template", "Lead Magnet Creation Guide"]
  },
  {
    id: 24,
    title: "Digital Products",
    duration: "11 mins",
    mastery: "You'll create your first digital product from idea to sale-ready in under 48 hours using a proven product development framework. Digital products have zero inventory cost, 90%+ profit margins, and can be sold an unlimited number of times — making them the highest-leverage income stream available. This module covers eBooks, templates, guides, and digital bundles.",
    actionItems: [
      "Choose your digital product type and complete the Product Clarity Framework from this module.",
      "Create a simple digital product using Canva or Notion and export it as a PDF.",
      "Write the product description and list it on your Stan.store with a compelling cover image."
    ],
    resources: ["Digital Product Ideas Generator", "Product Description Copywriting Template"]
  },
  {
    id: 25,
    title: "The Content Vault",
    duration: "8 mins",
    mastery: "You'll access and maximise the library of done-for-you marketing assets included with SWC 2.0 — so you never start from a blank page. The Content Vault contains reel covers, caption templates, story scripts, and hook libraries you can deploy immediately. Learning to use pre-built assets strategically is one of the fastest shortcuts from beginner to consistent content creator.",
    actionItems: [
      "Download and organise all Vault assets into a dedicated folder on your device or cloud storage.",
      "Customise 5 caption templates with your voice and schedule them for this week.",
      "Use one Vault reel cover as your next piece of content — adapt the text, post it, measure it."
    ],
    resources: ["Content Vault Asset Library", "Vault Usage & Customisation Guide"]
  },
  {
    id: 26,
    title: "Live Recordings",
    duration: "10 mins",
    mastery: "You'll discover how to use Instagram and TikTok Lives strategically to build deep audience connection, grow faster, and sell in real-time with high conversion rates. Lives create urgency, authenticity, and algorithmic boosts that pre-recorded content cannot replicate. This module shows you how to plan, run, and follow up on a Live to maximise every minute on air.",
    actionItems: [
      "Schedule your first Live for within the next 7 days and announce it 48 hours in advance.",
      "Prepare a Live script using the Intro–Value–CTA framework from this module.",
      "Create a follow-up story series for the 24 hours after your Live to capture late viewers."
    ],
    resources: ["Live Broadcast Script Template", "Post-Live Follow-Up Story Sequence"]
  },
  {
    id: 27,
    title: "Drop Shipping",
    duration: "13 mins",
    mastery: "You'll launch a drop shipping business that ships physical products globally without ever touching inventory, packaging, or logistics — using a supplier network already built and waiting. This module covers niche selection, supplier vetting, store setup, and the product-market fit formula that separates profitable stores from the ones that fail silently. Drop shipping works best when combined with a personal brand that drives organic traffic.",
    actionItems: [
      "Choose your drop shipping niche using the Profit Potential Matrix from this module.",
      "Sign up for a supplier platform (Spocket or Zendrop) and shortlist 5 winning products.",
      "Set up a basic Shopify or WooCommerce store with at least 3 products listed and priced."
    ],
    resources: ["Drop Shipping Niche Research Matrix", "Supplier Vetting Checklist"]
  },
  {
    id: 28,
    title: "UGC",
    duration: "11 mins",
    mastery: "You'll position yourself as a UGC (User-Generated Content) creator and land paid brand deals without needing a large following or professional camera equipment. Brands pay $100–$1,000+ per video for authentic, phone-filmed content that performs better than polished ads — and this module shows you how to pitch, produce, and deliver UGC professionally. Your smartphone is a money-making device; this module proves it.",
    actionItems: [
      "Create a UGC portfolio using 3 spec ads for brands you already use and love.",
      "Build a creator media kit using the provided Canva template.",
      "Send cold pitches to 5 brands using the outreach template from this module."
    ],
    resources: ["UGC Creator Media Kit Template", "Brand Outreach Email Swipe File"]
  },
  {
    id: 29,
    title: "Securing Brand Deals",
    duration: "10 mins",
    mastery: "You'll learn how to attract, negotiate, and close brand partnership deals that pay you for content you'd create anyway — even as a micro-influencer with under 10,000 followers. This module reveals the engagement-over-follower-count framework that brands actually care about and the pitch formula that gets emails opened and responded to. Many SWC students secure their first brand deal within 30 days of this module.",
    actionItems: [
      "Identify 10 brands aligned with your niche and add them to your outreach pipeline.",
      "Write a personalised pitch email using the module's Subject Line + 3-Paragraph formula.",
      "Create an analytics snapshot showing your engagement rate and audience demographics."
    ],
    resources: ["Brand Deal Pitch Email Template", "Micro-Influencer Rate Card Guide"]
  },
  {
    id: 30,
    title: "Let's Talk Taxes",
    duration: "7 mins",
    mastery: "You'll understand the basic tax responsibilities of a digital entrepreneur so you're never caught off-guard by a bill you didn't expect — and you'll learn the legal deductions available to you that most new business owners miss completely. This module is not professional tax advice, but it gives you the vocabulary and concepts to work effectively with an accountant. A business that tracks income from day one never has a tax crisis.",
    actionItems: [
      "Open a dedicated business bank account separate from your personal finances today.",
      "Start tracking all income and expenses in a simple spreadsheet or accounting app.",
      "Schedule a 30-minute call with a local accountant or tax professional this month."
    ],
    resources: ["Business Expense Tracker Spreadsheet", "Digital Entrepreneur Tax Deductions Checklist"]
  },
  {
    id: 31,
    title: "Creating on Canva",
    duration: "10 mins",
    mastery: "You'll become confident and fast in Canva — creating professional-looking graphics, PDFs, reels, and brand assets without a design background or expensive software. This module covers the Canva features that matter most for digital creators: Brand Kits, templates, animations, and bulk creation. Canva proficiency is a direct income multiplier for any digital business.",
    actionItems: [
      "Set up your Canva Brand Kit with your logo, colours, and fonts.",
      "Create 5 branded posts using Canva templates, applying your brand kit to each.",
      "Design your first digital product cover using Canva and save it in multiple formats."
    ],
    resources: ["Canva Brand Kit Setup Tutorial", "Canva Shortcut Keys Reference Sheet"]
  },
  {
    id: 32,
    title: "APPS for Visuals",
    duration: "8 mins",
    mastery: "You'll discover the full toolkit of mobile apps that professional digital creators use to produce stunning visuals without expensive equipment. From AI image generators to video editors to caption tools — this module curates the best free and low-cost options and explains when to use each one. The right app at the right time turns a good post into a great one.",
    actionItems: [
      "Download and test 3 apps from the Recommended Visual Stack list in this module.",
      "Create one post using an AI-generated background or visual element.",
      "Build your personal 'creation workflow' that sequences the apps in your optimal order."
    ],
    resources: ["Creator App Stack Guide (Free & Paid)", "AI Image Prompt Library"]
  },
  {
    id: 33,
    title: "TikTok Mastery",
    duration: "14 mins",
    mastery: "You'll crack the TikTok algorithm and build a fast-growing account that sends daily traffic to your offers — even if you're starting from zero followers. TikTok's For You Page is the most powerful organic discovery engine in digital marketing, and this module gives you the playbook to exploit it ethically and consistently. A single TikTok video has made more creators their first $1,000 than any other platform.",
    actionItems: [
      "Post 3 TikTok videos in the next 3 days using the Hook Library from this module.",
      "Research the top 5 trending sounds in your niche and save them to your Favorites.",
      "Analyse 10 viral videos in your niche and reverse-engineer their hook and structure."
    ],
    resources: ["TikTok Algorithm Playbook PDF", "TikTok Hook Library (50 hooks)"]
  },
  {
    id: 34,
    title: "TikTok Lives",
    duration: "9 mins",
    mastery: "You'll use TikTok Lives to build real-time community, grow your follower count, and close sales in a format that gets pushed to thousands of non-followers automatically. TikTok prioritises live content in its algorithm, making Lives one of the highest-leverage growth tools on the platform. This module teaches you how to plan and host a Live that grows your account and drives offer clicks every time.",
    actionItems: [
      "Plan your first TikTok Live topic and duration using the Live Planning Template.",
      "Promote your upcoming Live with 3 teaser posts in the 48 hours before going live.",
      "Go live for a minimum of 30 minutes and engage with comments in real-time using the script guide."
    ],
    resources: ["TikTok Live Planning Template", "Live Engagement Script Guide"]
  },
  {
    id: 35,
    title: "TikTok Shop Level Up",
    duration: "11 mins",
    mastery: "You'll set up and optimise your TikTok Shop to sell digital and physical products directly inside the app — removing all friction from the purchase journey. TikTok Shop is the fastest-growing e-commerce channel in the world, and creators with small accounts are outselling major brands because of trust and authenticity. This module covers account setup, product listing, and the content formats that drive shop clicks.",
    actionItems: [
      "Apply for TikTok Shop seller status and complete your seller profile.",
      "List your first product with a keyword-rich title, description, and high-quality visuals.",
      "Create a shoppable TikTok video that organically features your product without feeling like an ad."
    ],
    resources: ["TikTok Shop Setup Checklist", "Shoppable Video Script Template"]
  },
  {
    id: 36,
    title: "Selling on Etsy",
    duration: "12 mins",
    mastery: "You'll open an Etsy digital shop and tap into a marketplace of 90 million active buyers who are already searching for what you're about to sell. Etsy is the world's largest marketplace for digital downloads — and digital products have no inventory, no shipping, and near-100% profit margins. This module walks you through SEO-optimised listings, pricing strategy, and the review-generation system that compounds your sales over time.",
    actionItems: [
      "Create your Etsy seller account and complete your shop profile with branding.",
      "List your first digital product with an SEO-optimised title using the Keyword Research guide.",
      "Ask your first 3 buyers to leave a review using the post-purchase follow-up template."
    ],
    resources: ["Etsy SEO Keyword Research Guide", "Product Listing Template"]
  },
  {
    id: 37,
    title: "Selling on Pinterest",
    duration: "10 mins",
    mastery: "You'll build a Pinterest presence that drives consistent, passive traffic to your digital products — long after you've posted and moved on. Pinterest is a search engine masquerading as a social platform, meaning your content has a shelf life of months or years, not hours. This module teaches you to create keyword-rich pins, build boards, and connect your store so Pinterest sends buyers to your checkout automatically.",
    actionItems: [
      "Convert your Pinterest account to a Business account and enable the product catalogue.",
      "Create 5 pins per product using the Pinterest Pin Template from this module.",
      "Research and add 20 high-volume keywords from your niche to your board descriptions and pin titles."
    ],
    resources: ["Pinterest SEO Keyword Guide", "Pin Design Templates (Canva)"]
  },
  {
    id: 38,
    title: "Branding Essentials",
    duration: "9 mins",
    mastery: "You'll build a brand identity so compelling that your audience feels something every time they see your content — not just recognise it. This advanced branding module goes beyond logos and colours into brand archetype, narrative voice, and the emotional promise you make to your community. A brand is not what you say about your business — it's what your audience feels when they think of you.",
    actionItems: [
      "Complete the Brand Archetype Quiz and design your messaging around your archetype.",
      "Write your brand manifesto — a 100-word statement of what you stand for and why.",
      "Audit your last 10 posts for brand consistency and update any that feel off-brand."
    ],
    resources: ["Brand Archetype Quiz & Guide", "Brand Manifesto Writing Template"]
  },
  {
    id: 39,
    title: "Faceless PLR",
    duration: "8 mins",
    mastery: "You'll combine the faceless brand model with the PLR product strategy to build an income-generating digital store without ever appearing on camera or writing a word of original content. Faceless PLR stores are among the fastest-growing niches in the digital product space — low start-up cost, low effort, high scalability. This module shows you how to stack these two strategies for maximum passive income.",
    actionItems: [
      "Source one PLR bundle aligned with your faceless niche and rebrand it in Canva.",
      "Create a faceless content series promoting your PLR product — 5 posts using branded templates.",
      "Set up automated email follow-ups to new buyers to encourage repeat purchases."
    ],
    resources: ["Faceless PLR Niche Guide", "Automated Email Sequence Template"]
  },
  {
    id: 40,
    title: "Selling in Stories",
    duration: "7 mins",
    mastery: "You'll turn your Instagram and TikTok Stories into a daily, high-converting sales channel that feels like a conversation rather than an advertisement. Stories are the most intimate format on social media — they have 2× the conversion rate of feed posts when used strategically. This module gives you the Story Selling Sequence: a 5-slide framework that takes viewers from awareness to purchase in under 60 seconds.",
    actionItems: [
      "Create a 5-slide Story series using the Story Selling Sequence from this module.",
      "Add a countdown sticker to your next promotional Story to create urgency.",
      "Use the 'DM me the word [X]' call-to-action in your next Story and track the responses."
    ],
    resources: ["Story Selling Sequence Templates", "Story CTA Phrase Bank"]
  },
  {
    id: 41,
    title: "Sales Mastery",
    duration: "13 mins",
    mastery: "You'll reach the advanced level of digital sales — where you understand buyer psychology deeply enough to craft irresistible offers and communicate their value so clearly that price resistance melts away. Sales Mastery is about creating so much perceived value that your price feels like a bargain, not a sacrifice. This module covers offer structuring, value stacking, and the closing language that separates six-figure creators from the rest.",
    actionItems: [
      "Redesign your current offer using the Value Stack formula to increase perceived worth.",
      "Write a new sales page or link-in-bio description using the Offer Clarity Framework.",
      "Test two versions of your CTA language this week and record which drives more clicks."
    ],
    resources: ["Offer Value Stack Builder", "Sales Page Copywriting Framework"]
  },
  {
    id: 42,
    title: "Amazon Reviews",
    duration: "8 mins",
    mastery: "You'll build a passive income stream by leveraging Amazon's affiliate and influencer programs to earn commissions on products your audience is already buying. The Amazon Influencer Program allows you to create a personalised storefront and earn commissions on any product — without creating anything yourself. This module shows you how to get approved, build your storefront, and create content that sends buyers directly there.",
    actionItems: [
      "Apply for the Amazon Influencer Program using the eligibility guide from this module.",
      "Create your Amazon storefront and organise it into 3–5 curated product lists.",
      "Publish one 'Amazon finds' piece of content linking to your storefront in the caption."
    ],
    resources: ["Amazon Influencer Application Guide", "Storefront Organisation Template"]
  },
  {
    id: 43,
    title: "Affiliate Marketing",
    duration: "11 mins",
    mastery: "You'll build a scalable affiliate marketing business that generates commissions from multiple programs simultaneously — creating income streams that run in the background 24 hours a day. This advanced affiliate module goes beyond just sharing links — it teaches you funnel building, evergreen content creation, and the tracking systems that show you exactly which content is driving the most revenue. Affiliate marketing is the closest thing to truly passive income in the digital space.",
    actionItems: [
      "Set up a simple affiliate funnel: lead magnet → email sequence → affiliate offer.",
      "Create one evergreen piece of content (blog post, pinned reel, or YouTube video) promoting your top affiliate.",
      "Install a link-tracking tool and set up conversion tracking for your top 3 affiliate links."
    ],
    resources: ["Affiliate Funnel Blueprint", "Link Tracking Setup Guide"]
  },
  {
    id: 44,
    title: "Print on Demand",
    duration: "10 mins",
    mastery: "You'll launch a print-on-demand store that sells custom-designed physical products worldwide without holding a single item of stock, packing a single box, or visiting a post office. Print on demand platforms handle printing, fulfilment, and shipping automatically — your job is to create compelling designs and drive traffic. A well-branded POD store can become a significant passive income stream with virtually no ongoing operational effort.",
    actionItems: [
      "Open a Printful or Printify account and connect it to an existing or new Etsy/Shopify store.",
      "Design your first 3 products in Canva using the Print-Ready Template from this module.",
      "Create a promotional post or reel showcasing your products using mockup images."
    ],
    resources: ["Print-Ready Design Templates (Canva)", "POD Platform Comparison Guide"]
  },
  {
    id: 45,
    title: "Theme Pages",
    duration: "9 mins",
    mastery: "You'll build a faceless niche theme page that attracts tens of thousands of followers by curating content rather than creating it — then monetise that audience with affiliate links, sponsorships, and digital products. Theme pages are one of the most scalable models in social media because they run almost entirely on reposted content and require minimal daily effort once established. The key is niche selection and consistency.",
    actionItems: [
      "Choose your theme page niche using the Audience Demand Matrix from this module.",
      "Create your theme page account, design the profile, and post 9 pieces of curated content.",
      "Apply to 2 affiliate programs related to your niche and add the links to your bio."
    ],
    resources: ["Theme Page Niche Matrix", "Curated Content Source List"]
  },
  {
    id: 46,
    title: "Website Flipping",
    duration: "12 mins",
    mastery: "You'll learn how to buy undervalued websites, improve them with strategic content and SEO, and sell them for 2–5× your investment — often within 90 days. Website flipping is a digital real estate business with some of the highest ROI in the online space, and marketplaces like Flippa make finding deals accessible to beginners. This module teaches you how to evaluate a site's potential and flip it for maximum profit.",
    actionItems: [
      "Browse Flippa and Empire Flippers and shortlist 3 websites under $1,000 with growth potential.",
      "Perform a content audit on one of your shortlisted sites using the Website Valuation Checklist.",
      "Publish one optimised blog post on a practice site using the SEO Content Framework."
    ],
    resources: ["Website Valuation Checklist", "SEO Content Framework Template"]
  },
  {
    id: 47,
    title: "Coach Masters",
    duration: "10 mins",
    mastery: "You'll package your knowledge and experience into a high-ticket coaching offer that commands premium prices and delivers transformational results for your clients. Coaching is the highest-margin service business available — no inventory, no fulfilment, and the ability to charge $500–$5,000+ per client. This module covers offer design, client acquisition, and the delivery framework that generates referrals automatically.",
    actionItems: [
      "Design your first coaching offer using the Coaching Offer Builder from this module.",
      "Write your coaching intake questionnaire to qualify and onboard new clients professionally.",
      "DM 5 people in your audience who have expressed interest in your niche with a personalised offer."
    ],
    resources: ["Coaching Offer Builder Framework", "Client Intake Questionnaire Template"]
  },
  {
    id: 48,
    title: "Creating Your Course",
    duration: "15 mins",
    mastery: "You'll build and launch your own digital course — packaging your knowledge into a premium educational product that generates revenue long after you've finished teaching it. This module walks you through curriculum design, video recording setup, platform selection, and the launch strategy that drives your first cohort of students without a big audience. Your expertise is worth far more than you're currently charging for it.",
    actionItems: [
      "Complete the Course Curriculum Outline Template for your first course topic.",
      "Record one sample lesson using your phone and the Basic Recording Setup Guide.",
      "Set a launch date for your course and create an early-bird waitlist to build momentum."
    ],
    resources: ["Course Curriculum Outline Template", "Basic Recording Setup Guide"]
  },
  {
    id: 49,
    title: "Airbnb",
    duration: "9 mins",
    mastery: "You'll explore the Airbnb management income stream — earning 20–30% of nightly rates by managing other people's properties without owning any real estate yourself. Airbnb co-hosting and management is one of the fastest-growing alternative income streams and can generate $1,500–$5,000/month per property managed well. This module covers how to find property owners, pitch your services, and automate the management workflow.",
    actionItems: [
      "Research Airbnb rental prices in your local area and identify 3 high-demand property types.",
      "Write a co-hosting pitch email using the template from this module.",
      "Set up a simple Airbnb management process: enquiry scripts, check-in guides, and review requests."
    ],
    resources: ["Airbnb Co-Hosting Pitch Template", "Short-Term Rental Management Checklist"]
  },
  {
    id: 50,
    title: "Art of Reselling",
    duration: "8 mins",
    mastery: "You'll master the buy-low-sell-high reselling model — sourcing undervalued physical products from thrift stores, clearance sales, and online marketplaces and reselling them for profit on platforms like eBay, Mercari, and Facebook Marketplace. Reselling requires no product creation, no technical skills, and can start with as little as $50 — making it one of the fastest ways to generate your first side income. The skill is in the eye: knowing what's worth buying.",
    actionItems: [
      "Visit one local thrift store or car boot sale and source 3 items using the Reselling Criteria Checklist.",
      "List your first item on eBay or Facebook Marketplace with professional photos and a competitive price.",
      "Research one profitable reselling niche (designer clothing, electronics, collectibles) and specialise."
    ],
    resources: ["Reselling Criteria Checklist", "Platform Pricing & Fee Comparison Guide"]
  },
  {
    id: 51,
    title: "Monetizing FB",
    duration: "9 mins",
    mastery: "You'll leverage Facebook's built-in monetisation tools — including Facebook Stars, in-stream ads, and Facebook Shops — to turn your existing content and community into a revenue stream. Facebook's creator monetisation program is underutilised by most digital entrepreneurs, leaving significant money on the table for those who activate it. This module walks you through the qualification requirements and the content types that earn the most.",
    actionItems: [
      "Check your Facebook creator eligibility and apply for any monetisation programs you qualify for.",
      "Create a Facebook Page for your brand and post 5 pieces of content in the next 7 days.",
      "Set up a Facebook Shop connected to your existing product catalogue."
    ],
    resources: ["Facebook Monetisation Eligibility Guide", "Facebook Shop Setup Checklist"]
  },
  {
    id: 52,
    title: "Monetizing Reels",
    duration: "8 mins",
    mastery: "You'll activate and maximise the in-platform Reels bonus and ad revenue programs available on Instagram and Facebook — turning your existing content habit into a passive payment every month. Platform monetisation programs are constantly evolving, and this module keeps you updated on the current eligibility requirements and the content formats that earn the highest RPM. Many creators earn an extra $300–$3,000/month simply by switching on the programs they already qualify for.",
    actionItems: [
      "Check your Instagram and Facebook Professional Dashboard for any monetisation program invitations.",
      "Activate the Reels Play Bonus or Meta Content Monetisation if eligible.",
      "Audit your Reel format to ensure it meets the platform's monetisation content guidelines."
    ],
    resources: ["Meta Monetisation Activation Guide", "Reels RPM Optimisation Checklist"]
  },
  {
    id: 53,
    title: "Podcast Setup",
    duration: "10 mins",
    mastery: "You'll launch a podcast that builds deep authority in your niche, grows your audience, and generates income through sponsorships, affiliate mentions, and your own product promotions. Podcasting is the highest-trust format in digital media — listeners spend an average of 20 minutes per episode, creating a level of intimacy no short-form content can replicate. This module covers equipment, publishing, and the growth strategy that gets your first 100 listeners fast.",
    actionItems: [
      "Record your first episode using the Episode Structure Template from this module.",
      "Create your podcast on a hosting platform (Buzzsprout, Anchor, or Spotify for Podcasters).",
      "Promote your first episode through a short Reel clip or audiogram across your social channels."
    ],
    resources: ["Podcast Episode Structure Template", "Budget Podcast Equipment Guide"]
  },
  {
    id: 54,
    title: "Threads Mastery",
    duration: "7 mins",
    mastery: "You'll build a Threads presence that drives profile visits, grows your following, and channels engaged readers directly to your paid offers — using the conversational content format that makes Threads unlike any other platform. Threads rewards authenticity and opinion over polish, making it one of the easiest platforms to gain traction on quickly. This module teaches the content cadence and engagement strategy that maximises your reach.",
    actionItems: [
      "Post 3 Threads today using the Opinion–Story–CTA format from this module.",
      "Engage with 10 creators in your niche by replying thoughtfully to their Threads.",
      "Add a Threads link to your Instagram bio and cross-promote your best Threads as Stories."
    ],
    resources: ["Threads Content Calendar Template", "Threads Growth Playbook PDF"]
  },
  {
    id: 55,
    title: "Network Marketing",
    duration: "8 mins",
    mastery: "You'll understand how to ethically leverage network marketing structures to create a team-based income stream alongside your personal digital business. This module separates legitimate network marketing from pyramid structures and gives you the framework for recruiting, training, and supporting a small, productive team rather than mass-recruiting with false promises. A well-run network marketing business can generate significant residual income when approached transparently.",
    actionItems: [
      "Research 3 established network marketing companies using the Vetting Framework from this module.",
      "If you're currently in a network marketing business, audit your recruiting messaging for ethical compliance.",
      "Write your personal network marketing invitation script — honest, benefit-led, pressure-free."
    ],
    resources: ["Network Marketing Vetting Framework", "Ethical Recruiting Script Template"]
  },
  {
    id: 56,
    title: "Pinterest Sales",
    duration: "11 mins",
    mastery: "You'll build an advanced Pinterest sales machine that drives hundreds of daily visits to your digital products and affiliate links through keyword-optimised pins, boards, and idea pins. Pinterest users have the highest purchase intent of any social platform — they're actively searching for solutions, not passively scrolling. This final module ties together everything you've learned to build a Pinterest-powered passive sales funnel that generates income on autopilot.",
    actionItems: [
      "Create 10 new pins this week linking directly to your digital product or affiliate offer.",
      "Optimise your 5 best-performing pins by improving titles, descriptions, and destination URLs.",
      "Set up a Tailwind or manual pinning schedule to maintain a consistent 3-pin-per-day cadence."
    ],
    resources: ["Pinterest Sales Funnel Blueprint", "Advanced Pinterest SEO Guide"]
  }
];
