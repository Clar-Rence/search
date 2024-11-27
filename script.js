const students = [
    {
        name: "Clarence",
        text: "JavaScript",
        href: "https://www.w3schools.com/js/default.asp"
    },
    {
        name: "Atup",
        text: "Bro++",
        href: "https://tenor.com/search/black-man-kissing-gifs"
    },
    {
        name: "Carla",
        text: "Python",
        href: "https://www.w3schools.com/python/default.asp"
    },
    {
        name: "Karl",
        text: "React Native",
        href: "https://reactnative.dev/"
    },
    {
        name: "Rygie",
        text: "C",
        href: "https://www.w3schools.com/c/index.php"
    },
    {
        name: "Lorie",
        text: "Hamster++",
        href: "https://unsplash.com/s/photos/hamster"
    }
];

function liveSearch() {
    const query = document.getElementById("search").value.toLowerCase();
    const resultFiltered = document.getElementById("displays");

    if (query === "") {
        resultFiltered.innerHTML = "";
        return;
    }

    const filtered = students.filter(student => student.name.toLowerCase().includes(query));
    resultFiltered.innerHTML = "";

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const a = document.createElement("a");
            const div = document.createElement("div");
            const p = document.createElement("p");

            a.href = item.href;
            a.target = "_blank";

            div.classList.add("result-item");
            div.textContent = item.name;
            p.textContent = item.text;

            div.appendChild(p);
            a.appendChild(div);
            resultFiltered.appendChild(a);
        });
    } else {
        resultFiltered.innerHTML = "<p>No result</p>";
    }
}
