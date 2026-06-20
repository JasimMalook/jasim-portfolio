export interface ProjectDetail {
    slug: string;
    title: string;
    shortTitle: string;
    category: string;
    summary: string;
    description: string;
    tags: string[];
    color: string;
    liveUrl?: string;
    githubUrl?: string;
    images?: string[];
    featured?: boolean;
    disabled?: boolean;
    challenge: string;
    challengePoints: string[];
    solution: string;
    solutionPoints: string[];
    features: string[];
    techStack: { name: string; role: string }[];
    impact: string;
    impactPoints: string[];
    results: { metric: string; value: string }[];
}

export const projects: ProjectDetail[] = [
    {
        slug: "adnayn",
        title: "Adnayn – E-commerce Platform",
        shortTitle: "Adnayn",
        category: "Full-Stack E-Commerce / Next.js",
        summary: "A full-stack perfume e-commerce platform with admin panel, built with Next.js and Supabase for scalable product management and seamless customer experience.",
        description: "Adnayn is a full-stack e-commerce platform built to power a modern perfume business. The platform includes a customer-facing storefront with product browsing, cart, and checkout, along with a comprehensive admin panel for managing products, orders, and business operations. Built with Next.js and Supabase, it delivers performance, scalability, and a premium shopping experience.",
        tags: ["Next.js", "Supabase", "E-Commerce", "Admin Panel", "Responsive Design", "SEO", "Full-Stack", "Web Development"],
        color: "from-slate-700 to-gray-900",
        liveUrl: "https://adnayn.com",
        githubUrl: "https://github.com/JasimMalook/adnayn-ecommerce",
        images: [
            "/projects/adnayn-ecommerce/adnayn thumbnil.webp",
            "/projects/adnayn-ecommerce/Adnayn (1).webp",
            "/projects/adnayn-ecommerce/Adnayn (2).webp",
            "/projects/adnayn-ecommerce/Adnayn (3).webp",
            "/projects/adnayn-ecommerce/Adnayn (4).webp",
            "/projects/adnayn-ecommerce/Adnayn (5).webp",
            "/projects/adnayn-ecommerce/Adnayn (6).webp",
        ],
        challenge: "The business needed a scalable, modern e-commerce solution that could handle product catalog management, order processing, and customer interactions — all while delivering a premium brand experience and maintaining high performance.",
        challengePoints: [
            "No scalable e-commerce system to manage products and orders",
            "Lack of a centralized admin panel for business operations",
            "Need for modern UI/UX to match premium brand identity",
            "Performance and SEO optimization for better search visibility",
            "Secure and reliable order management workflow",
        ],
        solution: "Built a full-stack e-commerce platform using Next.js for the frontend and Supabase for the backend, featuring a custom admin dashboard, product and order management system, authentication, and a scalable architecture designed for growth.",
        solutionPoints: [
            "Next.js for server-side rendering and optimal performance",
            "Supabase backend for database, auth, and real-time capabilities",
            "Custom admin dashboard for complete business control",
            "Product management with categories, images, and inventory",
            "Order management system with status tracking",
            "Responsive design for seamless mobile and desktop experience",
            "SEO-optimized structure for better organic reach",
        ],
        features: [
            "Custom admin dashboard",
            "Product management system",
            "Order management and tracking",
            "User authentication system",
            "Responsive storefront",
            "SEO-optimized pages",
            "Fast server-side rendering",
            "Real-time data sync",
            "Image upload and management",
            "Secure API architecture",
        ],
        techStack: [
            { name: "Next.js", role: "Frontend & SSR Framework" },
            { name: "Supabase", role: "Backend & Database" },
            { name: "React", role: "UI Components" },
            { name: "TypeScript", role: "Type Safety" },
            { name: "Tailwind CSS", role: "Styling" },
            { name: "PostgreSQL", role: "Database (via Supabase)" },
        ],
        impact: "The platform transformed the business from manual operations to a fully digital e-commerce system, enabling efficient product management, streamlined order processing, improved customer experience, and a scalable foundation for brand growth.",
        impactPoints: [
            "Centralized admin panel improved business operations efficiency",
            "Automated order management reduced manual workload",
            "Modern storefront enhanced customer trust and conversions",
            "SEO improvements increased organic traffic and visibility",
            "Scalable architecture supports future feature expansion",
        ],
        results: [
            { metric: "Platform", value: "Full-Stack" },
            { metric: "Backend", value: "Supabase" },
            { metric: "Admin Panel", value: "Custom Built" },
            { metric: "Performance", value: "SSR Optimized" },
            { metric: "Status", value: "Live & Scaling" },
        ],
    },
    {
        slug: "eshal-jewelz",
        title: "Eshal Jewelz – Luxury Jewelry E-Commerce",
        shortTitle: "Eshal Jewelz",
        category: "E-Commerce / WordPress",
        summary: "A conversion-focused luxury jewelry e-commerce website built with WooCommerce and Stripe, helping the brand strengthen its online presence and drive business growth.",
        description: "Eshal Jewelz is a luxury jewelry e-commerce platform developed to help the business establish a professional online presence and provide customers with a seamless shopping experience. The project includes responsive design, organized product presentation, Stripe payment integration, and a conversion-focused user journey designed to support long-term business growth.",
        tags: ["WordPress", "WooCommerce", "E-commerce", "Stripe", "Responsive Design", "Business Website", "SEO", "Web Development"],
        color: "from-amber-500 to-yellow-600",
        liveUrl: "https://eshaljewelz.com",
        images: [
            "/projects/eshal-jewelz/ehsal jewelz 1.webp",
            "/projects/eshal-jewelz/eshal jewelz 2.webp",
            "/projects/eshal-jewelz/eshal jewelz 3.webp",
        ],
        challenge: "The business needed a professional online storefront that could build trust with customers, showcase jewelry collections effectively, provide a smooth mobile shopping experience, accept secure online payments, and strengthen the brand's digital presence.",
        challengePoints: [
            "No professional online presence to showcase products",
            "Lack of trust signals for potential online customers",
            "Poor mobile shopping experience",
            "No secure payment processing system",
            "Weak digital brand visibility",
        ],
        solution: "Built a custom WordPress and WooCommerce website featuring a modern luxury design, mobile-first responsive layout, product catalog organization, secure Stripe payment integration, optimized user experience, professional contact and inquiry system, SEO-friendly structure, and fast navigation.",
        solutionPoints: [
            "Custom luxury design reflecting the brand's premium identity",
            "Mobile-first responsive layout for all devices",
            "Organized product catalog with categories and filters",
            "Secure Stripe payment integration",
            "Professional contact and inquiry system",
            "SEO-optimized structure for better search visibility",
            "Fast loading speeds and intuitive navigation",
        ],
        features: [
            "Custom WooCommerce store design",
            "Responsive mobile-first layout",
            "Secure Stripe payment gateway",
            "Product catalog with categories",
            "Shopping cart and checkout flow",
            "Contact and inquiry form",
            "SEO-friendly URL structure",
            "Fast page loading optimization",
        ],
        techStack: [
            { name: "WordPress", role: "Content Management" },
            { name: "WooCommerce", role: "E-Commerce Platform" },
            { name: "PHP", role: "Backend Logic" },
            { name: "JavaScript", role: "Interactive Features" },
            { name: "HTML5", role: "Page Structure" },
            { name: "CSS3", role: "Styling & Layout" },
            { name: "Stripe", role: "Payment Processing" },
        ],
        impact: "Instead of simply creating a website, the project focused on creating a digital sales platform that helps the brand present products professionally, improve customer confidence, increase online visibility, generate sales opportunities, and create a scalable foundation for future growth.",
        impactPoints: [
            "Professional product presentation builds customer trust",
            "Mobile-first design captures mobile shoppers",
            "Secure payments increase conversion rates",
            "SEO improvements drive organic traffic",
            "Scalable platform supports business expansion",
        ],
        results: [
            { metric: "Online Presence", value: "Established" },
            { metric: "Payment Processing", value: "Stripe Integrated" },
            { metric: "Mobile Experience", value: "Fully Responsive" },
            { metric: "SEO Score", value: "Optimized" },
            { metric: "Platform", value: "Scalable & Maintainable" },
        ],
    },
    {
        slug: "nexashop",
        title: "NexaShop – E-Commerce Website",
        shortTitle: "NexaShop",
        category: "E-Commerce / Full-Stack",
        summary: "A full-featured e-commerce website with a custom admin panel for managing products, orders, and users. Built for real-world business use with a responsive and clean UI.",
        description: "NexaShop is a comprehensive e-commerce platform built from scratch with PHP and MySQL. It features a complete admin dashboard for managing products, categories, orders, and users, along with a customer-facing storefront with cart, checkout, and order tracking functionality.",
        tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
        color: "from-indigo-600 to-purple-600",
        liveUrl: "https://nexashop.unaux.com",
        githubUrl: "https://github.com/JasimMalook/nexashop-ecommerce",
        images: [
            "/projects/nexashop/home.png",
            "/projects/nexashop/nexashop-shop.png",
            "/projects/nexashop/nexashop-cart.png",
            "/projects/nexashop/nexashop-checkout.png",
            "/projects/nexashop/nexashop-admin-dashboard.png",
            "/projects/nexashop/nexashop-admin-products.png",
            "/projects/nexashop/nexashop-admin-catogary.png",
        ],
        challenge: "Building a complete e-commerce system from scratch that handles product management, user authentication, shopping cart logic, order processing, and an admin dashboard — all while maintaining a clean, responsive UI.",
        challengePoints: [
            "Full e-commerce system built from scratch",
            "Complex admin panel for product and order management",
            "User authentication and session handling",
            "Shopping cart and checkout logic",
            "Responsive design across all devices",
        ],
        solution: "Developed a custom PHP e-commerce platform with MySQL database, Bootstrap for responsive UI, and jQuery for interactive features. The admin panel provides full CRUD operations for products, categories, orders, and users.",
        solutionPoints: [
            "Custom PHP backend with MySQL database",
            "Bootstrap-based responsive storefront",
            "Full admin dashboard with CRUD operations",
            "Session-based user authentication",
            "Shopping cart with persistent state",
            "Order processing and tracking system",
        ],
        features: [
            "Product catalog with search and filter",
            "User registration and login",
            "Shopping cart management",
            "Secure checkout flow",
            "Admin dashboard",
            "Product and category management",
            "Order tracking system",
            "Responsive design",
        ],
        techStack: [
            { name: "PHP", role: "Backend Logic" },
            { name: "MySQL", role: "Database" },
            { name: "Bootstrap", role: "UI Framework" },
            { name: "jQuery", role: "Frontend Interactivity" },
            { name: "HTML5", role: "Page Structure" },
            { name: "CSS3", role: "Styling" },
        ],
        impact: "NexaShop demonstrates the ability to build a complete, production-ready e-commerce system from the ground up, showcasing skills in full-stack development, database design, and user experience.",
        impactPoints: [
            "Complete e-commerce solution from scratch",
            "Production-ready admin panel",
            "Responsive storefront for all devices",
            "Scalable database architecture",
        ],
        results: [
            { metric: "Type", value: "Full-Stack E-Commerce" },
            { metric: "Admin Panel", value: "Full CRUD Operations" },
            { metric: "Database", value: "MySQL" },
            { metric: "UI Framework", value: "Bootstrap" },
            { metric: "Status", value: "Live & Deployed" },
        ],
    },
    {
        slug: "mail-pilot",
        title: "Mail Pilot – Email Automation SaaS",
        shortTitle: "Mail Pilot",
        category: "SaaS / MERN Stack",
        summary: "A modern email automation and management platform built with the MERN stack and Next.js, designed to streamline communication workflows through a clean SaaS-style interface.",
        description: "Mail Pilot is a full-stack email automation and management system built for efficient communication workflows. It allows users to manage, automate, and streamline email operations through a clean and scalable SaaS-style interface. The platform features a modern dashboard, automation logic, and a secure backend architecture designed for growth.",
        tags: ["Next.js", "MongoDB", "Express", "React", "Node.js", "SaaS", "Email Automation", "Full-Stack"],
        color: "from-blue-600 to-indigo-700",
        liveUrl: "https://mailpilot-saas-llm4.vercel.app/",
        githubUrl: "https://github.com/JasimMalook/mailpilot-saas",
        images: [
            "/projects/mail-pilot/mail-pilot-cover.webp",
            "/projects/mail-pilot/mail-pilot (1).webp",
            "/projects/mail-pilot/mail-pilot (2).webp",
        ],
        challenge: "Businesses needed an efficient way to manage and automate email communication at scale. Manual email handling was time-consuming, error-prone, and not scalable for growing teams and customer bases.",
        challengePoints: [
            "Manual email workflows reducing team productivity",
            "No centralized system for email automation",
            "Difficulty scaling email operations with business growth",
            "Lack of analytics and tracking for email campaigns",
            "Need for a clean, intuitive dashboard interface",
        ],
        solution: "Built a full-stack SaaS platform using the MERN stack with Next.js, featuring automated email workflows, a modern dashboard UI, user management, and a scalable backend architecture designed for high-volume operations.",
        solutionPoints: [
            "Next.js for server-side rendering and optimal performance",
            "MongoDB for flexible, scalable data storage",
            "Express and Node.js for robust API architecture",
            "React dashboard with intuitive user interface",
            "Email automation engine for scheduled and triggered sends",
            "User authentication and role-based access control",
        ],
        features: [
            "Email automation system",
            "Modern dashboard interface",
            "User management and authentication",
            "Campaign tracking and analytics",
            "Secure backend architecture",
            "Responsive design for all devices",
            "Fast performance and loading speeds",
            "Scalable SaaS infrastructure",
        ],
        techStack: [
            { name: "Next.js", role: "Frontend & SSR Framework" },
            { name: "React", role: "UI Components" },
            { name: "Node.js", role: "Runtime Environment" },
            { name: "Express", role: "API Framework" },
            { name: "MongoDB", role: "Database" },
            { name: "TypeScript", role: "Type Safety" },
        ],
        impact: "Mail Pilot transforms how teams handle email communication by replacing manual workflows with intelligent automation, improving productivity, enabling scalable operations, and providing actionable insights through a modern SaaS interface.",
        impactPoints: [
            "Automated workflows significantly reduce manual effort",
            "Centralized dashboard improves team productivity",
            "Scalable architecture supports business growth",
            "Analytics provide insights for campaign optimization",
            "Clean UI/UX reduces onboarding time for new users",
        ],
        results: [
            { metric: "Architecture", value: "MERN + Next.js" },
            { metric: "Automation", value: "Email Workflows" },
            { metric: "Dashboard", value: "Modern SaaS UI" },
            { metric: "Database", value: "MongoDB" },
            { metric: "Status", value: "Live & Scaling" },
        ],
    },
    {
        slug: "truck-dispatch",
        title: "Trucking Dispatch System",
        shortTitle: "Truck Dispatch",
        category: "Logistics / React",
        summary: "A modern trucking dispatch platform built to streamline logistics operations, manage dispatch workflows, and improve transportation efficiency through a clean and responsive web interface.",
        description: "A comprehensive trucking dispatch system designed to digitize and optimize logistics operations. The platform provides dispatch management, route tracking, and workflow organization tools that help transport businesses move from manual processes to a structured digital system.",
        tags: ["React", "TypeScript", "Tailwind CSS", "React Router", "Logistics", "Dispatch Management", "Web App"],
        color: "from-orange-500 to-red-600",
        liveUrl: "https://trucking-dispatch-system.vercel.app/",
        githubUrl: "https://github.com/JasimMalook/trucking-dispatch-system",
        images: [
            "/projects/truck-dispatch/Truck cover photo.webp",
            "/projects/truck-dispatch/Truck Dispatch (1).webp",
            "/projects/truck-dispatch/Truck Dispatch (2).webp",
        ],
        challenge: "Transportation businesses relied on manual dispatch processes that were inefficient, error-prone, and difficult to scale. There was no structured system to manage dispatch workflows, track logistics, or coordinate drivers and shipments effectively.",
        challengePoints: [
            "Manual dispatch processes causing delays and errors",
            "No centralized system for logistics tracking",
            "Difficulty coordinating drivers and shipments",
            "Lack of real-time visibility into dispatch operations",
            "Need for a structured, scalable workflow system",
        ],
        solution: "Developed a modern dispatch management platform using React and TypeScript with Tailwind CSS, featuring clean dashboard interfaces, dispatch workflow management, routing navigation, and a responsive design optimized for logistics operations.",
        solutionPoints: [
            "React with TypeScript for type-safe, reliable code",
            "Tailwind CSS for consistent, professional UI",
            "React Router for seamless page navigation",
            "Dashboard-centric design for dispatch operations",
            "Responsive layout for desktop and tablet use",
            "Clean component architecture for easy maintenance",
        ],
        features: [
            "Dispatch management dashboard",
            "Logistics tracking interface",
            "Driver and shipment coordination",
            "Route management system",
            "Responsive design for all devices",
            "Fast navigation and page loads",
            "Clean and intuitive UI/UX",
            "Scalable component architecture",
        ],
        techStack: [
            { name: "React", role: "Frontend Framework" },
            { name: "TypeScript", role: "Type Safety" },
            { name: "Tailwind CSS", role: "Styling" },
            { name: "React Router", role: "Navigation" },
            { name: "React Scripts", role: "Build Tool" },
        ],
        impact: "The dispatch system replaces manual logistics coordination with a structured digital platform, improving dispatch efficiency, reducing errors, providing better visibility into operations, and creating a scalable foundation for growing transport businesses.",
        impactPoints: [
            "Streamlined dispatch operations reduce manual errors",
            "Centralized dashboard improves logistics visibility",
            "Structured workflows enhance driver coordination",
            "Digital system enables data-driven decisions",
            "Scalable architecture supports business expansion",
        ],
        results: [
            { metric: "Framework", value: "React + TypeScript" },
            { metric: "Styling", value: "Tailwind CSS" },
            { metric: "Navigation", value: "React Router" },
            { metric: "Focus", value: "Logistics & Dispatch" },
            { metric: "Status", value: "Live & Functional" },
        ],
    },
    {
        slug: "ai-english-speaking-app",
        title: "AI English Speaking App",
        shortTitle: "AI English App",
        category: "AI / Web Application",
        summary: "An AI-powered application providing real-time pronunciation feedback and conversation practice.",
        description: "An intelligent English learning platform that leverages AI to provide real-time pronunciation feedback, conversation practice, and personalized learning paths for users looking to improve their English speaking skills.",
        tags: ["React", "OpenAI API", "Tailwind"],
        color: "from-blue-500 to-cyan-500",
        images: [],
        disabled: true,
        challenge: "Creating an AI-powered language learning tool that provides accurate pronunciation feedback and natural conversation practice in real-time.",
        challengePoints: [
            "Real-time speech recognition and analysis",
            "AI-powered pronunciation feedback",
            "Natural conversation flow simulation",
            "Personalized learning experience",
        ],
        solution: "Built with React and integrated OpenAI API for intelligent conversation and pronunciation analysis, with a clean Tailwind CSS interface.",
        solutionPoints: [
            "React-based responsive interface",
            "OpenAI API integration for AI features",
            "Real-time speech processing",
            "Tailwind CSS for modern styling",
        ],
        features: [
            "AI-powered pronunciation feedback",
            "Conversation practice mode",
            "Real-time speech recognition",
            "Progress tracking",
        ],
        techStack: [
            { name: "React", role: "Frontend Framework" },
            { name: "OpenAI API", role: "AI Engine" },
            { name: "Tailwind CSS", role: "Styling" },
        ],
        impact: "Demonstrates integration of AI capabilities into a practical web application for language learning.",
        impactPoints: [
            "AI integration in web applications",
            "Real-time processing capabilities",
            "User-friendly learning interface",
        ],
        results: [
            { metric: "AI Integration", value: "OpenAI API" },
            { metric: "Framework", value: "React" },
            { metric: "Status", value: "In Development" },
        ],
    },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectDetail[] {
    return projects.filter((p) => !p.disabled);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}
