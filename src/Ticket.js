import React from 'react'
import TicketDetails from './TicketDetails.js'

function TicketsContainer({ ticket, id }) {
    const cost = ticket?.price
    const logoAv = `//pics.avs.io/99/36/${ticket?.carrier}.png`
    const to = ticket?.segments[0]
    const from = ticket?.segments[1]

    return (
        <li className='ticket' key={id}>
            <div className='ticket-header'>
                <span className='ticket-cost'>{cost} P</span>
                <img src={logoAv} alt='logo'></img>
            </div>
            <TicketDetails details={to} />
            <TicketDetails details={from} />
        </li>
    )
}
export default TicketsContainer
