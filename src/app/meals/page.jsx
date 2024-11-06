import Meals from "../Component/Meals";

const mealsDataGet = async () => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const res = data.json();
    return res;
}

async function page() {
    const mealsData = await mealsDataGet()
    // console.log(mealsData?.meals)
    return (
        <div className="mx-20">
            <h1 className="text-3xl text-red-500 font-bold">Search your meals</h1>
            <Meals></Meals>
        </div>
    );
}

export default page;