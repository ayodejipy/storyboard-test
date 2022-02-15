import type { NextPage } from 'next';
// components

const SearchField: NextPage = () => {
    return (
        <div className="relative flex items-center bg-gray-100 w-80 px-3 py-1 rounded space-x-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9C9898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9999 21L16.6499 16.65" stroke="#9C9898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <input
                type="text"
                name="search"
                placeholder="Search for a site..."
                className="border-0 focus:outline-none focus:border-0 focus:ring-none bg-transparent p-1 placeholder:text-slate-500"
            />
        </div>
    )
}

export default SearchField;