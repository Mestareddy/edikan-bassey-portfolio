import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

// import { PortableText } from "@portabletext/react";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  console.log("experience", experience);

  const components = {
    types: {
      block: {
        // Ex. 1: customizing common block types
        h1: ({ children }) => <h1 className='text-2xl py-5'>{children}</h1>,
        h2: ({ children }) => <h2 className='text-2xl py-5'>{children}</h2>,
        h3: ({ children }) => <h3 className='text-2xl py-5'>{children}</h3>,
        h4: ({ children }) => <h4 className='text-2xl py-5'>{children}</h4>,
        h5: ({ children }) => <h5 className='text-2xl py-5'>{children}</h5>,
        span: ({ children }) => (
          <span className='text-2xl py-5'>{children}</span>
        ),
        p: ({ children }) => (
          <p className='text-2xl p-5 text-purple-700'>{children}</p>
        ),
        blockquote: ({ children }) => (
          <blockquote className='border-l-purple-500'>{children}</blockquote>
        ),
      },
      // image: SampleImageComponent,
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className='callToAction'>{value.text}</div>
        ),
    },
  };

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={index}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill?.bgColor }}
              >
                <img src={urlFor(skill?.icon)} alt={skill?.name} />
              </div>
              <p className='p-text'>{skill?.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience?.map((experience, index) => (
            <motion.div className='app__skills-exp-item' key={index}>
              <div className='app__skills-exp-year' style={{ width: "30%" }}>
                <p className='bold-text'>{experience?.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {/* {experience?.works?.map((work, index) => ( */}
                <div key={index} style={{ width: "100%" }}>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-exp-work app__flex'
                    data-tip
                    data-for={experience?.companyName}
                  >
                    <h4 className='bold-text'>{experience?.jobTitle}</h4>
                    <p className='p-text'>{experience?.companyName}</p>
                  </motion.div>
                  <ReactTooltip
                    id={experience.companyName}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    <ul>
                      {experience?.jobDescription?.map((description, index) => (
                        <li key={index}>{description?.children[0]?.text}</li>
                      ))}
                    </ul>
                    {/* <PortableText
                      value={experience?.jobDescription}
                      components={components}
                    /> */}
                  </ReactTooltip>
                </div>
                {/* ))} */}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
