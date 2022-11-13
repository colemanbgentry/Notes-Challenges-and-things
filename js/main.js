const links = [
    {
        label: "Week01 Notes",
        url: "week01/"
    },
    {
        label: "Week02 Notes",
        url: "week02/"
    },
    {
        label: "Week03 Notes",
        url: "week03/"
    },
    {
        label: "Week04 Notes",
        url: "week04/"
    },
    {
        label: "Week05 Notes",
        url: "week05/"
    },
    {
        label: "Week06 Notes",
        url: "week06/"
    },
    {
        label: "Week07 Notes",
        url: "week07/"
    },
    {
        label: "Week08 Notes",
        url: "week08/"
    },
    {
        label: "Week09 Notes",
        url: "week09/"
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