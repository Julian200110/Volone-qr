import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

export const DessertIcon = ({ className }) => (
  <Icon icon="ep:dessert" className={className} />
);
export const BowlSaladIcon = ({ className }) => (
  <Icon icon="fluent:bowl-salad-20-filled" className={className} />
);
export const ColdDrinkIcon = ({ className }) => (
  <Icon icon="ep:cold-drink" className={className} />
);
export const CutOfMeatIcon = ({ className }) => (
  <Icon icon="fluent-emoji-high-contrast:cut-of-meat" className={className} />
);
export const ShareIcon = ({ className }) => (
  <Icon icon="ic:baseline-ios-share" className={className} />
);
export const ChampagnePartyAlcoholIcon = ({ className }) => (
  <Icon icon="streamline:champagne-party-alcohol" className={className} />
);
export const RestaurantIcon = ({ className }) => (
  <Icon
    icon="material-symbols:restaurant"
    className={className}
    style={{ color: "white" }}
  />
);
export const GourmetIcon = ({ className }) => (
  <Icon icon="emojione-monotone:shallow-pan-of-food" className={className} />
);
export const EntrantesIcon = ({ className }) => (
  <Icon icon="fluent:food-toast-16-filled" className={className} />
);
export const FrescosIcon = ({ className }) => (
  <Icon icon="hugeicons:organic-food" className={className} />
);
export const MarTierraIcon = ({ className }) => (
  <Icon icon="fluent:food-fish-20-regular" className={className} />
);
export const InfantilIcon = ({ className }) => (
  <Icon icon="mdi:food-outline" className={className} />
);
export const FlameIcon = ({ className }) => (
  <Icon icon="tabler:flame" className={className} />
);

DessertIcon.propTypes = { className: PropTypes.string };
BowlSaladIcon.propTypes = { className: PropTypes.string };
ColdDrinkIcon.propTypes = { className: PropTypes.string };
CutOfMeatIcon.propTypes = { className: PropTypes.string };
ShareIcon.propTypes = { className: PropTypes.string };
ChampagnePartyAlcoholIcon.propTypes = { className: PropTypes.string };
RestaurantIcon.propTypes = { className: PropTypes.string };
GourmetIcon.propTypes = { className: PropTypes.string };
EntrantesIcon.propTypes = { className: PropTypes.string };
FrescosIcon.propTypes = { className: PropTypes.string };
MarTierraIcon.propTypes = { className: PropTypes.string };
InfantilIcon.propTypes = { className: PropTypes.string };
FlameIcon.propTypes = { className: PropTypes.string };

const VIDEO_BASE_URL = "https://pub-facf2d29b893404b813ea8cd9b2515e7.r2.dev/";

