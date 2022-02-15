import type { NextPage } from 'next';
import SBLOGO from '../../public/sbLogo.png';
// components
import Image from 'next/image';
import Notification from './Notification';
import ProfileMenu from './ProfileMenu';

const Navigation: NextPage = () => {
    return (
        <nav className="flex items-center justify-between px-11 py-6 bg-white">
            <Image src={SBLOGO} alt="storyboard-logo" />

            <div className="flex items-center space-x-4">
                <Notification />
                <ProfileMenu />
            </div>
        </nav>
    )
}

export default Navigation;