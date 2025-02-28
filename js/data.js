// Creo 3 objetos para simular la paginación

// Cada objetos se compone de otro objeto a su vez y un array. El objeto tiene info sobre la página actual, siguiente y previa. El array tiene la propia info de los productos

const productos1 = {

  info: {
    pages:3,
    next: 2,
    prev: null,
  },

  results: [
    {
      id: 1,
      nombre: "Aloe Vera",
      imagen: "https://naturalpoland.com/wp-content/uploads/aloe-vera-in-africa.jpg",
      descripcion: "Planta suculenta conocida por sus propiedades medicinales",
      precio: 9,
      stock: 5,
    },
    {
      id: 2,
      nombre: "Cactus de Navidad",
      imagen: "https://www.viverosshangai.es/image/cache/catalog/blog/Todo-lo-que-necesitas-saber-sobre-Cactus-de-Navidad-1250x750.jpg",
      descripcion: "Planta colgante que florece en invierno con colores vibrantes",
      precio: 12,
      stock: 4,
    },
    {
      id: 3,
      nombre: "Monstera Deliciosa",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Starr_080731-9571_Monstera_deliciosa.jpg/1200px-Starr_080731-9571_Monstera_deliciosa.jpg",
      descripcion: "Planta tropical con hojas grandes y perforadas",
      precio: 19,
      stock: 3,
    },
    {
      id: 4,
      nombre: "Pothos Dorado",
      imagen: "https://st3.depositphotos.com/2000583/16776/i/450/depositphotos_167767772-stock-photo-home-and-garden-decoration-of.jpg",
      descripcion: "Planta trepadora fácil de cuidar, ideal para interiores",
      precio: 7,
      stock: 4,
    },
    {
      id: 5,
      nombre: "Ficus Lyrata",
      imagen: "https://www.purplant.es/wp-content/uploads/2023/10/ficus-lyrata-l-1200x675.jpg",
      descripcion: "Planta de interior con hojas grandes en forma de violín",
      precio: 24,
      stock: 5,
    },
    {
      id: 6,
      nombre: "Helecho de Boston",
      imagen: "https://therealgreen.com.mx/cdn/shop/articles/611129464000005.jpg?v=1731533210&width=2048",
      descripcion: "Planta colgante con frondas largas y verdes",
      precio: 14,
      stock: 6,
    },
    {
      id: 7,
      nombre: "Lavanda",
      imagen: "https://espores.org/wp-content/uploads/media/k2/items/src/e213534406f5e673030b12a49a117407.jpg",
      descripcion: "Planta aromática conocida por su efecto relajante",
      precio: 9,
      stock: 3,
    },
    {
      id: 8,
      nombre: "Bambú de la Suerte",
      imagen: "https://cdn0.ecologiaverde.com/es/posts/4/1/0/todo_lo_que_debes_saber_sobre_el_bambu_de_la_suerte_1014_orig.jpg",
      descripcion: "Planta de agua considerada símbolo de buena fortuna",
      precio: 5,
      stock: 2,
    },
    {
      id: 9,
      nombre: "Sansevieria",
      imagen: "https://www.hortiflorfloristas.es/wp-content/uploads/2021/01/SANSEVIERIA-VIVEROS-HORTIFLOR.jpg",
      descripcion: "Planta resistente conocida como 'Lengua de Suegra'",
      precio: 11,
      stock: 3,
    }
  ]
};

