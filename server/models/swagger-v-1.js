var ibmdb = require('ibm_db');
module.exports = function(SwaggerApi) {

/**
 * ADVPENZCRUDforSwaggerZPReadAfiliadoId
 * @param {zPReadAfiliadoInput} body zPReadAfiliado parameters
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {zPReadAfiliadoOutput} result Result object
 */
SwaggerApi.ADVPENZCRUDforSwaggerZPReadAfiliadoId = function(body, callback) {
  process.nextTick(function() {
	ibmdb.open("DATABASE=BPMXORDB;HOSTNAME=10.66.0.145;UID=db2ubpmg;PWD=E9sdm5c45d;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
		if (err) return console.log("Error abriendo la conexión: "+err);
		conn.query('SELECT * FROM ADV_AFILIADO WHERE OID ='+ body.id, function (err, data) {
			if (err){
				console.log("Error ejecutando consulta en bd: "+err);
			}else{
				/*var afiliadoOutput = server.models.zPReadAfiliadoOutput;
				afiliadoOutput = {"afiliado":{"usuarioModificacion":"string","nombreCompleto":"string","fechaNacimiento":"2018-02-23T15:17:24.283Z","primerNombre":"string","segundoApellido":"string","genero":"string","estado":"string","primerApellido":"string","oid":"string","empleadorId":"string","fechaCreacion":"2018-02-23T15:17:24.283Z","fechaModificacion":"2018-02-23T15:17:24.283Z","segundoNombre":"string","tipoId":"string","numeroId":"string","id":0},"id":0};
				callback(zPReadAfiliadoOutput);*/
				var resultado = {"afiliado":data[0],"id":data[0].OID};
				/*console.log(resultado);
				var resultado2 = {"afiliado":{"usuarioModificacion":"string","nombreCompleto":"string","fechaNacimiento":"2018-02-23T15:17:24.283Z","primerNombre":"string","segundoApellido":"string","genero":"string","estado":"string","primerApellido":"string","oid":"string","empleadorId":"string","fechaCreacion":"2018-02-23T15:17:24.283Z","fechaModificacion":"2018-02-23T15:17:24.283Z","segundoNombre":"string","tipoId":"string","numeroId":"string","id":0},"id":0};
				*/
				//console.log(data);
				callback(null,resultado);
			}
			conn.close(function () {
				console.log('Se cerró la conexión a la bd exitosamente.');
			});
		});
	});
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}

/**
 * ADVPENZCRUDforSwaggerZPCreateNotificacionId
 * @param {zPCreateNotificacionInput} body zPCreateNotificacion parameters
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {zPCreateNotificacionOutput} result Result object
 */
SwaggerApi.ADVPENZCRUDforSwaggerZPCreateNotificacionId = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}

/**
 * ADVPENZCRUDforSwaggerZPDeleteEmpleadorId
 * @param {zPDeleteEmpleadorInput} body zPDeleteEmpleador parameters
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {zPDeleteEmpleadorOutput} result Result object
 */
SwaggerApi.ADVPENZCRUDforSwaggerZPDeleteEmpleadorId = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}

/**
 * ADVPENZCRUDforSwaggerZPUpdateSolicitudId
 * @param {zPUpdateSolicitudInput} body zPUpdateSolicitud parameters
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {zPUpdateSolicitudOutput} result Result object
 */
SwaggerApi.ADVPENZCRUDforSwaggerZPUpdateSolicitudId = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}



SwaggerApi.remoteMethod('ADVPENZCRUDforSwaggerZPReadAfiliadoId',
  { isStatic: true,
  consumes: [ 'application/json', 'application/xml' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'zPReadAfiliadoInput',
       description: 'zPReadAfiliado parameters',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'zPReadAfiliadoOutput',
       arg: 'data',
       root: true } ],
  http: 
   { verb: 'post',
     path: '/ADV_PEN_zCRUDforSwagger/zPReadAfiliado' },
  description: undefined }
);

SwaggerApi.remoteMethod('ADVPENZCRUDforSwaggerZPCreateNotificacionId',
  { isStatic: true,
  consumes: [ 'application/json', 'application/xml' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'zPCreateNotificacionInput',
       description: 'zPCreateNotificacion parameters',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'zPCreateNotificacionOutput',
       arg: 'data',
       root: true } ],
  http: 
   { verb: 'post',
     path: '/ADV_PEN_zCRUDforSwagger/zPCreateNotificacion' },
  description: undefined }
);

SwaggerApi.remoteMethod('ADVPENZCRUDforSwaggerZPDeleteEmpleadorId',
  { isStatic: true,
  consumes: [ 'application/json', 'application/xml' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'zPDeleteEmpleadorInput',
       description: 'zPDeleteEmpleador parameters',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'zPDeleteEmpleadorOutput',
       arg: 'data',
       root: true } ],
  http: 
   { verb: 'post',
     path: '/ADV_PEN_zCRUDforSwagger/zPDeleteEmpleador' },
  description: undefined }
);

SwaggerApi.remoteMethod('ADVPENZCRUDforSwaggerZPUpdateSolicitudId',
  { isStatic: true,
  consumes: [ 'application/json', 'application/xml' ],
  produces: [ 'application/xml', 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'zPUpdateSolicitudInput',
       description: 'zPUpdateSolicitud parameters',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'zPUpdateSolicitudOutput',
       arg: 'data',
       root: true } ],
  http: 
   { verb: 'post',
     path: '/ADV_PEN_zCRUDforSwagger/zPUpdateSolicitud' },
  description: undefined }
);

}
