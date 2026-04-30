document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="main-header">
        <div class="container_full">
            <h1 class="logo"><a href="../index.html">ALICI'ART.</a></h1>
            <nav class="main-nav">
                <ul>
                    <li><a href="../index.html">Accueil</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Projets ▾</a>
                        <ul class="dropdown-content">
                            <li><a href="../travaux.html" class="color-serrano-text">Travaux</a></li>
                            <li><a href="../photographies.html" class="color-habanero-text">Photographies</a></li>
                            <li><a href="../ecrits.html" class="color-chili-text">Écrits</a></li>
                        </ul>
                    </li>
                    <li><a href="../a_propos.html">À Propos</a></li>
                    <li><a href="../contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    document.getElementById("header-placeholder").innerHTML = headerHTML;

    // Script pour le menu mobile
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    if(dropbtn) {
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('is-open');
            }
        });
    }
});