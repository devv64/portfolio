"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        delay: 0.175,
    }}
    id='about'
    ref={ref}
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with an undergraduate degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming. I enrolled in a masters at Cornell and continued studying{" "}
        <span className="font-medium">Computer Science</span>.{" "}
        <span className="italic">My love for programming</span> comes from the ability to solve any problem. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express.js and MongoDB
        </span>
        . I am also familiar with Python and Django. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer after I graduate with my masters in May 2025.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        poker, watching basketball, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">real estate</span>. I'm also
        trying to improve at cooking.
      </p>
    </motion.section>
  )
}
