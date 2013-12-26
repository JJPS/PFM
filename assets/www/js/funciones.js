/**
 * @fileoverview Libreria auxiliar SinTracking
 * @author jperez
 * @version 0.1
 * 
 */

/**
 * init
 * 
 * Añade un listener que indica el estado del dispositivo.
 * 
 * Inicializa la BBDD si el dispositivo esta 
 * disponible.
 * 
 */
function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
    // Inicializamos la BBDD
    var db = window.openDatabase("sintraking", "1.0", "SinTraking", 4056)
    db.transaction(inicializarBBDD, errorCB, successCB);
    db.close;
}


/**
 * var tablaDosificacion
 * 
 * Variable de entorno que almacena en un array los datos referentes
 * a las dosificaciones de medicamentos relacionandolos con unos
 * niveles de medicacion
 * 
 */
var tablaDosificacion;
tablaDosificacion = [
        [ '1,56', 'pastilla_unoctavo.png', 'pastilla_descanso.png',
                'pastilla_descanso.png', null, null ],
        [ '2,08', 'pastilla_unoctavo.png', 'pastilla_descanso.png', null, null,
                null ],
        [ '2,6', 'pastilla_unoctavo.png', 'pastilla_unoctavo.png',
                'pastilla_descanso.png', null, null ],
        [ '3,12', 'pastilla_unoctavo.png', 'pastilla_unoctavo.png',
                'pastilla_unoctavo.png', 'pastilla_descanso.png', null ],
        [ '3,5', 'pastilla_unoctavo.png', null, null, null, null ],
        [ '4,6', 'pastilla_uncuarto.png', 'pastilla_unoctavo.png',
                'pastilla_unoctavo.png', 'pastilla_unoctavo.png', null ],
        [ '5,08', 'pastilla_uncuarto.png', 'pastilla_unoctavo.png',
                'pastilla_unoctavo.png', null, null ],
        [ '5,56', 'pastilla_uncuarto.png', 'pastilla_unoctavo.png', null, null,
                null ],
        [ '6,04', 'pastilla_uncuarto.png', 'pastilla_uncuarto.png',
                'pastilla_unoctavo.png', null, null ],
        [ '6,48', 'pastilla_uncuarto.png', 'pastilla_uncuarto.png',
                'pastilla_uncuarto.png', 'pastilla_unoctavo.png', null ],
        [ '7,00', 'pastilla_uncuarto.png', null, null, null, null ],
        [ '9,00', 'pastilla_unmedio.png', 'pastilla_uncuarto.png',
                'pastilla_uncuarto.png', 'pastilla_uncuarto.png', null ],
        [ '10,00', 'pastilla_unmedio.png', 'pastilla_uncuarto.png',
                'pastilla_uncuarto.png', null, null ],
        [ '11,00', 'pastilla_unmedio.png', 'pastilla_uncuarto.png', null, null,
                null ],
        [ '12,00', 'pastilla_unmedio.png', 'pastilla_unmedio.png',
                'pastilla_uncuarto.png', null, null ],
        [ '13,00', 'pastilla_unmedio.png', 'pastilla_unmedio.png',
                'pastilla_unmedio.png', 'pastilla_uncuarto.png', null ],
        [ '14,00', 'pastilla_unmedio.png', null, null, null, null ],
        [ '16,00', 'pastilla_trescuartos.png', 'pastilla_unmedio.png',
                'pastilla_unmedio.png', 'pastilla_unmedio.png', null ],
        [ '17,00', 'pastilla_trescuartos.png', 'pastilla_unmedio.png',
                'pastilla_unmedio.png', null, null ],
        [ '18,00', 'pastilla_trescuartos.png', 'pastilla_unmedio.png', null,
                null, null ],
        [ '19,00', 'pastilla_trescuartos.png', 'pastilla_trescuartos.png',
                'pastilla_unmedio.png', null, null ],
        [ '20,00', 'pastilla_trescuartos.png', 'pastilla_trescuartos.png',
                'pastilla_trescuartos.png', 'pastilla_unmedio.png', null ],
        [ '21,00', 'pastilla_trescuartos.png', null, null, null, null ],
        [ '23,00', 'pastilla_una.png', 'pastilla_trescuartos.png',
                'pastilla_trescuartos.png', 'pastilla_trescuartos.png', null ],
        [ '24,00', 'pastilla_una.png', 'pastilla_trescuartos.png',
                'pastilla_trescuartos.png', null, null ],
        [ '25,00', 'pastilla_una.png', 'pastilla_trescuartos.png', null, null,
                null ],
        [ '26,00', 'pastilla_una.png', 'pastilla_una.png',
                'pastilla_trescuartos.png', null, null ],
        [ '27,00', 'pastilla_una.png', 'pastilla_una.png', 'pastilla_una.png',
                'pastilla_trescuartos.png', null ],
        [ '28,00', 'pastilla_una.png', null, null, null, null ],
        [ '30,00', 'pastilla_unayuncuarto.png', 'pastilla_una.png',
                'pastilla_una.png', 'pastilla_una.png', null ],
        [ '31,00', 'pastilla_unayuncuarto.png', 'pastilla_una.png',
                'pastilla_una.png', null, null ],
        [ '32,00', 'pastilla_unayuncuarto.png', 'pastilla_una.png', null, null,
                null ],
        [ '33,00', 'pastilla_unayuncuarto.png', 'pastilla_unayuncuarto.png',
                'pastilla_una.png', null, null ],
        [ '34,00', 'pastilla_unayuncuarto.png', 'pastilla_unayuncuarto.png',
                'pastilla_unayuncuarto.png', 'pastilla_una.png', null ],
        [ '35,00', 'pastilla_unayuncuarto.png', null, null, null, null ],
        [ '37,00', 'pastilla_unaymedia.png', 'pastilla_unayuncuarto.png',
                'pastilla_unayuncuarto.png', 'pastilla_unayuncuarto.png', null ],
        [ '38,00', 'pastilla_unaymedia.png', 'pastilla_unayuncuarto.png',
                'pastilla_unayuncuarto.png', null, null ],
        [ '39,00', 'pastilla_unaymedia.png', 'pastilla_unayuncuarto.png', null,
                null, null ],
        [ '40,00', 'pastilla_unaymedia.png', 'pastilla_unaymedia.png',
                'pastilla_unayuncuarto.png', null, null ],
        [ '41,00', 'pastilla_unaymedia.png', 'pastilla_unaymedia.png',
                'pastilla_unaymedia.png', 'pastilla_unayuncuarto.png', null ],
        [ '42,00', 'pastilla_unaymedia.png', null, null, null, null ],
        [ '44,00', 'pastilla_unaytrescuartos.png', 'pastilla_unaymedia.png',
                'pastilla_unaymedia.png', 'pastilla_unaymedia.png', null ],
        [ '45,00', 'pastilla_unaytrescuartos.png', 'pastilla_unaymedia.png',
                'pastilla_unaymedia.png', null, null ],
        [ '46,00', 'pastilla_unaytrescuartos.png', 'pastilla_unaymedia.png',
                null, null, null ],
        [ '47,00', 'pastilla_unaytrescuartos.png',
                'pastilla_unaytrescuartos.png', 'pastilla_unaymedia.png', null,
                null ],
        [ '48,00', 'pastilla_unaytrescuartos.png',
                'pastilla_unaytrescuartos.png', 'pastilla_unaytrescuartos.png',
                'pastilla_unaymedia.png', null ],
        [ '49,00', 'pastilla_unaytrescuartos.png', null, null, null, null ],
        [ '51,00', 'pastilla_dos.png', 'pastilla_unaytrescuartos.png',
                'pastilla_unaytrescuartos.png', 'pastilla_unaytrescuartos.png',
                null ],
        [ '52,00', 'pastilla_dos.png', 'pastilla_unaytrescuartos.png',
                'pastilla_unaytrescuartos.png', null, null ],
        [ '53,00', 'pastilla_dos.png', 'pastilla_unaytrescuartos.png', null,
                null, null ],
        [ '54,00', 'pastilla_dos.png', 'pastilla_dos.png',
                'pastilla_unaytrescuartos.png', null, null ],
        [ '55,00', 'pastilla_dos.png', 'pastilla_dos.png', 'pastilla_dos.png',
                'pastilla_unaytrescuartos.png', null ],
        [ '56,00', 'pastilla_dos.png', null, null, null, null ],
        [ '58,00', 'pastilla_dosycuarto.png', 'pastilla_dos.png',
                'pastilla_dos.png', 'pastilla_dos.png', null ] ];

