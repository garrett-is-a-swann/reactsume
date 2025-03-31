import React from 'react';

import './resume-header.scss';

function ResumeHeader({ info: { name, phone, email, github },...rest}) {
    return (
        <header>
            <h1>{name}</h1>
            <div>
                {phone} | {email} | <a href={github}>{github}</a>
            </div>
        </header>
    );
}

export default ResumeHeader;
