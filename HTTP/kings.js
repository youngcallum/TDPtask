const output= document.getElementById('output');

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
// .then(response => {console.log(response.data);
//     document.write(JSON.stringify(response.data, null, 2))})
    .then(response => {
        for (let king of response.data){
        console.log("kings: ", king);

        const nm = document.createElement("h1");
        nm.innerText = king.nm;
        output.appendChild(nm);

        const cty = document.createElement("p");
        cty.innerText = king.cty;
        output.appendChild(cty);

        const hse = document.createElement("p");
        hse.innerText = king.hse;
        output.appendChild(hse);

        const yrs = document.createElement("p");
        yrs.innerText = king.yrs;
        output.appendChild(yrs)
    }});