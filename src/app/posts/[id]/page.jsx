const getPostsDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = res.json();
    return data;
}

async function page({params}) {
    const {id,title,body} = await getPostsDetails(params?.id);
    return (
        <div>
            <h1>Title : {title}</h1>
            <h2>Descripttion : {body}</h2>
        </div>
    );
}

export default page;