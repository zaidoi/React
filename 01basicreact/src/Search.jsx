import React, { useState,useMemo, useCallback } from 'react'

function Search() {

    const [query,setQuery] = useState('')
    const [selectedItems,setSelectedItems] = useState([])

    const items = [
        "Apple",
        "Mango",
        "Pineapple"
    ]

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          );
    },[query])

    const toggleItem = useCallback(()=>{
        return setSelectedItems((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev,item])
    },[selectedItems])
  return (
    <div>
        <div>
            <label>
                Name of the fruit
                <input
                type='text'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                />
            </label>
        </div>

        <div>
            {filteredItems.map((item) => (
                <li key={item}>
                    <input
                    type='checkbox'
                  onChange={() => toggleItem(item)}
                    />
                    {item}
                </li>
            ))}
        </div>
    </div>
  )
}

export default Search