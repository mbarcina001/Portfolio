import { Project } from './models/project';
import { Knowledge } from './models/knowledge';
import { Career } from './models/career';

export const careerList: Career[] = [
	{
		name: 'UPV/EHU',
		position: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		timePeriod: '2011-2016',
		description: `<p>Durante la carrera desarrollé gran parte de mis aptitudes actuales. Aprendí diversos lenguajes de programación
            (ADA, JAVA y Python), programación web (HTML5, CSS3, JavaScript, JSP, etc) así como diseño y administración de bases de datos (MySQL).
            También desarrollé ciertas aptitudes en Tecnología Artifical y Minería de datos, siendo este último el campo en el que basé mi
            Trabajo de Fin de Grado titulado 'Aprendizaje semisupervisado: Una aplicación en la detección de entidades médicas'.</p>
            <p> Además de lo enseñado en la carrera también aprendí por mi cuenta otros lenguajes de programación que me resultaban interesantes
            como AngularJS, React, Ruby y Spring entre otros.</p>`,
		image: './assets/images/logos/ehu.png'
	}, {
		name: 'Informática de Euskadi',
		position: 'Programador',
		timePeriod: '2017-2018',
		description: `<p>En esta empresa hice labores de mantenimiento de los proyectos web ya existentes dedicados a ofrecer servicio a
            <span class='font-weight-bold'>Caixabank Consumer Finance</span> y basados en Java y Struts en la parte dinámica;
            jQuery en la parte estática; y Ajax para conectar entre ambas partes cuando era necesario,</p>
            <p>Por otra parte, estuve involucrado en el desarrollo e implementación de 2 proyectos desde cero:</p>
            <p><span class='font-weight-bold'>Minisite de MediaMarkt:</span> Realizado en Java y Struts se trata de una aplicación web dedicada
            a la contratación de la tarjeta MediaMarkt Club Card. Incluye servicios REST así como una estructura multimarca diseñada
            especificamente con el objetivo de poder alojar otras marcas (Gas natural, Ventajon, etc) de modo que tuviesen un diseño
            propio y unos pasos para realizar la solicitud a elección del cliente.</p>
            <p><span class='font-weight-bold'>Digitalización TCF:</span> Aplicación web implementada en Angular4 para la compra de
            dispositivos móvilesfinanciados por Telefónica Consumer Finance. Este desarrollo cuenta con un Middleware programado
            en Java que hace las llamadas correspondientes a los servicios que sirven de apoyo a la aplicación. Dicho Middleware
            expone los servicios necesarios en REST para que puedan ser invocados desde el código Angular4 y realiza diferentes
            llamadas a servicios empleando Axis, Jaxb y Soap con cabecera de seguridad y firma entre otros.</p>
            <p>Por otra parte, hice otros proyectos de menor envergadura con otros lenguajes de programación como Spring, así
            como diferentes plugins de Java como Selenium.</p>`,
		image: './assets/images/logos/ide.png'
	},
	{
		name: 'Getronics',
		position: 'Programador',
		timePeriod: '2019',
		description: `<p>Realicé el proyecto <span class='font-weight-bold'>FMS</span> (Field Management Services), una 
			aplicación multiplataforma para Android, iOS y navegador implementada mediante Angular 6, Ionic 3 y Cordova. 
			La aplicación consiste en un gestor de tareas para los trabajadores de campo de Getronics y cuenta con agenda, 
			geolocalización, google maps y gestión de inventario.</p>`,
		image: './assets/images/logos/getronics.png'
	},
	{
		name: 'Bilbomática',
		position: 'Programador',
		timePeriod: '2019-2021',
		description: `<p>Trabajé en la parte front del proyecto <span class='font-weight-bold'>Eccairs 2</span> para la
			<span class='font-weight-bold'>Agencia Europea de Seguridad Aérea</span> (EASA). Este proyecto se desarrrolló
			con Angular 8/10 y Java Spring. El cometido de esta aplicación es la recopilación de incidencias que puedan darse
			en la aviación y la gestión de la taxonomía empleada en los informes que recogen estas incidencias así como otras
			gestiones comunes en este tipo de aplicaciones como roles, usuarios, etc.</p>
			<p>Cabe destacar también que en este proyecto se utilizó la metodología de trabajo SCRUM. </p>`,
		image: './assets/images/logos/bilbomatica.png'
	}, {
		name: 'Tecnalia',
		position: 'Analista programador front-end',
		timePeriod: '2021-2022',
		description: `<p>Participé en el análisis técnico y desarrollo de los proyectos <span class='font-weight-bold'>AbaQus</span> y 
			<span class='font-weight-bold'>Aquila</span> que emplean Angular 12 en el front-end y Django en el back-end.</p>
			<p><span class='font-weight-bold'>AbaQus</span> se emplea para la gestión y el analisis
			de experimentos con herbicidas, insecticidas y frungicidas en cultivos. Para ello cuenta con diferentes analiticas
			sobre el rendimiento de los ensayos realizados, así como herramientas para comparar y exportar los datos de estos
			ensayos.</p>
			<p>Por su parte, <span class='font-weight-bold'>Aquila</span> es una aplicación que muestra un análisis detallado
			de los algoritmos de Machine Learning que están disponibles en el backend para clasificar el rendimiento de los ensayos
			en cultivos. En Aquila se muestran diversas métricas y gráficas que permiten de un vistazo observar la eficacia de
			estos algoritmos.</p>`,
		image: './assets/images/logos/tecnalia_new_logo.jpg'
	}, {
		name: 'Accenture',
		position: 'Analista programador front-end',
		timePeriod: '2022-Actualidad',
		description: `<p>Actualmente me encuentro trabajando para la empresa <span class='font-weight-bold'>Accenture</span> como
			analista programador front-end. El proyecto que estamos desarrollando es la <span class='font-weight-bold'>Nueva Zona
			Zurich</span>, un portal diseñado para que los mediadores puedan realizar la contratacion de los distintos seguros que
			se encuentran dentro de la gama de productos de Zurich. Dentro del proyecto me encuentro en la parte front-end, que se
			divide en 2 principales componentes: la parte visual hecha en Vue.js y el Bff (backend for front-end) desarrollado en
			Node que hace de middleware entre la parte visual y la parte backend. Ambas partes cuentan con tests unitarios
			realizados con Jest. En este proyecto se emplea metodología	Agile con el uso de herramientas como Jira que actua como
			tablero Scrum, y Confluence para la documentación relacionada con el desarrollo del proyecto.</p>`,
		image: './assets/images/logos/accenture.png'
	}
];

