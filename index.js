const projectsData = [
    {
        name : "Youtube",
        species : "Clone",
        spendTime: "2 days ",
        photo : "https://miro.medium.com/max/2400/1*rQB4fmakQa_Cwhwzgsy9YQ.png"
    } ,
    {
        name : "Facebook",
        species : "Clone",
        spendTime : "3 days",
        photo : "https://res.cloudinary.com/practicaldev/image/fetch/s--YNl3Kl3T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7456kmxoilyssu1wk3xp.png"
    }
]

function projectTemplate(project) {
    return `
    <div class="project">
    <img class="project-photo" src="${project.photo}">
    <h2 class="project-name">${project.name}
    </h2>
    <h4 class="time"><strong>Spend Time:</strong> ${(project.spendTime)}
    <span class="species${project.species}</span>
    </h4>
    </div>
    `
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Projects (${projectsData.length} results) </h1>
${projectsData.map(projectTemplate).join("")}

`