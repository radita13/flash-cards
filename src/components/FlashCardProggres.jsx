import PropTypes from "prop-types";

export const FlashCardProgress = ({ currentIndex, totalCards }) => {
    const progressBar = (currentIndex + 1 ) / totalCards * 100;
    const progressFormatted = progressBar.toFixed(0);

    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progressFormatted}%` }}>
                    <p className="percentage">{progressFormatted}%</p>
                </div>
            </div>

            <div className="progress-text" style={{ margin: "0 8px", flexShrink: "0"}}>{currentIndex + 1} of {totalCards}</div>
        </div>
    )
}

FlashCardProgress.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    totalCards: PropTypes.number.isRequired
}   