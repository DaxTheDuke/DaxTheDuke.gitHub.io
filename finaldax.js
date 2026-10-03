// --- Gestion des pages de liens internet ---
const pages = {
    1: [
        
        
        
        
        
        //INFOS
        { name: "France-Infos", image:"images/France_Info.png", url: "https://www.franceinfo.fr/" ,backgroundColor: "#89e7c5"},
        { name: "BFMTV", image:"images/bfmtv.jpg", url: "https://www.bfmtv.com/en-direct/" ,backgroundColor: "#89e7c5"},
        { name: "LCI", image:"images/LCI.png", url: "https://www.tf1info.fr/direct/" ,backgroundColor: "#89e7c5"},
       
        
        //Chaines TV
        { name: "TF1", image:"images/TF1.png", url: "https://www.tf1.fr/tf1/replay" ,backgroundColor: "#89e7da",column:1, row:6},
        { name: "FranceTV", image:"images/franceTV.png", url: "https://www.france.tv/" ,backgroundColor: "#b45be7",column:2, row:6},
        { name: "Arte", image:"images/arte.png", url: "https://www.arte.tv/fr/" ,backgroundColor: "#ebae56",column:3, row:6},
        { name: "M6", image:"images/M6.png", url: "https://www.m6.fr/" ,backgroundColor: "#e7d420",column:4, row:6},
        
        { name: "RMC+", image:"images/RMC.png", url: "https://www.rmcplus.fr/" ,backgroundColor: "#0d6445",column:6, row:6},
        { name: "T18", image:"images/T18.png", url: "https://t18.fr/" ,backgroundColor: "#103d2d",column:7, row:6},
        { name: "LCP", image:"images/LCP.jpg", url: "https://lcp.fr/" ,backgroundColor: "rgba(16, 212, 141, 0.44)",column:8, row:6},
       
        //TV
        { name: "SFR TV", image: "images/SFR.png", url: "https://tv.sfr.fr/home", backgroundColor: "#817dbd", column: 7, row: 1,},
        { name: "PGMS TV", image:"images/PGMTV.png", url: "https://programme-tv.nouvelobs.com/" ,backgroundColor: "#89e7c5",column:6, row:1},
        
        //Banques
        { name: "CA", image: "images/CA.png", url: "https://www.credit-agricole.fr/", backgroundColor: "#ebae56", column: 9, row: 2,},
        { name: "LCL", image:"images/LCL.png", url: "https://www.lcl.fr/" ,backgroundColor: "#2ad2bb",column:9, row:3},
        
        //Musique
        { name: "ProgArchives", image: "images/prog.png", url: "http://www.progarchives.com/", backgroundColor: "#339252", column: 1, row: 3,},
        { name: "BandCamp", image:"images/bandcamp.png", url: "https://bandcamp.com/" ,backgroundColor: "#342ad2",column:2, row:3},
        
        { name: "Morow", image:"images/morow.png", url: "https://www.morow.com/" ,backgroundColor: "#d2a82a",column:3, row:3},
        { name: "Google", image:"images/google.jpg", url: "https://www.google.com/" ,backgroundColor: "#d2a82a",column:5, row:3},
        
    ],
    2: [
        {name: "Wikipédia", image: "images/img1.jpg", url: "https://fr.wikipedia.com", backgroundColor: "#0c6bbe" ,  column: 5, row: 4, },
        { name: "Lien B", image: "https://via.placeholder.com/50" },
        // Ajoute tes liens ici pour la Page 2
    ],
    3: [
        {name: "Wikipédia", image: "images/img1.jpg", url: "https://fr.wikipedia.com", backgroundColor: "#0c6bbe" ,  column: 9, row: 6, },
        { name: "Lien Y", image: "https://via.placeholder.com/50" },
        // Ajoute tes liens ici pour la Page 3
    ]
};