const DATA = {
  gourmet: [
    {
      id: 1,
      title: "Jamón Ibérico de Bellota",
      author: "chef",
      price: "29,00€",
      description:
        "Finas lonchas cortadas a mano, sabor y elegancia en cada bocado.",
      longDescription:
        "Finas lonchas cortadas a mano, sabor y elegancia en cada bocado.",
      video: `${VIDEO_BASE_URL}JAMÓN IBERICO DE BELLOTA.mp4`,
    },
    {
      id: 2,
      title: "Cecina de la Casa",
      author: "chef",
      price: "16,00€",
      description:
        "Láminas de cecina curada artesanalmente, con aceite de oliva virgen extra.",
      longDescription:
        "Láminas de cecina curada artesanalmente, con aceite de oliva virgen extra.",
      video: `${VIDEO_BASE_URL}CECINA DE LA CASA.mp4`,
    },
    {
      id: 3,
      title: "Tabla de Quesos Artesanos",
      author: "chef",
      price: "21,00€",
      description:
        "Una exclusiva selección de quesos con carácter y tradición.",
      longDescription:
        "Una exclusiva selección de quesos con carácter y tradición.",
      video: `${VIDEO_BASE_URL}TABLA DE QUESOS ARTESANOS.mp4`,
    },
    {
      id: 4,
      title: "Anchoas de Santoña (Doña tomasa) con Tostada, queso azul ahumado",
      author: "chef",
      price: "21,00€",
      description:
        "Delicadas anchoas, servidas con pan tostado crujiente con queso azul ahumado.",
      longDescription:
        "Delicadas anchoas, servidas con pan tostado crujiente con queso azul ahumado.",
      video: `${VIDEO_BASE_URL}ANCHOAS.mp4`,
    },
    {
      id: 5,
      title: "Salpicón de Mariscos con crema de ajo asado",
      author: "chef",
      price: "22,00€",
      description:
        "Un vibrante encuentro de mariscos frescos, en una sedosa crema de ajo.",
      longDescription:
        "Un vibrante encuentro de mariscos frescos, en una sedosa crema de ajo.",
      video: `${VIDEO_BASE_URL}ZAMBURIÑA A LA BRASA.mp4`,
    },
  ],
  entrantes: [
    {
      id: 1,
      title: "Croquetas de Cecina",
      author: "chef",
      price: "18,00€",
      description:
        "Crujientes por fuera, cremosas por dentro, con papada ibérica.",
      longDescription:
        "Crujientes por fuera, cremosas por dentro, con papada ibérica.",
      video: `${VIDEO_BASE_URL}CROQUETAS DE CECINA.mp4`,
    },
    {
      id: 2,
      title: "Ensaladilla de Ventresca al Carbón",
      author: "chef",
      price: "14,00€",
      description:
        "Bonito al carbón con guindillas en vinagre, para un toque vibrante.",
      longDescription:
        "Bonito al carbón con guindillas en vinagre, para un toque vibrante.",
      video: `${VIDEO_BASE_URL}ENSALADILLA DE VENTRESCA AL CARBÓN.mp4`,
    },
    {
      id: 3,
      title: "Torrezno de Soria en Dos Cocciones",
      author: "chef",
      price: "14,00€",
      description:
        "Crujiente y jugoso, acompañado de batata asada y mojo versión la reserva.",
      longDescription:
        "Crujiente y jugoso, acompañado de batata asada y mojo versión la reserva.",
      video: `${VIDEO_BASE_URL}TORREZNO DE SORIA.mp4`,
    },
    {
      id: 4,
      title: "Patatas Bravas",
      author: "chef",
      price: "10,00€",
      description: "Nuestra salsa tradicional en una explosión de sabor.",
      longDescription: "Nuestra salsa tradicional en una explosión de sabor.",
      video: `${VIDEO_BASE_URL}PATATAS BRAVAS.mp4`,
    },
    {
      id: 5,
      title: "Alcachofas Confitadas",
      author: "chef",
      price: "18,00€",
      description:
        "Con carrillera de ternera y yema trufada. Un deleite gourmet.",
      longDescription:
        "Con carrillera de ternera y yema trufada. Un deleite gourmet.",
      video: `${VIDEO_BASE_URL}ALCACHOFAS CONFITADAS.mp4`,
    },
    {
      id: 6,
      title: "Merluza a la Romana",
      author: "chef",
      price: "16,00€",
      description: "Merluza dorada con alioli de cebollino.",
      longDescription: "Merluza dorada con alioli de cebollino.",
      video: `${VIDEO_BASE_URL}Merluza a la Romana.mp4`,
    },
    {
      id: 7,
      title: "Tortilla Cremosa - Chistorra Campeona 2022-2023",
      author: "chef",
      price: "14,00€",
      description:
        "Un suculento homenaje a los sabores tradicionales, con un toque innovador.",
      longDescription:
        "Un suculento homenaje a los sabores tradicionales, con un toque innovador.",
      video: `${VIDEO_BASE_URL}TORTILLA CREMOSA.mp4`,
    },
    {
      id: 8,
      title: "Berenjena al Josper",
      author: "chef",
      price: "10,00€",
      description: "Asada al Josper con salsa napolitana y parmesano fundido.",
      longDescription:
        "Asada al Josper con salsa napolitana y parmesano fundido.",
      video: `${VIDEO_BASE_URL}BERENJENA AL JOSPER.mp4`,
    },
    {
      id: 9,
      title: "Pulpo a la Brasa con Salsa Barbacoa Japonesa",
      author: "chef",
      price: "24,00€",
      description:
        "Pulpo braseado, servido con batata asada y alioli de sobrasada.",
      longDescription:
        "Pulpo braseado, servido con batata asada y alioli de sobrasada.",
      video: `${VIDEO_BASE_URL}PULPO A LA BRASA.mp4`,
    },
  ],
  frescos: [
    {
      id: 1,
      title: "Tomate Ecológico Aliñado",
      author: "chef",
      price: "12,00€",
      description:
        "Tomate de temporada con cebolla fresca y aceite de oliva virgen extra.",
      longDescription:
        "Tomate de temporada con cebolla fresca y aceite de oliva virgen extra. Frescura y sabor auténtico.",
      video: `${VIDEO_BASE_URL}TOMATE ECOLÓGICO ALIÑADO.mp4`,
    },
    {
      id: 2,
      title: "Ensalada Fresca la reserva",
      author: "chef",
      price: "13,00€",
      description:
        "Mezclume fresca, Queso azul, manzana, nuez caramelizada, aceite de oliva ahumado y tomates Cherry.",
      longDescription:
        "Mezclume fresca, Queso azul, manzana, nuez caramelizada, aceite de oliva ahumado y tomates Cherry. Un placer elegante y sabroso.",
      video: `${VIDEO_BASE_URL}ENSALADA FRESCA LA RESERVA.mp4`,
    },
    {
      id: 3,
      title: "César de Salmón Ahumado",
      author: "chef",
      price: "14,00€",
      description:
        "Lechuga romana con salmón ahumado y nuestra salsa casar de calamatas.",
      longDescription:
        "Lechuga romana con salmón ahumado y nuestra salsa casar de calamatas.",
      video: `${VIDEO_BASE_URL}CÉSAR DE SALMÓN.mp4`,
    },
    {
      id: 4,
      title: "Ensalada mixta",
      author: "chef",
      price: "11,00€",
      description:
        "Ensalada Mixta: Fresca y ligera, con tomate fresco, mix de lechugas, cebolla morada.",
      longDescription: "Una ensalada simple y deliciosa.",
      video: `${VIDEO_BASE_URL}ENSALADA MIXTA.mp4`,
    },
  ],
  marytierra: [
    {
      id: 1,
      title: "Paella de Gamba y Mariscos",
      author: "chef",
      price: "21,00€",
      description:
        "Una deliciosa combinación de gambas y mariscos frescos, cocinados en una paella tradicional.",
      longDescription: "Precio por persona.",
      video: `${VIDEO_BASE_URL}PAELLA DEL MAR.mp4`,
    },
    {
      id: 2,
      title: "Paella de Ternera, Papada y Alcachofas",
      author: "chef",
      price: "21,00€",
      description:
        "Un sabroso arroz con ternera, papada y alcachofas confitadas.",
      longDescription: "Una combinación rica y memorable. Precio por persona.",
      video: `${VIDEO_BASE_URL}PAELLA VALENCIANA.mp4`,
    },
    {
      id: 3,
      title: "Chuletón de Vaca Gallega 40 dias de maduración (un kilo)",
      author: "chef",
      price: "80,00€",
      description:
        "Jugoso y tierno, a la parrilla para resaltar su sabor natural.",
      longDescription:
        "Una celebración de la buena carne, con patatas y pimientos del piquillo caramelizados.",
      video: `${VIDEO_BASE_URL}CHULETONES DE VACA.mp4`,
    },
    {
      id: 4,
      title: "Carrillera de Ternera en su Jugo",
      author: "chef",
      price: "23,00€",
      description:
        "Tierna y melosa, cocinada a fuego lento para concentrar su jugo.",
      longDescription: "Cada bocado con un sabor profundo e inigualable.",
      video: `${VIDEO_BASE_URL}CARRILLERA DE TERNERA EN SU JUGO.mp4`,
    },
    {
      id: 5,
      title: "Solomillo de vaca– con batata asada",
      author: "chef",
      price: "26,00€",
      description:
        "Corte jugoso y tierno, cocinado en el Josper para un sabor intenso y ahumado.",
      longDescription: "Un sabor inigualable.",
      video: `${VIDEO_BASE_URL}SOLOMILLO DE VACA.mp4`,
    },
    {
      id: 8,
      title: "Lomo Bajo Trinchado",
      author: "chef",
      price: "22,00€",
      description: "Jugoso lomo bajo con patatas y pimientos del Padrón.",
      longDescription: "Un sabor auténtico.",
      video: `${VIDEO_BASE_URL}LOMO BAJO TRINCHADO.mp4`,
    },
  ],
  infantil: [
    {
      id: 1,
      title: "Pasta Napolitana para Niños (Menú Infantil)",
      author: "chef",
      price: "14,00€",
      description:
        "Deliciosa pasta con salsa de tomate fresca al estilo napolitano.",
      longDescription: "Un plato simple y sabroso que encantará a los niños.",
      video: `${VIDEO_BASE_URL}PASTA NAPOLITANA.mp4`,
    },
    {
      id: 2,
      title: "Burger con Patatas (Menú Infantil)",
      author: "chef",
      price: "Incluido en Menú (14€)",
      description:
        "Hamburguesa preparada a la perfección, acompañada de crujientes patatas fritas.",
      longDescription:
        "Ideal para nuestros pequeños exploradores culinarios. Postre: Helado.",
      video: `${VIDEO_BASE_URL}BURGUER CON PATATAS.mp4`,
    },
  ],
  dulces: [
    {
      id: 2,
      title: "Tarta de Queso Manchego",
      author: "chef",
      price: "7,00€",
      description: "Al horno, suave y sabrosa.",
      longDescription: "Un postre tradicional.",
      video: `${VIDEO_BASE_URL}TARTA DE QUESO MANCHEGO.mp4`,
    },
    {
      id: 3,
      title: "Brownie de Chocolate Belga",
      author: "chef",
      price: "7,50€",
      description: "Rico y decadente, con nueces caramelizadas.",
      longDescription: "Un placer dulce y crujiente.",
      video: `${VIDEO_BASE_URL}BROWNIE DE CHOCOLATE BELGA.mp4`,
    },
    {
      id: 4,
      title: "Helados",
      author: "chef",
      price: "6,50€",
      description: "Vainilla canela, chocolate, caramelo",
      longDescription: "Cremosos y refrescantes.",
      video: `${VIDEO_BASE_URL}HELADO.mp4`,
    },
    {
      id: 5,
      title: "Sorbete",
      author: "chef",
      price: "6,50€",
      description: "Limón.",
      longDescription: "Refrescante y ligero.",
      video: `${VIDEO_BASE_URL}SORBETE.mp4`,
    },
  ],
  bebidas: [
    {
      id: 1,
      title: "Javier Sanz Verdejo 2023",
      author: "bartender",
      price: "Copa 5,50€ / Botella 26,00€",
      description: "D.O. Rueda",
      longDescription: "Vino blanco fresco y aromático.",
      video: "",
    },
    {
      id: 2,
      title: "Terras do Cigarrón Blanco 2023",
      author: "bartender",
      price: "Copa 4,00€ / Botella 22,00€",
      description: "D.O. Monterrei",
      longDescription: "Vino blanco suave y afrutado.",
      video: "",
    },
    {
      id: 3,
      title: "Artazuri Rosado 2023",
      author: "bartender",
      price: "Copa 4,00€ / Botella 21,00€",
      description: "D.O. Navarra",
      longDescription: "Rosado fresco y ligero.",
      video: "",
    },
    {
      id: 4,
      title: "Dr Loosen dry blanco 2023",
      author: "bartender",
      price: "Copa 4,50€ / Botella 24,00€",
      description: "D.O. Mosel",
      longDescription: "Vino blanco seco y elegante.",
      video: "",
    },
    {
      id: 5,
      title: "Antidoto 2023",
      author: "bartender",
      price: "Copa 6,50€ / Botella 36,00€",
      description: "D.O. Ribera del Duero",
      longDescription: "Vino tinto con cuerpo y aroma complejo.",
      video: "",
    },
    {
      id: 6,
      title: "El Jardín de La Emperatriz Tinto 2020",
      author: "bartender",
      price: "Copa 4,00€ / Botella 22,00€",
      description: "D.O. Rioja",
      longDescription: "Tinto equilibrado y sabroso.",
      video: "",
    },
    {
      id: 7,
      title: "Marqués de Murrieta Reserva 2019",
      author: "bartender",
      price: "Copa 7,50€ / Botella 44,00€",
      description: "D.O. Rioja",
      longDescription: "Un clásico Rioja reserva de gran elegancia.",
      video: "",
    },
    {
      id: 8,
      title: "Heineken tercio",
      author: "bartender",
      price: "5,00€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 9,
      title: "Heineken copa",
      author: "bartender",
      price: "4,50€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 10,
      title: "Heineken 0.0",
      author: "bartender",
      price: "4,00€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 11,
      title: "Refrescos",
      author: "bartender",
      price: "4,00€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 12,
      title: "Agua",
      author: "bartender",
      price: "5,00€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 13,
      title: "Agua con Gas",
      author: "bartender",
      price: "3,50€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 14,
      title: "Zumos",
      author: "bartender",
      price: "4,00€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 15,
      title: "Café",
      author: "bartender",
      price: "2,50€",
      description: "",
      longDescription: "",
      video: "",
    },
    {
      id: 16,
      title: "Copas",
      author: "bartender",
      price: "10,00€",
      description: "",
      longDescription: "",
      video: "",
    },
  ],
};

