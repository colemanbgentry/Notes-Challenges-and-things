const links = [
    {
        label: "Week01 Notes",
        url: "week01/"
    }
]

let list = document.getElementById("mainList")
links.forEach((items)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = items.url;
    a.textContent = items.label;
    li.appendChild(a);
    list.appendChild(li);
})