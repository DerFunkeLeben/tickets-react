import './index.scss'
import logo from './img/Logo.png'
import Filter from './Filter.js'
import TicketsContainer from './TicketsContainer.js'
import React from 'react'

function App() {
    const [filter, setFilter] = React.useState([0, 1, 2, 3])
    const updateFilter = (data) => {
        const result = data
            .slice(1)
            .flatMap((value, i) => (value.checked ? i : []))
        setFilter(result)
        return result
    }

    return (
        <div className='container'>
            <header className='logo'>
                <img src={logo} alt='logo' />
            </header>
            <main className='main'>
                <Filter updateFilter={updateFilter} />
                <TicketsContainer filter={filter} />
            </main>
        </div>
    )
}

export default App
