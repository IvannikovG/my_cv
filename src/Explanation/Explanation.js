import React from 'react'
import PropTypes from 'prop-types'


const styles = {
    explanation: {
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
        color: '#656665',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '10px',
        display: 'flex',
        background: '#f8e9dc',
        padding: '10px',
        borderRadius: '15px',
        border:"3px solid white",
        justifyContent: 'center',
        transitionDuration: '500ms',
    },

}

function Explanation({string}) {
    return (
        <div style={styles.explanation}
         class='element'>
            {string}
        </div>
    )
}

Explanation.propTypes = {
    position: PropTypes.string.isRequired,
}

export default Explanation