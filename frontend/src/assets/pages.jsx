// Pages are different layouts that the user can navigate to, like the profile page, owned games page, and compare games page. 
// Each page will use components to display the data fetched from the backend.

// Flow of data is as follows:
// component (.jsx)  →  pages.jsx  →  App.jsx  →  index.html (#root)

// 1. Import necessary libraries and modules
import {useState, useEffect} from 'react';
import '../App.css';

// 2. Define the HomePage component that renders the homepage of the website. This is where users can enter their Steam IDs and navigate to different pages.
// In this case, we will just have a simple homepage with the title and a glassmorphism container for the content. 



function HomePage() {
    // Store the Steam IDs entered by the user in state variables.
    // Variables are useStates because they will change based on user input    
    // and we want the component to re-render when they change. 
    const [steamId1, setSteamId1] = useState('');
    const [steamId2, setSteamId2] = useState('');
    const [commonGames, setCommonGames] = useState([]);

    function HandleCompare() {
        fetch(`/api/compareGames/${steamId1}/${steamId2}`)
            .then(response => response.json())
            .then(data => setCommonGames(data.common_games || [])) // If data.common_games is undefined, set commonGames to an empty array to avoid errors when trying to map over it in the render.
            .catch(error => console.error('Error:', error));
        }

    return (
        <div>
            <h1>SteamGameComparer</h1>

            <title>Compare your Steam games with friends!</title>
            <div className="subtitle">
                <p>Enter your Steam ID and your friend's Steam ID to see which games you have in common and how much you've played them!</p>
                <p style={{color: 'red'}}>Note: Profile must be public! </p>
            </div>

            <div>
                {/* Inputs + Buttons */}
                <input
                    type="text"
                    placeholder="Enter Steam ID"
                    value={steamId1}
                    onChange={(e) => setSteamId1(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Steam ID"
                    value={steamId2}
                    onChange={(e) => setSteamId2(e.target.value)}
                />
                {/* Button to compare Steam IDs */}
                <button onClick={HandleCompare}>Compare</button> 
            </div>

            <div>  
                {/* Get results from backend and display them here */}
                <h2>Common Games:</h2>
                <div className="common-games-container">
                    {commonGames.map((game, index) => (
                        <div key={index} className="game-card">
                            <img src={game.icon} alt={`${game.name} icon`} />
                            <h3>{game.name}</h3>
                            <p>User 1 Playtime: {game.playtime_user1} minutes</p>
                            <p>User 2 Playtime: {game.playtime_user2} minutes</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;


// Notes:

// useState lets us store and update values that change over time, such as user input or data fetched from the backend.
// useEffect lets us perform side effects in our components, such as fetching data from the backend 
// when the component mounts or when certain values change.