const productos2 = {
  
  info: {
    pages:3,
    next: 3,
    prev: 1,
  },

  results: [ 
    {
      id: 10,
      nombre: "Palma Areca",
      imagen: "https://elnougarden.com/cdn/shop/products/Dypsis_lutescens_04.jpg?v=1624463783",
      descripcion: "Palma de interior que aporta un toque tropical",
      precio: 29,
      stock: 5,
    },
    {
      id: 11,
      nombre: "Hiedra Inglesa",
      imagen: "https://images.ctfassets.net/em61esqt6ro0/asset-ee052aaee1395ed9f2d0eb46cb27b5786f571f0b9d182775fd0613a858/fc2e49aa9177a07b8b749461393fafae/5ed008dcc565ce1bc35ece93-1590692063_2C307.jpg",
      descripcion: "Planta trepadora ideal para decoración de paredes",
      precio: 6,
      stock: 3,
    },
    {
      id: 12,
      nombre: "Calathea Orbifolia",
      imagen: "https://i0.wp.com/enabrilhojasmil.com/wp-content/uploads/2017/07/En_Abril_Hojas_Mil_Calathea.jpg?resize=860%2C573",
      descripcion: "Planta de interior con hojas grandes y rayadas",
      precio: 16,
      stock: 6,
    },
    {
      id: 13,
      nombre: "Dracaena Marginata",
      imagen: "https://mundojardin.eu/wp-content/uploads/2020/11/Dracaena-Marginata.jpg",
      descripcion: "Planta alta y estilizada con hojas largas",
      precio: 22,
      stock:7,
    },
    {
      id: 14,
      nombre: "Jade",
      imagen: "https://www.lanacion.com.ar/resizer/v2/el-arbol-de-jade-tiene-varias-variedades-que-se-27EMV6QZYBCMDL7CYV4RNSR3QM.JPG?auth=c67888136851f59389f7a2256c222e70ff6ea7258c604d0ab77b7a03842be966&width=420&height=280&quality=70&smart=true",
      descripcion: "Planta suculenta conocida por su longevidad",
      precio: 8,
      stock: 4,
    },
    {
      id: 15,
      nombre: "Begonia Rex",
      imagen: "https://balconesyflores.es/132-large_default/begonia-de-hoja-begonia-rex.jpg",
      descripcion: "Planta con hojas decorativas y colores vibrantes",
      precio: 13,
      stock: 5,
    },
    {
      id: 16,
      nombre: "Planta Araña",
      imagen: "https://i.pinimg.com/originals/39/8b/7b/398b7b9290064ca04cb5175c1dc61c93.jpg",
      descripcion: "Planta de interior que purifica el aire",
      precio: 7,
      stock: 6,
    },
    {
      id: 17,
      nombre: "Orquídea Phalaenopsis",
      imagen: "https://www.elicriso.it/es/orquideas/phalaenopsis/phalaenopsis2.jpg",
      descripcion: "Planta elegante con flores de colores variados",
      precio: 18,
      stock: 3,
    },
    {
      id: 18,
      nombre: "Cactus Echinopsis",
      imagen: "https://elnougarden.com/cdn/shop/products/CactusdesanPedro-Echinopsispachanoi1.jpg?v=1632559535",
      descripcion: "Cactus que florece con flores grandes y coloridas",
      precio: 10,
      stock: 2,
    }
  ]
};


const productos3 = {
  
  info: {
    pages:3,
    next: null,
    prev: 2,
  },

  results: [
    {
      id: 19,
      nombre: "Peperomia",
      imagen: "https://verdecora.es/blog/wp-content/uploads/2014/07/peperomia.jpg",
      descripcion: "Planta compacta con hojas variadas en forma y color",
      precio: 9,
      stock: 4,
    },
    {
      id: 20,
      nombre: "Zamioculcas",
      imagen: "https://www.compo.de/dam/jcr:8f47496a-817c-4764-a60d-772de47d27d3/Zamioculcas.jpg?x=44&y=64",
      descripcion: "Planta resistente, perfecta para principiantes",
      precio: 15,
      stock: 3,
    },
    {
      id: 21,
      nombre: "Eucalipto",
      imagen: "https://www.ambientum.com/wp-content/uploads/2018/10/eucalipto.jpg",
      descripcion: "Planta aromática con un fresco aroma característico",
      precio: 13,
      stock: 5,
    },
    {
      id: 22,
      nombre: "Romero",
      imagen: "https://sendaviva.com/wp-content/uploads/2021/03/Romero_web.jpg",
      descripcion: "Planta aromática ideal para cocinar",
      precio: 6,
      stock: 6,
    },
    {
      id: 23,
      nombre: "Cinta o Lazo de Amor",
      imagen: "https://www.semana.com/resizer/v2/34TORIKGFZEU3GFQ4ERV3UKD74.jpg?auth=f9a03825e0d364ba649566eb2dcd545351feeb3e656a86d399c634f31a554eb7&smart=true&quality=75&width=1280&height=720",
      descripcion: "Planta fácil de cuidar que crece rápidamente",
      precio: 8,
      stock: 7,
    },
    {
      id: 24,
      nombre: "Fitonia",
      imagen: "https://www.clarin.com/2023/10/11/ndVq1Wkz2_2000x1500__1.jpg",
      descripcion: "Planta de interior con hojas pequeñas y nervadas",
      precio: 12,
      stock: 5,
    },
    {
        id: 25,
        nombre: "Geranio",
        imagen: "https://www.biospace.es/wp-content/uploads/2023/11/geranios-2xl-1024x768.jpg",
        descripcion: "Planta de interior bonita con hojas coloreadas",
        precio: 13,
        stock: 4,
      },
      {
        id: 26,
        nombre: "Dama de noche",
        imagen: "https://www.elespectador.com/resizer/v2/DYEAZUWBJRD43CNJDQ3XYSW7J4.jpg?auth=58957b277b928fad890d52a6176c30ffdae9ca609e1b3c99fed8782d957f728a&width=920&height=613&smart=true&quality=60",
        descripcion: "Planta de exterior con hojas blancas y muy delicadad",
        precio: 5,
        stock: 6,
      },
      {
        id: 27,
        nombre: "Cupresácea",
        imagen: "https://static.inaturalist.org/photos/4663223/large.jpg",
        descripcion: "Planta perenne con distintas formas y hoja fina",
        precio: 5,
        stock: 6,
      }
    ]
};

const productos = [productos1, productos2, productos3]