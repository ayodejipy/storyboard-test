import { NextPage } from "next";
import { useModal } from "../../Hooks/useModal";
// component
import BaseButton from "../Base/Button";

const AddSiteModal: NextPage = () => {
    const [, toggleModal] = useModal();

    return (
        <div className="w-full p-7 flex flex-col ">
            <h5 className="text-xl font-semibold text-gray-800 mb-8 mt-3">Add New Site</h5>

            <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-slate-600" htmlFor="SiteName">Site Name</label>
                    <input
                        type="text"
                        placeholder="Your site name"
                        className="border-2 border-zinc-300 w-full py-2 px-3 placeholder:text-sm placeholder:text-zinc-300 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-slate-600" htmlFor="SiteName">Description</label>
                    <input
                        type="text"
                        placeholder="Your site description"
                        className="border-2 border-zinc-300 w-full py-2 px-3 placeholder:text-sm placeholder:text-zinc-300 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-slate-600" htmlFor="SiteName">Upload your site logo</label>

                    <div className="relative block w-full py-2 px-3 bg-gray-100 rounded appearance-none border-0">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" className="absolute inset-0  outline-none w-full h-full opacity-0 bg-gray-100" />
                        <div className="flex items-center justify-between space-x-3">
                            <div className="flex space-x-4">
                                <svg className="w-5 h-6" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4398 11.05L11.2498 20.24C10.124 21.3659 8.59699 21.9983 7.0048 21.9983C5.41262 21.9983 3.88565 21.3659 2.7598 20.24C1.63396 19.1142 1.00146 17.5872 1.00146 15.995C1.00146 14.4028 1.63396 12.8759 2.7598 11.75L11.9498 2.56001C12.7004 1.80945 13.7183 1.38779 14.7798 1.38779C15.8413 1.38779 16.8592 1.80945 17.6098 2.56001C18.3604 3.31057 18.782 4.32855 18.782 5.39001C18.782 6.45147 18.3604 7.46945 17.6098 8.22001L8.4098 17.41C8.03452 17.7853 7.52553 17.9961 6.9948 17.9961C6.46407 17.9961 5.95508 17.7853 5.5798 17.41C5.20452 17.0347 4.99369 16.5257 4.99369 15.995C4.99369 15.4643 5.20452 14.9553 5.5798 14.58L14.0698 6.10001" stroke="#F6B319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="text-gray-500 text-sm">Name of Required File</span>
                            </div>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-800 bg-white text-sm text-center font-medium border border-transparent rounded outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-40">Upload</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-16">
                <BaseButton
                    label="Cancel"
                    showIcon={false}
                    style="bg-transparent border-2 border-gray-200 text-sm px-4 text-gray-400"
                    callback={toggleModal}
                />
                <BaseButton
                    label="Add New User"
                    showIcon={false}
                    style="bg-yellow-brand text-sm px-4 text-white"
                />
            </div>
        </div>
    )
}

export default AddSiteModal;