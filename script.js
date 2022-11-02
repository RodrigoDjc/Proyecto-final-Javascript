
//Aplicando Fetch y traigo las ofertas de productos.json ver linea 18 y 94 tambien .
//Aplicando libreria al boton 
const btnl= document.querySelector('#btnLibreria');
function sumarCarrito(){
        let tBody = document.getElementById("tBody").children;
        let total=0;
        for (const fil of tBody) {
            total+=parseInt(fil.children[5].innerText);
        }
        let precioF = document.getElementById("precioFinal");
        precioF.innerText="$ "+total;

}
btnl.addEventListener('click', () => {
         Toastify({
            text: 'HOY TENDRA UNA GRAN SORPRESAAAAAA!',
            duration: 3000 ,
            gravity: 'top',
            position:'rigth',
             style: {
                        background: 'linear-gradient(to right, #00b09b, #96c92d)'
                }
         }).showToast();
     });
    //Aplicando Fetch y traigo las ofertas de productos.json ver linea 94 tambien 
     fetch('./productos.json')
     .then((response)=>response.json())
     .then((data)=>{
         console.log(data.ofertas)
         const info = document.getElementById("info");

         info.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");
       
       
         data.ofertas.forEach(prod =>{
           const row = document.createElement("div");
        row.classList.add("col");
        
        row.innerHTML = `
        <div id="${prod.id}" class="card h-100">
             <div class="imgOfertas" >
                <img src="./${prod.img}" class="card-img-top" alt="...">
             </div>
             
             <div style="display:flex;flex-direction:column;align-content:center"  class="card-body">
               <p style="font-weight:bold" class="card-text">${prod.name}</p>
               <p class="card-text">$ ${prod.price}</p>
               <div style="display:flex;justify-content:center">
                <button id="compra${prod.id}" style="margin-left:5em" class="compra">Añadir al Carrito </button>
                <p class="copiado" style="color:red;position:float;padding-top:1em;visibility:hidden">&nbspagregado!</p>
               </div>

               <div class="eliminar" style="display:flex;justify-content:center" >
                    <button id="eliminar${prod.id}" class="borrar" disabled="true">
                           Sacar del Carrito    
                    </button>
               </div>
                
             </div>
             `
             
       info.appendChild(row);
       
       
        })

        let botonesCompra = document.getElementsByClassName("compra");
        for (const boton of botonesCompra) {
        
        boton.addEventListener("click",()=>{
            let idCard=boton.parentNode.parentNode.parentNode.id;
            let botonEliminar = boton.parentNode.nextElementSibling.children[0]
            boton.disabled=true;
            botonEliminar.disabled=false;
            const listaProductos = document.querySelector("#listaCarrito tbody");
            const fila =  document.createElement("tr");
            fila.id=`fila${idCard}`;
            fila.innerHTML = `
            <td>${idCard}</td>
            <td class="tdImg"><img src="./${productosObjeto[idCard].img}" class="card-img-top" alt="..."></td>
            <td>${productosObjeto[idCard].name}</td>
            <td>${productosObjeto[idCard].price}</td>
            <td class="tdContent"><button class="restar">-</button><p>1</p><button class="sumar">+</button></td>
            <td><p>${productosObjeto[idCard].price}</p></td>
            <td class="imgButton"><button ><img  src="https://e1.pngegg.com/pngimages/545/62/png-clipart-sleek-xp-basic-icons-close-red-x-button-illustration-thumbnail.png" alt=""></button></td>
            `
            listaProductos.appendChild(fila);


            boton.nextElementSibling.style.visibility="visible";
            
            sumarCarrito();
            



            fila.children[4].children
            let sumar=fila.children[4].children[2];
            sumar.addEventListener("click",(e)=>{

                let cantidad =e.composedPath()[1].children[1];
                
                let valor = parseInt(cantidad.innerText);
                cantidad.innerText=valor+1;
                valor++;
                let padre = e.composedPath()[2].children;
                let total = padre[5];
                let precioXuni  = parseInt(padre[3].innerText);
                
                total.innerText=valor*precioXuni;
                sumarCarrito();

            })
            let restar = fila.children[4].children[0];
            restar.addEventListener("click",(e)=>{
                let cantidad =e.composedPath()[1].children[1];
                let valor = parseInt(cantidad.innerText);
                if(valor>1){
                    cantidad.innerText=valor-1;
                    let padre = e.composedPath()[2].children;
                    let total = padre[5];
                    let precioXuni  = parseInt(padre[3].innerText);
                    total.innerText=parseInt(total.innerText) - precioXuni;
                }
                
                sumarCarrito();
                

            })

            let cerrar = fila.children[6].children[0];
            cerrar.addEventListener("click",(e)=>{
                    let idReponer=(e.composedPath()[3].children[0].innerText);
                    if(idReponer.length===1){
                        document.getElementById("fila"+idReponer).remove()
                        let compra = document.getElementById("compra"+idReponer);
                        compra.disabled=false;
                        let eliminar=document.getElementById("eliminar"+idReponer);
                        eliminar.disabled=true;
                        
                        sumarCarrito()
                    };
                 
            })
            setTimeout(()=>{
                boton.nextElementSibling.style.visibility="hidden";
            },400)
            
            
            
 

        })


        

        }

        let botonesCancelar= document.getElementsByClassName("borrar");
        for (const boton of botonesCancelar) {
            boton.addEventListener("click",()=>{
                let botonAñadir = boton.parentNode.previousSibling.previousSibling.children[0];
                boton.disabled=true;
                botonAñadir.disabled=false;
                let idBoton=boton.parentNode.parentNode.parentNode.id
                let elementoABorrar= document.getElementById("fila"+idBoton)
                elementoABorrar.remove();
                sumarCarrito();  
            })
        }

    
 })
 

