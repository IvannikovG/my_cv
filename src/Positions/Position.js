import React from 'react'
import PropTypes from 'prop-types'

function Position({position}) {
    return (
            <tr>
                <td class="td-position">{position.position}</td>
                <td class="td-position">{position.technologies}</td>
                <td class="td-position">{position.activity}</td>
                <td class="td-position">{position.duration}</td>
            </tr>
    )
}

Position.propTypes = {
    position: PropTypes.object.isRequired,
}

export default Position