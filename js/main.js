const links = [
    {
        label: "Week01 Notes",
        url: "/week01/index.html"
    }
]

let list = document.getElementById("mainList")
links.forEach((items)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    li.appendChild(a);
    list.appendChild(li);
})