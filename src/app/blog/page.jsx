import Link from "next/link";

function page() {
    return (
        <div className="flex flex-col gap-y-4 mt-10">
            {
                blogPosts.map((val, index) => {
                   return <div key={index} className="border-2 p-5 border-black  container mx-auto text-2xl ">
                        <h3>{val?.title}</h3>
                        <h3>{val?.slug}</h3>
                        <h3>{val?.description}</h3>
                        <Link className="bg-red-400 p-2 rounded-lg" href={`/blog/${val.id}`} >View Details</Link>
                    </div>
                })
            }
        </div>
    );
}
const blogPosts = [
    {
        id: 1,
        title: "Understanding Object-Oriented Programming in Python",
        slug: "understanding-object-oriented-programming-python",
        description: "This blog post explains the fundamentals of object-oriented programming (OOP) in Python, including key concepts like classes, objects, inheritance, encapsulation, and polymorphism.",
        objectDetails: "The post includes examples of Python classes and objects, demonstrating how to create and manipulate them effectively."
    },
    {
        id: 2,
        title: "Harnessing the Power of Data Classes in Python",
        slug: "harnessing-power-data-classes-python",
        description: "This article introduces data classes in Python, a feature that simplifies the creation of classes for storing data. It covers syntax, features, and benefits of using data classes.",
        objectDetails: "Examples of data class definitions and comparisons with traditional classes are provided to illustrate their use."
    },
    {
        id: 3,
        title: "Creating and Manipulating Objects in JavaScript",
        slug: "creating-manipulating-objects-javascript",
        description: "A comprehensive guide to creating and working with objects in JavaScript, including object literals, constructors, and the prototype chain.",
        objectDetails: "JavaScript code snippets show how to define objects, use constructors, and manipulate object properties."
    },
    {
        id: 4,
        title: "Mastering SQL: Creating and Managing Database Objects",
        slug: "mastering-sql-creating-managing-database-objects",
        description: "This post covers the creation and management of database objects in SQL, such as tables, views, indexes, and stored procedures.",
        objectDetails: "SQL commands and examples demonstrate how to define and manipulate various database objects."
    },
    {
        id: 5,
        title: "Object-Oriented Design Principles and Patterns",
        slug: "object-oriented-design-principles-patterns",
        description: "An in-depth look at object-oriented design principles and patterns, such as SOLID principles, design patterns like Singleton, Factory, and Observer, and their application in software development.",
        objectDetails: "Code examples in various languages, including Java, C#, and Python, illustrate these design principles and patterns."
    },
    {
        id: 6,
        title: "The Role of Object Relational Mapping (ORM) in Modern Applications",
        slug: "role-object-relational-mapping-orm-modern-applications",
        description: "This blog post explores the role of Object Relational Mapping (ORM) frameworks in modern applications, explaining how they help bridge the gap between object-oriented programming and relational databases.",
        objectDetails: "Examples of popular ORM frameworks, such as Hibernate (Java), Entity Framework (.NET), and SQLAlchemy (Python), are provided."
    },
    {
        id: 7,
        title: "Best Practices for Object-Oriented Programming in Java",
        slug: "best-practices-object-oriented-programming-java",
        description: "This article provides best practices for writing clean, efficient, and maintainable object-oriented code in Java, covering topics such as class design, method structure, and code reuse.",
        objectDetails: "Practical tips and code examples highlight the best practices for Java developers."
    },
    {
        id: 8,
        title: "Building RESTful APIs with Node.js and Express",
        slug: "building-restful-apis-nodejs-express",
        description: "A step-by-step guide to building RESTful APIs using Node.js and Express, covering the creation of endpoints, handling requests and responses, and managing data with MongoDB.",
        objectDetails: "Sample code demonstrates how to structure and implement a RESTful API in a Node.js environment."
    },
    {
        id: 9,
        title: "Introduction to Object-Oriented Programming in C++",
        slug: "introduction-object-oriented-programming-cpp",
        description: "An introductory guide to object-oriented programming in C++, explaining the basics of classes, objects, inheritance, polymorphism, and encapsulation.",
        objectDetails: "C++ code examples show how to implement OOP concepts effectively."
    },
    {
        id: 10,
        title: "Advanced Object Manipulation Techniques in Ruby",
        slug: "advanced-object-manipulation-techniques-ruby",
        description: "This blog post covers advanced techniques for manipulating objects in Ruby, including metaprogramming, dynamic method creation, and object introspection.",
        objectDetails: "Ruby code examples illustrate these advanced object manipulation techniques."
    }
];

export default page;