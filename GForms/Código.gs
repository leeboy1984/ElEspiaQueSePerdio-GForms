const subject = "Abre este email y descubre tu secreto para esta partida";
const sender = "EMAIL_DE_ENVIO"; // Usar solo si tienes un alias válido desde tu usuario de GSuite
const nameFrom = "Agencia Secreta"; 
let espiaHtmlBody = "";
let espiaBody = "La partida no ha hecho más que comenzar y este es el momento de que juegues tus mejores dotes deductivas y artimañas para acertar el escenario sin ser descubierto. Y si aún no has activado tus dotes deductivas solo confirmarte que efectivamente eres EL/LA ESPÍA.";
let restoHtmlBody = "";
let restoBody = "La partida no ha hecho más que comenzar y ahora es el momento de que lleves tus dotes interpretativas a otro nivel. El sistema te ha asignado el siguiente personaje 'ROL_PERSONAJE'.\n Este personaje pertenece al escenario 'ESCENARIO_ASIGNADO'.\nSi por alguna razón no lo conoces o quieres tener una referencia (la misma para todos los jugadores) aquí puedes ver una imagen del escenario: ESCENARIO_IMG_SRC"; 
var advancedOpts = { 
  name: subject, 
  name: nameFrom, 
  //replyTo: sender, 
  //from: sender
};

function onSubmit(e) {

  let itemResponses = e.response.getItemResponses();
  let jugadores = JSON.stringify(itemResponses[0].getResponse()).replace(/['"]+/g, '').split("\\n");
  nexters = shuffleArray(jugadores);
  Logger.log("Jugadores agitados: " + jugadores);

  let ssWebApp = SpreadsheetApp.openById(getFileByUrl("URL_HOJA_GOOGLE_SPREADSHEETS"));
  let workSheet = ssWebApp.getSheetByName("Personajes y Escenarios");

  // Obtenemos los escenarios
  let tabla = workSheet.getDataRange().getValues();
  // Obtenemos un número de escenario al azar
  let escenario_num = Math.floor( Math.random() * tabla.length );
  
  let escenario = tabla[escenario_num][0];
  let escenario_imagen = tabla[escenario_num][1];
  let personajes = tabla[escenario_num].slice(3);

  personajes = shuffleArray(personajes);
  // Agregamos al espía el primer jugador para garantizar que siempre está presente en la partida
  personajes = ["Espía"].concat(personajes);

  Logger.log("Escenario: " + tabla[escenario_num][0]);
  Logger.log("Url de la imagen del escenario: " + escenario_imagen);

  restoHtmlBody = HtmlService.createHtmlOutputFromFile("jugadores_email_body").getContent();
  
  for (var i = 0; i < jugadores.length; i++){
    if (i == 0){ //Esto quiere decir que es el esía y por tanto no debe conocer el escenario

      // Para verificar que todo funciona puedes usar esta salida en el log, pero no lo uses para hacer trampas ya qu entonces perderá la gracia
      Logger.log("El jugador con el email '" + jugadores[i] + "' es el espía");

      espiaHtmlBody = HtmlService.createHtmlOutputFromFile("espia_email_body").getContent();

      advancedOpts.htmlBody = espiaHtmlBody
      GmailApp.sendEmail(jugadores[i], subject, espiaBody, advancedOpts);
    }else{

      // Para verificar que todo funciona puedes usar esta salida en el log, pero no lo uses para hacer trampas ya qu entonces perderá la gracia
      Logger.log("El jugador '" + jugadores[i] + "' ha obtenido el rol '" + personajes [i] + "', por tanto aquí tienes tu ubicación: '" + escenario + "' y por si no sabes nada de él además aquí tienes una foto: '" + escenario_imagen + "'.");
      var tmpRestoHtmlBody = restoHtmlBody;
      tmpRestoHtmlBody = tmpRestoHtmlBody.replace('ROL_PERSONAJE_2', personajes [i]);
      tmpRestoHtmlBody = tmpRestoHtmlBody.replace('ROL_PERSONAJE', personajes [i]);
      tmpRestoHtmlBody = tmpRestoHtmlBody.replace('ESCENARIO_ASIGNADO', escenario);
      tmpRestoHtmlBody = tmpRestoHtmlBody.replace('ESCENARIO_IMG_SRC', escenario_imagen);
      
      restoBody = espiaBody.replace('ROL_PERSONAJE', personajes [i]);
      restoBody = espiaBody.replace('ESCENARIO_ASIGNADO', escenario);
      restoBody = espiaBody.replace('ESCENARIO_IMG_SRC', escenario_imagen);
      
      // Actualizamos el cuerpo del email. Aquí hacemos un envío a cada jugador
      advancedOpts.htmlBody = tmpRestoHtmlBody;
      GmailApp.sendEmail(jugadores[i], subject, restoBody, advancedOpts);
    }
  }
  
}

// Función para reordenar de forma aleatoria el array que reciba (usado para jugadores y personajes)
function shuffleArray(array){
  return array.sort((a, b) => 0.5 - Math.random());;
}

// Función auxiliar para ayudar a obtener el identificador del archivo
function getFileByUrl(url){ return url.match(/[-\w]{25,}/); }