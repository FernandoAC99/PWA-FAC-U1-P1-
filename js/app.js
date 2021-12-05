console.log('hola desde el js');
if(navigator.serviceWorker){
    console.log('Todo bien, adelante bro');
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log('Intenta con otro navegador');
}