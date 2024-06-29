"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
    const pathName = usePathname();
    const router = useRouter()
    function handelLogin() {
        router.push("/login")
    }
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },

    ]
    if (pathName.includes("dashboard"))

        return(
            <div className="bg-green-400 p-4">
                dashboard navbar layout
            </div>
        )

        return (
            <div className="bg-red-400  container text-white mx-auto ">
                <ul className="flex gap-x-5 justify-between ">
                    {
                        links.map(item => {
                            return <li key={item?.path}><Link className={`${item?.path === pathName && "bg-rose-500"}`} href={item?.path}>{item?.title}</Link></li>
                        })
                    }
                    <button onClick={handelLogin}>Login</button>

                </ul>
            </div>
        );
}

export default Navbar;