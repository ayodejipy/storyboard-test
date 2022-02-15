import { NextPage } from "next";
// hook
import { useModal } from "../../Hooks/useModal";
import TableData from "../../utils/Data";

// component
import BaseButton from "../Base/Button";
import BaseCheckbox from "../Base/Checkbox";
import DeleteSiteModal from "../Site/Delete";
import EditSiteModal from "../Site/Edit";
import Modal from "../Modal/Modal";


type TableDataType = {
    id: number | null | undefined;
    siteName: String;
    admin: String;
    createdAt: String;
}

const Table: NextPage = () => {
    const [isVisible, toggleModal] = useModal();
    const [isVisible1, toggleEditModal] = useModal();

    return (
        <>
            <Modal
                isVisible={isVisible}
                toggleModal={toggleModal}
                styles="w-1/3 h-56 rounded-md"
            >
                <DeleteSiteModal />
            </Modal>

            <Modal
                isVisible={isVisible1}
                toggleModal={toggleEditModal}
                styles="w-[400px] h-[470px] rounded"
                enableCancel
            >
                <EditSiteModal />
            </Modal>


            <div className="bg-white p-8">
                <div className="border-2 border-zinc-100">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2">
                                    <BaseCheckbox />
                                </th>
                                <th className="p-2 text-left font-semibold text-slate-500">Site Name</th>
                                <th className="p-2 text-left font-semibold text-slate-500">Admin</th>
                                <th className="p-2 text-left font-semibold text-slate-500">Creation Date &amp; Time</th>
                                <th className="p-2 text-left font-semibold text-slate-500">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {TableData.map((item: TableDataType) => {
                                return (
                                    <tr className="border-b-2 border-gray-100" key={item.id}>
                                        <td className="p-3 flex items-center justify-center">
                                            <BaseCheckbox />
                                        </td>
                                        <td className="p-3 text-slate-400">Gallery by Ade</td>
                                        <td className="p-3 text-slate-400">Adelowo Isaac</td>
                                        <td className="p-3 text-slate-400">04/04/2021 4:30pm</td>
                                        <td className="p-3 text-slate-400">
                                            <div className="flex items-center space-x-6">
                                                <BaseButton
                                                    label="Delete"
                                                    showIcon={false}
                                                    style="px-4 py-1 border-2 border-gray-400 text-gray-400 text-sm"
                                                    callback={toggleModal}
                                                />
                                                <BaseButton
                                                    label="Edit"
                                                    showIcon={false}
                                                    style="px-4 py-1 border-2 border-yellow-brand text-sm text-yellow-brand"
                                                    callback={toggleEditModal}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-between my-6 px-3">
                        <button className="flex items-center space-x-3">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </span>
                            <span className="text-slate-500">Previous</span>
                        </button>

                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400">Items per page:</span>
                            <span className="text-sm text-yellow-brand">10 Items</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>

                        <button className="flex items-center space-x-3">
                            <span className="text-slate-500">Next</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;