export const projectList: Project[] = [
	{
		id: 'p1',
		name: 'Webs CCF',
		description: 'Mantenimiento y atención de incidencias para las webs de servicios para CaixaBank Consumer Finance.',
		imgs: [
			'./assets/images/proyectos/ccf1.PNG',
			'./assets/images/proyectos/ccf2.PNG',
			'./assets/images/proyectos/ccf3.PNG',
			'./assets/images/proyectos/ccf4.PNG',
			'./assets/images/proyectos/ccf5.PNG',
			'./assets/images/proyectos/ccf6.PNG',
			'./assets/images/proyectos/ccf7.PNG',
			'./assets/images/proyectos/ccf8.PNG'
		],
		imgIndex: 0,
		features: [
			'Webs de clientes para tiendas como IKEA, MediaMarkt etc.',
			'Portal público de Teléfonica Consumer Finance',
			'Web de prescriptores para la financiación de coches con estilos propios para marcas como Porsche o Bentley',
			'Web ecommerce para la financiación de coches con concesionarios como Berrocar o Concesur.',
			'Estructura realizada mediante Struts.',
		],
		linkType: 'No',
		link: 'No'
	}, {
		id: 'p2',
		name: 'Minisite finonline',
		description: 'Página web para solicitar la tarjeta de MediaMarkt, Gas Natural, Ventajon, etc.',
		imgs: [
			'./assets/images/proyectos/mm1.PNG',
			'./assets/images/proyectos/gn1.PNG',
			'./assets/images/proyectos/ve1.PNG',
			'./assets/images/proyectos/mm2.PNG',
			'./assets/images/proyectos/mm3.PNG',
			'./assets/images/proyectos/mm4.PNG',
			'./assets/images/proyectos/mm5.PNG',
			'./assets/images/proyectos/mm6.PNG',
			'./assets/images/proyectos/mm7.PNG',
			'./assets/images/proyectos/mm8.PNG',
			'./assets/images/proyectos/mm9.PNG'
		],
		imgIndex: 0,
		features: [
			'Estructura realizada mediante Struts.',
			'Sistema de navegación personalizable y adaptable de cara a que el minisite pueda ser empleado por otras marcas.',
			'Uso de servicios REST para obtención de datos de servicios externos.',
			'Uso de Base de datos Microsoft SQL.',
			'Empleo de Google Tag Manager para analíticas.',
			'Uso de estilos responsive mediante Bootstrap para una visualización óptima desde dispositivos móviles.',
		],
		linkType: 'mmlink',
		link: 'https://comercios.caixabankconsumer.com/apw5/fncWebFinOnline/MediaMarkt.do'
	}, {
		id: 'p3',
		name: 'Digitalización Telefónica Consumer Finance',
		description: 'Página web para financiar diversos teléfonos móviles con TCF',
		imgs: [
			'./assets/images/proyectos/dig1.PNG',
			'./assets/images/proyectos/dig2.PNG',
			'./assets/images/proyectos/dig3.PNG',
			'./assets/images/proyectos/dig4.PNG',
			'./assets/images/proyectos/dig5.PNG',
			'./assets/images/proyectos/dig6.PNG',
			'./assets/images/proyectos/dig7.PNG'
		],
		imgIndex: 0,
		features: [
			'Implementado con Angular 4',
			`Uso de servicios REST implementados en un Middleware aparte en JAVA para realizar llamada con Axis y Jaxb y Soap
            con cabecera de seguridad y firma entre otros`,
			'Diseño adaptativo y responsive mediante CSS3 y Bootstrap 4',
		],
		linkType: 'No',
		link: 'No'
	}, {
		id: 'p4',
		name: 'Getronics FMS',
		description: `Aplicación multiplataforma para Android, iOS y navegadores destinada a su uso por parte de los técnicos de campo de Getronics.
        Recupera los tickets pendientes del técnico y le proporciona información sobre las tareas que tiene el técnico para ese día, las
        ubicaciones a las que se tiene que desplazar, los componentes necesarios, etc.`,
		imgs: [
			'./assets/images/proyectos/fms1.PNG',
			'./assets/images/proyectos/fms2.png',
			'./assets/images/proyectos/fms3.png',
			'./assets/images/proyectos/fms4.png',
			'./assets/images/proyectos/fms5.png',
			'./assets/images/proyectos/fms6.png',
			'./assets/images/proyectos/fms7.png',
			'./assets/images/proyectos/fms8.png',
			'./assets/images/proyectos/fms9.png',
			'./assets/images/proyectos/fms10.png',
			'./assets/images/proyectos/fms11.png',
			'./assets/images/proyectos/fms12.png',
			'./assets/images/proyectos/fms13.png',
			'./assets/images/proyectos/fms14.png',
			'./assets/images/proyectos/fms15.png',
			'./assets/images/proyectos/fms16.png',
			'./assets/images/proyectos/fms17.png',
			'./assets/images/proyectos/fms18.png',
		],
		imgIndex: 9,
		features: [
			'Implementado con Angular 6, Ionic 3 y Cordova',
			'Uso de diversos plugins de Cordova para el acceso de ficheros, uso de la cámara, lector de código de barras, etc.',
			'Funciones de geolocalización y mapa.',
			`Emplea un template adquirido especificamente como base para el proyecto y a partir del cual se han personalizado
            los estilos de la aplicación haciendo uso de HTML5, Ionic3 y CSS3.`
		],
		linkType: 'applink',
		link: 'https://play.google.com/store/apps/details?id=com.getronics.fms.android.release'
	}, /*{
        id: 'p5',
        name: 'SMED',
        description: 'Página web para la gestión de un taller de laminado.',
        imgs: [
            './assets/images/proyectos/smed1.PNG',
            './assets/images/proyectos/smed2.PNG',
            './assets/images/proyectos/smed3.PNG',
            './assets/images/proyectos/smed4.PNG'
        ],
        imgIndex: 1,
        features: [
            'Desarrollado con AngularJS',
            'Emplea el template Gentelella',
            'Hace uso de la librería dhtmlx para la visualización y edición de un diagrama de GANTT',
            'Emplea la librería flot para la visualización de gráficos',
            'Test E2E mediante Protractor',
            'Manejo de ficheros SCSS y JS mediante Gulp'
        ],
        linkType: 'No',
        link: 'No'
    ), {
        id: 'p6',
        name: 'Maquetación web: Booker',
        description: 'Maquetación de la nueva página web de Booker. HTML5, CSS y Bootstrap.',
        imgs: [
            './assets/images/proyectos/booker1.png',
            './assets/images/proyectos/booker2.png',
            './assets/images/proyectos/booker3.png',
            './assets/images/proyectos/booker4.png',
            './assets/images/proyectos/booker5.png',
            './assets/images/proyectos/booker6.png',
            './assets/images/proyectos/booker7.png'
        ],
        imgIndex: 0,
        features: [],
        linkType: 'No',
        link: 'No'
    }, */ {
		id: 'p7',
		name: 'Eccairs 2',
		description: `Aplicación para la recopilación de incidencias en aviación y la gestión de la taxonomía empleada en los informes que
        recogen estas incidencias así como otras gestiones comunes en este tipo de aplicaciones como roles, usuarios, etc.`,
		imgs: [
			'./assets/images/proyectos/eccairs1.png',
			'./assets/images/proyectos/eccairs2.png',
			'./assets/images/proyectos/eccairs3.png',
			'./assets/images/proyectos/eccairs4.png',
			'./assets/images/proyectos/eccairs5.png',
			'./assets/images/proyectos/eccairs6.png',
		],
		imgIndex: 0,
		features: [
			'Parte front implementada con Angular 8/10, Ngrx y Ngrx/data',
			'Uso de librerías de apoyo como Bootstrap y Kendo',
			'Uso de otras tecnologías como Spring, Elastic, MongoDB o MySQL',
			'Metodología SCRUM'
		],
		linkType: 'defaultlink',
		link: 'https://e2.aviationreporting.eu/reporting'
	}, {
		id: 'p8',
		name: 'AbaQus / Aquila',
		description: `Por definir.`,
		imgs: [
			'./assets/images/proyectos/abaqus1.png',
			'./assets/images/proyectos/abaqus2.png',
			'./assets/images/proyectos/abaqus3.png',
			'./assets/images/proyectos/abaqus4.png',
			'./assets/images/proyectos/abaqus5.png',
			'./assets/images/proyectos/abaqus6.png',
			'./assets/images/proyectos/abaqus7.png',
			'./assets/images/proyectos/abaqus8.png',
			'./assets/images/proyectos/abaqus9.png',
			'./assets/images/proyectos/abaqus10.png',
		],
		imgIndex: 0,
		features: [
			'Parte front implementada con Angular 12',
			'Uso de librerías de apoyo como Bootstrap, Datatables y PrimeNg para las gráficas',
		],
		linkType: 'No',
		link: 'No'
	}, {
		id: 'p9',
		name: 'Nueva ZonZurich',
		description: `Por definir.`,
		imgs: [
			'./assets/images/proyectos/zz1.png'
		],
		imgIndex: 0,
		features: [
			'Parte front implementada con Vue.js y TypeScript',
			'Uso de un Bff (Backend for front-end) como intermediario entre la parte visual del front y el backend',
			'Tests unitarios realizados con Jest',
			'Uso de arquitectura propia de Zurich',
		],
		linkType: 'No',
		link: 'No'
	}
];

