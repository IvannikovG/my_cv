import React from 'react'
import PropTypes from 'prop-types'

function Tool({tool}) {
    return (

            <tr>
                <td class="td-tool">{tool.name}</td>
                <td class="td-tool">{tool.example}</td>
            </tr>
    )
}

Tool.propTypes = {
    tool: PropTypes.object.isRequired,
}

export default Tool