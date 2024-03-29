import { heroes } from "../data/heroes";

export const getHeroesByPublisher= ({publisher}) => {
    const validPublishers= ['DC Comics','Marvel Comics'];
    console.log("publisher %s ",publisher);
    console.log("validaPublisher %s",validPublishers);
   if(!validPublishers.includes(publisher)) {
        console.log(publisher);
        throw new Error(`${publisher} no es un editor válido`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher);
}