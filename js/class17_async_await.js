/*  -17- */
//async and await.
const asyncawaitfunction = async () => {
    try {
        const res = await fetch("http://172.17.0.2/getmovies.php")
        const data = await res.json()
        console.log(data.results);
        //data.results.map(poke => console.log(poke))
    } catch (error) {
        console.log(error);
    }
}
asyncawaitfunction()