let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
// second:make the search btn functional & take i/p 
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;//storing the text of i/p by .value
    console.log(country);
    let college = await getCol(country);//calling the getcol fn of fetched data
    showcol(college);
});
// three: now create a li loop of all the colleges
function showcol(college){
    let list = document.querySelector("#list");// access the list 
    list.innerText=""; //make it empty after every search dont append
    for (col of college){ //loop of all the seacrched colleges
        console.log(col.name); // .name to fetch name from the data

        let li = document.createElement("li");
        li.classList.add("list");// add those names in the li
        li.innerText= col.name; 
        list.appendChild(li);
    }
}
//first:from axios fetch the data and concat with input(country)
async function getCol(country) {
    try {
        let res = await axios.get(url+country);
        return(res.data);// return data
    } catch (err) {
        console.log("error",err);
    }
}