/**
 * generapauta
 * 
 * @param variacion
 *            Niveles que debe aumentar o disminuir el paciente en
 *            base al valor obtenido en la medición INR.
 * @param nivelPaciente
 *            Nivel actual del paciente en base a la dosificacion
 *            en gramos semana que tiene de anticoagulantes
 * @return Array que contiene la nueva dosificacion semanal.
 * 
 */
function generapauta(variacion, nivelPaciente) {
    var pauta = new Array();
    var nuevoNivel = nivelPaciente + variacion;
    var j = tablaDosificacion[nuevoNivel].length;
    // Recoremos la dosificacion de derecha a izquierda en caso de incremento de la dosificacion
    if (variacion >= 0) {
        var indice = 0;
        while (indice < 7) {
            for (i = 1; i < 5; i++) {
                if (tablaDosificacion[nuevoNivel][i] != null) {
                    pauta[indice] = tablaDosificacion[nuevoNivel][i];
                    indice++;
                }
            }
        }
    }
    // Recorremos la dosificacion de izquierda a derecha en caso de decremento de la dosificacion
    if (variacion < 0) {
        var indice = 0;
        while (indice < 7) {
            for (i = 5; i > 0; i--) {
                if (tablaDosificacion[nuevoNivel][i] != null) {
                    pauta[indice] = tablaDosificacion[nuevoNivel][i];
                    indice++;
                }
            }
        }
    }
    return pauta;
}

