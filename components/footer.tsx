
const Footer = () => {
    return (
        <footer className="flex items-center justify-center h-24 min-h-full bg-white">
            <div className="w-full max-w-screen-lg px-6 py-4">
                <p className="font-semibold text-center text-gray-600 text-md">
                    Copyright©{new Date().getFullYear()} By 鄭政文、沈育安 All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer