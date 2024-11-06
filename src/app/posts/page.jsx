import Link from "next/link";
import { getPosts } from "../services/posts";
async function page() {
    const postData = await getPosts();
    return <div className="grid grid-cols-4 gap-5 mx-6">
        {
            postData?.map(({ id, title, body }) => {
               return <div className="border border-2 p-5 border-black">
                    <h1>{id}</h1>
                    <h1>{title}</h1>
                    <h1>{body}</h1>
                    <Link href={`/posts/${id}`}  className="bg-red-500 p-3">View Details</Link>
                </div>
            })
        }
    </div>
}

export default page;