export const careerProjectList: Project[] = [
	{
		id: 'pc1',
		name: 'Juego: Pasapalabra',
		description: 'Juego realizado en Java del popular concurso de televisión Pasapalabra.',
		imgs: [
			'./assets/images/proyectos/pasapalabra1.JPG',
			'./assets/images/proyectos/pasapalabra2.JPG'
		],
		imgIndex: 1,
		features: [],
		linkType: 'gitlink',
		link: 'https://github.com/jagumiel/Pasapalabra'
	}, {
		id: 'pc2',
		name: 'Juego: Arkanoid',
		description: 'Juego Arkanoid desarrollado en JavaScript para navegador web',
		imgs: [
			'./assets/images/proyectos/arkanoid0.png',
			'./assets/images/proyectos/arkanoid1.png',
			'./assets/images/proyectos/arkanoid2.png',
			'./assets/images/proyectos/arkanoid3.png',
			'./assets/images/proyectos/arkanoid4.png',
			'./assets/images/proyectos/arkanoid5.png',
			'./assets/images/proyectos/arkanoid6.png',
			'./assets/images/proyectos/arkanoid7.png',
			'./assets/images/proyectos/arkanoid8.png',
			'./assets/images/proyectos/arkanoid9.png',
			'./assets/images/proyectos/arkanoid10.png',
			'./assets/images/proyectos/arkanoid11.png'
		],
		imgIndex: 11,
		features: [
			'Desarrollado en JavaScript',
			'Incluye hasta 10 niveles',
			'Texturas originales del juego',
			'Bonuses del juego original (multibola, vida extra, etc)',
			'Uso de librerías JS para la reproducción de sonidos'
		],
		linkType: 'arklink',
		link: 'https://mbarcina001.github.io/Arkanoid'
	}, {
		id: 'pc3',
		name: 'Juego: Ruleta de la fortuna',
		description: 'Juego en Java del popular programa de televisión La ruleta de la fortuna',
		imgs: [
			'./assets/images/proyectos/ruleta1.JPG',
			'./assets/images/proyectos/ruleta2.JPG',
			'./assets/images/proyectos/ruleta3.JPG',
			'./assets/images/proyectos/ruleta4.JPG'
		],
		imgIndex: 1,
		features: [],
		linkType: 'gitlink',
		link: 'https://github.com/mbarcina001/RuletaDeLaFortuna'
	}, {
		id: 'pc4',
		name: 'Gestor de encierros en San Fermín',
		description: 'Aplicación en Java para que las ganaderías que participan en San Fermín puedan administrar su participación.',
		imgs: [
			'./assets/images/proyectos/encierros1.JPG',
		],
		imgIndex: 0,
		features: [
			'Gestión de animales (toros y cabestros).',
			'Gestión de la alineación.',
			'Rellenar ficha médica de los animales.',
			'Votar a otras ganaderías.'
		],
		linkType: 'gitlink',
		link: 'https://github.com/aserrano011/ADSI2014'
	}, {
		id: 'pc5',
		name: 'Aplicación Android: Gestor de Reuniones',
		description: 'Aplicación en Android para la gestión de reuniones.',
		imgs: [
			'./assets/images/proyectos/App1.png',
			'./assets/images/proyectos/App2.png',
			'./assets/images/proyectos/App3.png',
			'./assets/images/proyectos/App4.png',
			'./assets/images/proyectos/App5.png'
		],
		imgIndex: 2,
		features: [
			'Funciones para añadir, modificar y eliminar reuniones.',
			'Notificaciones.',
			'Sincronización con Google Calendar.',
			'Geolocalización.',
			'Función para añadir, modificar y eliminar notas.',
			'Reconocimiento de voz para la redacción de las notas.',
			'Text-to-speech para la lectura de las notas.'
		],
		linkType: 'gitlink',
		link: 'https://github.com/mbarcina001/GestorDeReuniones'
	}, {
		id: 'pc6',
		name: 'Detector de entidades en textos médicos',
		description: `Aplicación que emplea técnicas de minería de datos (aprendizaje semisupervisado y evaluación no supervisada)
        para identificar entidades tales como enfermedades y medicamentos en textos médicos.`,
		imgs: [
			'./assets/images/proyectos/TFG1.JPG',
			'./assets/images/proyectos/tfg2.JPG',
			'./assets/images/proyectos/tfg3.JPG',
			'./assets/images/proyectos/tfg4.JPG'
		],
		imgIndex: 3,
		features: [],
		linkType: 'IXA',
		link: 'No'
	}
];

