"use client";

import Image from "next/image";
import { useEffect, useReducer, useState } from "react";

function Meals() {
    const [search, setSearch] = useState("a");
    const [data, setData] = useState([]);  // Ensure `data` is always initialized as an empty array
    const [error, setError] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }


    async function handleSearch() {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const result = await res.json();

            // Log the result to debug data structure
            console.log("Fetched result:", result);

            // Explicitly enforce `data` as an array
            if (Array.isArray(result.meals)) {
                setData(result.meals);
                setError("");
            } else {
                setData([]);
                setError("No Data Found");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Error fetching data");
            setData([]);  // Set `data` to an empty array on error
        }
    }
    useEffect(() => {
        handleSearch()
    }, [search])


    return (
        <div>
            <div>
                <input
                    onChange={handleChange}
                    className="border border-2 p-2 outline-none rounded-sm"
                    type="text"
                    placeholder="Search input ..."
                />
                <button
                    onClick={handleSearch}
                    className="bg-red-500 p-2">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {data.length > 0 && !error && data.map(({ strInstructions, strMealThumb, idMeal, strIngredient1 }) => (
                    <div key={idMeal} className="border-2 p-2 border-black">
                        <Image src={strMealThumb} alt={"Image"} width={500} height={500} />
                        <h1>{idMeal}</h1>
                        <h1>{strInstructions}</h1>
                        <h1>{strIngredient1}</h1>
                    </div>
                ))}
            </div>

            {error && <h1>{error}</h1>}
        </div>
    );
}

export default Meals;
