import image1 from "../imgs/1.png"
import image2 from "../imgs/2.png"
export const getItems = () => {
    const data = [
        {image: image1, text: "Te salvas en la siguiente casilla mala.", value: "19"},
        {image: image2, text: "Tira un dado, el resultado sera el dinero obtenido.", value: "20"},
        {image: image1, text: "Tu oponente pierde dinero, tira un dado para definir cuanto perderá.", value: "22"},
        {image: image2, text: "No obtienes castigo de los retos en caso de perder.", value: "15"},
        {image: image1, text: "Te salvas un reto.", value: "20"},
        {image: image2, text: "Haz restroceder 2 casillas a los jugadores contrarios.", value: "25"},
    ];
    
    return Promise.resolve(data);
      
};
