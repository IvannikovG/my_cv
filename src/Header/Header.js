import React from 'react'

const styles = {
    headerElement: {
        marginBottom: '10px',
        display: 'flex',
        background: '#f8e9dc',
        padding: '10px',
        borderRadius: '10px',
        border:"3px solid white",
        boxShadow: " 0 0 20px #777",

    },
}

function Header() {
    return (
        <div style={styles.headerElement}>
            <div class="sitemessage">
                Hey, i am looking for a job!
            </div>
        </div>
    )
}


export default Header