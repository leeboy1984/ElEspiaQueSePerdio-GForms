import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/Museo.jpg'),
    thumbnail: require('../assets/images/thumbs/Museo.jpg'),
    title: 'Museo',
    desc: 'No te pierdas ninguna de las exposiciones',
  },
  {
    src: require('../assets/images/fulls/Benidorm.jpg'),
    thumbnail: require('../assets/images/thumbs/Benidorm.jpg'),
    title: 'Benidorm',
    desc: 'Aquí encontrarás a la mitad de Madrid',
  },
  {
    src: require('../assets/images/fulls/Embajada.jpg'),
    thumbnail: require('../assets/images/thumbs/Embajada.jpg'),
    title: 'Embajada ',
    desc: 'Parece la de EEUU, pero ten cuidado de no ser deportad@',
  },
  {
    src: require('../assets/images/fulls/Zoo.jpg'),
    thumbnail: require('../assets/images/thumbs/Zoo.jpg'),
    title: 'Zoo',
    desc: 'El más completo, leones, zebras, monos, jirafas, ornitorrincos y osos hormigueros garantizados',
  },
  {
    src: require('../assets/images/fulls/Avion.jpg'),
    thumbnail: require('../assets/images/thumbs/Avion.jpg'),
    title: 'Avión',
    desc: 'Primera clase o turista, da igual; ¡¡aquí se puede viajar!!',
  },
  {
    src: require('../assets/images/fulls/ParqueAtracciones.jpg'),
    thumbnail: require('../assets/images/thumbs/ParqueAtracciones.jpg'),
    title: 'Parque Atracciones',
    desc: '¿Te van las emociones fuertes? ¿no? no pasa nada, pero no olvides tu manzana de caramelo',
  },
  {
    src: require('../assets/images/fulls/Banco.jpg'),
    thumbnail: require('../assets/images/thumbs/Banco.jpg'),
    title: 'Banco',
    desc: '¿Retiradas o depositos? Da igual siempre que nuestro dienro esté seguro',
  },
  {
    src: require('../assets/images/fulls/Circo.jpg'),
    thumbnail: require('../assets/images/thumbs/Circo.jpg'),
    title: 'Circo',
    desc: 'Payasos, fakires, malabaristas....¡qué el ritmo no pare!',
  },
  {
    src: require('../assets/images/fulls/FiestaEmpresa.jpg'),
    thumbnail: require('../assets/images/thumbs/FiestaEmpresa.jpg'),
    title: 'Fiesta de empresa',
    desc: 'Este es tu ambiente, alcohol, compañer@s y rajar del jefe...pero cuidado no vomites sobre quien no debes',
  },
  {
    src: require('../assets/images/fulls/Cruzadas.jpg'),
    thumbnail: require('../assets/images/thumbs/Cruzadas.jpg'),
    title: 'Ejército Cruzado',
    desc: 'Esto si que eran guerras, nada como luchar en nombre de Dios',
  },
  {
    src: require('../assets/images/fulls/Spa.jpg'),
    thumbnail: require('../assets/images/thumbs/Spa.jpg'),
    title: 'Spá',
    desc: 'Relax Time, te lo has ganado, llevas más de un año dándolo todo en proyecto',
  },
  {
    src: require('../assets/images/fulls/Carnaval.jpg'),
    thumbnail: require('../assets/images/thumbs/Carnaval.jpg'),
    title: 'Carnaval',
    desc: 'Samba, máscaras y sobre todo frikismo en estado puro',
  },
  {
    src: require('../assets/images/fulls/Casino.jpg'),
    thumbnail: require('../assets/images/thumbs/Casino.jpg'),
    title: 'Casino',
    desc: 'Dinero, fichas, azar...¡a gastar la paga extra!',
  },
  {
    src: require('../assets/images/fulls/Hospital.jpg'),
    thumbnail: require('../assets/images/thumbs/Hospital.jpg'),
    title: 'Hospital',
    desc: 'Ya sea por una prueba rutinaria o una visita a alguien cercano la misión te ha pillado aquí',
  },
  {
    src: require('../assets/images/fulls/ApocalipsisZombie.jpg'),
    thumbnail: require('../assets/images/thumbs/ApocalipsisZombie.jpg'),
    title: 'Apocalipsis Zombie',
    desc: 'Esto solo era cuestión de tiempo...tenía que pasar',
  },
  {
    src: require('../assets/images/fulls/Hotel.jpg'),
    thumbnail: require('../assets/images/thumbs/Hotel.jpg'),
    title: 'Hotel',
    desc: 'Negocios, días especiales, viajes...¿quién no sabe todo lo que tiene un hotel?',
  },
  {
    src: require('../assets/images/fulls/Supermercado.jpg'),
    thumbnail: require('../assets/images/thumbs/Supermercado.jpg'),
    title: 'Supermercado',
    desc: 'Huevos, leche, embutido, pan...¡que no se te olvide nada de la lista de la compra!',
  },
  {
    src: require('../assets/images/fulls/Universidad.jpg'),
    thumbnail: require('../assets/images/thumbs/Universidad.jpg'),
    title: 'Universidad',
    desc: 'Clases, mus, partidas online....y todo el mismo día',
  },
  {
    src: require('../assets/images/fulls/HalconMilenario.jpg'),
    thumbnail: require('../assets/images/thumbs/HalconMilenario.jpg'),
    title: 'Halcón Milenario',
    desc: 'Ponte a los mandos de la nave más rápida de la galaxia',
  },
  {
    src: require('../assets/images/fulls/EstrellaMuerte.jpg'),
    thumbnail: require('../assets/images/thumbs/EstrellaMuerte.jpg'),
    title: 'Estrella de la Muerte',
    desc: 'Nunca un hardware tan grande tuvo un fallo como este...2 veces!!',
  },
  {
    src: require('../assets/images/fulls/Mordor.jpg'),
    thumbnail: require('../assets/images/thumbs/Mordor.jpg'),
    title: 'Mordor',
    desc: 'Cuando la despedida de solter@ se te va de las manos y acabas por ejemplo aquí',
  },
  {
    src: require('../assets/images/fulls/Matrix.jpg'),
    thumbnail: require('../assets/images/thumbs/Matrix.jpg'),
    title: 'Matrix',
    desc: 'Ya sabes Kung-Fu',
  },
  {
    src: require('../assets/images/fulls/RickMortyLab.jpg'),
    thumbnail: require('../assets/images/thumbs/RickMortyLab.jpg'),
    title: 'Laboratorio de Rick & Morty',
    desc: '¿Qué no es posible aquí?',
  },
  {
    src: require('../assets/images/fulls/Simpsons.jpg'),
    thumbnail: require('../assets/images/thumbs/Simpsons.jpg'),
    title: 'Springfield',
    desc: 'Te has vuelto amarillo, te encanta el fresisui y las reglas no van contigo, bienvenido a Springfield',
  },
  {
    src: require('../assets/images/fulls/CentralPerk.jpg'),
    thumbnail: require('../assets/images/thumbs/CentralPerk.jpg'),
    title: 'Central Perk',
    desc: '¿Quién no se ha sentido alguna vez como alguno de ellos? Pues ahora es tu momento',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
