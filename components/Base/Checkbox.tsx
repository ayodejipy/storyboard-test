import type { NextPage } from 'next';
// components


const BaseCheckbox: NextPage = () => {
    return (
        <label htmlFor="checkbox" className="mb-0">
            <input
                type="checkbox"
                name="checkbox"
                className="h-5 w-5 border border-slate-100 rounded-lg"
            />
        </label>
    )
}

export default BaseCheckbox;