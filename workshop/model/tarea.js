function Tarea(unNombre,unaDescripcion){
	this.descripcion = unaDescripcion;
	this.estado = 'incompleta';
	this.nombre = unNombre;
	
	this.toggle = function(){
		if(this.estado == 'incompleta')
			this.estado = 'completada';
		else
			this.estado = 'incompleta';
	}
}