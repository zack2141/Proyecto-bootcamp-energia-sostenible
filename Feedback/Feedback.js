function alerta(){

    const titulo = document.getElementById('exampleFormControlInput1').value
    const texto = document.getElementById('exampleFormControlTextarea1').value

    if((titulo && texto)===""){

        Swal.fire({
            title: '¡Error!',
            text: 'Debes de ingresar alguna informacion',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          })

    }else{

        Swal.fire({
            title: 'Completado',
            text: 'la informacion ha sido exitosamente cargada',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })

        formulario()

    }


    
    
    

}

function formulario(){ 

    document.getElementById('exampleFormControlInput1').value=""
    document.getElementById('exampleFormControlTextarea1').value=""
    
}