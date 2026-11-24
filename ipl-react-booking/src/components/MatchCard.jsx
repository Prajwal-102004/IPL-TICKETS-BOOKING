
function MatchCard(props) {
    return (
        <div className="match-card">
            <h3>{props.team1} vs {props.team2}</h3>

            <p><strong>Date:</strong> {props.date}</p>

            <p><strong>Time:</strong> {props.time}</p>

            <p><strong>Stadium:</strong> {props.stadium}</p>

            <button>Book Tickets</button>
        </div>
    );
}

export default MatchCard;
