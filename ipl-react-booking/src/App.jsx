
import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCard from './components/MatchCard';

import './App.css';

function App() {

    const [selectedTeam, setSelectedTeam] = useState('All');

    const matches = [
        {
            id: 1,
            team1: 'RCB',
            team2: 'CSK',
            date: 'May 10, 2026',
            time: '7:30 PM',
            stadium: 'Bengaluru'
        },
        {
            id: 2,
            team1: 'MI',
            team2: 'KKR',
            date: 'May 12, 2026',
            time: '7:30 PM',
            stadium: 'Mumbai'
        },
        {
            id: 3,
            team1: 'SRH',
            team2: 'DC',
            date: 'May 14, 2026',
            time: '7:30 PM',
            stadium: 'Hyderabad'
        },
        {
            id: 4,
            team1: 'RR',
            team2: 'PBKS',
            date: 'May 16, 2026',
            time: '3:30 PM',
            stadium: 'Jaipur'
        }
    ];

    const filteredMatches = matches.filter((match) =>
        selectedTeam === 'All' ||
        match.team1 === selectedTeam ||
        match.team2 === selectedTeam
    );

    return (
        <>
            <Navbar />

            <Hero />

            <section id="matches">
                <h2>IPL Match Schedule</h2>

                <label>Filter by Team: </label>

                <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                >
                    <option value="All">All Teams</option>
                    <option value="RCB">RCB</option>
                    <option value="CSK">CSK</option>
                    <option value="MI">MI</option>
                    <option value="KKR">KKR</option>
                    <option value="SRH">SRH</option>
                    <option value="DC">DC</option>
                    <option value="RR">RR</option>
                    <option value="PBKS">PBKS</option>
                </select>

                <div className="match-grid">

                    {filteredMatches.map((match) => (
                        <MatchCard
                            key={match.id}
                            team1={match.team1}
                            team2={match.team2}
                            date={match.date}
                            time={match.time}
                            stadium={match.stadium}
                        />
                    ))}

                </div>
            </section>
        </>
    );
}

export default App;
