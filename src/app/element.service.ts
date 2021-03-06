import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  element =  [
    // tslint:disable-next-line:max-line-length
    {number: 1, name: 'H', subtext: 'Brint',  mass: '1.008', link: 'http://www.google.com'},
    {number: 2, name: 'He', subtext: 'Helium',  mass:' 4.0026', link: 'http://www.google.com'},
    {number: 3, name: 'Li', subtext: 'Lithium',  mass: '6.94', link: 'http://www.google.com'},
    {number: 4, name: 'Be',  subtext: 'Beryllium', mass:' 0.0122', link: 'http://www.google.com'},
    {number: 5, name: 'B', subtext: 'Bor', mass: '10.81', link: 'http://www.google.com'},
    {number: 6, name: 'C', subtext: 'Carbon', mass: '12.011', link: 'http://www.google.com'},
    {number: 7, name: 'N', subtext: 'Nitrogen', mass: '14.007', link: 'http://www.google.com'},
    {number: 8, name: 'O', subtext: 'Oxygen', mass:' 15.999', link: 'http://www.google.com'},
    {number: 9, name: 'F', subtext: 'Fluorine', mass: '18.998', link: 'http://www.google.com'},
    {number: 10, name: 'Ne', subtext: 'Neon', mass: '20.180', link: 'http://www.google.com'},
    {number: 11, name: 'Na', subtext: 'Sodium', mass: '22.990', link: 'http://www.google.com'},
    {number: 12, name: 'Mg', subtext: 'Magnesium', mass: '24.305', link: 'http://www.google.com'},
    {number: 13, name: 'Ai', subtext: 'Aluminium', mass:'26.982', link: 'http://www.google.com'},
    {number: 14, name: 'Si', subtext: 'Silicon', mass: '28.085', link: 'http://www.google.com'},
    {number: 15, name: 'P', subtext: 'Phosphorus', mass: '30.974', link: 'http://www.google.com'},
    {number: 16, name: 'S', subtext: 'Sulfur', mass: '32.06', link: 'http://www.google.com'},
    {number: 17, name: 'Cl', subtext: 'Chlorine', mass: '35.45', link: 'http://www.google.com'},
    {number: 18, name: 'Ar', subtext: 'Argon', mass: '39.948', link: 'http://www.google.com'},
    {number: 19, name: 'P', subtext: 'Potassium', mass: '39.098', link: 'http://www.google.com'},
    {number: 20, name: 'Mg', subtext: 'Magnessium', mass: '24.305', link: 'http://www.google.com'},
    {number: 21, name: 'Sc', subtext: 'Scandium', mass: '44.956', link: 'http://www.google.com'},
    {number: 22, name: 'Ti', subtext: 'Titanium', mass: '47.867', link: 'http://www.google.com'},
    {number: 23, name: 'V', subtext: 'Vanadium', mass: '50.942', link: 'http://www.google.com'},
    {number: 24, name: 'Cr', subtext: 'Chromium', mass: '51.996', link: 'http://www.google.com'},
    {number: 25, name: 'Mn', subtext: 'Manganese', mass: '54.938', link: 'http://www.google.com'},
    {number: 26, name: 'Fe', subtext: 'Iron', mass: '55.845', link: 'http://www.google.com'},
    {number: 27, name: 'Co', subtext: 'Cobalt', mass: '58.933', link: 'http://www.google.com'},
    {number: 28, name: 'Ni', subtext: 'Nickel', mass:'58.693', link: 'http://www.google.com'},
    {number: 29, name: 'Cu', subtext: 'Copper', mass: '63.546', link: 'http://www.google.com'},
    {number: 30, name: 'Zn', subtext: 'Zinc', mass: '65.38', link: 'http://www.google.com'},
    {number: 31, name: 'Ga', subtext: 'Gallium', mass: '69.723', link: 'http://www.google.com'},
    {number: 32, name: 'Ge', subtext: 'Gemanium', mass: '72.630', link: 'http://www.google.com'},
    {number: 33, name: 'As', subtext: 'Asrenic', mass: '74.922}', link: 'http://www.google.com'},
    {number: 34, name: 'Se', subtext: 'Selenium', mass:'78.971', link: 'http://www.google.com'},
    {number: 35, name: 'Br', subtext: 'Bromine', mass: '79.904', link: 'http://www.google.com'},
    {number: 36, name: 'Kr', subtext: 'Krypton', mass: '83.798', link: 'http://www.google.com'},
    {number: 37, name: 'Rb', subtext: 'Rubidium', mass:'85.468', link: 'http://www.google.com'},
    {number: 38, name: 'Sr', subtext: 'Strontium', mass:'87.62', link: 'http://www.google.com'},
    {number: 39, name: 'Y', subtext: 'Yttrium', mass: '88.906', link: 'http://www.google.com'},
    {number: 40, name: 'Zr', subtext: 'Zirconium', mass: '91.224', link: 'http://www.google.com'},
    {number: 41, name: 'Nb', subtext: 'Niobium', mass: '92.906', link: 'http://www.google.com'},
    {number: 42, name: 'Mo', subtext: 'Molybdenur', mass:'95.95', link: 'http://www.google.com'},
    {number: 43, name: 'Tc', subtext: 'Technetium', mass: '(98)', link: 'http://www.google.com'},
    {number: 44, name: 'Ru', subtext: 'Ruthenium', mass: '101.07', link: 'http://www.google.com'},
    {number: 45, name: 'Rh', subtext: 'Rhodium', mass: '102.91', link: 'http://www.google.com'},
    {number: 46, name: 'Pd', subtext: 'Palladium', mass: '106.42', link: 'http://www.google.com'},
    {number: 47, name: 'Ag', subtext: 'Silver', mass: '107.87', link: 'http://www.google.com'},
    {number: 48, name: 'Cd', subtext: 'Cadmium', mass: '112.41', link: 'http://www.google.com'},
    {number: 49, name: 'In', subtext: 'Indium', mass: '114.82', link: 'http://www.google.com'},
    {number: 50, name: 'Sn', subtext: 'Tin', mass: '118.71', link: 'http://www.google.com'},
    {number: 51, name: 'Sb', subtext: 'Antimony', mass: '121.76', link: 'http://www.google.com'},
    {number: 52, name: 'Te', subtext: 'Tellurium', mass: '127.60', link: 'http://www.google.com'},
    {number: 53, name: 'I', subtext: 'Iodine', mass: '126.90', link: 'http://www.google.com'},
    {number: 54, name: 'Xe', subtext: 'Xeon', mass: '131.29', link: 'http://www.google.com'},
    {number: 55, name: 'Cs', subtext: 'Caesium', mass: '132.91', link: 'http://www.google.com'},
    {number: 56, name: 'Ba', subtext: 'Barium', mass: '137.33', link: 'http://www.google.com'},
    {number: 57, name: 'La', subtext: 'Lanthanum', mass: '138.91', link: 'http://www.google.com'},
    {number: 58, name: 'Ce', subtext: 'Cerium', mass: '140.12', link: 'http://www.google.com'},
    {number: 59, name: 'Pr', subtext: 'Praseodymi', mass: '140.91', link: 'http://www.google.com'},
    {number: 60, name: 'Nd', subtext: 'Neodymium', mass: '144.24', link: 'http://www.google.com'},
    {number: 61, name: 'Pm', subtext: 'Promethiurr', mass: '(145)', link: 'http://www.google.com'},
    {number: 62, name: 'Sm', subtext: 'Samarium', mass: '159.36', link: 'http://www.google.com'},
    {number: 63, name: 'Eu', subtext: 'Europium', mass: '151.96', link: 'http://www.google.com'},
    {number: 64, name: 'Gd', subtext: 'Gadolinium', mass: '157.96', link: 'http://www.google.com'},
    {number: 65, name: 'Tb', subtext: 'Terbium', mass: '158.93', link: 'http://www.google.com'},
    {number: 66, name: 'Dy', subtext: 'Dysprosium', mass: '162.50', link: 'http://www.google.com'},
    {number: 67, name: 'Ho', subtext: 'Holmium', mass: '164.93', link: 'http://www.google.com'},
    {number: 68, name: 'Er', subtext: 'Erbium', mass: '167.26', link: 'http://www.google.com'},
    {number: 69, name: 'Tm', subtext: 'Thulium', mass: '168.93', link: 'http://www.google.com'},
    {number: 70 ,name: 'Yb', subtext: 'Ytterbium', mass: '173.05', link: 'http://www.google.com'},
    {number: 71, name: 'Lu', subtext: 'Lutetium', mass: '174.97', link: 'http://www.google.com'},
    {number: 72, name: 'Hf', subtext: 'Hafnium', mass: '178.49', link: 'http://www.google.com'},
    {number: 73, name: 'Ta', subtext: 'tanatalum', mass: '180.95', link: 'http://www.google.com'},
    {number: 74, name: 'W', subtext: 'Tungsten', mass: '183.84', link: 'http://www.google.com'},
    {number: 75, name: 'Re', subtext: 'Rhenium', mass: '186.21', link: 'http://www.google.com'},
    {number: 76, name: 'Os', subtext: 'Osmium', mass: '190.23', link: 'http://www.google.com'},
    {number: 77, name: 'Ir', subtext: 'Iridum', mass: '192.22', link: 'http://www.google.com'},
    {number: 78, name: 'Pt', subtext: 'Platinum', mass: '195.22', link: 'http://www.google.com'},
    {number: 79, name: 'Au', subtext: 'Gold', mass: '196.97', link: 'http://www.google.com'},
    {number: 80, name: 'Hg', subtext: 'Mercury', mass: '200.59', link: 'http://www.google.com'},
    {number: 81, name: 'Ti', subtext: 'Thalium', mass: '204.38', link: 'http://www.google.com'},
    {number: 82, name: 'Pb', subtext: 'Lead', mass: '207.2', link: 'http://www.google.com'},
    {number: 83, name: 'Bi', subtext: 'Bismuth', mass: '208.98', link: 'http://www.google.com'},
    {number: 84, name: 'Po', subtext: 'Polonium', mass: '(209)', link: 'http://www.google.com'},
    {number: 85, name: 'At', subtext: 'Astatine', mass: '(210)', link: 'http://www.google.com'},
    {number: 86, name: 'Rn', subtext: 'Radon', mass: '(222)', link: 'http://www.google.com'},
    {number: 87, name: 'Fr', subtext: 'Francium', mass: '(223)', link: 'http://www.google.com'},
    {number: 88, name: 'Ra', subtext: 'Radium', mass: '(226)', link: 'http://www.google.com'},
    {number: 89, name: 'Ac', subtext: 'Actinium', mass: '(227)', link: 'http://www.google.com'},
    {number: 90, name: 'th', subtext: 'Thorium', mass: '232.04', link: 'http://www.google.com'},
    {number: 91, name: 'Pa', subtext: 'Protactinurr', mass: '238.04', link: 'http://www.google.com'},
    {number: 92, name: 'U', subtext: 'Uranium', mass: '238.03', link: 'http://www.google.com'},
    {number: 93, name: 'Np', subtext: 'Neptunium', mass: '(237)', link: 'http://www.google.com'},
    {number: 94, name: 'Pu', subtext: 'Plutionium', mass: '(244)', link: 'http://www.google.com'},
    {number: 95, name: 'Am', subtext: 'Americium', mass: '(243)', link: 'http://www.google.com'},
    {number: 96, name: 'Cm', subtext: 'Curium', mass: '(247)', link: 'http://www.google.com'},
    {number: 97, name: 'Bk', subtext: 'berkelium', mass: '(247)', link: 'http://www.google.com'},
    {number: 98, name: 'Cf', subtext: 'Californium', mass: '(251)', link: 'http://www.google.com'},
    {number: 99, name: 'Es', subtext: 'Einsteinium', mass: '(252)', link: 'http://www.google.com'},
    {number: 100, name: 'Fm', subtext: 'Fermium', mass: '(257)', link: 'http://www.google.com'},
    {number: 101, name: 'Md', subtext: 'Mendelevium', mass: '(258)', link: 'http://www.google.com'},
    {number: 102, name: 'No', subtext: 'Nobelium', mass: '(259)', link: 'http://www.google.com'},
    {number: 103, name: 'Lr', subtext: 'Lawrencium', mass: '(266)', link: 'http://www.google.com'},
    {number: 104, name: 'Rf', subtext: 'Rutherfordium', mass: '(267)', link: 'http://www.google.com'},
    {number: 105, name: 'Db', subtext: 'Dubnium', mass: '(268)', link: 'http://www.google.com'},
    {number: 106, name: 'Sg', subtext: 'Seaborgium', mass: '(269)', link: 'http://www.google.com'},
    {number: 107, name: 'Bh', subtext: 'Bohrium', mass: '(270)', link: 'http://www.google.com'},
    {number: 108, name: 'Hs', subtext: 'Hassium', mass: '(277)', link: 'http://www.google.com'},
    {number: 109, name: 'Mt', subtext: 'Meithnerium', mass: '(278)', link: 'http://www.google.com'},
    {number: 110, name: 'Ds', subtext: 'Darmstadtu', mass: '(281)', link: 'http://www.google.com'},
    {number: 111, name: 'Rg', subtext: 'RoentGenium', mass: '(282)', link: 'http://www.google.com'},
    {number: 112, name: 'Cn', subtext: 'Coperncium', mass: '(285)', link: 'http://www.google.com'},
    {number: 113, name: 'Nh', subtext: 'Nihonium', mass: '(286)', link: 'http://www.google.com'},
    {number: 114, name: 'Fl', subtext: 'Flerovium', mass: '(289)', link: 'http://www.google.com'},
    {number: 115, name: 'Mc', subtext: 'Moscovium', mass: '(290)', link: 'http://www.google.com'},
    {number: 116, name: 'Lv', subtext: 'Livemorum', mass: '(293)', link: 'http://www.google.com'},
    {number: 117, name: 'Ts', subtext: 'Tennessine', mass: '(294)', link: 'http://www.google.com'},
    {number: 118, name: 'Og', subtext: 'Oganesson', mass: '(294)', link: 'http://www.google.com'},
  ];
  constructor() { }
}
