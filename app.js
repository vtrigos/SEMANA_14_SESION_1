// Como realizar peticiones
// XmlHttpRequest (No lo vamos a ver)
// Fetch
// Axios
 
// Como manejar la data
// CallBacks (No lo vamos a ver)
// Promises
// Async/Await
 
// Vamos a realizar una peticion
 
const url = 'https://jsonplaceholder.typicode.com/users';
 
const readUsers = () => {
  // console.log('Realizando peticion...');
 
  const request = fetch('https://jsonplaceholder.typicode.com/users');
 
  request
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response);
      // Pintado de data

      const usersContainer = document.getElementById('usersContainer');

 response.forEach((user) => {

   const nameElement = document.createElement('div');
   nameElement.textContent = `${user.name}`;
   usersContainer.appendChild(nameElement);

   const usernameElement = document.createElement('div');
   usernameElement.textContent = `${user.username}`;
   usersContainer.appendChild(usernameElement);

   const latElement = document.createElement('div');
   latElement.textContent = `${user.address.geo.lat}`;
   usersContainer.appendChild(latElement);

   const lngElement = document.createElement('div');
   lngElement.textContent = `${user.address.geo.lng}`;
   usersContainer.appendChild(lngElement);

   // map
   let template = '';
   template += `
   <p>NAME</p>
   <p>USER NAME</p>
   <p>LATITUD</p>
   <p>LONGITUD</p>
 `;
   response.map((user) => {
     template += `
       <div>${user.name}</div>
       <div>${user.username}</div>
       <div>${user.address.geo.lat}</div>
       <div>${user.address.geo.lng}</div>
     `;
   });
   document.getElementById('usersContainer2').innerHTML = template;

 });
})

    .catch((error) => {
      console.log(error);
 
      // POO
      // CREAR FUNCION ERROR
 
      // const message = manageError(error.statusCode)
      // print(message);
 
      // const errorMessage = new Error(error.statusCode);
      // errorMessage.print();
 
      if (error.statusCode === 500) {
        console.log('Mensaje de servidor');
      }
 
      if (error.statusCode === 404) {
        console.log('Mensaje de cliente recuso no encontrado');
      }
    });
 
  // console.log(request);
 
  // request / response
  // verbHTTP(GET,POST,PUT,DELETE)
  // body
  // header
  // statusCode
  // Data viaja en formatoJSON
  // ENDPOINTS
};
 
readUsers();
 
// Se usa disparadoroes que serian los listeners
// DOMContentLoaded
 
// QUE SON LAS PROMISES
 
// SE CUMPLE (RESOLVE)
// NO SE CUMPLE (REJECT)
 
// const waiting = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve('Se ejecuto el code');
//  }, 2000);
// });
 
// waiting.then(() => {
//  console.log('Mensaje del resolve');
// });
 
// const logged = new Promise((resolve, reject) => {
//  const loggedIN = false;
 
//  loggedIN ? resolve('Logeado') : reject('Deslogeado');
// });
 
// logged.then(() => {
//  console.log('Estas logeado en la App...');
// });
 
// logged.catch(() => {
//  console.log('No estas logeado');
// });