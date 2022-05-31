const output= document.getElementById('output');

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
// .then(response => {console.log(response.data);
//     document.write(JSON.stringify(response.data, null, 2))})
    .then(response => {
        const kings= response.data;
        console.log("kings: ", kings);
debugger;
        const nm = document.createElement("h1");
        nm.innerText = kings.nm;
        output.appendChild(nm)});

        // const secretBase = document.createElement("p");
        // secretBase.innerText = "Secret base: " + heroes.secretBase;
        // output.appendChild(secretBase);

        // const homeTown = document.createElement("p");
        // homeTown.innerText = "Hometown: " + heroes.homeTown;
        // output.appendChild(homeTown);

        // const formed = document.createElement("p");
        // formed.innerText = "Formed: " + heroes.formed;
        // output.appendChild(formed);