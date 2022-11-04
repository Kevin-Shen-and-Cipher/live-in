import Image from 'next/image';
import Logo from '../../asset/logo.svg';

const Header = () => {
    const title = process.env.NEXT_PUBLIC_APP_NAME as string;

    return (
        <header className="flex justify-center bg-white">
            <nav className="w-full max-w-screen-lg px-6 py-4 ">
                <div className="flex items-center">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="stroke-primary fill-primary"
                        width={32}
                        height={32}
                    />
                    <h2 className="ml-2 text-4xl font-semibold text-primary">
                        {title}
                    </h2>
                </div>
            </nav>
        </header>
    )
};

export default Header