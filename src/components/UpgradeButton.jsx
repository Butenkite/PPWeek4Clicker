export default function UpgradeButton({ cost, onClick}) {
    return (
        <button id="multiplierButton" className="playButton" onClick={onClick}>
            <p>Cost upgrade: {cost}</p>
        </button>
    )
}