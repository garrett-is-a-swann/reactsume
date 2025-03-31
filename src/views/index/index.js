import React, { Component, Fragment } from 'react';

import './index.scss'
import content from 'content';

import JoinAround from 'utils/join-around';

import ResumeHeader from 'views/index/resume-header';
import BuzzwordList from 'components/buzzword-list';

function getDate(date) {
    return date?.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

function Index({ ...rest }) {
    return (
        <article>
            <ResumeHeader info={content.personal_information} />
            <main>
                <section className='work'>
                    <h2>Work History</h2>
                    <div className='section-items'>
                        {content.work_history.map(work => (
                            <div key={work.name} className='section-item'>
                                <JoinAround list={[
                                    <b className='name'>{work.name}</b>,
                                    <i className='job-title'>{work.title}</i>,
                                    <span className='location'>{work.location}</span>,
                                    <span className='dates'>
                                        {getDate(work.dates.from)} - {getDate(work.dates.to) ?? 'Current'}
                                    </span>,
                                ]} />
                                <div className='details'>
                                    {work.responsibilities?.map(responsibility =>
                                        <p key={responsibility}>-
                                            <span>
                                                {responsibility}
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <BuzzwordList buzzwords={work.buzzwords} />
                            </div>
                        ))}
                    </div>
                </section>
                <section className='projects-and-open-source'>
                    <h2>Projects and Open Source</h2>
                    <div className='section-items'>
                        {content.projects.map(project => (
                            <div key={project.name} className='section-item'>
                                <div className=''>
                                    <JoinAround list={[
                                        [
                                            <i key='operative' className='operative'>{project.operative}</i>,
                                            <b key='name' className='name'>{project.name}</b>
                                        ],
                                        project.link?.startsWith('https')
                                            ? <a key='link' href={project.link}>{project.link}</a>
                                            : <i key='link'>{project.link}</i>
                                        ,
                                        <span key='date' className='date'>{project.dates.from}</span>,
                                    ]} />
                                </div>
                                <div className='details'>
                                    {project.description}
                                </div>
                                {project.what &&
                                    <div className='whats'>
                                        {project.what.map(what => (
                                            <p key={what.content}>-
                                                <span>{what.content}</span>
                                                {what.link && <a href={what.link}>{what.brief || what.link}</a>}
                                            </p>
                                        ))}
                                    </div>
                                }
                                <BuzzwordList buzzwords={project.buzzwords} />
                            </div>
                        ))}
                    </div>
                </section>
                <section className='education'>
                    <h2>Education</h2>
                    <div className='section-items'>
                        {content.education.map(education => (
                            <JoinAround list={[
                                <b className='name'>{education.name}</b>,
                                <i className='job-title'>{education.title}</i>,
                                <span className='location'>{education.location}</span>,
                                <span className='dates'>
                                    {getDate(education.dates.from)} - {getDate(education.dates.to) ?? 'Current'}
                                </span>,
                            ]} />
                        ))}
                    </div>
                </section>
                <section className='skills'>
                    <h2>Skills</h2>
                    <div className='section-items'>
                        {Object.keys(content.skills).map(category => (
                            <div key={category} className=''>
                                <span>{category}</span>
                                <BuzzwordList buzzwords={content.skills[category]} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </article>
    );
}

export default Index;
