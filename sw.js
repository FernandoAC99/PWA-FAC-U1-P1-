self.addEventListener('install', (event) => {
    console.log("SW: instalado");
});

self.addEventListener('activate', (event) => {
    console.log("SW: activado y controlando la app");
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    if (event.request.url.includes('.jpg')) {

        let newResp = fetch('/images/gato.jpg');
        console.log("Es una imagen");
        event.respondWith(newResp);
    }


    if (event.request.url.includes('pages.css')) {

        let newResponse = new Response(`
        body{
            background-color: darkblue !important;
            color:  black !important;
        }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            });
        event.respondWith(newResponse);
    }
    
});