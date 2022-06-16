import React, { useState } from 'react'
import { IState as Props } from '../App'

// can be imported from App.tsx
// interface Props {
//     people: {
//         name: string
//         age: number
//         url: string
//         note?: string
//     }[]
// }


// ***** to findout setPeople type, simple goto App.tsx and hover on setPeople variable then copy&paste
// interface IProps {
//     people: Props['people']
//     setPeople: React.Dispatch<React.SetStateAction<{
//         name: string;
//         age: number;
//         url: string;
//         note?: string | undefined;
//     }[]>>
// }

// ***** better way to rewrite above
interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}


const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: ''

    })


    // remember to use :void
    // cause handleChange NOT using return keyword
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value // ******* important e.target.value always returns String!
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ])

        setInput({
            name: '',
            age: '',
            note: '',
            img: ''
        })
    }

    return (
        <div className='AddToList'>
            <input
                type="text"
                placeholder='Name'
                className='AddToList-input'
                value={input.name}
                name='name'
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder='Age'
                className='AddToList-input'
                value={input.age}
                name='age'
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder='Image URL'
                className='AddToList-input'
                value={input.img}
                name='img'
                onChange={handleChange}
            />
            <textarea
                placeholder='Note'
                className='AddToList-input'
                value={input.note}
                name='note'
                onChange={handleChange}
            />

            <button
                className='AddToList-btn'
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList