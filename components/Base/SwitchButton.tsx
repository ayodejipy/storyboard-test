import type { NextPage } from 'next';
import { Children, ReactNode } from 'react';
// components

type ButtonType = {
    text: String;
    style: String;
    children?: ReactNode;
    callback?: Function;
};

const PageTitle: NextPage<ButtonType> = ({ text, children } : ButtonType) => {
    return (
        <button className="flex items-center space-x-3">
            { children }
            <span className="text-slate-500">{ text }</span>
        </button>
    )
}

export default PageTitle;