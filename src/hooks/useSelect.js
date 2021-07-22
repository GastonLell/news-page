import React, {useState} from 'react';

const useSelect = (stateInitial, options) => {

    const [categoria, setCategoria] = useState(stateInitial);

    const SelectNews = () => (
        <select 
            className="form-select mb-3"
            value={categoria} 
            onChange={e => setCategoria(e.target.value)}
        >
            {
                options.map(category => (
                    <option key={category.value} value={category.value}>
                        {category.label}
                    </option>
                ))
            }
        </select>
    )

    return [categoria, SelectNews];
}
 
export default useSelect;