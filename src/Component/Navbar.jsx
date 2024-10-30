import Link from "next/link";

function Navbar() {
    const dataNav = [
        {
            title: "Home",
            path: "/home"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ];

    return (
        <div className="flex justify-between">
            {dataNav.map((val, index) => (
                <Link key={index} href={val.path} className="bg-emerald-500">
                    <span className="bg-red-500 text-white p-2 rounded">{val.title}</span>
                </Link>
            ))}
        </div>
    );
}

export default Navbar;