/**
 * Devuelve la nueva dosificacion del paciente
 * 
 * @param inr
 *            Valor INR medido por el paciente.
 * @param inrRecomendado
 *            Valor INR recomendado al paciente por el medico. Se basa en el
 *            tipo de enfermedad que se padece.
 * @param dosificacion
 *            Valor en gr/semana de farmaco que toma el paciente.
 * @return Array que contiene la dosificación semanal, el nuevo valor del INR, y la 
 *          fecha que debe realizar la nueva medición.
 * 
 */
function pauta(dosificacion, inr, inrRecomendado) {
    // Tabla de dosficaciones.
    // Hospital de la Santa Creu i Sant Pau.
    var nivelPaciente = 0;
    // Averiguamos el nivel del paciente en base a la dosificacion actual del
    // Paciente
    var difAux = 100;
    for ( var i = 1; i < tablaDosificacion.length; i++) {
        tmpCalc = Math
                .abs(parseFloat(tablaDosificacion[i][0].replace(",", "."))
                        - parseFloat(dosificacion.replace(",", ".")));
        if (tmpCalc < difAux) {
            difAux = tmpCalc;
            nivelPaciente = i;
        }
    }
    ;
    
    var valInr = parseFloat(inr.replace(",", "."));
    // INR Recomendado 0 es para 2-3
    // INR Recomendado 1 es para 2,5-3,5
    if (inrRecomendado == 0) {
        switch (true) {
        case (valInr < 1.4):
            // alert("Aumentar 2 niveles analisis a 3 dias");
            var tmp = generapauta(+2, nivelPaciente);
            tmp[7] = "+2";
            tmp[8] = "3";
            return tmp;
            break;
        case (valInr < 1.9):
            // alert("Aumentar 1 niveles analisis a 4 dias");
            var tmp = generapauta(+1, nivelPaciente);
            tmp[7] = "+1";
            tmp[8] = "4";
            return tmp;
            break;
        case (valInr < 3.3):
            // alert("Mantener nivel analisis a 7 dias");
            var tmp = generapauta(0, nivelPaciente);
            tmp[7] = "+0";
            tmp[8] = "7";
            return tmp;
            break;
        case (valInr < 5):
            // alert("Disminuir 1 niveles analisis a 7 dias");
            var tmp = generapauta(-1, nivelPaciente);
            tmp[7] = "-1";
            tmp[8] = "7";
            return tmp;
            break;
        case (valInr <= 7):
            // alert("Un dia sin pastilla, disminuir 2 niveles analisis a 4
            // dias");
            var tmp = generapauta(-2, nivelPaciente);
            tmp[7] = "-2";
            tmp[8] = "4";
            return tmp;
            break;
        default:
            alert("Acuda a su Centro de Salud inmediatamente");
        }
    } else if (inrRecomendado == 1) {
        switch (true) {
        case (valInr < 1.6):
            // alert("Aumentar 2 niveles analisis a 3 dias");
            var tmp = generapauta(+2, nivelPaciente);
            tmp[7] = "+2";
            tmp[8] = "3";
            return tmp;
            break;
        case (valInr < 2.4):
            // alert("Aumentar 1 niveles analisis a 4 dias");
            var tmp = generapauta(+1, nivelPaciente);
            tmp[7] = "+1";
            tmp[8] = "4";
            return tmp;
            break;
        case (valInr < 3.7):
            // alert("Mantener nivel analisis a 7 dias");
            var tmp = generapauta(0, nivelPaciente);
            tmp[7] = "+0";
            tmp[8] = "7";
            return tmp;
            break;
        case (valInr < 5):
            // alert("Disminuir 1 niveles analisis a 7 dias");
            var tmp = generapauta(-1, nivelPaciente);
            tmp[7] = "-1";
            tmp[8] = "7";
            return tmp;
            break;
        case (valInr <= 7):
            // alert("Un dia sin pastilla, disminuir 2 niveles analisis a 4
            // dias");
            // Ver desplazar el array
            var tmp = generapauta(-2, nivelPaciente);
            tmp[7] = "-2";
            tmp[8] = "4";
            return tmp;
            break;
        default:
            alert("Acuda a su Centro de Salud inmediatamente");
        }
    }
};

