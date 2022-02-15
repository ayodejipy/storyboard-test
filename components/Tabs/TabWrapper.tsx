import type { NextPage } from 'next';
// components
import Table from '../Table/Table';


const TabWrapper: NextPage = () => {
    return (
        <div>
            <div className="w-full flex items-center space-x-2 p-2 border-b border-slate-200 relative">
                <button type="button" className="text-sm font-semibold text-yellow-brand after:absolute after:bottom-0 after:left-0 after:w-16 after:h-px after:bg-yellow-300">My Sites</button>
                <button type="button" className="text-sm font-600">My Users</button>
            </div>

            <div className="mt-4">
                <Table />
            </div>
        </div>
    )
}

export default TabWrapper;