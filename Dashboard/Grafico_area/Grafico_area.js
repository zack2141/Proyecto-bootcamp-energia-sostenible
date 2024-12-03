
const d_02="/Recursos/documentacion/02_modern-renewable-energy-consumption.csv";


async function datos_area(){

    let eolica=[]
    let solar=[]
    let geotermica=[]
    let hidro=[]

    let years=year()
    
    
 
      
          const datos = await fetch(d_02)
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

                for (let  p= 0;  p< years.length; p++) {

                    if(arreglo[x][0]=="Colombia" && parseInt(arreglo[x][2]) == years[p]){

                        solar.push(arreglo[x][4])
                        eolica.push(arreglo[x][5])
                        geotermica.push(arreglo[x][3])
                        hidro.push(arreglo[x][6])
                        console.log('entro')
    
    
                    }
                    
                }
                
                

             x++
            }// fin while
        
       
    

    grafico(eolica,solar,geotermica,hidro)
}// fin de la funcióndatos_barra

datos_area()

function grafico(eolica,solar,geotermica,hidro){

  const ctx = document.getElementById('myChart')

  const labelst=['Eólica', 'Solar', 'Geo-Bio', 'Hidrica']

  const titulos=year()

  let valoresSolar= solar;
  let valoresEolica= eolica;
  let valoresGeo= geotermica;
  let valoreshidrica= hidro;

  const coloresSolar='#ddcb03'
  const coloesEolica='#8e7f7f'
  const coloresHidrica='#4000ff'
  const coloresGeo='#eba13d'

  const bordesSolar='#ddcb03'
  const bordesEolica='#8e7f7f'
  const bordesHidrica='#4000ff'
  const bordesGeo='#b07a30'

  const mychart = new Chart(ctx,{
    type:'line',
    data:{
        labels: titulos,//titulos de cada porcion
        datasets:[
          {
            // para la energia Eolica
            label: labelst[0],// valores de cada porcion
            data: valoresEolica,
            backgroundColor:coloesEolica,// da color a las porciones
            borderColor: bordesEolica,
            borderWidth:1.5,
            fill: {
              target: 'origin',
              above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }
        },
        {
          // para la energia solar
            label: labelst[1],// valores de cada porcion
            data: valoresSolar,
            backgroundColor:coloresSolar,// da color a las porciones
            borderColor: bordesSolar,
            borderWidth:1.5,
            fill: {
              target: 'origin',
              above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }

        },
        {
          // para la energia Geo
            label: labelst[2],// valores de cada porcion
            data: valoresGeo,
            backgroundColor:coloresGeo,// da color a las porciones
            borderColor: bordesGeo,
            borderWidth:1.5,
            fill: {
              target: 'origin',
              above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }

        },
        {
          // para la energia hidrica
            label: labelst[3],// valores de cada porcion
            data: valoreshidrica,
            backgroundColor:coloresHidrica,// da color a las porciones
            borderColor: bordesHidrica,
            borderWidth:1.5,
            fill: {
              target: 'origin',
              above: 'rgb(255, 0, 0, 0.4)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }

        }
      ]
    },
    
    options:{
      responsive:'true',
      maintainAspectRatio:'false'
  }
  })

}



function year(){

  const limite=2022

  let arr = []

  for (let i =2012;i <= limite ;i++) {

      arr.push(i)
      
  }

  return arr


}