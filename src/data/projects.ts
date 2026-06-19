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
        slug: "eshal-jewelz",
        title: "Eshal Jewelz – Luxury Jewelry E-Commerce",
        shortTitle: "Eshal Jewelz",
        category: "E-Commerce / WordPress",
        summary: "A conversion-focused luxury jewelry e-commerce website built with WooCommerce and Stripe, helping the brand strengthen its online presence and drive business growth.",
        description: "Eshal Jewelz is a luxury jewelry e-commerce platform developed to help the business establish a professional online presence and provide customers with a seamless shopping experience. The project includes responsive design, organized product presentation, Stripe payment integration, and a conversion-focused user journey designed to support long-term business growth.",
        tags: ["WordPress", "WooCommerce", "E-commerce", "Stripe", "Responsive Design", "Business Website", "SEO", "Web Development"],
        color: "from-amber-500 to-yellow-600",
        liveUrl: "https://eshaljewelz.com",
        featured: true,
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
    {
        slug: "ecommerce-store",
        title: "E-Commerce Store",
        shortTitle: "E-Commerce Store",
        category: "E-Commerce / Next.js",
        summary: "Modern e-commerce platform with Stripe integration, cart management, and admin dashboard.",
        description: "A modern e-commerce platform built with Next.js featuring Stripe payment integration, comprehensive cart management, and an admin dashboard for store operations.",
        tags: ["Next.js", "Stripe", "Prisma"],
        color: "from-purple-500 to-pink-500",
        disabled: true,
        challenge: "Building a modern, performant e-commerce platform with seamless payment processing and store management capabilities.",
        challengePoints: [
            "Modern e-commerce requirements",
            "Stripe payment integration",
            "Cart and inventory management",
            "Admin dashboard needs",
        ],
        solution: "Developed with Next.js for server-side rendering and performance, Prisma for database management, and Stripe for secure payments.",
        solutionPoints: [
            "Next.js for SSR and performance",
            "Prisma ORM for database",
            "Stripe integration for payments",
            "Admin dashboard for management",
        ],
        features: [
            "Server-side rendered product pages",
            "Stripe payment processing",
            "Cart management system",
            "Admin dashboard",
        ],
        techStack: [
            { name: "Next.js", role: "Framework" },
            { name: "Stripe", role: "Payments" },
            { name: "Prisma", role: "Database ORM" },
        ],
        impact: "Showcases modern full-stack development with Next.js and payment integration.",
        impactPoints: [
            "Modern tech stack implementation",
            "Secure payment processing",
            "Scalable architecture",
        ],
        results: [
            { metric: "Framework", value: "Next.js" },
            { metric: "Payments", value: "Stripe" },
            { metric: "Status", value: "Planned" },
        ],
    },
    {
        slug: "saas-landing-page",
        title: "SaaS Landing Page",
        shortTitle: "SaaS Landing",
        category: "Landing Page / React",
        summary: "High-performance landing page for a SaaS product with dark mode and smooth animations.",
        description: "A conversion-optimized SaaS landing page built with React and Framer Motion, featuring dark mode support, smooth scroll animations, and a responsive design.",
        tags: ["React", "Framer Motion", "Vite"],
        color: "from-orange-500 to-red-500",
        disabled: true,
        challenge: "Creating a high-converting landing page that loads fast, looks premium, and guides visitors toward conversion.",
        challengePoints: [
            "High conversion rate requirements",
            "Fast loading performance",
            "Premium visual design",
            "Smooth animation experience",
        ],
        solution: "Built with Vite for instant dev server and fast builds, React for component architecture, and Framer Motion for fluid animations.",
        solutionPoints: [
            "Vite for blazing-fast performance",
            "React component architecture",
            "Framer Motion animations",
            "Dark mode support",
        ],
        features: [
            "Smooth scroll animations",
            "Dark mode toggle",
            "Responsive design",
            "Fast page loads",
        ],
        techStack: [
            { name: "React", role: "UI Library" },
            { name: "Framer Motion", role: "Animations" },
            { name: "Vite", role: "Build Tool" },
        ],
        impact: "Demonstrates ability to build high-performance, conversion-focused marketing pages.",
        impactPoints: [
            "Performance optimization",
            "Animation expertise",
            "Conversion-focused design",
        ],
        results: [
            { metric: "Build Tool", value: "Vite" },
            { metric: "Animations", value: "Framer Motion" },
            { metric: "Status", value: "Planned" },
        ],
    },
    {
        slug: "admin-dashboard",
        title: "Admin Dashboard",
        shortTitle: "Dashboard",
        category: "Dashboard / Vue.js",
        summary: "Comprehensive analytics dashboard with data visualization and user management.",
        description: "A feature-rich admin dashboard built with Vue.js, providing comprehensive analytics, data visualization with Chart.js, and user management capabilities powered by Firebase.",
        tags: ["Vue", "Chart.js", "Firebase"],
        color: "from-green-500 to-emerald-500",
        disabled: true,
        challenge: "Building an intuitive admin dashboard that presents complex data clearly and manages users efficiently.",
        challengePoints: [
            "Complex data visualization needs",
            "Real-time analytics requirements",
            "User management system",
            "Intuitive admin interface",
        ],
        solution: "Developed with Vue.js for reactive UI, Chart.js for data visualization, and Firebase for authentication and real-time data.",
        solutionPoints: [
            "Vue.js reactive components",
            "Chart.js data visualization",
            "Firebase authentication",
            "Real-time data sync",
        ],
        features: [
            "Interactive data charts",
            "User management panel",
            "Real-time analytics",
            "Responsive dashboard layout",
        ],
        techStack: [
            { name: "Vue.js", role: "Frontend Framework" },
            { name: "Chart.js", role: "Data Visualization" },
            { name: "Firebase", role: "Backend Services" },
        ],
        impact: "Showcases ability to build data-driven admin interfaces with modern frontend frameworks.",
        impactPoints: [
            "Data visualization skills",
            "Real-time application architecture",
            "Admin panel design",
        ],
        results: [
            { metric: "Framework", value: "Vue.js" },
            { metric: "Charts", value: "Chart.js" },
            { metric: "Backend", value: "Firebase" },
            { metric: "Status", value: "Planned" },
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
