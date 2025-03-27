fetch('projects.json').then(response=>response.json()).then(data=>{
    console.log(data);
    const proj=document.getElementById("projects");

    let row=document.createElement("div");
    row.classList.add("row","gap-4","justify-content-center");

    data.projects.forEach(el=>{
        let col=document.createElement("div");
        col.classList.add("col-lg-3", "col-md-6", "col-12", "d-flex");

        let main_div=document.createElement("div");
        main_div.classList.add("card");
        main_div.style.width="18rem";

        let body_div=document.createElement("div");
        body_div.classList.add("card-body");

        let title=document.createElement("h5");
        title.classList="card-title";
        title.innerHTML=el.name;

        let content=document.createElement("p");
        content.classList.add("card-text");
        content.innerHTML=el.description;

        let github=document.createElement("a");
        github.classList.add("btn","btn-primary","w-10");
        github.href=el.git;
        github.innerHTML="Git"
        github.target="_blank"

        main_div.appendChild(body_div);
        main_div.appendChild(title);
        main_div.appendChild(content);
        main_div.appendChild(github);

        col.appendChild(main_div);
        row.appendChild(col);
    });
    proj.appendChild(row);
}).catch(e=>console.log(e));