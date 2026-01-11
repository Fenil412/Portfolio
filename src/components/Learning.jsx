import { useState, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { learning_react } from '../constants';
import { learning_node_express } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import { ProjectCard } from './Works';

const ExperienceCard = ({ project, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: "0",
        display: 'flex',
        justifyContent: 'center'
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={project.date || `Date ${index + 1}`}
      iconStyle={{
        background: "#232631",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        color: "#fff",
      }}
      icon={<div>{index + 1}</div>}
    >
      <div className={` w-[360px]`}>
        <ProjectCard
          index={index}
          name={project.name}
          description={project.description}
          image={project.image}
          tags={project.tags}
          source_code_link={project.source_code_link}
          live_demo_link={project.live_demo_link}
          minimal={false}
        />
      </div>
    </VerticalTimelineElement>
  );
};

const Learning = () => {
  const [showAllReact, setShowAllReact] = useState(false);
  const [showAllBackend, setShowAllBackend] = useState(false);

  const sectionRefReact = useRef(null);
  const sectionRefBackend = useRef(null);



  const displayedProjectsReact = showAllReact ? learning_react : learning_react.slice(0, 3);
  const displayedProjectsNodeExpress = showAllBackend ? learning_node_express : learning_node_express.slice(0, 3);


  const handleToggleReact = () => {
    if (showAllReact && sectionRefReact.current) {
      sectionRefReact.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAllReact(prev => !prev);
  };

  const handleToggleBackend = () => {
    if (showAllBackend && sectionRefBackend.current) {
      sectionRefBackend.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAllBackend(prev => !prev);
  };


  return (
    <>
      {/* <motion.div variants={textVariant()}  */}
      <p className={styles.sectionSubText}>What I have learnt so far</p>
      <h2 className={styles.sectionHeadText}>My Learning.</h2>
      {/* </motion.div> */}
      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          This is a timeline of my Web Development learning journey — where each step represents a milestone achieved by building mini-projects and real-world applications. Every project reflects a concept I explored, practiced, and applied to strengthen my development skills.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h6 className="text-white mb-5 font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px]" ref={sectionRefReact}>React.js</h6>
        <VerticalTimeline>
          {displayedProjectsReact.map((project, index) => (
            <ExperienceCard key={index} project={project} index={index} />
          ))}
        </VerticalTimeline>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleToggleReact}
            className="bg-tertiary py-3 px-6 text-white rounded-xl hover:bg-[#3d3753] transition-all"
          >
            {showAllReact ? "Show Less" : "View Entire React.js Journey"}
          </button>

        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <h6 className="text-white mb-5 font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px]" ref={sectionRefBackend}>Node.js + Express.js</h6>
        <VerticalTimeline>
          {displayedProjectsNodeExpress.map((project, index) => (
            <ExperienceCard key={index} project={project} index={index} />
          ))}
        </VerticalTimeline>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleToggleBackend}
            className="bg-tertiary py-3 px-6 text-white rounded-xl hover:bg-[#3d3753] transition-all"
          >
            {showAllBackend ? "Show Less" : "View Entire Backend Journey"}
          </button>

        </div>
      </div>


    </>
  );
};

export default SectionWrapper(Learning, '');
