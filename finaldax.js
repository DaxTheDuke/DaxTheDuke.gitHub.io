// --- Gestion des pages de liens internet ---
const pages = {
    1: [
        
        { name: "Google", image:"images/google.jpg", url: "https://www.google.com/" ,backgroundColor: "#d2a82a",column:1, row:1},
        
        //INFOS
        { name: "France-Infos", image:"images/France_Info.png", url: "https://www.franceinfo.fr/" ,backgroundColor: "#89e7c5", column: 4, row: 1,},
        { name: "BFMTV", image:"images/bfmtv.jpg", url: "https://www.bfmtv.com/en-direct/" ,backgroundColor: "#89e7c5", column: 5, row: 1,},
        { name: "LCI", image:"images/LCI.png", url: "https://www.tf1info.fr/direct/" ,backgroundColor: "#89e7c5", column: 6, row: 1,},
       
        //Chaines TV
        { name: "TF1", image:"images/TF1.png", url: "https://www.tf1.fr/tf1/replay" ,backgroundColor: "#89e7da",column:1, row:6},
        { name: "FranceTV", image:"images/franceTV.png", url: "https://www.france.tv/" ,backgroundColor: "#b45be7",column:2, row:6},
        { name: "Arte", image:"images/arte.png", url: "https://www.arte.tv/fr/" ,backgroundColor: "#ebae56",column:3, row:6},
        { name: "M6", image:"images/M6.png", url: "https://www.m6.fr/" ,backgroundColor: "#e7d420",column:4, row:6},
        
        { name: "RMC+", image:"images/RMC.png", url: "https://www.rmcplus.fr/" ,backgroundColor: "#0d6445",column:6, row:6},
        { name: "T18", image:"images/T18.png", url: "https://t18.fr/" ,backgroundColor: "#103d2d",column:7, row:6},
        { name: "LCP", image:"images/LCP.jpg", url: "https://lcp.fr/" ,backgroundColor: "rgba(16, 212, 141, 0.44)",column:8, row:6},
       
        //TV
        { name: "SFR TV", image: "images/SFR.png", url: "https://tv.sfr.fr/home", backgroundColor: "#817dbd", column: 8, row: 1,},
        { name: "PGMS TV", image:"images/PGMTV.png", url: "https://programme-tv.nouvelobs.com/" ,backgroundColor: "#89e7c5",column:9, row:1},
        
        //Banques
        { name: "CA", image: "images/CA.png", url: "https://www.credit-agricole.fr/", backgroundColor: "#ebae56", column: 9, row: 3,},
        { name: "LCL", image:"images/LCL.png", url: "https://www.lcl.fr/" ,backgroundColor: "#2ad2bb",column:9, row:4},
        
        //MAGASINS
        {name: "Magasins U", image: "images/U_mag.png", url: "https://www.magasins-u.com/accueil.m33662", backgroundColor: "#0c6bbe" ,  column: 5, row: 3, },
        {name: "Courses U", image: "images/U_drive.png", url: "https://www.coursesu.com/drive-superu-villaines", backgroundColor: "#0c6bbe" ,  column: 5, row: 4, },
        
        
        //Musique
        { name: "ProgArchives", image: "images/prog.png", url: "http://www.progarchives.com/", backgroundColor: "#339252", column: 1, row: 3,},
        { name: "BandCamp", image:"images/bandcamp.png", url: "https://bandcamp.com/" ,backgroundColor: "#342ad2",column:2, row:3},
        
        { name: "Morow", image:"images/morow.png", url: "https://www.morow.com/" ,backgroundColor: "#d2a82a",column:3, row:3},
        { name: "Spotify", image:"images/spotify.png", url: "https://open.spotify.com/intl-fr" ,backgroundColor: "#d2a82a",column:1, row:4},
        { name: "Deezer", image:"images/deezer.png", url: "https://www.deezer.com/fr/" ,backgroundColor: "#d2a82a",column:2, row:4},
        
        
        
    ],
    
    2: [
        {name: "MEGA", image: "images/mega.png", url: "https://mega.nz/login", backgroundColor: "#0c6bbe" ,  column: 1, row: 4, },
        {name: "Shadow", image: "images/shadow.png", url: "https://shadow.tech/fr/", backgroundColor: "#0c6bbe" ,  column: 2, row: 4, },
        {name: "Goo Drive", image: "images/googledrive.png", url: "https://workspace.google.com/intl/fr/products/drive/", backgroundColor: "#0c6bbe" ,  column: 3, row: 4, },
        {name: "Mediafire", image: "images/mediafire.png", url: "https://www.mediafire.com/login/", backgroundColor: "#0c6bbe" ,  column: 4, row: 4, },
        
        {name: "Google", image:"images/google.jpg", url: "https://www.google.com/" ,backgroundColor: "#d2a82a",column:1, row:1},
        {name: "Google MAP", image:"images/google_map.png", url: "https://www.google.com/maps/place/20+Rue+Jean+du+Chalard,+53700+Villaines-la-Juhel/" ,backgroundColor: "#d2a82a",column:2, row:1},
        {name: "Google TRAD", image:"images/google_trad.png", url: "https://translate.google.com/?hl=fr&sl=auto&tl=fr&op=translate" ,backgroundColor: "#d2a82a",column:1, row:2},
        {name: "Google IMG", image:"images/google_img.png", url: "https://images.google.com/?gws_rd=ssl" ,backgroundColor: "#d2a82a",column:2, row:2},
        {name: "DuckDuckGo", image:"images/duckduckgo.png", url: "https://duckduckgo.com/" ,backgroundColor: "#d2a82a",column:4, row:1},
        
        { name: "Infomaniak", image: "images/infomaniak.png", url: "https://www.infomaniak.com/fr", backgroundColor: "#339252", column: 7, row: 1,},
        { name: "Mistral AI", image:"images/mistral_AI.png", url: "https://chat.mistral.ai/chat" ,backgroundColor: "#342ad2",column:8, row:1},
        { name: "Chat GPT", image:"images/chatgpt.jpg", url: "https://chatgpt.com/fr-FR/" ,backgroundColor: "#342ad2",column:9, row:1},
        { name: "AI Studio", image:"images/AI_Studio.png", url: "https://aistudio.google.com/welcome" ,backgroundColor: "#342ad2",column:8, row:2},
        { name: "Gemini", image:"images/gemini.png", url: "https://gemini.google.com/app" ,backgroundColor: "#342ad2",column:9, row:2},
        
        
        
        
        
        {name: "Wikipédia", image: "images/wikipedia.png", url: "https://fr.wikipedia.com", backgroundColor: "#0c6bbe" ,  column: 6, row: 4,columnSpan: 2, rowSpan: 1},
        
        
        
        
       
    ],
    3: [
        
        //MAISONS
        {name: "BIEN ICI", image: "images/bienici.png", url: "https://www.bienici.com/", backgroundColor: "#0c6bbe" ,  column: 1, row:3, },
        {name: "SE LOGER", image: "images/seloger.png", url: "https://www.seloger.com/", backgroundColor: "#0c6bbe" ,  column: 2, row: 3, },
        {name: "CENTURY21", image: "images/century.jpg", url: "https://www.century21.fr/", backgroundColor: "#0c6bbe" ,  column: 3, row: 3, },
        {name: "Particuliers", image: "images/particuliers.png", url: "https://www.entreparticuliers.com/", backgroundColor: "#0c6bbe" ,  column: 4, row: 3, },
        {name: "Foncier", image: "images/DVF.png", url: "https://app.dvf.etalab.gouv.fr/", backgroundColor: "#0c6bbe" ,  column: 5, row: 3, },
        
        
        {name: "Google", image:"images/google.jpg", url: "https://www.google.com/" ,backgroundColor: "#d2a82a",column:5, row:6},
        
        
        
        
        {name: "Lien Y", image: "https://via.placeholder.com/50" },
        // Ajoute tes liens ici pour la Page 3
    ],
    
    4: [
        
        
    ],
   5: [
       //COURSES
        {name: "PMU", image: "images/pmu.png", url: "https://www.pmu.fr/turf/", backgroundColor: "#0c6bbe" ,  column: 1, row: 1, },
        {name: "EQUIDIA", image: "images/equidia.png", url: "https://www.equidia.fr/", backgroundColor: "#0c6bbe" ,  column: 2, row: 1, },
        {name: "GENY", image: "images/geny.jpg", url: "https://www.geny.com/", backgroundColor: "#0c6bbe" ,  column: 3, row: 1, },
        {name: "Aspiturf", image: "images/aspiturf.png", url: "https://aspiturf.com/", backgroundColor: "#0c6bbe" ,  column: 4, row: 1, },
        {name: "GENYBET", image: "images/genybet.png", url: "https://www.genybet.fr/?u=hippisme", backgroundColor: "#0c6bbe" ,  column: 5, row: 1, },
        {name: "ZETURF", image: "images/zeturf.jpg", url: "https://www.zeturf.fr/fr", backgroundColor: "#0c6bbe" ,  column: 6, row: 1, },
        {name: "BETCLIC", image: "images/betclic.png", url: "https://www.betclic.fr/turf/", backgroundColor: "#0c6bbe" ,  column: 7, row: 1, },
         
        {name: "Tir à l'arc", image:"images/tir_arc.png", url: "https://www.silvergames.com/fr/apple-shooter" ,backgroundColor: "#d2a82a",column:1, row:6},
    ]
};


function showPage(pageNumber, buttonElement) {
    const linksGrid = document.getElementById("linksGrid");
    linksGrid.innerHTML = "";
    
  
    
    // --- GESTION DU BOUTON ACTIF ET DE LA COULEUR ---
    if (buttonElement) {
        // 1. On retire la classe 'active' de TOUS les boutons
        const allButtons = document.querySelectorAll(".page-buttons button");
        allButtons.forEach(btn => btn.classList.remove("active"));

        // 2. On ajoute la classe 'active' sur le bouton cliqué
        buttonElement.classList.add("active");

        // 3. On applique la couleur à la grille
        const buttonColor = window.getComputedStyle(buttonElement).backgroundColor;
        linksGrid.style.backgroundColor = buttonColor;
    }

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
        //if (link.column && link.row) {
        //    linkItem.style.gridColumn = link.column;
        //    linkItem.style.gridRow = link.row;
        //}
        
         if (link.column && link.row) {
            // On utilise le sélecteur "span" de CSS Grid. Si non défini, la valeur par défaut est 1.
             linkItem.style.gridColumn = `${link.column} / span ${link.columnSpan || 1}`;
             linkItem.style.gridRow = `${link.row} / span ${link.rowSpan || 1}`;
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
