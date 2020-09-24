import React from 'react'
import Slide from './Slide'


const styles = {
    description_container: {
        margin: '50px auto 0 auto',
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px',
        display: 'flex',
        padding: '10px',
        border: '16px solid #ECE9E0',
        borderRadius: '20px',
        boxShadow: "0 0 20px #777",
        justifyContent: 'space-around',
    },
    leftDescription: {
        marginLeft: '10px',
        marginRight: '10px',
    },
    rightDescription: {
        marginRight: '10px',
        float: 'right'
    },    
    image: {
        maxWidth:'100%',
        objectFit: 'scaleDown',
        borderRadius: '50%',
        width: '220px',
        height: '220px',
        boxShadow: " 0 0 20px #777",
        border: '5px solid #ECE9E0',
    },
    descriptionTable: {
        height: '200px',
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
        textAlign: 'left',
        borderCollapse: 'separate',
        borderSpacing: '5px',
        background: '#f0ffff',
        color: '#656665',
        border: '16px solid #c2f4f4',
        borderRadius: '20px',
        boxShadow: " 0 0 20px #777",
    },
    tableWrapper: {
        marginLeft: '10px',
        marginRight: '10px',
    }
}


function Description() {

    return (
        <div style={styles.description_container}>
            <div style={styles.leftDescription}>
                <div style={styles.tableWrapper}>
                    <table style={styles.descriptionTable}
                    class='popping'>
                        <tr>
                            <td class="td-description">Name</td> <td class="td-description">Georgii</td>
                        </tr>
                        <tr>
                            <td class="td-description">Age</td> <td class="td-description">24</td>
                        </tr>
                        <tr>
                            <td class="td-description">Education</td>
                            <td class="td-description">Saarland University MSc Visual Computing, ongoing</td>
                        </tr>
                        <tr>
                            <td class="td-description">What i am looging for</td>
                            <td class="td-description">Become part of Python or Clojure developers team</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div style={styles.rightDescription}>
            <img style={styles.image}
             class='popping'
             src={require('../images/my_photo.jpg')}></img>
            </div>
        </div>
    )
}

export default Description