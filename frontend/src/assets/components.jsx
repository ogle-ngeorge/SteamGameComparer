// Call API's from backend like this:
// fetch('/api/compareGames/steamid1/steamid2')
//     .then(response => response.json()) 
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// Components are small, reusable UI pieces like a single game card that displays the game icon, name, and playtimes.

// Glasmorphism background

function GlasmorphismBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-50 blur-lg z-0"></div>
    );
}

export { GlasmorphismBackground };