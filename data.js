const products = [
    {id:1, name:"Fernet Branca", price: 1205, stock: 20, img:"Branca.png"},
    {id:2, name:"Cerveza Corona", price: 1500, stock: 20, img:"corona.webp"},
    {id:3, name:"Cerveza Andes IPA", price: 125, stock: 20, img:"andes.jpeg"},
    {id:4, name:"Whisky Jack Daniels", price: 2000, stock: 20, img:"Jack.webp"}
]

const productosObjeto ={
    1:{name:"Fernet Branca", price: 1205, img:"Branca.png"},
    2: {name:"Cerveza Corona", price: 1500, img:"corona.webp"},
    3:{name:"Cerveza Andes IPA", price: 125,  img:"andes.jpeg"},
    4:{name:"Whisky Jack Daniels", price: 2000, img:"Jack.webp"}
}

const cupones = [
    {name: "ESCABIO", apply: false },
    {name: "DESCUENTO", apply: false }
]

/* const ofertas = [
    {id:1, name:"Fernet Branca", price: 1205, img:"Branca.png"},
    {id:2, name:"Cerveza Corona", price: 1500, img:"corona.webp"},
    {id:3, name:"Cerveza Andes IPA", price: 125, img:"andes.jpeg"},
    {id:4, name:"Whisky Jack Daniels", price: 2000, img:"Jack.webp"}
]
 */
export {products, cupones , productosObjeto}