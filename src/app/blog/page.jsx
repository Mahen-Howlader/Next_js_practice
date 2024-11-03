import Link from "next/link";

function page() {
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                blogs.map((val, index) => {
                    return <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val?.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{val?.description}</p>
                        <Link href={`blog/${val?.slug}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                })
            }
        </div>
    );
}


const blogs = [
    {
        title: "Understanding TypeScript Basics",
        slug: "understanding-typescript-basics",
        description: "An introduction to TypeScript and how it enhances JavaScript by adding type safety and modern development features."
    },
    {
        title: "A Guide to Modern Web Development",
        slug: "guide-to-modern-web-development",
        description: "An overview of essential tools and frameworks for building modern web applications efficiently."
    },
    {
        title: "Tips for Optimizing React Applications",
        slug: "tips-for-optimizing-react-applications",
        description: "Best practices for improving the performance and scalability of React apps."
    },
    {
        title: "Getting Started with Node.js",
        slug: "getting-started-with-nodejs",
        description: "A beginner-friendly guide to understanding Node.js and building your first server-side application."
    },
    {
        title: "CSS Grid vs Flexbox: When to Use Which",
        slug: "css-grid-vs-flexbox",
        description: "A comparison of CSS Grid and Flexbox with tips on when to use each for layout design."
    }
];


export default page;