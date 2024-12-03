//obtencion de archivos csv

//area
const doc_02="/Recursos/documentacion/02_modern-renewable-energy-consumption.csv";

//barra
const doc_05="/Recursos/documentacion/05_hydropower-consumption.csv";
const doc_08="/Recursos/documentacion/08_wind-generation.csv";
const doc_12="/Recursos/documentacion/12_solar-energy-consumption.csv";
const doc_16="/Recursos/documentacion/16_biofuel-production.csv";
const doc_17="/Recursos/documentacion/17_installed-geothermal-capacity.csv";


//linea
const doc_09="/Recursos/documentacion/09_cumulative-installed-wind-energy-capacity-gigawatts.csv";
const doc_13="/Recursos/documentacion/13_installed-solar-PV-capacity.csv";
// tambien incluye doc_17


//torta
const doc_04="/Recursos/documentacion/04_share-electricity-renewables.csv";
const doc_07="/Recursos/documentacion/07_share-electricity-hydro.csv";
const doc_11="/Recursos/documentacion/11_share-electricity-wind.csv";
const doc_15="/Recursos/documentacion/15_share-electricity-solar.csv";

// documentos generales

const doc_01="/Recursos/documentacion/Info_general/01_renewable-share-energy.csv"
const doc_03="/Recursos/documentacion/Info_general/03_modern-renewable-prod.csv"
const doc_06="/Recursos/documentacion/Info_general/06_hydro-share-energy.csv"
const doc_10="/Recursos/documentacion/Info_general/10_wind-share-energy.csv"
const doc_14="/Recursos/documentacion/Info_general/14_solar-share-energy.csv"



// asigna los parametros

function asignamiento(valor){

   switch(valor){
        case 2:

           carga_documento(doc_02)

        break;

        case 5:

           carga_documento(doc_05)

        break;

        case 8:

           carga_documento(doc_08)

        break;

        case 12:

           carga_documento(doc_12)

        break;

        case 16:

           carga_documento(doc_16)

        break;

        case 17:

           carga_documento(doc_17)

        break;

        case 9:

           carga_documento(doc_09)

        break;

        case 13:

           carga_documento(doc_13)

        break;

        case 4:

           carga_documento(doc_04)

        break;

        case 7:

           carga_documento(doc_07)

        break;

        case 11:

           carga_documento(doc_11)

        break;

        case 15:

           carga_documento(doc_15)

        break;
        
        case 1:

           carga_documento(doc_01)

        break;

        case 3:

           carga_documento(doc_03)

        break;

        case 6:

           carga_documento(doc_15)

        break;

        case 10:

           carga_documento(doc_10)

        break;

        case 14:

           carga_documento(doc_14)

        break;




   }

}



//caraga el historia de datos generalizado
async function carga_documento( doc ) {


   const tbody = document.getElementById("cuerpo") // obtiene el cuerpo de la tabla
   const titulos = document.querySelector("#encabezado")

   
   const datos = await fetch(doc)
   const texto= await datos.text() 

   const separador = texto.split("\n")
   const cuerpo = separador.slice(1)

   

   //crea los encabezados

   titulos.replaceChildren("")
   const encabezado = separador[0].split(",") // toma la primela linea del archivo y separa los datos cade que encuentra una ","

   for(var i=0; i<= encabezado.length;i++){

      if(i!= encabezado.length){
         const columnas = document.createElement("th")

         const nodo = document.createTextNode(encabezado[i])

         columnas.appendChild(nodo)

         titulos.appendChild(columnas)


      }
        
   }

   // recorre los datos y los inserta

   tbody.replaceChildren("")

   cuerpo.forEach((separador)=>{
      const columnas = separador.split(",")// esto separa cada columna de cada linea del archivo

      const fila= document.createElement("tr")

      columnas.forEach((dato)=>{

         const celda = document.createElement("th");
         celda.textContent = dato.trim(); 
         fila.appendChild(celda);

      })

      tbody.appendChild(fila)
   })

}

//funcion para visualizar datos en el grefico barra