const boton1 = document.getElementById('boton1')
const input1 = document.getElementById('input1')

/*Boton busqueda index*/

boton1.addEventListener('click', () => {
   console.log(input1.value)
})

/*Caja de busqueda index*/

 input1.addEventListener('input', function() {
   console.log(input1.value)
})

 input1.addEventListener('change', function() {
   console.log(input1.value)
})

/* Submit Formulario*/

class User{
 constructor(id, username, email, password) {
   this.id = id
   this.username = username
   this.email = email
   this.password = password
   
 }
}

const formulario = document.getElementById("idForm")
const usuarios = []
let id = 1;
formulario.addEventListener("submit", (event) => {
 event.preventDefault()
 let username = document.getElementById("exampleInputUser1").value
 let email = document.getElementById("exampleInputEmail1").value
 let password = document.getElementById("exampleInputPassword1").value
 const user = new User (id, username, email, password)
 usuarios.push(user)
 console.log(usuarios)
 formulario.reset()
 id++
})

//Carrito//
//Aplicando Fetch y traigo las ofertas de productos.json
import { productosObjeto, products, cupones} from "./data.js";

const cart = [];

class ProdductCart{
    constructor(obj, qty){
        this.id = obj.id,
        this.name = obj.name,
        this.price = obj.price,
        this.quantity = qty
    }
}

const addProductToCart = (id, quantity=1) =>{
    const product = products.find(p => p.id == id)
    if(!product){
        return "El producto no esta disponible";
    }
    if(product.stock <= quantity){
        return "No tenemos suficiente stock en este momento"
    }

    const productCart = cart.find(p => p.id == id);
    if(productCart){
        productCart.quantity += quantity
    }
    else{
        cart.push((new ProdductCart(product, quantity)))
    }

    product.quantity -= quantity;

    return cart;
}


const delProductToCart = (id, qty=1) =>{
    const product = cart.find(p => p.id == id);
    if(!product){
        return "El producto no se encuentra en el carrito"
    }

product.quantity -= qty;

if(product.quantity < 1){
    const idx = cart.indexOf(p => p.id == id);
    cart.splice(idx-1,1)
    console.log(`Producto ${product.name} eliminado del carrito`);
}

return cart;

}

//Cupon//

const addCupon = (cupon) =>{
    const cuponFound = cupones.find(c => c.name == cupon && !c.apply);
    if (!cuponFound){
        return "El cupon no fue encontrado";
    }

    cuponFound.apply = true;

    cart.forEach((p) => p.price = p.price * 0.85);
    
    return cart;
}

//Precio Total//
const precioTotal = () =>{
    const suma = cart.reduce((suma, p) => suma + (p.price * p.quantity),0);
    return `Total: ${suma}`
}



console.table(addProductToCart(1,2));
console.table(addProductToCart(2,4));
console.table(addProductToCart(3,6));
console.table(delProductToCart(9,6));
console.table(delProductToCart(1,2));
const cupon = prompt("Ingrese su cupon de descuento").toUpperCase();
console.table(addCupon(cupon));
console.table(precioTotal());


// Dark Mode//

const botonDarkMode = document.getElementById('botonDarkMode')
const botonLightMode = document.getElementById('botonLightMode')
console.log(localStorage.getItem('darkMode'))

let darkMode
if (localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else{
    localStorage.setItem('darkMode', 'light')
}

if(darkMode == 'dark'){
    document.body.classList.add('darkMode')
}

botonDarkMode.addEventListener ('click', () => {
    document.body.classList.add("darkMode")
    darkMode = "dark"
    localStorage.setItem('darkMode', darkMode)
})

botonLightMode.addEventListener ('click', () => {
    document.body.classList.remove("darkMode")
    darkMode = "light "
    localStorage.setItem('darkMode', darkMode)
})


class Producto {
    constructor (nombre, precio, stock){
      this.nombre = nombre
      this.precio = precio
      this.stock = stock
  }
  }
  
  const producto1 = new Producto("Fernet Branca", 1400, 20)
  const producto2 = new Producto("Cerveza Andes IPA", 139, 15)
  const producto3 = new Producto("Gancia Americano", 120, 4)
  const producto4 = new Producto("Gancia Americano", 150, 80)
  
  const productos = [producto1,producto2,producto3,producto4]
  
  localStorage.setItem("productos", JSON.stringify (productos)) //Pasa de Objeto a Json
  console.log(JSON.parse(localStorage.getItem("productos"))) //Paso de Json a Objeto

  /*const textoDiv = document.getElementById("caja").innerHTML;
  console.log(textoDiv);

  document.getElementById("caja").innerHTML += "<h2>Productos</h2>"*/

 
const listaProductos = document.querySelectorAll("#tabla tbody");

products.map(prod =>{
  const listaProductos = document.querySelector("#tabla tbody");
  const fila =  document.createElement("tr");
  fila.innerHTML = `
  <td>${prod.id}</td>
  <td>${prod.name}</td>
  <td>${prod.price}</td>
  <td class="stock">${prod.stock}</td>  
  `
  listaProductos.appendChild(fila);

})

//estoy haciendo yo


// let contador=0;
// const compr = document.getElementById('compra');
// const eliminoc= document.getElementById('nocomprar');
// const resultado= document.getElementById('resultado');


// compr.addEventListener('click',()=>{
//     contador++;
//     actualizarContador();
// });
    
// eliminoc.addEventListener('click',()=>{
//     if (contador > 0) {
//         contador--;
//         actualizarContador();
//     };
// })

// const actualizarContador=()=>{
//     resultado.innerText=contador;
// };



