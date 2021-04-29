import React from 'react'

function FilterItem({ title, id, checked, onChange }) {
    return (
        <li key={id}>
            <input
                type='checkbox'
                className='checkbox'
                checked={checked}
                onChange={()=>onChange(id)}
            />
            {title}
        </li>
    )
}
export default FilterItem
