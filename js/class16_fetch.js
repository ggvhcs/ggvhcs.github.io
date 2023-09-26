/*  -16- */
//
fetch("http://172.17.0.2/getmovies.php")
    .then(response => response.json())
    .then(data => {
        let arrayresult = [];
        /*arrayresult.push(data.results);
        const items = arrayresult.map(ar => `${ar}`);
        console.log(items);*/
        data.results.foreach(element => {
            //console.log(element); 
            //console.log(element.name);
            arrayresult.push(element.name);
            console.log(arrayresult);
        });
    })
    .catch(error => console.log(error))