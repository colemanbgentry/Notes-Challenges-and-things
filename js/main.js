const links = [
    {
        label: "Week01 Notes",
        url: "C:\Users\colem\OneDrive\Documents\GitHub\Notes-Challenges-and-things\week01\index.html"
    }
]

let list = document.getElementById("mainList")
links.forEach((items)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = url;
    a.textContent = label;
    li = a;
    list.appendChild(li);
})