/**
 * calculoPauta
 * 
 * @return Array que contiene la dosificación semanal, el nuevo valor del INR, y la 
 *         fecha que debe realizar la nueva medición.
 * 
 */

function calculoPauta() {
    // Dosificacion actual del paciente. Desde formulario usuario
    var dosificacion = document.form_usuario.dosificacion.value;
    // Medida del INR del paciente. Recuperada del formulario #medicionINR
    var inr = document.form_inr.inr.value;
    // Medida del INR diagnosiicado. Recuperado desde formulario usuario
    var INRdiagnosticado = $("input:radio[name=patologiaUpdate]:checked").val();
    // Llamada a la fucion pauta y obtemos la dosificaicion y la fecha de analisis en un array
    return pauta(dosificacion, inr, INRdiagnosticado);
};

/**
 * inicializarBBDD
 * 
 * Inicialiación de la base de datos local
 * 
 */
function inicializarBBDD(db) {
    //db.executeSql('DROP TABLE USUARIO');
    //db.executeSql('DROP TABLE INR');
    db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO (id , nombre, apellidos, patologia, dosificacion, tratamientoscronicos, otrasenfermedades)');
    db.executeSql('CREATE TABLE IF NOT EXISTS TRINR (idINR, fecha, dosificacion, inr)');
    db.executeSql('CREATE TABLE IF NOT EXISTS CALENDARIO ( fecha, dosificacion, analisis)');
    
}

/**
 * guardarUsuario
 * 
 * Inserta un nuevo usuario en la tabla Usuario
 *  
 */
function guardarUsuario() {
    // Abrimos la BBDD y la inicializamos
    var db = window.openDatabase("sintraking", "1.0", "SinTraking", 102400)
    db.transaction(inicializarBBDD, errorCB, successCB);
    // Almacenamos los datos del formulario en la BBDD
    db.transaction(insertCB, errorCB, successAlta);
    db.close;
}

/**
 * insertCB
 * 
 * Captura los datos de un nuevo usuario del menu de usurario
 * y los inserta en la tabla Usuario
 *  
 */
function insertCB(db) {
    // Capturamos datos del formulario
    var nombre = document.alta_usuario.nombre.value;
    var apellidos = document.alta_usuario.apellidos.value;
    var patologia = $("input:radio[name=patologia]:checked").val();
    var dosificacion = document.alta_usuario.dosificacion.value;
    var tratamientoscronicos = document.alta_usuario.tratamientoscronicos.value;
    var otrasenfermedades = document.alta_usuario.otrasenfermedades.value;
    // alert (nombre+" "+apellidos+" "+patologia+" "+dosificacion+"
    // "+tratamientoscronicos+" "+otrasenfermedades);
    // Guardamos el registro en la BBDD
    db
            .executeSql(
                    'INSERT INTO USUARIO (id,nombre,apellidos,patologia,dosificacion,tratamientoscronicos,otrasenfermedades) VALUES (?,?,?,?,?,?,?)',
                    [ 1, nombre, apellidos, patologia, dosificacion,
                            tratamientoscronicos, otrasenfermedades ]);
}

