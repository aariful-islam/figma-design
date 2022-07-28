import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h1 className='about-heading'>ABOUT US</h1>
            <p className='about-sub-heading'>consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget <br /> ex sit amet congue</p>
            <hr />
            <article className='about-details'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue. Nullam a laoreet leo. Duis ultricies pulvinar lacus, dictum aliquam tellus consequat eget. Cras convallis accumsan lacus in ultricies. Aliquam accumsan ut tellus id vulputate. Curabitur suscipit lacus justo, vel auctor leo accumsan ut. Nunc pretium tincidunt justo sit amet iaculis. Vestibulum id interdum nisi, non semper ligula. Maecenas eu nibh non dui viverra gravida id quis velit.
            </article>
            <button className='read-more'>READ MORE</button>
        </div>
    );
};

export default About;