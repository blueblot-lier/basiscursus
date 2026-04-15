function sendHeight() {
    // Bereken de totale hoogte van de pagina
    var height = document.documentElement.scrollHeight || document.body.scrollHeight;
    
    // Stuur een bericht naar de 'parent' (jouw live omgeving) met de nieuwe hoogte
    window.parent.postMessage({
        type: 'promptlib-resize',
        height: height
    }, '*');
}

// Stuur de hoogte door zodra de pagina is geladen
window.addEventListener('load', sendHeight);

// Stuur de hoogte opnieuw door als de pagina (of het scherm) van grootte verandert
window.addEventListener('resize', sendHeight);

// Een kleine extra vertraging voor de zekerheid (voor als MkDocs menu's uitklappen)
setTimeout(sendHeight, 500);