/**
 * sucessAlta
 * 
 * Muestra ventana informativa que el usuario ha sido dado de alta
 * y redirecciona la salida al menu principal
 */
function successAlta() {
    alert("\nUsuario dado de alta\n");
    $.mobile.changePage("index.html#menu", {
        transition : "pop"
    });
}

/**
 * recuperarUsuario
 * 
 * Recupera el usuario almacenado en la tabla Usuario
 * 
 */

function recuperarUsuario() {
    // Abrimos la BBDD y la inicializamos
    var db = window.openDatabase("sintraking", "1.0", "SinTraking", 4056)
    db.transaction(selectCB, errorCB, successCB);
    db.close;
}

/**
 * selectCB
 * 
 * @param db Base de datos
 * 
 * Realiza un Select de la tabla usuario
 * 
 */

function selectCB(db) {
    db.executeSql("SELECT * FROM USUARIO", [], querySuccess, errorCB);
}

/**
 * querySuccess
 * 
 * @param db Base de datos
 * 
 * @param results Resulset que se ha obtenido de la consulta que ha tenido exito.
 *  
 * Lee los valores del resulset 
 */

function querySuccess(db, results) {
    // Recuperamos los valores del resulset
    var fila = results.rows.item(0);
    var id = fila.id;
    var nombre = fila.nombre;
    var apellidos = fila.apellidos;
    var patologia = fila.patologia;
    var dosificacion = fila.dosificacion;
    var tratamientoscronicos = fila.tratamientoscronicos;
    var otrasenfermedades = fila.otrasenfermedades;
    // Inyectamos en el .html el código de visualización y refrescamos el contenido.
    $('#form_usuario').empty();
    $('#form_usuario').append(
            "<label>Nombre:</label> <input type='text' name='nombre' id='nombre' value='"
                    + nombre + "' placeholder='Nombre'/></div>");
    $('[type="text"]').textinput();
    $('#form_usuario')
            .append(
                    "<label>Apellidos:</label><input type='text' name='apellidos' id='apellidos' value='"
                            + apellidos + "' placeholder='Apellidos'/></div>");
    $('[type="text"]').textinput();

    // Más de 5 horas de investigacion. desde aqui hasta .....
    if (patologia == 0) {
        $('#form_usuario')
                .append(
                        "<fieldset data-role='controlgroup' data-type='horizontal' data-role='fieldcontain'>"
                                + "<legend>INR Diagnosticado</legend>"
                                + "<input type='radio' name='patologiaUpdate' id='patologia0' value='0' checked='checked'/>"
                                + "<label for='patologia0'>2-3 INR</label>"
                                + "<input type='radio' name='patologiaUpdate' id='patologia1' value='1'/>"
                                + "<label for='patologia1'>2,5 - 3,5 INR</label></fieldset>");
    } else {
        $('#form_usuario')
                .append(
                        "<fieldset data-role='controlgroup' data-type='horizontal' data-role='fieldcontain'>"
                                + "<legend>INR Diagnosticado</legend>"
                                + "<input type='radio' name='patologiaUpdate' id='patologia0' value='0' />"
                                + "<label for='patologia0'>2-3 INR</label>"
                                + "<input type='radio' name='patologiaUpdate' id='patologia1' value='1' checked='checked'/>"
                                + "<label for='patologia1'>2,5 - 3,5 INR</label></fieldset>");
    }
    $('#form_usuario').trigger('create');
    //   ..... aqui. No conservaba el estilo. 
    $('#form_usuario')
            .append(
                    "<label>Dosificacion:</label><input type='text' name='dosificacion' id='dosificacion' value='"
                            + dosificacion
                            + "' placeholder='Dosificacion'/></div>");
    $('[type="text"]').textinput();
    $('#form_usuario')
            .append(
                    "<label>Tratamientos Cronicos:</label><input type='text' name='tratamientoscronicos' id='tratamientoscronicos' value='"
                            + tratamientoscronicos
                            + "' placeholder='Tratamientos Cronicos'/></div>");
    $('[type="text"]').textinput();
    $('#form_usuario')
            .append(
                    "<label>Otras Enfermedades:</label><input type='text' name='otrasenfermedades' id='otrasenfermedades' value='"
                            + otrasenfermedades
                            + "' placeholder='Otras enfermedades'/></div>");
    $('[type="text"]').textinput();
    $('#form_usuario')
            .append(
                    "<div align='center'><input type='button' name='inr' data-icon='delete' data-inline='true' data-mini='true' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='c' class='ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-inline ui-btn-icon-left ui-btn-up-c' value='Cancelar' onclick='history.back()'><input type='button' name='inr' data-icon='check' data-inline='true' data-mini='true' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='b' class='ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-inline ui-btn-icon-left ui-btn-up-c' value='Guardar' onclick='actualizarUsuario()'> </div> ");
    $('[type="button"]').button();

}

