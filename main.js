function getProjects() {
  const urlGitHub = 'https://api.github.com/users/gabrielboeira/repos'
  var loadingElement = document.getElementById('loading')

  fetch (urlGitHub, {
    method: 'GET',
  })

  .then((Response) => Response.json ())
  .then((Response) => {
    loadingElement.style.display = 'none'
    showProjects(Response)
  })
  .catch((e) => {
    console.log(e)
  })
}

function showProjects(data) {
  var listElement = document.getElementById('my-projects-list')

  for(let i = 0; i < data.length; i++)
    {
      let a = document.createElement("a")
      a.href = data[i]['clone_url']
      a.target = '_blank'
      a.title = data[i]['description']
      let linkText = document.createTextNode(data[i]['name'])
      a.appendChild(linkText)
      listElement.appendChild(a)
    }

}

getProjects()

document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.getElementById("theme-icon");

  // Verifica o tema atual armazenado no localStorage
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", currentTheme);
  themeIcon.src = currentTheme === "light" ? "images/dom-light.png" : "images/dom-light.png";

  themeIcon.addEventListener("click", () => {
      const newTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", newTheme);
      themeIcon.src = newTheme === "light" ? "images/dom-light.png" : "images/dom-light.png";
      localStorage.setItem("theme", newTheme);
  });
});


