const normalizeSiteUrl = (value?: string | null) => {
  if (!value) return 'https://routsify.com';
  return value.replace(/\/+$/, '');
};

export const SITE = {
  name: 'Routsify',
  domain: 'routsify.com',
  url: normalizeSiteUrl(process.env.SITE_URL),
  slogan: 'Diseñamos viajes personalizados con criterio, calma y detalle.',
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
  'Rutas a medida según fechas, ritmo y presupuesto',
  'Acompañamiento humano antes y durante el viaje'
] as const;

export const HOME_MOMENTS = [
  {
    title: 'Briefing claro',
    copy: 'Nos cuentas el viaje que imaginas, el punto de partida y lo que necesitas resolver.'
  },
  {
    title: 'Diseño de ruta',
    copy: 'Convertimos ese contexto en un plan con lógica, ritmo y prioridades bien ordenadas.'
  },
  {
    title: 'Ajustes finos',
    copy: 'Ajustamos ciudades, noches, tiempos y recomendaciones hasta que la ruta encaje.'
  },
  {
    title: 'Entrega útil',
    copy: 'Te llevas un itinerario claro con soporte, mapa y recomendaciones prácticas.'
  },
  {
    title: 'Acompañamiento',
    copy: 'Seguimos cerca para resolver dudas y mantener el viaje bajo control.'
  }
] as const;

export const HOME_INCLUDES = [
  'Itinerario día a día',
  'Alojamientos y reservas recomendadas',
  'Transportes y traslados',
  'Actividades y experiencias',
  'Restaurantes y paradas útiles',
  'Entradas y gestiones que conviene resolver antes',
  'Mapa, documentos y soporte digital',
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
  'Colaboración con Grupo Star Viajes',
  'Barcelona como base operativa',
  'Testimonios reales ya publicados en la web',
  'Formulario embebido con Fillout y soporte por WhatsApp'
] as const;

export const HOME_CTAS = {
  primary: 'Hablar por WhatsApp',
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
    detail: 'Italia, Suiza, España, Francia, Portugal, Grecia, Centroeuropa y rutas multicountry.'
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
      'Suiza, Italia y Barcelona en una sola ruta coherente, rentable y visualmente deliciosa para viajar sin improvisar.'
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
      'Acabamos de aterrizar en Bogotá, ya de vuelta a la rutina. Quiero agradecer toda la ayuda que nos han brindado desde el día 1.'
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
    q: '¿Vendéis paquetes cerrados?',
    a: 'No. Diseñamos viajes a medida para cada persona o grupo, según fechas, gustos, presupuesto y ritmo.'
  },
  {
    q: '¿Qué incluye una ruta personalizada?',
    a: 'Incluye asesoría, estructura de viaje, ruta optimizada, recomendaciones de reservas y soporte para que el viaje tenga sentido de principio a fin.'
  },
  {
    q: '¿También ayudáis si viajo desde Latinoamérica?',
    a: 'Sí. Esa es una de nuestras especialidades: simplificar el salto internacional hacia Europa, Marruecos o Egipto.'
  },
  {
    q: '¿Tenéis guías más económicas?',
    a: 'Sí. Las guías digitales son la opción más accesible para quien quiere organizarse por su cuenta con buen criterio.'
  },
  {
    q: '¿Cómo os contacto?',
    a: 'Por WhatsApp o email. También puedes usar el formulario de contacto si prefieres dejar el contexto por escrito.'
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