/**
 * actualizarUsuario
 * 
 * Actualiza los datos de formulario usuario en la tabla
 * de Usuario
 */

function actualizarUsuario() {
    // Abrimos la BBDD y la inicializamos
    var db = window.openDatabase("sintraking", "1.0", "SinTraking", 4056)
    db.transaction(updateCB, errorCB, successUpdate);
    db.close;
}

/**
 * UpdateCB
 * 
 * @param db Base de datos
 * 
 * Captura los datos del formulario del Usuario y ejecuta
 * un Update del registro del usuario en la tabla Usuario
 */

function updateCB(db) {
    // Capturamos datos del formulario
    var nombreVar = document.form_usuario.nombre.value;
    var apellidosVar = document.form_usuario.apellidos.value;
    var patologiaVar = $("input:radio[name=patologiaUpdate]:checked").val();
    var dosificacionVar = document.form_usuario.dosificacion.value;
    var tratamientoscronicosVar = document.form_usuario.tratamientoscronicos.value;
    var otrasenfermedadesVar = document.form_usuario.otrasenfermedades.value;
    // Guardamos el registro en la BBDD
    var ordenSQL = 'UPDATE USUARIO SET nombre="' + nombreVar + '",apellidos="'
            + apellidosVar + '" ,patologia=' + patologiaVar + ' ,dosificacion='
            + dosificacionVar + ' ,tratamientoscronicos="'
            + tratamientoscronicosVar + '" ,otrasenfermedades="'
            + otrasenfermedadesVar + '"  WHERE id=1';
    // alert (ordenSQL);
    db.executeSql(ordenSQL);
}


/**
 * guardarCalendario
 * 
 * Almacena en la tabla calendario los valores de la nueva dosificaicón
 * del medicamento  
 *  
 */   
function guardarCalendario(){
    // Abrimos la BBDD
    var db = window.openDatabase("sintraking", "1.0", "SinTraking", 4056);
    // Inicializamos el calendario
    db.transaction(inicializarCalendario, errorCB, successCB);
    // Insertamos la nueva dosificacion en la Tabla Calendario
    db.transaction(insertCalendario, errorCalendario, successCalendario)
    db.close;
}

/**
 * inicializarCalendario
 * 
 * Vacía la tabla de calendario para almacenar nuevos valores  
 *  
 */   
function inicializarCalendario(db){
    db.executeSql('DROP TABLE CALENDARIO');    
    db.executeSql('CREATE TABLE IF NOT EXISTS CALENDARIO ( fecha, dosificacion, analisis)');
}

/**
 * insertCalendario
 * 
 * Inserta en la tabla calendario una cadena que contiene la dosificacion
 * de medicamento que debe tomar un paciente y una marca en caso que 
 * deba hacerse una prueba de INR
 * 
 */
function insertCalendario(db){
    var pauta=calculoPauta();
    // Almacenamos las dosificaciones en el calendario
    var a=pauta[8];
    // alert (a);
    var f=new Date();
    var tiempo=f.getTime();
    for ( var int = 0; int < 7; int++) {
        var dosificacion=pauta[int];
        // Construimos el dia de la semana
        fecha = f.getDay();
        switch (fecha) {
        case 0:
            fecha="Dom -";
            break;
        case 1:
            fecha="Lun -";
            break;
        case 2:
            fecha="Mar -";
            break;
        case 3:
            fecha="Mie -";
            break;
        case 4:
            fecha="Jue -";
            break;
        case 5:
            fecha="Vie -";
            break;
        case 6:
            fecha="Sab -";
            break;
        default:
            break;
        }
        //alert (fecha);
        // Si el dia 'int+1' hay analisis, incluye la marca de 'Check'
        if (a==(int+1)) {
            analisis="analisis.png";
        } else {
            analisis="sinanalisis.png";
        }
        // Inserta el analisis en la tabla Calendario
        db.executeSql('INSERT INTO CALENDARIO (fecha, dosificacion, analisis) VALUES (?,?,?)',[fecha,dosificacion,analisis]);   
        // Incrementamos la fecha en un dia
        var milisegundos = parseInt((1+int)*24*60*60*1000);
        f.setTime(tiempo+milisegundos);
    }  
}

