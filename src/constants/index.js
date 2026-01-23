// import dsa from 'src/assets/dsa.png'
import {
    ml,
    web,
    // coffeeproject, usePopcorn, vue_jobs, and worldwise removed (using public assets)
    codeforces,
    codechef,
    dsa,
    kaggle,
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
    {
        testimonial:
            "📊 Datasets & Notebooks | Active Contributor | Exploring Machine Learning models and data visualization techniques.",
        name: "Kaggle",
        profile_link: "https://www.kaggle.com/fenilchodvadiya",

        image: kaggle,
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
        image: "/Financial Chatbot.png",
        source_code_link: "https://github.com/Fenil412/Financial-ChatBot",
        live_demo_link: "https://financial-chat-bot-yqpz.vercel.app/",
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
        image: "/SmartBite.png",
        source_code_link: "https://github.com/Fenil412/SmartBite",
        live_demo_link: "https://www.mealgenerator.me/",
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
        image: "/Smart Route Optimizer.png",
        source_code_link: "https://github.com/Fenil412/Mined_Hackathon_2025",
        live_demo_link: "https://mined-hackathon-2025.vercel.app/",
    },
    {
        name: "Strongly Connected Components",
        description:
            "A visualizer for efficiently finding Strongly Connected Components in directed graphs using Kosaraju’s, Tarjan’s, and Gabow’s algorithms. Features real-time traversal and interactive graph manipulation.",
        tags: [
            {
                name: "Cytoscape.js",
                color: "blue-text-gradient",
            },
            {
                name: "Algorithm Visualization",
                color: "green-text-gradient",
            },
            {
                name: "Graph Theory",
                color: "pink-text-gradient",
            },
        ],
        image: "Strongly Connected Components.png",
        source_code_link: "https://github.com/Fenil412/Strongly-Connected-Components-Detection",
        live_demo_link: "https://strongly-connected-components-detec.vercel.app/",
    },
    {
        name: "Wine Quality Prediction",
        description:
            "Machine Learning project utilizing Exploratory Data Analysis (EDA) and algorithms like Logistic Regression and Random Forest to predict wine quality with high accuracy.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "green-text-gradient",
            },
            {
                name: "EDA",
                color: "pink-text-gradient",
            },
            {
                name: "Pandas",
                color: "yellow-text-gradient",
            },
        ],
        image: "/Wine Quality Prediction.png",
        source_code_link: "https://github.com/Fenil412/Wine-Quality-Prediction-Using-Machine-Learning",
        live_demo_link: "https://www.kaggle.com/code/fenilchodvadiya/wine-quality-prediction-using-machine-learning",
    },
    {
        name: "Signal Processing System",
        description:
            "Interactive web application for signal generation and analysis. Features customizable waveforms, noise simulation, and Fourier Analysis (FFT/IFFT) with real-time charting.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Signal Processing",
                color: "green-text-gradient",
            },
            {
                name: "Chart.js",
                color: "pink-text-gradient",
            },
            {
                name: "FFT",
                color: "orange-text-gradient",
            },
        ],
        image: "/Signal Processing System.png",
        source_code_link: "https://github.com/Fenil412/Signal-Processing-System",
        live_demo_link: "https://signal-processing-system.vercel.app/",
    },
    {
        name: "CPU Scheduling Algorithm",
        description:
            "A seamless visualization tool for CPU scheduling algorithms like FCFS, SJF, SRTN, and Round Robin. Displays real-time calculations and animated Gantt charts.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "D3.js",
                color: "green-text-gradient",
            },
            {
                name: "Operating Systems",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "blue-text-gradient",
            },
        ],
        image: "/CPU Scheduling Algorithms.png",
        source_code_link: "https://github.com/Fenil412/CPU-Scheduling-Algorithm",
        live_demo_link: "https://cpu-scheduling-algorithm-bay.vercel.app/",
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
        image: "/email system.jpg",
        source_code_link: "https://github.com/Fenil412/Email_System",
        live_demo_link: "",
    },
    {
        name: "Plant Diseases Detection",
        description:
            "Deep Learning model using Convolutional Neural Networks (CNN) to detect and classify plant diseases from leaf images. Helps in early diagnosis and crop protection.",
        tags: [
            {
                name: "Deep Learning",
                color: "blue-text-gradient",
            },
            {
                name: "TensorFlow",
                color: "green-text-gradient",
            },
            {
                name: "CNN",
                color: "pink-text-gradient",
            },
            {
                name: "Computer Vision",
                color: "orange-text-gradient",
            },
        ],
        image: "/Plant Diseases Detection.png",
        source_code_link: "",
        live_demo_link: "https://www.kaggle.com/code/fenilchodvadiya/plant-diseases-detection-using-deep-learning",
    },
];

export { services, profiles, projects };