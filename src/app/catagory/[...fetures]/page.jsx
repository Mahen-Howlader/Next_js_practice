function page({params}) {
    console.log({params})
    console.log(params?.fetures?.length)
    if(params?.fetures?.length == 3){
        return <div>{params?.fetures[2]}</div>
    }
    if(params?.fetures?.length == 2){
        return <div>{params?.fetures[1]}</div>
    }
    return (
        <div>
           Fetures Page
        </div> 
    );
}

export default page;