function showPage(pageNumber) {
    const linksGrid = document.getElementById("linksGrid");
    linksGrid.innerHTML = "";

    const pageLinks = pages[pageNumber] || [];

    // On crée les 54 cases de la grille (ex: 9 colonnes * 6 lignes ou l'inverse)
    const totalCells = 9 * 6; 

    // On utilise une approche basée sur le placement CSS Grid explicite
    pageLinks.forEach(link => {
        const linkItem = document.createElement("div");
        linkItem.className = "link-item";

        linkItem.innerHTML = `
            <img src="${link.image}" alt="${link.name}">
            <span>${link.name}</span>
        `;

        if (link.backgroundColor) {
            linkItem.style.backgroundColor = link.backgroundColor;
        }

        if (link.url) {
            linkItem.style.cursor = "pointer";
            linkItem.onclick = function() {
                window.open(link.url, "_blank");
            };
        }

        // --- APPLICATION DU POSITIONNEMENT ---
        // Si le lien a une colonne et une ligne définies, on applique le CSS Grid
        if (link.column && link.row) {
            linkItem.style.gridColumn = link.column;
            linkItem.style.gridRow = link.row;
        }

        linksGrid.appendChild(linkItem);
    });
}

// Afficher la Page 1 par défaut au chargement
document.addEventListener('DOMContentLoaded', function() {
    showPage(1);

    // Charger les listes "to do" sauvegardées
    for (let i = 1; i <= 2; i++) {
        const listId = `list${i}`;
        const savedTasks = localStorage.getItem(listId);
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            const list = document.getElementById(listId);
            tasks.forEach(taskText => {
                addTask(listId, taskText);
            });
        }
    }

    // Initialiser le calendrier
    updateCalendar();

    // Mettre à jour l'horloge toutes les secondes
    updateClock();
    setInterval(updateClock, 1000);
});

// --- Gestion des listes "to do" ---
// Fonction pour ajouter une tâche à une liste
function addTask(listId, taskText = "") {
    const list = document.getElementById(listId);
    const newTask = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nouvelle tâche";
    input.value = taskText;

    // Sauvegarder la tâche quand on quitte le champ
    input.addEventListener('blur', saveTasks);
    input.addEventListener('keyup', saveTasks);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-check"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        list.removeChild(newTask);
        saveTasks();
    };

    const upBtn = document.createElement("button");
    upBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    upBtn.className = "move-btn";
    upBtn.onclick = function() {
        moveTaskUp(newTask);
        saveTasks();
    };

    const downBtn = document.createElement("button");
    downBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';
    downBtn.className = "move-btn";
    downBtn.onclick = function() {
        moveTaskDown(newTask);
        saveTasks();
    };

    newTask.appendChild(upBtn);
    newTask.appendChild(downBtn);
    newTask.appendChild(input);
    newTask.appendChild(deleteBtn);

    list.appendChild(newTask);
    input.focus();
}

// Fonction pour monter une tâche dans la liste
function moveTaskUp(task) {
    const previousTask = task.previousElementSibling;
    if (previousTask) {
        task.parentNode.insertBefore(task, previousTask);
    }
}

// Fonction pour descendre une tâche dans la liste
function moveTaskDown(task) {
    const nextTask = task.nextElementSibling;
    if (nextTask) {
        task.parentNode.insertBefore(nextTask, task);
    }
}

// Fonction pour sauvegarder toutes les tâches
function saveTasks() {
    for (let i = 1; i <= 2; i++) {
        const listId = `list${i}`;
        const list = document.getElementById(listId);
        const tasks = Array.from(list.children).map(li => {
            return li.querySelector('input').value;
        });
        localStorage.setItem(listId, JSON.stringify(tasks));
    }
}

// --- Gestion du calendrier ---
function updateCalendar() {
    const now = new Date();
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const month = now.getMonth();
    const year = now.getFullYear();

    // Mettre à jour le titre du calendrier
    document.getElementById("calendarMonthYear").textContent = `${monthNames[month]} ${year}`;

    // Récupérer le conteneur des jours
    const calendarDays = document.getElementById("calendarDays");
    calendarDays.innerHTML = "";

    // Obtenir le premier jour du mois et le nombre de jours dans le mois
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Ajouter des cases vides pour les jours avant le 1er du mois
    for (let i = 0; i < firstDay - 1; i++) {
        const emptyDay = document.createElement("span");
        calendarDays.appendChild(emptyDay);
    }

    // Ajouter les jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("span");
        dayElement.textContent = day;

        // Mettre en évidence le jour actuel
        if (day === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
            dayElement.classList.add("today");
        }

        calendarDays.appendChild(dayElement);
    }
}

// --- Gestion de l'horloge ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const dayName = days[now.getDay()];
    const dateString = `${dayName} ${now.getDate()} ${now.toLocaleString('fr-FR', { month: 'long' })} ${now.getFullYear()}`;

    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}


window.addEventListener('beforeunload', saveTasks);
