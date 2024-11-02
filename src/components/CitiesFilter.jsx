import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSearch } from '../store/actions/citiesActions'

const CitiesFilter = () => {
    const { cities, category, search } = useSelector((state) => state.citiesStore)
    const dispatch = useDispatch()

    let filtroCategory = cities.map((events) => events.country)
    const resultfiltroCategory = filtroCategory.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item)
        }
        return acc
    }, [])
    resultfiltroCategory.unshift('All')

    return (
        <div className="md:flex">
            <div className="p-2">
                <select className='w-full h-[40px] border border-gray-300 rounded-md p-2' value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
                    {resultfiltroCategory.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
            <div className="p-2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    placeholder="Search by City..."
                    className="w-full h-[40px] border border-gray-300 rounded-md p-2"
                />
            </div>
        </div>
    )
}

export default CitiesFilter
