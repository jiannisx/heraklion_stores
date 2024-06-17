import { setElements } from './globals';

function getPizzaData() {
    return [
      {
        name: "Silfio",
        address: "Leof. Dimokratias 73, Iraklio 713 06, Greece",
        city: "Heraklion",
        rating: 4.6
      },
      {
        name: "Red Corner",
        address: "Leof. Knosou, Knosos 714 09, Greece",
        city: "Knossos",
        rating: 4.2
      },
      {
        name: "Pizza Fan Ηράκλειο Κρήτης 2",
        address: "Leof. Papanastasiou 89, Iraklio 714 09, Greece",
        city: "Heraklion",
        rating: 3.5
      },
      {
        name: "Forno Luca",
        address: "85PF+PQ, Nea Alikarnassos 716 01, Greece",
        city: "Nea Alikarnassos",
        rating: 2.5
      },
      {
        name: "Pizza Antonio",
        address: "Leof. Ikarou 115, Iraklio 713 04, Greece",
        city: "Heraklion",
        rating: 4.6
      },
      {
        name: "KAFEpoieio",
        address: "Nikou Krasadaki 68, Iraklio 714 09, Greece",
        city: "Heraklion",
        rating: 4.4
      },
      {
        name: "A la Cream",
        address: "Leof. Ikarou 9, Nea Alikarnassos 716 01, Greece",
        city: "Nea Alikarnassos",
        rating: 4.3
      },
      {
        name: "Giorgio Manganiello",
        address: "Doukos Mpofor, Iraklio 712 02, Greece",
        city: "Heraklion",
        rating: null
      },
      {
        name: "5th Restaurant",
        address: "D. Beaufort 9, Iraklio 712 02, Greece",
        city: "Heraklion",
        rating: 4.7
      },
      // Add more entries as needed
    ];
}

function setStores() {
    setElements(getPizzaData(), 'pizza');    
}

export default setStores;