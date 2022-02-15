import type { NextPage } from 'next';
// components

type ButtonType = {
    label: String;
    style: String;
    showIcon: Boolean;
    callback?: () => void | Boolean;
};

const BaseButton: NextPage<ButtonType> = ({ label, style, showIcon, callback }: ButtonType) => {
    return (
        <button
            type="button"
            className={`flex items-center space-x-3 justify-between py-2 rounded ${style}`}
            onClick={callback}
        >

            {showIcon ? <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            </span> : null}
            <span>{label}</span>
        </button>
    )
}

export default BaseButton;