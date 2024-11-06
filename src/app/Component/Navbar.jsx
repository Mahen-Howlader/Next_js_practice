"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
    const pathName = usePathname();
    const router = useRouter();
    const dataNav = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
    ];

    function handleLogin() {
        // Add login functionality here
        router.push("/login")
    }


    if(pathName.includes("dashboard")){
        return <div>
            Navbar Admin Dashboard
        </div>
    }


    return (
        <div className="flex justify-between mt-3 ">
            <div>
                {dataNav.map((val, index) => (
                    <Link 
                        key={index} 
                        href={val.path} 
                        className={`${pathName === val.path ? "bg-red-500" : ""} p-2 rounded`}
                    >
                        {val.title}
                    </Link>
                ))}
            </div>
            <div>
                <button onClick={handleLogin} className="text-white bg-blue-500 p-2 rounded">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
