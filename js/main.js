const links = [
    {
        label: "Week1 notes",
        url: "week01/index.html"
    }
]

let list = document.getElementById("mainList")
links.forEach((items)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = links.url
    a.textContent = links.label
    li.appendChild(a)
    list.appendChild(li)
})