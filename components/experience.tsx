"use client";

import React, { useContext } from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.25);
  const { theme } = useTheme();
  console.log(theme)

  return (
    <section ref={ref} id="experience" className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor='' animate={true}>
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{
                                background: theme === 'light' ? '#fff' : "rgba(255, 255, 255, 0.05)",
                                boxShadow: 'none',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                        contentArrowStyle={{
                            borderRight: theme === 'light' ? '7px solid  rgba(0, 0, 0, 0.5)' : '7px solid rgba(255, 255, 255, 0.5)',
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                            fontSize: '1.5rem',
                        }}
                        visible={true}
                    >
                        <h3 className='font-semibold capitalize'>{item.title}</h3>
                        <p className='font-normal !mt-0'>{item.location}</p>
                        <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
    </section>
  )
}
