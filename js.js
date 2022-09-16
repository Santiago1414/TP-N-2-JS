
const h2 = document.getElementById("name");
const h4 = document.getElementById("price");
const input = document.querySelector("input");
const btnEnviar = document.getElementById("enviar");
const contenedor = document.getElementById("conteiner");


const pizzas = [{
  id:1,
  nombre: "Muzza",
  ingredientes: [`Muzzarella`, `aceitunas`, `Masa a la piedra`],
  precio: "$ 550",

},{
id:2,
nombre: "Jamón y morrones",
ingredientes: [`Jamón y morrones`, `aceitunas`, `Masa a la piedra`],
precio: "$ 1700",

},{
  id:3,
  nombre: "Anchoas",
  ingredientes: [`Anchoas`, `aceitunas`, `Masa a la piedra`],
  precio: "$ 1200",
  },{
id:4,
nombre: "Pepperoni",
ingredientes: [`Pepperoni`, `aceitunas`, `Masa a la piedra`],
precio: "$ 1400",
},{
id:5,
nombre: "4 quesos",
ingredientes: [`4 quesos`, `aceitunas`, `Masa a la piedra`],
precio: "$ 400",
},{
id:6,
nombre: "rúcula y jamón crudo",
ingredientes: [`Rúcula y jamón crudo`, `aceitunas`, `Masa a la piedra`],
precio: "$ 800",
}

]

btnEnviar.addEventListener("click", enviarId);

function enviarId(element) {
  element.preventDefault();
  
  const pizzaId = parseInt(input.value);


  




  if (!pizzaId) {
    mostrarError("El ID seleccionado no es válido");
    reset();
    return; 
  }
  
  if (pizzaId <= 0 || pizzaId > pizzas.length) {
    mostrarError("El ID seleccionado no es válido");
    reset();
    return; 
  }
  
  const resultado = pizzas.find((pizza) => pizza.id === pizzaId);
  renderPizza(resultado); 
}

const renderPizza = (pizza) => {
  const { nombre, precio } = pizza; 
  h2.innerHTML = `<p class= "text-render">Nombre: ${nombre} </p>`;
  
  h4.innerHTML = `<p class= "text-render">Precio: ${precio}`;
};


const mostrarError = (mensaje) => {
 
  const existeError = document.querySelector(".p-error");
  if (!existeError) {
    
    const divError = document.createElement("div");
    divError.classList.add("text", "p-error");
    divError.innerHTML = `
    <p class="error">${mensaje}</p>
    `;
    
    contenedor.appendChild(divError);

    setTimeout ( () => {
        divError.remove();
    }, 3000)
    
  }
};

