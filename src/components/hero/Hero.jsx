import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto z-10`}>
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center z-0" />
      <div
        className={`absolute inset-0 top-[120px] max-w-[1600px] mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start justify-between gap-20 z-10`}
      >
        {/* Left Side - Intro & 3D Model */}
        <div className="flex flex-col w-full lg:w-[60%] h-full z-10">
          <div className="flex flex-row items-start gap-5 relative z-50 pointer-events-none">
            {/* Pointer events none on wrapper so clicks pass through, but text is selectable if needed? 
                Actually, usually text just needs to be visible. z-50 makes it visible.
            */}
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white !text-[30px] sm:!text-[50px] lg:!text-[80px] lg:!leading-[90px]`}>
                Hi, I'm <span className='text-[#915EFF]'>Fenil Chodvadiya</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 !text-[14px] sm:!text-[20px] lg:!text-[30px]`}>
                I develop innovative web applications <br className='sm:block hidden' />
                and solve complex problems through code
              </p>
            </div>
          </div>

          {/* 3D Computer Model */}
          <div className="w-full lg:w-[160%] h-[600px] sm:h-[800px] lg:h-[1200px] relative mt-20 lg:mt-10 ml-[-30px] lg:-ml-[30%] z-[60]">
            <ComputersCanvas />
          </div>
        </div>

        {/* Right Side - Code Window */}
        <div className="hidden lg:flex w-full lg:w-[40%] justify-center items-start mt-10 perspective-1000 relative z-50">
          <div className="w-full max-w-2xl bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 group">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 text-xs text-gray-400 font-mono">profile.js</div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-x-auto h-[650px] overflow-y-hidden custom-scrollbar">
              <div className="space-y-1">
                <div className="opacity-50 text-gray-400">// My Profile</div>
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">profile</span>{" "}
                  <span className="text-gray-300">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">name</span>:{" "}
                  <span className="text-green-400">'Fenil Chodvadiya'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">title</span>:{" "}
                  <span className="text-green-400">'MERN Stack Developer | AI-ML Engineer'</span>,
                </div>

                <div className="pl-4">
                  <span className="text-blue-300">skills</span>: <span className="text-yellow-300">[</span>
                </div>
                <div className="pl-8 text-green-400">
                  'MERN', 'Flask', 'FastAPI', 'SQL'
                </div>
                <div className="pl-8 text-green-400">
                  'Python', 'Java', 'C', 'DSA'
                </div>
                <div className="pl-4 text-yellow-300">],</div>

                <div className="pl-4">
                  <span className="text-blue-300">hardWorker</span>:{" "}
                  <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">quickLearner</span>:{" "}
                  <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">problemSolver</span>:{" "}
                  <span className="text-orange-400">true</span>,
                </div>

                <div className="pl-4">
                  <span className="text-blue-300">achievements</span>:{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-8">
                  <span className="text-blue-300">leetcode</span>:{" "}
                  <span className="text-green-400">'Knight Badge | 785+ Problems | Top 2.5%'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-blue-300">codeforces</span>:{" "}
                  <span className="text-green-400">'Pupil | Solved 250+ Problems'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-blue-300">codechef</span>:{" "}
                  <span className="text-green-400">'3★ | Max Rating 1600+'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-blue-300">contests</span>:{" "}
                  <span className="text-green-400">'Global Rank 364 in Starters 156'</span>,
                </div>
                <div className="pl-4 text-yellow-300">{"}"}</div>,

                <div className="pl-4">
                  <span className="text-purple-400">hireable</span>:{" "}
                  <span className="text-pink-400">function</span>() <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-8">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-cyan-300">this</span>.hardWorker{" "}
                  <span className="text-pink-400">&&</span>{" "}
                  <span className="text-cyan-300">this</span>.problemSolver{" "}
                  <span className="text-pink-400">&&</span>{" "}
                  <span className="text-cyan-300">this</span>.skills.length{" "}
                  <span className="text-pink-400">{">="}</span>{" "}
                  <span className="text-orange-400">5</span>;
                </div>
                <div className="pl-4 text-yellow-300">{"}"}</div>
                <div className="text-yellow-300">{"}"};</div>
              </div>
            </div>

            {/* Typing Cursor Animation */}
            <div className="absolute bottom-6 right-6 w-2 h-4 bg-blue-400/50 animate-pulse"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
