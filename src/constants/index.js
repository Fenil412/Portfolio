// import dsa from 'src/assets/dsa.png'
import {
    ml,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    node_farm,
    vue_jobs,

    threejs,
    usePopcorn,
    coffeeproject,
    worldwise,
    codeforces,
    codechef,
    dsa,
    pizza_menu,
    profile_card,
    steps,
    flashcards,
    date_counter,
    travel_list,
    accordion,
    tip_calculator,
    eat_n_split,
    react_counter_todo_app,
    text_expander,
    how_react_works,
    react_quiz,
    bank_account,
    currency_converter

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
        title: "Machine Learning Enthusiast",
        icon: ml,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

// const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#383E56",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#E6DEDD",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#383E56",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#E6DEDD",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

const profiles = [
    {
        testimonial:
            "🌟 Solved ~180 problems | 1503 Rating | Regular contest participant. I use LeetCode to sharpen my DSA daily.",
        name: "LeetCode",
        profile_link: "https://leetcode.com/u/samarth3282/",

        image: "https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png",
    },
    {
        testimonial:
            "⚔️ Rated 'newbie' | Max Rating: 891 | Active in Division 2/3 contests. I enjoy tackling algorithmic challenges here.",
        name: "Codeforces",
        profile_link: "https://codeforces.com/profile/Mercy_dynamo",

        image: codeforces,
    },
    {
        testimonial:
            "🍳 1★ Coder | Rating: 1154 | Regularly Participated in weekly contests | Focused on time-efficient problem solving.",
        name: "CodeChef",
        profile_link: "https://www.codechef.com/users/samarth3282",

        image: codechef,
    },
];

const projects = [
    {
        name: "Vue Jobs",
        description:
            "A platform that allows to Create, Read, Update, Delete job listings and manage them. With json-server, the changes remain temporary.",
        tags: [
            {
                name: "vue.js",
                color: "green-text-gradient",
            },
            {
                name: "json-server",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: vue_jobs,
        source_code_link: "https://github.com/samarth3282/vue-jobs",
        live_demo_link: "https://vuejobsforu.vercel.app/"
    },
    {
        name: "UsePopcorn",
        description:
            "Web application that helps users to keep track of their favorite movies and shows. Uses local storage for fast Learning and external APIs for data fetching.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "omdb api",
                color: "green-text-gradient", // or "orange-text-gradient" if you want to distinguish API use
            },
            {
                name: "localStorage",
                color: "yellow-text-gradient", // signifies browser-level storage
            },
        ],
        image: usePopcorn,
        source_code_link: "https://github.com/samarthunflagged/usePopcorn",
        live_demo_link: "https://use-popcorn-web.vercel.app/",
    },
    {
        name: "Coffee Project",
        description:
            "A CSS-intensive website I built during my early days of learning web development. Despite its simplicity, it still holds a special place for me as a proud milestone in my journey.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient", // Represents HTML well (standard orange tone)
            },
            {
                name: "css",
                color: "blue-text-gradient", // Blue is commonly associated with CSS
            },
            {
                name: "javascript",
                color: "yellow-text-gradient", // Matches JS brand (yellow/amber)
            },
            {
                name: "aos",
                color: "purple-text-gradient", // Represents animation/motion well
            },
        ],


        image: coffeeproject,
        source_code_link: "https://github.com/samarthunflagged/coffee-project",
        live_demo_link: "https://coffee-for-u.vercel.app/",
    },
    {
        name: "WorldWise (under dev)",
        description:
            "A travel journal web app built with React and Leaflet that lets you log your journeys and view them on an interactive world map. This was my first real-world project created entirely without a backend.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient", // React is typically represented with blue (React logo color)
            },
            {
                name: "leaflet",
                color: "green-text-gradient", // Leaflet uses green in its branding and is map/Nature related
            },
            {
                name: "css",
                color: "pink-text-gradient", // Often styled as light blue or pink in themed UIs
            },
        ],


        image: worldwise,
        source_code_link: "https://github.com/samarthunflagged/worldwise",
        live_demo_link: "",
    },
];
const learning_react = [
    {
        name: "Pizza Menu",
        description: "Started with core React concepts like JSX, props, and reusable components. Built a static pizza menu app that helped me understand component-based architecture.",
        image: pizza_menu,
        date: "12/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "jsx", color: "purple-text-gradient" },
            { name: "css", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Profile Card",
        description: "A challenge after Pizza Menu to deepen my understanding of component composition and styling. Practiced passing props to multiple child components.",
        image: profile_card,
        date: "13/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "props", color: "green-text-gradient" },
            { name: "css", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Steps",
        description: "Learned to manage interactive UI using `useState`. Built a step tracker which strengthened my understanding of how state drives rendering.",
        image: steps,
        date: "14/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "useState", color: "green-text-gradient" },
            { name: "logic", color: "orange-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Flashcards",
        description: "Challenge after Steps. Reinforced state management and conditional rendering by building a toggle-based flashcard app.",
        image: flashcards,
        date: "15/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "conditional rendering", color: "purple-text-gradient" },
            { name: "state toggling", color: "green-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Date Counter",
        description: "Another challenge after Steps. Learned to apply controlled state updates and arithmetic logic inside components.",
        image: date_counter,
        date: "16/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "useState", color: "green-text-gradient" },
            { name: "date logic", color: "orange-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Travel List",
        description: "Advanced to array state operations. Practiced dynamic list rendering, form inputs, and immutable updates while building a travel packing list.",
        image: travel_list,
        date: "18/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "lists", color: "purple-text-gradient" },
            { name: "forms", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Accordion",
        description: "Challenge after Travel List. Focused on one-at-a-time expansion behavior, conditional rendering, and dynamic state toggling.",
        image: accordion,
        date: "19/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "accordion", color: "green-text-gradient" },
            { name: "toggle logic", color: "orange-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Tip Calculator",
        description: "Reinforced multiple state management, form handling, and input validation. Worked on computing derived values based on user inputs.",
        image: tip_calculator,
        date: "20/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "form handling", color: "green-text-gradient" },
            { name: "validation", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Eat and Split",
        description: "Learned how to lift state up and manage shared data between components. Focused on splitting logic and conditional flows in a real-world scenario.",
        image: eat_n_split,
        date: "21/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "lifting state", color: "green-text-gradient" },
            { name: "shared props", color: "orange-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "React Counter + Todo App",
        description: "Revision project covering useState, list rendering, controlled inputs, and conditional UI updates. A hands-on consolidation of prior concepts.",
        image: react_counter_todo_app,
        date: "22/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "todo", color: "green-text-gradient" },
            { name: "state control", color: "orange-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Text Expander",
        description: "A minor challenge while building usePopcorn. Created a reusable component with internal state logic to show/hide long text content.",
        image: text_expander,
        date: "23/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "state toggle", color: "green-text-gradient" },
            { name: "reusability", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "How React Works",
        description: "Took a theoretical break to understand React's internals: virtual DOM, reconciliation, rendering phases. Prepared me for deeper architectural decisions.",
        image: how_react_works,
        date: "24/12/24",
        tags: [
            { name: "virtual DOM", color: "purple-text-gradient" },
            { name: "rendering", color: "green-text-gradient" },
            { name: "architecture", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Currency Converter",
        description: "Side project during usePopcorn. Introduced to `useEffect` and API data fetching. Learned to manage loading, error states, and data transformation.",
        image: currency_converter,
        date: "25/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "api", color: "green-text-gradient" },
            { name: "useEffect", color: "orange-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "usePopcorn",
        description: "Combined everything: state, effects, conditional rendering, lifting state, custom logic, and API interaction. Built a movie app with a watchlist and ratings.",
        image: usePopcorn,
        date: "26/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "omdb api", color: "green-text-gradient" },
            { name: "localStorage", color: "yellow-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "React Quiz",
        description: "Learned `useReducer` to handle complex state transitions. Built a quiz app with scoring, timers, and answer state. Marked a shift to structured state logic.",
        image: react_quiz,
        date: "27/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "useReducer", color: "purple-text-gradient" },
            { name: "quiz logic", color: "green-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "Bank Account",
        description: "Applied `useReducer` in a more realistic context. Simulated a bank interface with deposits, loans, and logins. Reinforced reducer patterns.",
        image: bank_account,
        date: "28/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "useReducer", color: "purple-text-gradient" },
            { name: "banking logic", color: "green-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    },
    {
        name: "WorldWise",
        description: "Capstone project. Learned routing (React Router), Context API, geolocation, and performance optimization. Created a full travel app with persistent state.",
        image: worldwise,
        date: "29/12/24",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "react-router", color: "purple-text-gradient" },
            { name: "context-api", color: "green-text-gradient" },
            { name: "leaflet", color: "pink-text-gradient" }
        ],
        source_code_link: "#",
        live_demo_link: "#"
    }

];

const learning_node_express = [
    {
        name: "Node Farm",
        description: "A pure Node.js web app that serves dynamic pages using vanilla JavaScript, custom template rendering, and manual routing — all without using Express or any frameworks.",
        image: node_farm,
        date: "18/07/25",
        tags: [
            { name: "node.js", color: "green-text-gradient" },
            { name: "vanilla-js", color: "blue-text-gradient" },
            { name: "http-module", color: "purple-text-gradient" },
            { name: "routing", color: "pink-text-gradient" },
            { name: "templating", color: "orange-text-gradient" }
        ],
        source_code_link: "https://github.com/samarth3282/node-farm",
        live_demo_link: "https://node-farm-lkq4.onrender.com/"
    }
]

export { services, technologies, learning_react, learning_node_express, profiles, projects };