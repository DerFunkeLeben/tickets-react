import React from 'react'
import SortTabs from './SortTabs.js'
import Ticket from './Ticket.js'

function sortByPrice(a, b) {
    return a.price - b.price
}

function sortByTime(a, b) {
    const aDuration = a.segments[0].duration + a.segments[1].duration
    const bDuration = b.segments[0].duration + b.segments[1].duration
    return aDuration - bDuration
}

function TicketsContainer({ filter }) {
    const [tickets, setTickets] = React.useState([])
    const [sortMethod, setSortMethod] = React.useState('price')

    React.useEffect(() => {
        const fetchData = async () => {
            const searchIdResponse = await fetch(
                'https://front-test.beta.aviasales.ru/search'
            )
            const { searchId } = await searchIdResponse.json()
            let url =
                'https://front-test.beta.aviasales.ru/tickets?searchId=' +
                searchId
            let response = await fetch(url)
            let json = await response.json()
            setTickets(json.tickets)
        }
        fetchData()
    }, [])

    const changeSortType = (sortMethod) => setSortMethod(sortMethod)

    const filteredTickets = tickets.filter(
        (value) =>
            filter.includes(value.segments[0].stops.length) &&
            filter.includes(value.segments[1].stops.length)
    )

    const filteredSortedTickets = filteredTickets.sort(
        sortMethod === 'price' ? sortByPrice : sortByTime
    )

    const getRenderingTickets = (tickets) => {
        const content = []
        for (let i = 0; i < 5; i++)
            content.push(<Ticket ticket={tickets[i]} id={i} key={i} />)
        return content
    }

    return (
        <div className='tickets-container'>
            <SortTabs onClick={changeSortType} />
            {filteredSortedTickets?.length ? (
                <ul className='tickets-list'>
                    {getRenderingTickets(filteredSortedTickets)}
                </ul>
            ) : (
                ''
            )}
        </div>
    )
}
export default TicketsContainer
