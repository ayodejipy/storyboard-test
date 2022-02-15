import { NextPage } from "next";

const ProfileMenu: NextPage = () => {
    return (
        <div className="relative flex items-center space-x-2 cursor-pointer">
            <span className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-xs">AI</span>
            <span className="text-sm text-gray-700">Adelowo Isaac</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </span>
        </div>
    )
}

export default ProfileMenu;