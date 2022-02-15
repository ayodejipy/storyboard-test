import { NextPage } from "next";
import { useModal } from "../../Hooks/useModal";
// component
import BaseButton from "../Base/Button";

const DeleteSiteModal: NextPage = () => {
    const [, toggleModal] = useModal();

    return (
        <div className="p-7">
            <div className="flex space-x-6 h-32">
                <span className="w-16 h-12 flex items-center justify-center bg-red-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </span>

                <div>
                    <h5 className="text-xl font-semibold text-gray-800">Delete Site</h5>
                    <p className="text-sm text-gray-500">Are you sure you want to delete this site? Once deleted, you cannot undo this action.</p>
                </div>
            </div>
            <div className="flex items-center justify-end space-x-6">
                <BaseButton
                    label="Cancel"
                    showIcon={false}
                    style="bg-gray-200 text-sm px-4 text-gray-600"
                    callback={toggleModal}
                />
                <BaseButton
                    label="Delete User"
                    showIcon={false}
                    style="bg-red-600 text-sm px-4 text-white"
                />
            </div>
        </div>
    )
}

export default DeleteSiteModal;