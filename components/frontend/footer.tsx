const Footer = () => {
    const author = process.env.NEXT_PUBLIC_APP_AUTHOR as string;

    return (
        <footer className="flex items-center justify-center min-h-full bg-white">
            <div className="w-full max-w-screen-lg py-4">
                <p className="font-semibold tracking-wide text-center text-gray-600 text-md">
                    Copyright©{new Date().getFullYear()} By {author} All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer