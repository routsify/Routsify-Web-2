const normalizeSiteUrl = (value?: string | null) => {
  if (!value) return 'https://routsify.com';
  return value.replace(/\/+$/, '');
};

export const SITE = {
  name: 'Routsify',
  domain: 'routsify.com',
  url: normalizeSiteUrl(process.env.SITE_URL),
  slogan: 'Diseñamos viajes personalizados por Europa y destinos cercanos con criterio, calma y detalle.',
  email: 'info@routsify.com',
  whatsapp: '+34 628 173 890',
  whatsappUrl: 'https://wa.me/34628173890',
  instagram: 'https://www.instagram.com/routsify/',
  tiktok: 'https://www.tiktok.com/@routsify',
  address: 'Agencia de Viajes Online, 08027 Barcelona, España',
  legalNote: 'Contacto principal por WhatsApp y formulario embebido con Fillout.'
} as const;

export const PRICE = {
  guidesFrom: 2.99,
  personalizedRoutePerDay: 5.99,
  personalizedRouteLabel: '€/día de ruta'
} as const;

export const NAV = [
  { href: '/latam/', label: 'LatAm' },
  { href: '/europa/', label: 'Europa' },
  { href: '/ruta-personalizada/', label: 'Ruta personalizada' },
  { href: '/guias/', label: 'Guías' },
  { href: '/sobre-nosotros/', label: 'Sobre nosotros' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contacto/', label: 'Contacto' }
] as const;

export const LANDING_LINKS = [
  {
    href: '/latam/',
    title: 'Viajo desde Latinoamérica o fuera de Europa',
    eyebrow: 'LatAm + Mundo',
    description:
      'Rutas a Europa, Marruecos y Egipto con foco en seguridad, conexiones, presupuesto y cero estrés.'
  },
  {
    href: '/europa/',
    title: 'Viajo desde España o Europa',
    eyebrow: 'España + Europa',
    description:
      'Viajes a medida dentro o fuera de Europa, pensados para ahorrar tiempo y diseñar experiencias únicas.'
  }
] as const;

export const HOME_PROMISES = [
  'Viajes personalizados de principio a fin',
  'Rutas pensadas según fechas, ritmo y presupuesto',
  'Acompañamiento humano antes y durante el viaje'
] as const;

export const HOME_MOMENTS = [
  {
    title: 'Nos cuentas el viaje',
    copy: 'Compartes destino, fechas, presupuesto y cómo te gusta viajar.'
  },
  {
    title: 'Diseñamos la ruta',
    copy: 'Ordenamos ciudades, noches, traslados y prioridades para que todo tenga sentido.'
  },
  {
    title: 'Ajustamos los detalles',
    copy: 'Afinamos actividades, reservas, restaurantes, mapas y ritmo hasta que encaje contigo.'
  },
  {
    title: 'Te entregamos todo claro',
    copy: 'Recibes un itinerario útil con información práctica, lista para usar.'
  },
  {
    title: 'Seguimos cerca',
    copy: 'Te acompañamos antes y durante el viaje para resolver dudas y cambios.'
  }
] as const;

export const HOME_INCLUDES = [
  'Itinerario día a día',
  'Alojamientos y reservas recomendadas',
  'Transportes y traslados',
  'Actividades, entradas y horarios',
  'Restaurantes y paradas útiles',
  'Mapa, documentos y soporte digital',
  'Consejos de seguridad y salud',
  'Datos móviles, apps y orientación práctica',
  'Acompañamiento antes y durante el viaje'
] as const;

export const HOME_COMPARISON = [
  {
    label: 'Viajar por tu cuenta',
    points: [
      'Más tiempo de investigación',
      'Más dudas en rutas y conexiones',
      'Riesgo de decisiones poco eficientes'
    ]
  },
  {
    label: 'Agencia tradicional',
    points: [
      'Más estructura, pero menos personalización',
      'Paquetes más cerrados',
      'Menos sensación de plan hecho para ti'
    ]
  },
  {
    label: 'Routsify',
    points: [
      'Viajes personalizados y rutas a medida',
      'Acompañamiento humano y claro',
      'Planificación profesional con calma'
    ]
  }
] as const;

export const HOME_TRUST = [
  'Barcelona como base operativa',
  'Formulario embebido con Fillout y soporte por WhatsApp',
  'Testimonios reales ya publicados en la web',
  'Colaboración con Grupo Star Viajes'
] as const;

export const HOME_CTAS = {
  primary: 'Escríbenos por WhatsApp',
  secondary: 'Ver ruta personalizada'
} as const;

export const CORE_BENEFITS = [
  'Experiencia 100% personalizada',
  'Asesoría inicial y acompañamiento durante el viaje',
  'Itinerario día a día y recomendaciones prácticas',
  'Reservas, transportes, restaurantes y actividades',
  'Mapa, documentos y soporte digital centralizado'
] as const;

export const DESTINATIONS = [
  {
    name: 'Europa',
    detail: 'Italia, Suiza, España, Francia, Portugal, Grecia y rutas multicountry.'
  },
  {
    name: 'Marruecos',
    detail: 'Circuitos urbanos y desérticos con equilibrio entre cultura, ritmo y logística.'
  },
  {
    name: 'Egipto',
    detail: 'Viajes con foco en historia, navegación, traslados y orden del itinerario.'
  }
] as const;

export const DESTINATION_LANES = [
  {
    title: 'Europa',
    copy: 'Rutas multicountry, escapadas y viajes largos con lógica y ritmo realista.'
  },
  {
    title: 'Marruecos',
    copy: 'Circuitos urbanos y desérticos que equilibran cultura, traslados y descanso.'
  },
  {
    title: 'Egipto',
    copy: 'Viajes con foco en historia, navegación, traslados y orden del itinerario.'
  }
] as const;

export const CASES = [
  {
    title: 'Familia desde Colombia',
    summary:
      'Diseño de ruta por ciudades clave de Europa, cuidando vuelos, ritmo, descanso y tiempos reales de conexión.'
  },
  {
    title: 'Pareja desde México',
    summary:
      'Itinerario equilibrado con ciudad, escapadas y experiencias memorables sin convertir el viaje en una maratón.'
  },
  {
    title: 'Multicountry en Europa',
    summary:
      'Suiza, Italia y Barcelona en una sola ruta coherente y pensada para viajar sin improvisar.'
  }
] as const;

export const TESTIMONIALS = [
  {
    name: 'María',
    quote:
      'Muchas gracias por el gran trabajo. Me encantó la ruta y me tomaré mi tiempo dándole un vistazo, pero de primeras ya os doy las gracias.'
  },
  {
    name: 'Marcos',
    quote:
      'Queríamos dar las gracias por todo el trabajazo que hiciste con nuestra ruta por Europa. Ha sido un viaje increíble para nosotros y para los niños.'
  },
  {
    name: 'Ivett',
    quote:
      'Acabamos de llegar a Bogotá, ya de vuelta a la rutina. Quiero agradecer toda la ayuda que nos han brindado desde el día 1.'
  },
  {
    name: 'Familia de Chile',
    quote:
      'Gracias por el plan que armaste para nosotros estos 12 días. Súper buenos lugares y conocimos más de lo que en otros viajes habíamos visto.'
  }
] as const;

export const TRUST_STATEMENTS = [
  'Viajes personalizados con seguimiento humano',
  'Contenido y testimonios verificados, sin promesas inventadas',
  'Barcelona como contexto comercial y operativo',
  'Formulario Fillout + WhatsApp como vías principales de contacto'
] as const;

export const FAQS = [
  {
    q: '¿Qué es Routsify?',
    a: 'Routsify es una agencia especializada exclusivamente en Europa y destinos cercanos. Diseñamos viajes 100% personalizados con asesoría experta y acompañamiento antes y durante el viaje.'
  },
  {
    q: '¿En qué destinos está especializada Routsify?',
    a: 'Trabajamos sobre todo Europa, Marruecos y Egipto. También podemos integrar Reino Unido y Turquía cuando forman parte de un itinerario europeo y tiene sentido para el viaje.'
  },
  {
    q: '¿Por qué elegir Routsify y no reservar por mi cuenta?',
    a: 'Porque te ahorras semanas de búsqueda, errores de logística y decisiones poco eficientes. Aportamos criterio local, gestión de reservas y respaldo profesional.'
  },
  {
    q: '¿El viaje es totalmente personalizado?',
    a: 'Sí. No trabajamos paquetes estándar. Cada ruta se adapta a tus fechas, presupuesto, gustos y ritmo.'
  },
  {
    q: '¿Se encargan de todas las reservas?',
    a: 'Sí. Si lo necesitas, gestionamos la parte operativa para que el viaje quede resuelto con menos fricción.'
  },
  {
    q: '¿Ofrecéis acompañamiento durante el viaje?',
    a: 'Sí. No desaparecemos después de cobrar: seguimos cerca para ayudarte con cambios, dudas o incidencias en destino.'
  },
  {
    q: '¿Trabajáis con clientes de Estados Unidos y Latinoamérica?',
    a: 'Sí. De hecho, el público de América está muy presente en la web y en el material de referencia.'
  },
  {
    q: '¿Ayudáis con vuelos internacionales desde América?',
    a: 'Sí. Si lo necesitas, te ayudamos a ordenar la parte de vuelos internacionales como parte del diseño del viaje.'
  },
  {
    q: '¿Qué son las guías de Routsify?',
    a: 'Son guías digitales por destino con restaurantes, barrios estratégicos, experiencias, consejos prácticos y lugares auténticos fuera de lo turístico. Son un complemento económico, no sustituyen la ruta personalizada.'
  },
  {
    q: '¿Incluyen opciones para dietas específicas?',
    a: 'Sí. Adaptamos las recomendaciones gastronómicas según restricciones o preferencias alimenticias, como dieta vegana o sin gluten.'
  },
  {
    q: '¿Si viajo en coche, incluís carreteras, peajes o gasolineras?',
    a: 'Sí. Si nos dices que viajarás en coche, podemos incluir rutas, áreas de servicio y costes aproximados de peajes o gasolina cuando estén disponibles.'
  },
  {
    q: '¿Podéis añadir actividades muy específicas?',
    a: 'Sí. Podemos buscar y sumar actividades concretas como buceo, catas de vino o talleres locales si encajan con la ruta.'
  },
  {
    q: '¿Cómo empiezo a trabajar con Routsify?',
    a: 'Escríbenos por WhatsApp o completa el formulario de contacto y te diremos por dónde empezar.'
  }
] as const;

export const VALUES = [
  {
    title: 'Criterio',
    copy: 'No sumamos cosas por sumar. Cada ruta responde a una lógica de viaje real.'
  },
  {
    title: 'Cercanía',
    copy: 'Acompañamos como un equipo humano, no como una máquina de reservas.'
  },
  {
    title: 'Precisión',
    copy: 'Cada detalle importa cuando el viaje es caro, largo o muy esperado.'
  },
  {
    title: 'Calma',
    copy: 'Reducimos fricción para que el cliente sienta control desde el primer mensaje.'
  }
] as const;
