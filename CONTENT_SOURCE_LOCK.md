# Content source lock

This document locks the verified content sources before any redesign or copy rewrite.

## Verified sources

- Current public website: `https://routsify.com`
- WordPress export: `migration/wordpress/routsify-wordpress-pages.xml`
- Existing legal pages in the repo
- Existing Astro pages when they reflect real, verified content

## Page map

| Current WordPress / URL | Astro destination | Content principal real | CTAs reales | Servicios mencionados | Destinos mencionados | Precios mencionados | Testimonios / reseñas | Qué se conserva | Qué se elimina de la PR actual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `inicio` / `https://routsify.com/` | `/` | Routsify organiza viajes a Europa con personalización hasta el ultimo detalle, adaptada a requisitos y presupuesto. No vende paquetes cerrados. | `Escribenos por Whatsapp`, `Presupuesto Gratis`, `Ver cómo funciona` | Experiencia 100% personalizada, soporte continuo, asesoría inicial, itinerario detallado, reservas, app gratis | Europa, paises cercanos; en la web actual aparecen Europa, Marruecos y Egipto como foco comercial | 2,99 € en guías; 5,99 € por día de ruta aparece en la web/WordPress; en WordPress también aparece 14,99 € tachado | Familia Hernández, Pareja Augusto, Familia desde Chile, Familia Diaz; bloque de reseñas con María, Marcos, Ivett | Hero, propuesta de valor, soporte antes y durante, guía de pasos, testimonios reales, CTA a WhatsApp | Todo el lenguaje tipo `travel design studio`, `SEO`, `indexable`, `landing`, `producto digital escalable`, `mantenimiento barato`, `top 0`, `+0`, `0 K` y cualquier framing de SaaS o marketing |
| `ruta-personalizada` / `https://routsify.com/ruta-personalizada/` | `/ruta-personalizada/` | Planificación inicial, ayuda para elegir fechas, vuelos, alojamientos y transportes; itinerario completo día a día; apoyo con mapas, restaurantes, horarios, seguridad, documentación, maleta y soporte | `Pide tu ruta`, `Rellena el formulario`, `Escríbenos por WhatsApp` | Asesoría inicial, ruta personalizada, reservas, itinerario detallado, transportes, mapa personalizado, seguros, salud, datos móviles, apps, documentación | Europa y alrededores; en la base actual también se usan Marruecos y Egipto | 5,99 € por día de ruta; 14,99 € tachado solo si se mantiene como dato verificado | Ejemplo de asesoría / reseñas de ruta personalizada y mención de Carlos A.Z. en el XML | Mantener el producto estrella, el desglose paso a paso y el precio por día | Quitar tono de “oferta limitada” y la redacción de venta agresiva; evitar términos genéricos de conversión o urgencia inventada |
| `guias-de-recomendaciones` / `https://routsify.com/guias/` | `/guias/` | Guías de recomendaciones en PDF, con lugares para comer, ver y disfrutar, restaurantes, cafeterías, qué visitar, excursiones, transporte, mapa y trucos locales | `Comprar aquí`, `Pedir catálogo por WhatsApp`, `Prefiero una ruta a medida` | Guías digitales, consejos locales, apps útiles, descuentos, zonas y alojamientos, vida nocturna | Roma, Venecia, Milán/Lago di Como, París, Disneyland París, Madrid, Nápoles, Londres, Ámsterdam, Barcelona, Italia Esencial, San Sebastián, Budapest, Marrakech, Viena, Lanzarote, Florencia, Oporto, Nueva York, etc. en el XML; no todo debe salir en la nueva web | 2,99 € general; 3,99 € en packs 2x1; 10,95 € en Italia Esencial; 5,99 € tachado en productos antiguos | Sin testimonios principales en la página de guía; funciona como catálogo | Mantener la guía como complemento para viajeros autosuficientes | Eliminar toda la narrativa de `venta escalable`, `producto digital`, `sin base de datos` y cualquier promesa comercial inventada |
| `contacto` / `https://routsify.com/contacto/` | `/contacto/` | Formulario de contacto, email `info@routsify.com`, dirección de Barcelona, WhatsApp, redes sociales, tono cercano y mensaje de primer paso | `Escribenos por Whatsapp`, formulario embebido de Fillout | Atención directa y captación por formulario Fillout | Barcelona | No aplica | No aplica | Mantener el embed de Fillout y el acceso a WhatsApp | Quitar el lenguaje de `formulario principal del sitio`, `canal principal` si suena técnico, y evitar duplicar información sin jerarquía |
| `preguntas-frecuentes-de-routsify` / `https://routsify.com/faq/` | `/faq/` | Qué es Routsify, destinos, por qué elegirla, acompañamiento, reservas, viajeros de USA y Latinoamérica, guías, dietas específicas, ayuda con vuelos internacionales | `Escribenos aquí`, `Contacta`, WhatsApp | Viajes 100% personalizados, acompañamiento integral, gestión de reservas, guías digitales | Europa, Marruecos, Egipto, Reino Unido, Turquía y cercanos a Europa si forman parte del itinerario | 2,99 € en guías; precios de ruta y guía solo donde estén verificados | No hay reseñas principales; la página responde dudas | Mantener las respuestas directas y la claridad de venta | Eliminar wording genérico de UX/marketing y cualquier respuesta que introduzca datos no verificados |
| `sobre-nosotros` / `https://routsify.com/sobre-nosotros/` | `/sobre-nosotros/` | Expertos en viajes a Europa, ayuda para descubrir rutas y aventuras personalizadas, experiencia y respaldo profesional, misión de hacer viajes fáciles, cómodos y adaptados, valores de viajes auténticos, seguros y a medida | `Escribenos por Whatsapp` | Experiencia, personalización, respaldo de Grupo Star Viajes si se mantiene verificado | Europa y alrededores | No aplica | No aplica | Mantener misión, valores y colaboración verificable | Eliminar `tecnología`, `estudio de diseño`, claims de historia nueva no documentados y cifras decorativas |
| `politica-privacidad` / `https://routsify.com/privacidad/` | `/privacidad/` | Tratamiento de datos, formulario Fillout, WhatsApp, email, derechos del usuario, base legal, transferencias, conservación | Email de contacto, WhatsApp | Privacidad y tratamiento de datos | No aplica | No aplica | No aplica | Mantener el sentido legal | No reescribir agresivamente ni añadir marketing |
| `politica-de-cookies-ue` / `https://routsify.com/cookies/` | `/cookies/` | Cookies técnicas, tecnologías del formulario Fillout, enlaces externos | Email, WhatsApp | Cookies técnicas y de terceros necesarios | No aplica | No aplica | No aplica | Mantener el texto legal similar | No introducir analítica o marketing que no exista |
| `aviso-legal` / `https://routsify.com/aviso-legal/` | `/aviso-legal/` | Titularidad, NIF, domicilio Barcelona, seguro RC, caución, jurisdicción, uso del sitio | Email, WhatsApp | Aviso legal y terceros como Fillout/WhatsApp | Barcelona | No aplica | No aplica | Mantener el marco legal | No cambiar el sentido legal ni inventar datos |
| `condiciones-generales` / `https://routsify.com/condiciones-generales/` | `/condiciones-generales/` | Contratación, precios, pagos, cancelaciones, responsabilidad, reclamaciones | Email, WhatsApp | Condiciones de contratación de servicios turísticos | Barcelona | Remite al precio del servicio o presupuesto acordado | No aplica | Mantener la estructura y el sentido | No reescribir agresivamente ni convertirlo en copy comercial |

## Legacy WordPress pages without Astro destination yet

- `blog-de-viajes`
- `productos-de-viaje`
- `confirmacion-de-pago`
- `pago-fallido`
- `pagina-de-carrito`
- `pagina-de-pago`

These pages exist in the XML, but they are legacy or commerce-era content and should not be surfaced in the new narrative unless a later migration step explicitly asks for them.

## Global deletion list for the PR

- Any copy about SEO, marketing, SaaS, startup, growth, dashboards, scalability or productized software.
- Any use of `landing` language when a travel journey or entry point reads better.
- Any invented claims, numbers, destinations, testimonials or guarantees.
- Any Madrid-centric commercial messaging in the new narrative.
- Any generic AI phrases such as `study`, `exclusive experience` without travel context, or `beautiful but empty`.
