import React from 'react'

function SortTabs({ onClick }) {

    function getSortMethod(target) {
        if (target.classList.contains('tabs__cheapest')) return 'price'
        else return 'time'
    }

    const handleClick = (e) => {
        if (!e.target.classList.contains('active')) {
            const buttons = [...e.currentTarget.children]
            buttons.forEach((button) => button.classList.toggle('active'))
            onClick(getSortMethod(e.target))
        }
    }
    return (
        <div className='tabs' onClick={handleClick}>
            <button type='button' className='tabs-btn tabs__cheapest active'>
                The cheapest
            </button>
            <button type='button' className='tabs-btn tabs__fastest'>
                The fastest
            </button>
        </div>
    )
}
export default SortTabs
