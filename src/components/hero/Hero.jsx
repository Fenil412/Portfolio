import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { ComputersCanvas } from '../canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Main Content Container */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff] shadow-lg shadow-purple-500/50' />
          <div className='w-1 sm:h-48 h-24 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-lg`}>Hi, I'm <span className='text-[#915eff]'>Fenil</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-md`}>Hey there! This is me.
          </p>
        </div>
      </div>

      {/* Computer Canvas - Left Side */}
      <div className="absolute inset-0 w-1/2">
        <ComputersCanvas />
      </div>

      {/* Code Profile - Right Side */}
      <div className="absolute top-20 right-0 w-1/2 h-full flex items-center justify-center p-4 lg:p-8 z-20">
        <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-cyan-400/50 p-4 lg:p-6 max-w-md lg:max-w-lg w-full shadow-2xl shadow-cyan-500/20 max-h-[75vh] overflow-y-auto mt-8">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-400/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-cyan-300 text-xs lg:text-sm ml-4 font-mono">profile.js</span>
          </div>

          {/* Code Content */}
          <div className="font-mono text-xs lg:text-sm leading-relaxed">
            <div className="text-gray-400 mb-2">// My Profile</div>
            <div className="text-pink-300">const <span className="text-blue-300">profile</span> = <span className="text-cyan-300">{`{`}</span></div>
            <div className="ml-2 lg:ml-4 space-y-1">
              <div><span className="text-orange-300">name:</span> <span className="text-green-300">'Fenil Chodvadiya'</span>,</div>
              <div><span className="text-orange-300">title:</span> <span className="text-green-300">'Frontend Developer | Competitive Programmer'</span>,</div>
              <div><span className="text-orange-300">skills:</span> <span className="text-cyan-300">[</span></div>
              <div className="ml-2 lg:ml-4 space-y-1">
                <div><span className="text-green-300">'React'</span>, <span className="text-green-300">'TailwindCSS'</span>, <span className="text-green-300">'JavaScript'</span>, <span className="text-green-300">'C++'</span>,</div>
                <div><span className="text-green-300">'HTML'</span>, <span className="text-green-300">'CSS'</span>, <span className="text-green-300">'DSA'</span>, <span className="text-green-300">'Git'</span>, <span className="text-green-300">'GitHub'</span></div>
              </div>
              <div><span className="text-cyan-300">],</span></div>
              <div><span className="text-orange-300">hardWorker:</span> <span className="text-blue-200">true</span>,</div>
              <div><span className="text-orange-300">quickLearner:</span> <span className="text-blue-200">true</span>,</div>
              <div><span className="text-orange-300">problemSolver:</span> <span className="text-blue-200">true</span>,</div>
              <div><span className="text-orange-300">achievements:</span> <span className="text-cyan-300">{`{`}</span></div>
              <div className="ml-2 lg:ml-4 space-y-1">
                <div><span className="text-orange-300">leetcode:</span> <span className="text-green-300">'Solved 540+ problems | Max Rating 1813'</span>,</div>
                <div><span className="text-orange-300">codeforces:</span> <span className="text-green-300">'Pupil | Solved 800+ problems'</span>,</div>
                <div><span className="text-orange-300">codechef:</span> <span className="text-green-300">'3★ | Global Rank 148 (Beginner Contest)'</span>,</div>
                <div><span className="text-orange-300">contests:</span> <span className="text-green-300">'Global Rank 668 in LeetCode Weekly Contest'</span>,</div>
                <div><span className="text-orange-300">other:</span> <span className="text-green-300">'Solved 180+ problems (gfg & codestudio)'</span>,</div>
              </div>
              <div><span className="text-cyan-300">{`},`}</span></div>
              <div><span className="text-orange-300">hireable:</span> <span className="text-blue-300">function</span><span className="text-cyan-300">() {`{`}</span></div>
              <div className="ml-2 lg:ml-4">
                <span className="text-pink-300">return</span> <span className="text-blue-200">this</span>.<span className="text-orange-300">hardWorker</span> <span className="text-cyan-300">&&</span> <span className="text-blue-200">this</span>.<span className="text-orange-300">problemSolver</span> <span className="text-cyan-300">&&</span> <span className="text-blue-200">this</span>.<span className="text-orange-300">skills</span>.<span className="text-orange-300">length</span> <span className="text-cyan-300">&gt;=</span> <span className="text-purple-300">5</span>;
              </div>
              <div><span className="text-cyan-300">{`}`}</span></div>
            </div>
            <div><span className="text-cyan-300">{`};`}</span></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero