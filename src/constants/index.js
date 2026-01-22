// import dsa from 'src/assets/dsa.png'
import {
    ml,
    web,
    vue_jobs,
    usePopcorn,
    coffeeproject,
    worldwise,
    codeforces,
    codechef,
    dsa,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "DSA Enthusiast",
        icon: dsa,
    },
    {
        title: "Data Science Enthusiast",
        icon: ml,
    },

];

// technologies array removed

// const experiences = [ ... ] removed/commented out in original

const profiles = [
    {
        testimonial:
            "🌟 Solved ~785 problems | 2058 Rating | Regular contest participant. I use LeetCode to sharpen my DSA daily.",
        name: "LeetCode",
        profile_link: "https://leetcode.com/u/Sagivian/",

        image: "https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png",
    },
    {
        testimonial:
            "⚔️ Rated 'Pupil' | Max Rating: 1300 | Active in Division 2/3 contests. I enjoy tackling algorithmic challenges here.",
        name: "Codeforces",
        profile_link: "https://codeforces.com/profile/Sagivian",

        image: codeforces,
    },
    {
        testimonial:
            "🍳 3★ Coder | Rating: 1653 | Regularly Participated in weekly contests | Focused on time-efficient problem solving.",
        name: "CodeChef",
        profile_link: "https://www.codechef.com/users/sagivian",

        image: codechef,
    },
];

const projects = [
    {
        name: "Financial ChatBot",
        description:
            "A full-stack financial chatbot analyzing PDF documents to answer queries using a RAG pipeline (FastAPI, LangChain, FAISS, Gemini API). Supports multi-modal input (text/images) with local-only storage for privacy and zero cloud costs.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "NLP & RAG",
                color: "green-text-gradient",
            },
            {
                name: "FastAPI",
                color: "pink-text-gradient",
            },
            {
                name: "Generative AI",
                color: "orange-text-gradient",
            },
        ],
        image: coffeeproject, // Placeholder: Conceptually complex
        source_code_link: "https://github.com/Fenil412/Financial-ChatBot",
        live_demo_link: "", // No live link provided
    },
    {
        name: "SmartBite - AI Meal Planner",
        description:
            "AI-powered meal planner generating personalized diet plans using collaborative filtering and XGBoost ranking. Features Flask microservices, JWT authentication, Pulp optimization, and a Groq-powered NLP assistant.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "ML (XGBoost)",
                color: "green-text-gradient",
            },
            {
                name: "Flask",
                color: "pink-text-gradient",
            },
            {
                name: "Groq API",
                color: "orange-text-gradient",
            },
        ],
        image: usePopcorn, // Placeholder: Food related
        source_code_link: "https://github.com/Fenil412/SmartBite",
        live_demo_link: "",
    },
    {
        name: "Smart Route Optimization",
        description:
            "Smart navigation tool analyzing traffic and demand to generate optimal routes. Utilizes Folium for interactive map visualization and features data export to Excel.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "Flask",
                color: "green-text-gradient",
            },
            {
                name: "Folium",
                color: "pink-text-gradient",
            },
            {
                name: "Data Analysis",
                color: "yellow-text-gradient",
            },
        ],
        image: worldwise, // Placeholder: Map related
        source_code_link: "https://github.com/Fenil412/Mined_Hackathon_2025",
        live_demo_link: "",
    },
    {
        name: "Email System",
        description:
            "Comprehensive email management system (Inbox, Outbox, Compose) built with Java OOP and file handling. Features efficient read/unread tracking and reliable file-based message storage.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "OOP",
                color: "green-text-gradient",
            },
            {
                name: "File Handling",
                color: "pink-text-gradient",
            },
        ],
        image: vue_jobs, // Placeholder: Generic works
        source_code_link: "https://github.com/Fenil412/Email_System",
        live_demo_link: "",
    },
];

export { services, profiles, projects };