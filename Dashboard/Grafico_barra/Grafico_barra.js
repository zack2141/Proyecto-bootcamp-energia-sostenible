
//barra

//barra
const d_05="/Recursos/documentacion/05_hydropower-consumption.csv";
const d_08="/Recursos/documentacion/08_wind-generation.csv";
const d_12="/Recursos/documentacion/12_solar-energy-consumption.csv";
const d_16="/Recursos/documentacion/16_biofuel-production.csv";
const d_17="/Recursos/documentacion/17_installed-geothermal-capacity.csv";

const archivos=[d_05,d_08,d_12,d_16,d_17]



async function datos_barra(archivos){

    let colombia=[]
    
    for(var q=0;q<= archivos.length;q++){
 
       if(q!=archivos.length){
          const datos = await fetch(archivos[q])
          const texto= await datos.text() 
 
          const separador = texto.split("\n")
          const cuerpo = separador.slice(1)
 
          let arreglo=[]
          // recorre los datos y los inserta
 
          cuerpo.forEach((separador)=>{
             const columnas = separador.split(",")// esto separa cada columna de cada linea del archivo
 
             arreglo.push(columnas)
             
            })
 

          var x=0;
          while(x!= arreglo.length){
                if(arreglo[x][0] =="Colombia" && arreglo[x][2]=="2021" ){
 
                    colombia.push(parseFloat(arreglo[x][3]))
 
                }
             x++
            }
 
       }
    } 

    for (let index = 0; index < colombia.length; index++) {
        console.log(colombia[index])
        
    }

    grafico(colombia)
}// fin de la funcióndatos_barra




//implementacion grafico

function grafico(datos){

    const ctx = document.getElementById('myChart')

    const titulos=['Hidrica','Eólica','solar','Biofuel', 'Geotermica']
    const valores= datos
                  //azul--- gris--- amarillo----- verde---- naranja
    const colores=['#152cd4','#e6e5dc','#ddcb03','#6ce84d', ' #eb9b10']
    const bordes=['#000000']

    const mychart = new Chart(ctx,{
        type:'bar',
         data:{
            labels: titulos,//titulos de cada porcion
            datasets:[{
                label:'Colombia 2021',// valores de cada porcion
                data: valores,
                backgroundColor:colores,// da color a las porciones
                borderColor: bordes,
                borderWidth:1.5
            },
            
        
        ]
        },
    
        options:{
            responsive:'true',
            maintainAspectRatio:'false'
        }
    })

}// fin de grafico


// ejecucion de la funcion
datos_barra(archivos)