 const detalle =[
    {
        id: 1,
        titulo: "Ramo de flores variadas",
        descripcion: "flores variadas",
        imagen:"${process.env.PUBLIC_URL}/assets/variado.jpg"
    },

    {
        id: 2,
        titulo: "Ramo de rosas rojas",
        descripcion: "rosas rojas",
        imagen:"${process.env.PUBLIC_URL}/assets/rosas.jpg" 
    },

    {
        id: 3,
        titulo: "Ramo de liliums",
        descripcion: "liliums blancos",
        imagen:"${process.env.PUBLIC_URL}/assets/liliums.jpg"
    },

    {
        id: 4,
        titulo: "Ramo de flores variadas (grande)",
        descripcion: "flores variadas",
        imagen:"${process.env.PUBLIC_URL}/assets/variado2.jpg"
    }
];

const promesa = new Promise((resolve, reject) => {
    let promResuelta = true;
    setTimeout(() => {
        if (promResuelta) {
        resolve(detalle);
        } else {
        reject(console.log("error al cargar"));
        }
})}, 2000);

export default promesa;
