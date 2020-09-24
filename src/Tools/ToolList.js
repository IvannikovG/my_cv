import React from 'react'
import Tool from './Tool'

const styles = {
    tool: {
            fontFamily: '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
            textAlign: 'left',
            borderCollapse: 'separate',
            borderSpacing: '5px',
            background: '#ECE9E0',
            color: '#656665',
            border: '16px solid #ECE9E0',
            borderRadius: '20px',
    }
}


function ToolList() {

    const tools = [
        {name: 'Flask', example: 'Several small websites, e.g. web crawler for animal asylum or weather'},
        {name: 'Django', example: 'Api with entries, containing information about game'},
        {name: 'PostgreSQL', example: 'Set up database for a web app'},
        {name: 'Docker', example: 'Creation and maintenance of container with jupyter notebook for neural network'},
        {name: 'Minio', example: 'Setup elastic search on minio server'},
        {name: 'React', example: 'This CV'},
        {name: '...', example: '                      ...'}
    ]
    return (
        <div>
            <table style={styles.tool}
             class='element'>    
            <tr>
                <th>Tool</th>
                <th>Example</th>
            </tr>
            {tools.map((tool, index) => {
                return <Tool tool={tool} index={index}/>
            })}
            </table>
        </div>
    )
}

export default ToolList