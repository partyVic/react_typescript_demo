import React from 'react'

interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}

// method 1: const List = (props: IProps) => {}
// method 2: const List = ({people, age}: IProps) => {}

//method 3:
const List: React.FC<IProps> = ({ people }) => {

    // JSX.Element means renderList is an element returns an array
    const renderList = (): JSX.Element[] => {
        // remember to use return
        return people.map((person, index: number) => {

            // remember to use return
            return (
                <li key={index} className='List'>
                    <div className='List-header'>
                        <img className='List-img' src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className='List-note'>{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {/* need to call the function */}
            {renderList()}
        </ul>
    )
}

export default List