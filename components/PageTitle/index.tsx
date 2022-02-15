import type { NextPage } from 'next';
import { useState } from 'react';
// hooks
import { useModal } from '../../Hooks/useModal';

// components
import SearchField from '../Search/Search';
import BaseButton from '../Base/Button';
import Modal from '../Modal/Modal';
import AddSiteModal from '../Site/Add';

const PageTitle: NextPage = () => {
    const [isVisible, toggleModal] = useModal();

    return (
        <>
            <Modal
                isVisible={isVisible}
                toggleModal={toggleModal}
                styles="w-[400px] h-[470px] rounded"
                enableCancel
            >
                <AddSiteModal />
            </Modal>

            <div className="w-full w- py-10 flex items-center justify-between">
                <h6 className="text-2xl font-semibold">My Sites</h6>

                <div className="flex items-center space-x-12">
                    <SearchField />

                    <BaseButton
                        label="Add New Site"
                        style="bg-yellow-brand text-white rounded flex items-center space-x-3 justify-between py-2 px-8"
                        showIcon
                        callback={toggleModal}
                    />
                </div>
            </div>
        </>
    )
}

export default PageTitle;