export const otherProjectList: Project[] = [
	{
		id: 'op1',
		name: 'App: Pokedex',
		description: 'Aplicación multiplataforma que simula una pokédex. Realizada para un proceso de selección.',
		imgs: [
			'./assets/images/proyectos/pokedex1.jpg',
			'./assets/images/proyectos/pokedex2.jpg',
			'./assets/images/proyectos/pokedex3.jpg'
		],
		imgIndex: 0,
		features: [
			'Implementada mediante Ionic y Angular',
			'Consume servicios REST para la obtención de datos',
			'Los idiomas se establecen de forma dinámica',
			'App Responsive'
		],
		linkType: 'gitlink',
		link: 'https://github.com/mbarcina001/pokedex'
	}, {
		id: 'op2',
		name: 'Github Issue Search',
		description: 'Página web para la búsqueda de issues en proyectos de github',
		imgs: [
			'./assets/images/proyectos/issuesearch1.PNG',
			'./assets/images/proyectos/issuesearch2.PNG',
			'./assets/images/proyectos/issuesearch3.PNG'
		],
		imgIndex: 0,
		features: [
			'Implementada con Angular 8',
			'Emplea la API de Github para obtener las issues',
			'Hace uso de Ngrx para los servicios',
			'Validación dinámica de la barra de búsqueda'
		],
		linkType: 'gitlink',
		link: 'https://github.com/mbarcina001/issue-search'
	}, {
		id: 'op3',
		name: 'SpringMarket',
		description: 'Página web para ecommerce',
		imgs: [
			'./assets/images/proyectos/springmarket1.png',
			'./assets/images/proyectos/springmarket2.png',
			'./assets/images/proyectos/springmarket3.png',
			'./assets/images/proyectos/springmarket4.png',
			'./assets/images/proyectos/springmarket5.png',
			'./assets/images/proyectos/springmarket6.png',
			'./assets/images/proyectos/springmarket7.png',
			'./assets/images/proyectos/springmarket8.png',
		],
		imgIndex: 0,
		features: [
			'Implementada con Spring MVC e Hibernate',
			'Emplea BBDD para la realización de operaciones CRUD',
			'Configuración mediante Spring Boot',
			'Empleo de Spring Security para la identificación de usuarios',
			'Utiliza Spring AOT',
			`Hace uso de Spring Boot Actuator para la adición de nuevos endpoints relacionados con la aplicación, y Spring Boot
            Security para restringir el acceso de estos endpoints a usuarios identificados`,
			'Manejo de dependencias con Maven',
			'Uso de templates Thymeleaf'
		],
		linkType: 'gitlink',
		link: 'https://github.com/mbarcina001/springmarket'
	},
	{
		id: 'op4',
		name: 'Kraken',
		description: 'Aplicación web para gestión de agenda',
		imgs: [
			'./assets/images/proyectos/kraken1.png',
			'./assets/images/proyectos/kraken2.png',
			'./assets/images/proyectos/kraken3.png',
			'./assets/images/proyectos/kraken4.png',
			'./assets/images/proyectos/kraken5.png',
			'./assets/images/proyectos/kraken6.png',
			'./assets/images/proyectos/kraken7.png',
			'./assets/images/proyectos/kraken8.png',
		],
		imgIndex: 0,
		features: [
			'Arquitectura de microservicios',
			'Base de datos MySQL con opción para deplegar mediante Docker',
			'2 proyectos back para Auth y Api implementados con Java Spring Boot para la exposición de servicios REST',
			'Empleo de OAuth2 para la identificación de usuarios',
			'Conexión a Base de datos con Hibernate',
			'Uso de Log4j2 para la escritura de logs',
			'Parte front implementada con Angular 9 y NGRX para las llamadas a servicios',
			'Se utilizan roles para restringir el acceso a ciertas partes de la aplicación tanto en front como en back',
		],
		linkType: 'gitlink',
		link: 'https://github.com/mbarcina001/kraken'
	}
];

