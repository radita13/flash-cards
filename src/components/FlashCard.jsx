import PropTypes from 'prop-types';

export const Flashcard = ({ question, answer, onFlip, backFlip }) => {
    return (
        <div className='flashcard' onClick={backFlip}>
            {onFlip ? (
                <div className='answer'>{answer}</div>
            ) : (
                <div className='question'>{question}</div>
            )}
        </div>
    )
}

Flashcard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onFlip: PropTypes.bool.isRequired,
    backFlip: PropTypes.func,
}