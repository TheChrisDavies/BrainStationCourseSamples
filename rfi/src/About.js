import React from 'react';

class About extends React.Component {
    // My about page, describes the project, what it does, who it is for and what I hope to do with it in the future
    render() {
        return (
            <main className='row col-sm-8 col-sm-offset-2 about'>
                <header className='encounter'>
                    <h1>Roll For Initiative</h1>
                </header>
                <section className='encounter'>
                    <h2>What is it?</h2>
                    <summary className='feature-list'>
                        <p>Roll For Initiative is a web application tool that will allow game masters to easily create
                     and track encounters in their respect RPG systems. Instead of going through their respective
                      RPG resources, such as source books and wikis, they will use RFI to help run their games through
                       one web page. They can generate random encounters, track initiative and turns and
                        spend more time building their world instead of looking through pages and pages of material.</p>
                    </summary>
                </section>
                <section className='encounter'>
                    <h2>Who is it for?</h2>
                    <summary>
                        <p className='feature-list'>Who is it for?
                    Dungeon/Game Masters who understand how to run and play an RPG campaign with
                    access to a computer and rpg assets.
                    </p>
                    </summary>
                </section>
                <section className='encounter'>
                    <h2>Tech Stack</h2>
                    <summary>
                        <ul className='feature-list'>
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MongoDB</li>
                        </ul>
                    </summary>
                </section>
                <section className='encounter'>
                    <h2>Why make it?</h2>
                    <summary>
                        <p className='feature-list'>
                        I wanted a tool to keep track of different aspects of my tabletop rpgs without 
                        having to go through my different role playing game resources. I have resources available to me but 
                        the flow of my games can be interrupted while I try to figure out who goes next and if I want to include a random encounter. 
                        Creating this tool makes it easier for me to run my sessions. 
                        I also wanted to try my hand at full stack development within the MERN stack.
                    </p>
                    </summary>
                </section>
                <section className='encounter'>
                    <h2>Current Features</h2>
                    <summary>
                        <ul className='feature-list'>
                            <li>Random Encounter Generator - Using a prepopulated list and generate encounters at the click of a button</li>
                            <li>Virtual Dice Rolling Tool - Roll virtual dice, just in case you left your dice at home</li>
                            <li>Character Initiative Tracker - Add and edit character order through dragging</li>
                            <li>Turn Tracker - Never forget what turn it is</li>
                        </ul>
                    </summary>
                </section>
                <section className='encounter'>
                    <h2>Planned Features</h2>
                    <summary>
                        <ul className='feature-list'>
                            <li>Live deployment</li>
                            <li>Encounter Dashboard - Create, edit and delete encounters to make a truly custom campaign</li>
                            <li>Character Initiative Tracker - Add and edit character order through dragging</li>
                            <li>3D Dice Rolling - Roll 3d virtual dice right in the dashboard</li>
                            <li>User Profiles - Be able to create a profile and keep track of multiple campaigns</li>
                        </ul>
                    </summary>
                </section>
            </main>
        )
    }
}

export default About;