export const knowledgeList: Knowledge[] = [
	{
		icon: 'devicon-android-plain',
		description: 'Android',
		type: 'icon'
	}, {
		icon: 'devicon-angularjs-plain',
		description: 'Angular',
		type: 'icon'
	}, {
		icon: 'devicon-apache-plain',
		description: 'Apache',
		type: 'icon'
	}, /* {
        icon: 'devicon-dot-net-plain',
        description: 'ASP.NET',
        type: 'icon'
    }, {
        icon: 'azure',
        description: 'Azure',
        type: 'icon img'
    },*/ {
		icon: 'devicon-css3-plain',
		description: 'CSS3',
		type: 'icon'
	}, {
		icon: 'cordova',
		description: 'Cordova',
		type: 'icon img'
	}, {
		icon: 'fa fa-database',
		description: 'Data mining',
		type: 'icon'
	}, {
		icon: 'devicon-git-plain',
		description: 'Git',
		type: 'icon'
	}, {
		icon: 'devicon-google-plain',
		description: 'Google Tag Manager',
		type: 'icon'
	}, {
		icon: 'devicon-gulp-plain',
		description: 'Gulp',
		type: 'icon'
	}, {
		icon: 'devicon-html5-plain',
		description: 'HTML5',
		type: 'icon'
	}, {
		icon: 'hibernate',
		description: 'Hibernate',
		type: 'icon img'
	}, {
		icon: 'ionic',
		description: 'Ionic',
		type: 'icon img'
	}, {
		icon: 'devicon-java-plain',
		description: 'Java',
		type: 'icon'
	}, {
		icon: 'devicon-javascript-plain',
		description: 'JavaScript',
		type: 'icon'
	}, {
		icon: 'devicon-jquery-plain',
		description: 'jQuery',
		type: 'icon'
	}, {
		icon: 'maven',
		description: 'Maven',
		type: 'icon img'
	}, {
		icon: 'devicon-mysql-plain',
		description: 'MySQL',
		type: 'icon'
	}, {
		icon: 'devicon-nodejs-plain',
		description: 'Node JS',
		type: 'icon'
	}, {
		icon: 'npm',
		description: 'NPM',
		type: 'icon img'
	}, {
		icon: 'devicon-photoshop-plain',
		description: 'Photoshop',
		type: 'icon'
	}, /* {
        icon: 'devicon-php-plain',
        description: 'PHP',
        type: 'icon'
    },*/ {
		icon: 'devicon-python-plain',
		description: 'Python',
		type: 'icon'
	}, {
		icon: 'devicon-react-original',
		description: 'ReactJS',
		type: 'icon'
	}, {
		icon: 'rest',
		description: 'Servicios REST',
		type: 'icon img'
	}, {
		icon: 'devicon-ruby-plain',
		description: 'Ruby',
		type: 'icon'
	}, {
		icon: 'devicon-rails-plain',
		description: 'Ruby on rails',
		type: 'icon'
	}, {
		icon: 'rxjs',
		description: 'Rxjs y Ngrx',
		type: 'icon img'
	}, {
		icon: 'devicon-sass-plain',
		description: 'Sass',
		type: 'icon'
	}, {
		icon: 'selenium',
		description: 'Selenium',
		type: 'icon img'
	}, {
		icon: 'icon-spring',
		description: 'Spring',
		type: 'icon'
	}, /* {
        icon: 'struts',
        description: 'Struts',
        type: 'icon img'
    }, {
        icon: 'svn',
        description: 'SVN',
        type: 'icon img'
    }, {
        icon: 'tfs',
        description: 'TFS',
        type: 'icon img'
    },*/ {
		icon: 'devicon-typescript-plain',
		description: 'TypeScript',
		type: 'icon'
	}, {
		icon: 'devicon-vuejs-plain',
		description: 'Vue.js',
		type: 'icon'
	}
];
