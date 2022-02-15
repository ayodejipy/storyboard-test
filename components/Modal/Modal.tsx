import type { NextPage } from 'next';
import { MouseEventHandler, ReactNode, useRef } from 'react';
// components

type ModalPropsType = {
    isVisible: Boolean;
    enableCancel?: Boolean;
    styles: string;
    children: ReactNode;
    toggleModal: () => void | Boolean;
}


const Modal: NextPage<ModalPropsType> = ({ isVisible, toggleModal, styles, enableCancel, children }: ModalPropsType) => {
    const modalOne = useRef<HTMLDivElement>(null);

    const closeModal = (event: any) => {
        if (modalOne.current === event.target as HTMLElement) {
            toggleModal();
        }
    }

    return (
        <>
            {isVisible ?
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-60 overflow-y-auto h-full w-full flex justify-center z-20"
                    id="my-modal"
                    ref={modalOne}
                    onClick={closeModal}
                >
                    <div className={`${styles ? styles : 'w-80 h-72'} relative bg-white text-gray-900 flex flex-col mt-24 z-10`}>
                        {enableCancel ? <div className="absolute -top-7 right-0 bg-slate-200 flex items-center justify-center h-5 w-5 rounded-full cursor-pointer" onClick={toggleModal}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div> : null}

                        {children}
                    </div>
                </div>

                : null}
        </>
    )
}

export default Modal;