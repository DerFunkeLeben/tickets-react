import React from 'react'
import FilterItem from './FilterItem.js'

class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                'All',
                'No transfers',
                '1 transfer',
                '2 transfers',
                '3 transfers',
            ].map((value) => {
                return {
                    title: value,
                    checked: true,
                }
            }),
        }
    }

    handleChange = (index) => {
        const data = [...this.state.data]

        data[index].checked = !data[index].checked

        if (!index)
            data.forEach((state) => (state.checked = data[index].checked))
        else
            data[0].checked = data.slice(1).some((state) => !state.checked)
                ? false
                : true

        this.setState(data)
        this.handleFilter()
    }

    handleFilter = () => this.props.updateFilter(this.state.data)

    render() {
        return (
            <section className='filter'>
                <h2>transfers</h2>
                <ul className='filter__list'>
                    {this.state.data.map((state, index) => {
                        return (
                            <FilterItem
                                title={state.title}
                                key={index}
                                checked={state.checked}
                                onChange={() => this.handleChange(index)}
                            />
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default Filter
