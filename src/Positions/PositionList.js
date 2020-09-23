import React from 'react'
import Position from './Position'

const styles = {
    position: {
            fontFamily: '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
            textAlign: 'left',
            borderCollapse: 'separate',
            borderSpacing: '5px',
            background: '#ECE9E0',
            color: '#656665',
            border: '16px solid #ECE9E0',
            borderRadius: '20px',

    },
    positionsTable: {
    }
}


function PositionList() {

    const positions = [
        {id: 0,
         position: 'Working student, Chair of Automation and Energy Systems, Saarland University',
         technologies: 'Node.js, Express.js, Docker',
         activity: 'Building endpoints for REST Api',
         duration: 'March 2020 - current time'},
        {id: 1,
         position: 'Working student, ki-elements',
         technologies: 'SwiftUI, Python, Flask',
         activity: 'UI and unit test automatisation, Software development',
         duration: 'November 2019 - October 2020'},
    ]
    return (
        <div style={styles.positionsTable}>
            <table style={styles.position}
            class='element'>    
            <tr>
                <th>Position</th>
                <th>Tools</th>
                <th>Activity</th>
                <th>Duration</th>
            </tr>
            {positions.map((position, index) => {
                return <Position position={position} index={index}/>
            })}
            </table>
        </div>
    )
}

export default PositionList