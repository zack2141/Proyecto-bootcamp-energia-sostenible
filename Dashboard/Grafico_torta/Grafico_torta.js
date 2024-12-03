
//torta
const d_07="/Recursos/documentacion/07_share-electricity-hydro.csv";
const d_11="/Recursos/documentacion/11_share-electricity-wind.csv";
const d_15="/Recursos/documentacion/15_share-electricity-solar.csv";

const archivos=[d_07,d_11,d_15]


async function datos_torta(archivos){

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
    datos(colombia)
}// fin de la funcióndatos_barra


/*implementacion de grafico torta */

function grafico(dato){

    const ctx = document.getElementById('myChart')
    const titulos=['hidrica','solar','eolica']
    const valores=dato
    const colores=['#5975ff','#fff94a','#e6e5dc']
    const bordes=['#ada799']

    const mychart = new Chart(ctx,{
        type:'pie',
        data:{
            labels: titulos,//titulos de cada porcion
            datasets:[{
                label:'valores',// valores de cada porcion
                data: valores,
                backgroundColor:colores,// da color a las porciones
                borderColor:bordes,
            }],
            options:{
                responsive:'true',
                maintainAspectRatio:'false'
            }
            
        },
        
    })

}

function datos(dato){

    const info1= document.getElementById("hidrica");
    const info2= document.getElementById("solar");
    const info3= document.getElementById("eolica");
    

    if(info1!=null && info2!=null && info3!=null ){
        let infos=[info1,info2,info3]
        

        const titulos=[
            "Energia hidrica compartida= ",
            "Energia solar compartida= ",
            "Energia eólica compartida= "
        ]
    
        for (let i =0; i< dato.length; i++) {
                
            var texto= document.createTextNode(titulos[i]+dato[i])
            infos[i].appendChild(texto)
            console.log(i,titulos[i]+dato[i])
        }
    }

}

// ejecucion de función
datos_torta(archivos)
