var myURLCliente='https://g4a5f6ff242093d-qwc5jo9lgunufwka.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client';

function leerClientes(){
    //Función GET
    $.ajax({
        url : myURLCliente,
        type : 'GET',
        dataType : 'json',

        success : function(clientes) {
	   		let cs=clientes.items;
	   		$("#listaClientes").empty();
	   		for(i=0;i<cs.length;i++){
	   			
                $("#listaClientes").append("<tr><td>"+cs[i].id+"</td><td>"+" "+cs[i].name+"</td><td>"+" "+cs[i].email+"</td><td>"+" "+cs[i].age+"</td><td>"+" <button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>"+"</td></tr>");
	   			
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
    });
}

function guardarCliente(){
    let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};

    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLCliente,
        type : 'POST',
        data:dataToSend,
        contentType:'application/json',
	    success : function(clientes) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
    });
}

function editarCliente(){
    let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};

    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLCliente,
        type : 'PUT',
        data:dataToSend,
        contentType:'application/json',
	    success : function(clientes) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
    });
}

function borrarCliente(idCliente){

	let data={
		id:idCliente
	};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLCliente,
        type : 'DELETE',
        data:dataToSend,
        contentType:'application/json',
	    success : function(clientes) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
    });
}