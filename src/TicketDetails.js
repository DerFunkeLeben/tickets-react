import React from 'react'

function TicketDetails({ details }) {
    const origin = details?.origin
    const destination = details?.destination
    const date = (date) =>
        ('0' + date.getHours()).slice(-2) +
        ':' +
        ('0' + date.getMinutes()).slice(-2)

    const departure = date(new Date(details?.date))
    const duration = details?.duration
    const durationText =
        Math.trunc(duration / 60) + 'H ' + (duration % 60) + 'min'

    const arrival = date(
        new Date(duration * 60 * 1000 + new Date(details?.date).getTime())
    )
    const stopsCount = details?.stops?.length
    const stops = details?.stops?.join()

    return (
        <div className='ticket-details'>
            <div>
                <p className='ticket-details__caption'>
                    {origin} - {destination}
                </p>
                <p className='ticket-details__description'>
                    {departure} - {arrival}
                </p>
            </div>
            <div>
                <p className='ticket-details__caption'>en route</p>
                <p className='ticket-details__description'>{durationText}</p>
            </div>
            <div>
                <p className='ticket-details__caption'>
                    {stopsCount
                        ? stopsCount + ' stop' + (stopsCount === 1 ? '' : 's')
                        : 'direct'}
                </p>
                <p className='ticket-details__description'>{stops}</p>
            </div>
        </div>
    )
}
export default TicketDetails