const DATA_DISCOTECA = {
  shows: [
    {
      id: 1,
      title: "Show de Botellas",
      author: "DJ",
      price: "500€",
      description:
        "Un espectáculo de luces y música con presentación de botellas.",
      longDescription:
        "Este show incluye la presentación de varias botellas con un show de luces y sonido, ideal para comenzar la noche.",
      video: `${VIDEO_BASE_URL}SHOW BOTELLA (PREMIUM).mp4`,
    },
    {
      id: 2,
      title: "Show de Botellas Premium",
      author: "DJ",
      price: "800€",
      description: "La experiencia premium con botellas premium y bailarines.",
      longDescription:
        "Un show premium que combina botellas de alta gama con una puesta en escena más elaborada.",
      video: `${VIDEO_BASE_URL}SHOW BOTELLA MOET.mp4`,
    },
    {
      id: 3,
      title: "Show de Botellas Moët",
      author: "DJ",
      price: "1200€",
      description: "Botellas Moët y un show elegante y sofisticado.",
      longDescription:
        "La elegancia del champagne Moët combinada con efectos visuales de lujo.",
      video: `${VIDEO_BASE_URL}SHOW BOTELLA (NO PREMIUN).mp4`,
    },
    {
      id: 5,
      title: "Show de Botellas Go Go Go",
      author: "DJ",
      price: "1000€",
      description: "¡Energía sin límites y bailarines go-go!",
      longDescription:
        "Este show incluye bailarines go-go y botellas presentadas de forma dinámica.",
      video: `${VIDEO_BASE_URL}SHOW GOGO.mp4`,
    },
    {
      id: 6,
      title: "Show Moet",
      author: "DJ",
      price: "1500€",
      description: "La máxima expresión de lujo con Moët & Chandon.",
      longDescription:
        "Este show está dedicado completamente a Moët & Chandon, con una experiencia inigualable.",
      video: `${VIDEO_BASE_URL}SHOW MOET.mp4`,
    },
  ],
};
// Secciones modo restaurante
export const SECTIONS = [
  { id: "gourmet", label: "Gourmet", icon: GourmetIcon, posts: DATA.gourmet },
  {
    id: "entrantes",
    label: "Entrantes",
    icon: EntrantesIcon,
    posts: DATA.entrantes,
  },
  { id: "frescos", label: "Frescos", icon: FrescosIcon, posts: DATA.frescos },
  {
    id: "marytierra",
    label: "Mar y Tierra",
    icon: MarTierraIcon,
    posts: DATA.marytierra,
  },
  {
    id: "infantil",
    label: "Menú Infantil",
    icon: InfantilIcon,
    posts: DATA.infantil,
  },
  { id: "dulces", label: "Dulces", icon: DessertIcon, posts: DATA.dulces },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: ColdDrinkIcon,
    posts: DATA.bebidas,
  },
];

// Secciones modo discoteca
export const SECTIONS_DISCOTECA = [
  {
    id: "shows",
    label: "Shows",
    icon: FlameIcon,
    posts: DATA_DISCOTECA.shows,
  },
];