/**
 * sucessCalendario
 * 
 * Muestra ventana informativa que la dosificacion ha tenido exito
 * y redirecciona la salida al menu principal
 */
function successCalendario() {
    alert("\nLa dosificacion ha sido pautada\n");
    $.mobile.changePage("index.html#menu", {
        transition : "pop"
    });    
}

/**
 * recuperarCalendario
 * 
 * Lee la tabla Calendario y la muestra en el menu 
 * de Calendario
 */

function recuperarCalendario() {
    // Abrimos la BBDD y la inicializamos
    var db = window.openDatabase("sintraking", "1.0", "SinTraking", 4056)
    db.transaction(selectCalendario, errorEmpty, successCB);
    db.close;
}

/**
 * selectCalendario
 * 
 * @param db Base de datos
 * 
 * Realiza una consulta de todos los registros que contiene la tabla
 * calendario.
 */
function selectCalendario(db) {
    db.executeSql("SELECT * FROM CALENDARIO", [], querySuccessCalendario, errorCB);
}

/**
 * querySuccessCalendario
 * 
 * @param db Base de Datos
 * 
 * @param results Resulset que se ha obtenido de la consulta que ha tenido exito.
 * 
 * Muestra en el menu calendario la medicación que se ha pautado.
 * 
 */
function querySuccessCalendario(db, results){
    // Vacia el menu de calendario
    $('#form_calendario').empty();
    // Inyecta en el menu calendario los valores recuperados
    // del resulset
    $('#form_calendario').append(
            "<div style='vertical-alingn:middle;'>");         
    var tmp="";
    for ( var int = 0; int < 7; int++) {
        var fila=results.rows.item(int);
        var fecha=fila.fecha;
        var dosificacion=fila.dosificacion;
        var analisis=fila.analisis;
        $('#form_calendario').append(
                "<h2>"+fecha+
                "<img src='./images/"+dosificacion +"'</img>" +
                "<img src='./images/"+analisis+"'</img></h2>");
    }
    $('#form_calendario').append(
            "</div>");
    $('#form_calendario').html();   
    $('#form_calendario').append(
            "<div align='center'>" +
            "<input type='button' name='inr' data-icon='arrow-l' data-inline='true' data-mini='true' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='b' class='ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-inline ui-btn-icon-left ui-btn-up-c' value='Volver' onclick='history.back()'>" +
            "</div> ");
$('[type="button"]').button();
$('#form_calendario').trigger('create'); 
}

/**
 * errorCB
 * 
 * Muestra un mensaje en caso de error en el proceso de ejecución de una consulta SQL
 * 
 */

function errorCB() {
    alert("Error procesing SQL ");
}

/**
 * errorEmpty
 * 
 * Redirige la salida hacia el menu del calendario.
 * 
 */
function errorEmpty(){
    $.mobile.changePage("index.html#calendario", {
        transition : "pop"
    });
}

/**
 * errorCalendario
 * 
 * Muestra un error en caso de no dosificarse medicacion
 * Y nos redirige al menu principal
 */

function errorCalendario() {
    alert("No se ha pautado medicacion");
    $.mobile.changePage("index.html#menu", {
        transition : "pop"
    });
}

/**
 * successCB
 * 
 * Si la funcion SQL se ejecuta con normalidad muestra cartel informativo
 * Está comentado porque no queremos que muestre esta información
 */
function successCB() {
    // alert("SQL Ok.");
}

/**
 * successUpdate
 * 
 * Si el usuario se modifica correctamente muestra cartel notificandolo
 * Y nos redirige al menu principal
 */

function successUpdate() {
    
    
    alert("\nUsuario modificado correctamente\n");
    $.mobile.changePage("index.html#menu", {
        transition : "pop"
    });
}
    
    

