function page({params}) {
    // console.log("params",params)
    const blogsFind = blogs.find((val,index) => val?.slug === params?.slug);
    console.log(blogsFind)
    return (
        <div>
            <h1>{blogsFind?.title}</h1>
            <h1>{blogsFind?.description}</h1>
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