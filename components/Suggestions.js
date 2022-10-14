import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';

function Suggestions() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                id: i,
                avatar: faker.internet.avatar(),
                username: faker.internet.userName(),
                company: faker.company.name()
            }
        ))
        setSuggestions(suggestions);
    }, [])

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>
                    Suggestions for you
                </h3>
                <button className='text-gray-600 font-semibold'>See all</button>
            </div>

            {suggestions.map((profile => (
                <div
                    key={profile.id}
                    className='flex items-center justify-between mt-3'
                >
                    <img
                        className='w-10 h-10  rounded-full p-[2px]'
                        src={profile.avatar}></img>

                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>{profile.username}</h2>
                        <h3 className='text-xs text-gray-400'>Works at {profile.company}</h3>
                    </div>

                    <button className='text-blue-400 text-xs font-bold'>Follow</button>
                </div>

            ))
            )
            }

        </div>
    )
}

export default Suggestions