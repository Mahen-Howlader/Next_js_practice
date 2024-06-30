function CategoriesDetailspage({ params }) {
    console.log("Length",params.features.length)
    console.log("params.features[2]", params.features[2])
    if (params.features.length == 3) return <div>{params.features[2]}</div>
    if (params.features.length == 2) return <div>{params.features[1]}</div>
    return (
        <div>
            Categories details
        </div>
    );
}

export default CategoriesDetailspage;

