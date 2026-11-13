import type { GalleryContent } from '../types';

const currentIRadarOneImage = new URL(
    '../assets/client/instrumentation/current/level/current-iradar-one.png',
    import.meta.url,
).href;
const currentIbar800xImage = new URL(
    '../assets/client/instrumentation/current/pressure/current-ibar-800x.png',
    import.meta.url,
).href;
const currentIRtd100Image = new URL(
    '../assets/client/instrumentation/current/temperature/current-irtd-100-optimized.png',
    import.meta.url,
).href;
const wirelessVibrationImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-lorawan-vibration.jpg',
    import.meta.url,
).href;
const wirelessAcousticImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-lorawan-acoustic.jpg',
    import.meta.url,
).href;
const wirelessDifferentialPressureImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-lorawan-dp.jpg',
    import.meta.url,
).href;
const wirelessIRadarNexImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-iradar-nex-wireless.jpg',
    import.meta.url,
).href;
const wirelessValvePositionImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-lorawan-valve-position.png',
    import.meta.url,
).href;
const wirelessTemperatureImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-lorawan-temperature-alt-cropped.png',
    import.meta.url,
).href;
const wirelessPressureImage = new URL(
    '../assets/client/instrumentation/current/wireless/current-lorawan-pressure.png',
    import.meta.url,
).href;
const currentBrandLogo = new URL(
    '../assets/client/instrumentation/brands/current-instruments-logo.png',
    import.meta.url,
).href;
const wintersBrandLogo = new URL(
    '../assets/client/instrumentation/brands/winters-instruments-logo-normalized.png',
    import.meta.url,
).href;
const wintersPfpImage = new URL(
    '../assets/client/instrumentation/winters/gauges/winters-pfp-pressure-gauge.jpg',
    import.meta.url,
).href;
const wintersPscImage = new URL(
    '../assets/client/instrumentation/winters/gauges/winters-psc-pressure-gauge.jpg',
    import.meta.url,
).href;
const wintersPtgImage = new URL(
    '../assets/client/instrumentation/winters/gauges/winters-ptg-test-gauge.jpg',
    import.meta.url,
).href;
const rStahlOrcaHmiImage = new URL(
    '../assets/client/instrumentation/stahl/orca-os-e59a.png',
    import.meta.url,
).href;
const rStahlExsysCoolImage = new URL(
    '../assets/client/instrumentation/stahl/exsys-cool-serie-8701.jpg',
    import.meta.url,
).href;
const rStahlExluxImage = new URL(
    '../assets/client/instrumentation/stahl/exlux-serie-6002-4.jpg',
    import.meta.url,
).href;
const rStahlExpressureImage = new URL(
    '../assets/client/instrumentation/stahl/expressuregab.jpeg',
    import.meta.url,
).href;
const bermadFp400y2dImage = new URL(
    '../assets/client/instrumentation/bermad/bermad-fp-400y-2d.png',
    import.meta.url,
).href;
const bermadFp400y2dcImage = new URL(
    '../assets/client/instrumentation/bermad/bermad-fp-400y-2dc.jpeg',
    import.meta.url,
).href;
const bermadFp400y4dcImage = new URL(
    '../assets/client/instrumentation/bermad/bermad-fp-400y-4dc.jpeg',
    import.meta.url,
).href;
const draegerPolytron8100EcImage = new URL(
    '../assets/client/instrumentation/draeger/polytron-8100-ec.avif',
    import.meta.url,
).href;
const draegerXam8000Image = new URL(
    '../assets/client/instrumentation/draeger/x-am-8000.avif',
    import.meta.url,
).href;
const draegerSaverCfImage = new URL(
    '../assets/client/instrumentation/draeger/saver-cf.avif',
    import.meta.url,
).href;

const rStahlBrandLogo = new URL(
    '../assets/client/instrumentation/brands/stahl.png',
    import.meta.url,
).href;

const bermadBrandLogo = new URL(
    '../assets/client/instrumentation/brands/bermad.png',
    import.meta.url,
).href;

const draegerBrandLogo = new URL(
    '../assets/client/instrumentation/brands/Dräger_Logo.svg.webp',
    import.meta.url,
).href;

export const gallery: GalleryContent = {
    sectionTitle: 'Instrumentación Industrial',
    sectionIntro:
        'Soluciones de medición para aplicaciones industriales, respaldadas por fabricantes especializados.',
    brandsTitle: 'Fabricantes representados',
    familiesTitle: 'Familias disponibles',
    brands: [
        {
            id: 'current-instruments',
            name: 'Current Instruments',
            shortDescription:
                'Representación comercial para soluciones de medición en aplicaciones industriales seleccionadas.',
            published: true,
            displayOrder: 1,
            logo: currentBrandLogo,
            logoAlt: 'Logotipo oficial de Current Instruments',
            families: [
                {
                    id: 'current-level',
                    brandId: 'current-instruments',
                    name: 'Nivel',
                    shortDescription:
                        'Equipos orientados a la medición de nivel para procesos industriales y aplicaciones de campo.',
                    published: true,
                    displayOrder: 1,
                },
                {
                    id: 'current-pressure',
                    brandId: 'current-instruments',
                    name: 'Presión',
                    shortDescription:
                        'Instrumentación para monitoreo y control de presión en entornos operativos industriales.',
                    published: true,
                    displayOrder: 2,
                },
                {
                    id: 'current-temperature',
                    brandId: 'current-instruments',
                    name: 'Temperatura',
                    shortDescription:
                        'Soluciones de medición de temperatura para soporte de operación, mantenimiento y confiabilidad.',
                    published: true,
                    displayOrder: 3,
                },
                {
                    id: 'current-wireless',
                    brandId: 'current-instruments',
                    name: 'Wireless',
                    shortDescription:
                        'Soluciones inalámbricas para monitoreo industrial remoto y visibilidad operativa en campo.',
                    published: true,
                    displayOrder: 4,
                },
            ],
        },
        {
            id: 'winters-instruments',
            name: 'Winters Instruments',
            shortDescription:
                'Representación comercial enfocada exclusivamente en instrumentación de presión autorizada.',
            published: true,
            displayOrder: 2,
            logo: wintersBrandLogo,
            logoAlt: 'Logotipo oficial de Winters Instruments',
            families: [
                {
                    id: 'winters-gauges',
                    brandId: 'winters-instruments',
                    name: 'Manómetros industriales',
                    shortDescription:
                        'Línea de manómetros industriales para lectura y verificación de presión en procesos críticos.',
                    published: true,
                    displayOrder: 1,
                },
            ],
        },
        {
            id: 'r-stahl',
            name: 'R. STAHL',
            shortDescription:
                'Soluciones de seguridad eléctrica y automatización para zonas clasificadas y procesos críticos.',
            published: true,
            displayOrder: 3,
            logo: rStahlBrandLogo,
            logoAlt: 'Logotipo de R. STAHL',
            families: [
                {
                    id: 'r-stahl-hmi',
                    brandId: 'r-stahl',
                    name: 'HMI',
                    shortDescription:
                        'Interfaces hombre-máquina para supervisión y control en entornos industriales exigentes.',
                    published: true,
                    displayOrder: 1,
                },
                {
                    id: 'r-stahl-hvac',
                    brandId: 'r-stahl',
                    name: 'HVAC',
                    shortDescription:
                        'Equipos de control y automatización para sistemas de climatización y acondicionamiento industrial.',
                    published: true,
                    displayOrder: 2,
                },
                {
                    id: 'r-stahl-luminarias',
                    brandId: 'r-stahl',
                    name: 'Luminarias',
                    shortDescription:
                        'Luminarias para áreas peligrosas y espacios con exigencias de seguridad y visibilidad.',
                    published: true,
                    displayOrder: 3,
                },
                {
                    id: 'r-stahl-gabinetes',
                    brandId: 'r-stahl',
                    name: 'Gabinetes',
                    shortDescription:
                        'Gabinetes y soluciones de alojamiento para equipos críticos en instalaciones industriales.',
                    published: true,
                    displayOrder: 4,
                },
            ],
        },
        {
            id: 'bermad',
            name: 'BERMAD',
            shortDescription:
                'Control y protección de flujo para sistemas de agua contra incendios y procesos de presión.',
            published: true,
            displayOrder: 4,
            logo: bermadBrandLogo,
            logoAlt: 'Logotipo de BERMAD',
            families: [
                {
                    id: 'bermad-fire-protection',
                    brandId: 'bermad',
                    name: 'Protección contra incendios',
                    shortDescription:
                        'Sistemas de válvulas y control para protección activa en instalaciones críticas y sensibles.',
                    published: true,
                    displayOrder: 1,
                },
                {
                    id: 'bermad-pressure-control',
                    brandId: 'bermad',
                    name: 'Control de presión',
                    shortDescription:
                        'Soluciones de reducción y regulación de presión en sistemas hidráulicos y de agua industrial.',
                    published: true,
                    displayOrder: 2,
                },
            ],
        },
        {
            id: 'draeger',
            name: 'Dräger',
            shortDescription:
                'Tecnología para gases, seguridad ambiental y monitoreo de procesos en aplicaciones críticas.',
            published: true,
            displayOrder: 5,
            logo: draegerBrandLogo,
            logoAlt: 'Logotipo de Dräger',
            families: [
                {
                    id: 'draeger-gas-detection',
                    brandId: 'draeger',
                    name: 'Detección de gases',
                    shortDescription:
                        'Sensores y sistemas de monitoreo para detección temprana y seguridad operativa.',
                    published: true,
                    displayOrder: 1,
                },
                {
                    id: 'draeger-safety-systems',
                    brandId: 'draeger',
                    name: 'Sistemas de seguridad',
                    shortDescription:
                        'Soluciones de protección y vigilancia para aseguramiento continuo de condiciones críticas.',
                    published: true,
                    displayOrder: 2,
                },
            ],
        },
    ],
    products: [
        {
            id: 'current-iradar-one-80ghz',
            brandId: 'current-instruments',
            familyIds: ['current-level'],
            model: 'iRADAR ONE 80GHz',
            commercialName: 'iRADAR ONE Level Transmitter',
            shortDescription:
                'Transmisor radar no contacto para medición de nivel en aplicaciones de líquidos y sólidos.',
            applicationSummary: 'Nivel continuo en tanques y procesos industriales con tecnología FMCW 80GHz.',
            measuredVariable: 'Nivel',
            communicationTechnologies: ['4-20mA', 'HART', 'Modbus'],
            mainSpecifications: ['Rango de medición hasta 120 m', 'Frecuencia 80GHz FMCW', 'Protección IP67'],
            officialImage: currentIRadarOneImage,
            officialImageAlt: 'iRADAR ONE 80GHz de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/iradar-one-80ghz/',
            sourceUrls: [
                'https://currentinstrument.com/product/iradar-one-80ghz/',
                'https://currentinstrument.com/wp-content/uploads/2026/06/Current-iRADAR-ONE-scaled.png',
            ],
            technicalSheetUrl: 'https://currentinstrument.com/wp-content/uploads/2026/02/Datasheet-iRADAR-100-2026.pdf',
            technicalSheetLabel: 'Datasheet iRADAR ONE',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-ibar-800x',
            brandId: 'current-instruments',
            familyIds: ['current-pressure'],
            model: 'iBAR 800X',
            commercialName: 'iBAR 800X Gauge Pressure Transmitter',
            shortDescription:
                'Transmisor de presión para aplicaciones industriales de líquidos, gases y vapor.',
            applicationSummary: 'Monitoreo de presión en procesos con salida industrial y configuración en campo.',
            measuredVariable: 'Presión',
            communicationTechnologies: ['4-20mA', 'HART'],
            mainSpecifications: ['Rango 2kPa a 40MPa', 'Protección IP67', 'Display rotativo 355°'],
            officialImage: currentIbar800xImage,
            officialImageAlt: 'iBAR 800X de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/ibar-800x-gauge-pressure-transmitter-2/',
            sourceUrls: [
                'https://currentinstrument.com/product/ibar-800x-gauge-pressure-transmitter-2/',
                'https://currentinstrument.com/wp-content/uploads/2025/12/iBAR-800X-Pressure-Transmitter-Thread.png',
            ],
            technicalSheetUrl: 'https://currentinstrument.com/wp-content/uploads/2026/02/iBAR-800X-Monosilicon-Model-Code.pdf',
            technicalSheetLabel: 'Model Code iBAR 800X',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-irtd-100',
            brandId: 'current-instruments',
            familyIds: ['current-temperature'],
            model: 'iRTD 100',
            commercialName: 'iRTD 100 Temperature Transmitter',
            shortDescription:
                'Transmisor de temperatura RTD con salida analógica y digital para integración en control industrial.',
            applicationSummary: 'Medición de temperatura en procesos con señal 4-20mA y opciones de comunicación.',
            measuredVariable: 'Temperatura',
            communicationTechnologies: ['4-20mA', 'HART', 'Modbus RTU / RS485'],
            mainSpecifications: ['Rango -50 a 400°C', 'Exactitud hasta ±0.5% URL', 'Protección IP67'],
            officialImage: currentIRtd100Image,
            officialImageAlt: 'iRTD 100 de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/irtd-100-temperature-transmitter-2/',
            sourceUrls: [
                'https://currentinstrument.com/product/irtd-100-temperature-transmitter-2/',
                'https://currentinstrument.com/wp-content/uploads/2025/12/iRTD-100-Horizontal.png',
            ],
            technicalSheetUrl: 'https://currentinstrument.com/wp-content/uploads/2024/07/Brochure-iRTD-100-Temperature-Transmitter.pdf',
            technicalSheetLabel: 'Brochure iRTD 100',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-lorawan-vibration-sensor',
            brandId: 'current-instruments',
            familyIds: ['current-wireless'],
            model: 'LoRaWAN Vibration Sensor',
            commercialName: 'LoRaWAN Vibration Sensor',
            shortDescription:
                'Sensor inalámbrico para monitoreo de condición vibratoria en activos industriales.',
            applicationSummary: 'Supervisión remota de vibración con infraestructura LoRaWAN.',
            measuredVariable: 'Vibración',
            communicationTechnologies: ['LoRaWAN'],
            officialImage: wirelessVibrationImage,
            officialImageAlt: 'LoRaWAN Vibration Sensor de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/lorawan-vibration-sensor/',
            sourceUrls: [
                'https://currentinstrument.com/product/lorawan-vibration-sensor/',
                'https://currentinstrument.com/wp-content/uploads/2026/09/Vibration-Website.jpg',
            ],
            technicalSheetUrl: 'https://currentinstrument.com/wp-content/uploads/2026/09/3_SENSAiO-Vibration-Datasheet_compressed.pdf',
            technicalSheetLabel: 'Datasheet LoRaWAN Vibration Sensor',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-wireless-acoustic-sensor',
            brandId: 'current-instruments',
            familyIds: ['current-wireless'],
            model: 'Wireless Acoustic Sensors',
            commercialName: 'Wireless Acoustic Sensors',
            shortDescription:
                'Sensores acústicos inalámbricos para observación de eventos y tendencias en equipos de proceso.',
            applicationSummary: 'Monitoreo acústico remoto sobre red LoRaWAN para mantenimiento predictivo.',
            measuredVariable: 'Acústica',
            communicationTechnologies: ['LoRaWAN'],
            officialImage: wirelessAcousticImage,
            officialImageAlt: 'Wireless Acoustic Sensors de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/wireless-acoustic-sensors/',
            sourceUrls: [
                'https://currentinstrument.com/product/wireless-acoustic-sensors/',
                'https://currentinstrument.com/wp-content/uploads/2026/09/Acoustic-Website.jpg',
            ],
            technicalSheetUrl: 'https://currentinstrument.com/wp-content/uploads/2026/09/3_SENSAiO-Acoustic-Datasheet_compressed.pdf',
            technicalSheetLabel: 'Datasheet Wireless Acoustic Sensors',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-lorawan-differential-pressure-sensor',
            brandId: 'current-instruments',
            familyIds: ['current-wireless', 'current-pressure'],
            model: 'LoRaWAN Differential Pressure Sensor',
            commercialName: 'LoRaWAN Differential Pressure Sensor',
            shortDescription:
                'Sensor diferencial de presión con conectividad inalámbrica para entornos industriales.',
            applicationSummary: 'Monitoreo remoto de presión diferencial en líneas y equipos críticos.',
            measuredVariable: 'Presión diferencial',
            communicationTechnologies: ['LoRaWAN'],
            officialImage: wirelessDifferentialPressureImage,
            officialImageAlt: 'LoRaWAN Differential Pressure Sensor de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/lorawan-differential-pressure-sensor/',
            sourceUrls: [
                'https://currentinstrument.com/product/lorawan-differential-pressure-sensor/',
                'https://currentinstrument.com/wp-content/uploads/2026/09/Differential-Pressure-Website.jpg',
            ],
            technicalSheetUrl:
                'https://currentinstrument.com/wp-content/uploads/2026/09/SENSAiO-Differential-Pressure-Datasheet-rev.1.0_compressed.pdf',
            technicalSheetLabel: 'Datasheet LoRaWAN Differential Pressure Sensor',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-iradar-nex-wireless-level-monitoring',
            brandId: 'current-instruments',
            familyIds: ['current-wireless', 'current-level'],
            model: 'iRADAR NEX Wireless Level Monitoring',
            commercialName: 'iRADAR NEX IoT Wireless Level Monitoring',
            shortDescription:
                'Monitoreo de nivel inalámbrico para gestión remota de tanques y activos distribuidos.',
            applicationSummary: 'Visibilidad de nivel con arquitectura IoT para decisiones operativas en campo.',
            measuredVariable: 'Nivel',
            communicationTechnologies: ['Wireless IoT'],
            officialImage: wirelessIRadarNexImage,
            officialImageAlt: 'iRADAR NEX Wireless Level Monitoring de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/iradar-nex-wireless-level-monitoring/',
            sourceUrls: [
                'https://currentinstrument.com/product/iradar-nex-wireless-level-monitoring/',
                'https://currentinstrument.com/wp-content/uploads/2026/09/iRadar-Nex-Website.jpg',
            ],
            technicalSheetUrl:
                'https://currentinstrument.com/wp-content/uploads/2026/09/iRADAR-NEX-Wireless-Radar-Datasheet.pdf',
            technicalSheetLabel: 'Datasheet iRADAR NEX Wireless',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-lorawan-valve-position-sensor',
            brandId: 'current-instruments',
            familyIds: ['current-wireless'],
            model: 'LoRaWAN Valve Position Sensor',
            commercialName: 'LoRaWAN Valve Position Sensor',
            shortDescription:
                'Sensor inalámbrico para seguimiento de posición de válvulas en infraestructura industrial.',
            applicationSummary: 'Control remoto del estado de válvulas con conectividad LoRaWAN.',
            measuredVariable: 'Posición de válvula',
            communicationTechnologies: ['LoRaWAN'],
            officialImage: wirelessValvePositionImage,
            officialImageAlt: 'LoRaWAN Valve Position Sensor de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/lorawan-valve-position-sensor/',
            sourceUrls: [
                'https://currentinstrument.com/product/lorawan-valve-position-sensor/',
                'https://currentinstrument.com/wp-content/uploads/2025/12/LoRaWAN-Valve-Positioning-Sensor.png',
            ],
            technicalSheetUrl:
                'https://currentinstrument.com/wp-content/uploads/2026/09/SENSAiO-Valve-Position-Datasheet_V2_Sep2026.pdf',
            technicalSheetLabel: 'Datasheet LoRaWAN Valve Position Sensor',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-lorawan-temperature-sensor',
            brandId: 'current-instruments',
            familyIds: ['current-wireless', 'current-temperature'],
            model: 'LoRaWAN Temperature Sensor',
            commercialName: 'LoRaWAN Temperature Sensor',
            shortDescription:
                'Sensor de temperatura inalámbrico para monitoreo distribuido en activos y procesos.',
            applicationSummary: 'Medición térmica remota sobre red LoRaWAN para seguimiento operativo.',
            measuredVariable: 'Temperatura',
            communicationTechnologies: ['LoRaWAN'],
            officialImage: wirelessTemperatureImage,
            officialImageAlt: 'LoRaWAN Temperature Sensor de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/lorawan-temperature-sensor/',
            sourceUrls: [
                'https://currentinstrument.com/product/lorawan-temperature-sensor/',
                'https://currentinstrument.com/wp-content/uploads/2025/12/LoRaWAN-Temperature-Sensor.png',
                'https://i0.wp.com/currentinstrument.com/wp-content/uploads/2024/05/CURRENT-PRODUCT-4.png?w=1000&ssl=1',
            ],
            technicalSheetUrl:
                'https://currentinstrument.com/wp-content/uploads/2026/09/SENSAiO-Temperature-Datasheet-V2_Sep2026.pdf',
            technicalSheetLabel: 'Datasheet LoRaWAN Temperature Sensor',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'current-lorawan-pressure-sensor',
            brandId: 'current-instruments',
            familyIds: ['current-wireless', 'current-pressure'],
            model: 'LoRaWAN Pressure Sensor',
            commercialName: 'LoRaWAN Pressure Sensor',
            shortDescription:
                'Sensor inalámbrico para monitoreo de presión en puntos críticos de proceso.',
            applicationSummary: 'Lectura remota de presión con infraestructura de comunicación LoRaWAN.',
            measuredVariable: 'Presión',
            communicationTechnologies: ['LoRaWAN'],
            officialImage: wirelessPressureImage,
            officialImageAlt: 'LoRaWAN Pressure Sensor de Current Instruments',
            officialPageUrl: 'https://currentinstrument.com/product/lorawan-pressure-sensor/',
            sourceUrls: [
                'https://currentinstrument.com/product/lorawan-pressure-sensor/',
                'https://currentinstrument.com/wp-content/uploads/2025/12/LoRaWAN-Pressure-Sensor.png',
            ],
            technicalSheetUrl:
                'https://currentinstrument.com/wp-content/uploads/2026/09/pressure-sensor-datasheet-v2-sep2026.pdf',
            technicalSheetLabel: 'Datasheet LoRaWAN Pressure Sensor',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'winters-pfp-pressure-gauge',
            brandId: 'winters-instruments',
            familyIds: ['winters-gauges'],
            model: 'PFP',
            commercialName: 'PFP Premium Stainless Steel Liquid Filled Pressure Gauge',
            shortDescription:
                'Manómetro industrial de acero inoxidable con llenado líquido para servicio en ambientes severos.',
            applicationSummary:
                'Uso en equipos hidráulicos, bombas y sistemas de proceso con vibración o pulsación.',
            measuredVariable: 'Presión',
            mainSpecifications: ['Categoría: Pressure Gauges', 'Subcategoría: Industrial gauges'],
            officialImage: wintersPfpImage,
            officialImageAlt: 'Manómetro PFP de Winters Instruments',
            officialPageUrl:
                'https://winters.com/products-and-services/all-products/pressure-gauges/pfp-premium-stainless-steel-liquid-filled-pressure-gauge/29f18e5d-c6e9-4256-c0d0-08daf7ce7010',
            sourceUrls: [
                'https://winters.com/products-and-services/pressure/0949e532-4440-4932-804b-ac282e4ca5c5',
                'https://winters.com/api/Product/GetAllProductsWithoutImage?lang=en',
                'https://winters.com/api/Product/GetProductImagesExact/29f18e5d-c6e9-4256-c0d0-08daf7ce7010?lang=en',
            ],
            technicalSheetUrl: 'https://winters.com/publications/products/PFP.pdf',
            technicalSheetLabel: 'PFP Product Datasheet',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'winters-psc-pressure-gauge',
            brandId: 'winters-instruments',
            familyIds: ['winters-gauges'],
            model: 'PSC',
            commercialName: 'PSC Safety Case Pressure Gauge',
            shortDescription:
                'Manómetro industrial tipo safety case para aplicaciones de proceso con requerimientos robustos.',
            applicationSummary:
                'Medición de presión en servicio industrial con construcción reforzada para entornos exigentes.',
            measuredVariable: 'Presión',
            mainSpecifications: ['Categoría: Pressure Gauges', 'Subcategoría: Industrial gauges'],
            officialImage: wintersPscImage,
            officialImageAlt: 'Manómetro PSC de Winters Instruments',
            officialPageUrl:
                'https://winters.com/products-and-services/all-products/pressure-gauges/psc-safety-case-pressure-gauge/dbeb6b46-e627-40e7-c0d5-08daf7ce7010',
            sourceUrls: [
                'https://winters.com/products-and-services/pressure/0949e532-4440-4932-804b-ac282e4ca5c5',
                'https://winters.com/api/Product/GetAllProductsWithoutImage?lang=en',
                'https://winters.com/api/Product/GetProductImagesExact/dbeb6b46-e627-40e7-c0d5-08daf7ce7010?lang=en',
            ],
            technicalSheetUrl: 'https://winters.com/publications/products/PSC.pdf',
            technicalSheetLabel: 'PSC Product Datasheet',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'winters-ptg-test-gauge',
            brandId: 'winters-instruments',
            familyIds: ['winters-gauges'],
            model: 'PTG',
            commercialName: 'PTG Test Gauge',
            shortDescription:
                'Manómetro de prueba para verificación y calibración de presión en aplicaciones industriales.',
            applicationSummary:
                'Instrumento para pruebas de presión y contraste de lectura en mantenimiento de procesos.',
            measuredVariable: 'Presión',
            mainSpecifications: ['Categoría: Pressure Gauges', 'Subcategoría: Industrial gauges'],
            officialImage: wintersPtgImage,
            officialImageAlt: 'Manómetro PTG de Winters Instruments',
            officialPageUrl:
                'https://winters.com/products-and-services/all-products/pressure-gauges/ptg-test-gauge/dfa271d6-a248-4fb2-c0d6-08daf7ce7010',
            sourceUrls: [
                'https://winters.com/products-and-services/pressure/0949e532-4440-4932-804b-ac282e4ca5c5',
                'https://winters.com/api/Product/GetAllProductsWithoutImage?lang=en',
                'https://winters.com/api/Product/GetProductImagesExact/dfa271d6-a248-4fb2-c0d6-08daf7ce7010?lang=en',
            ],
            technicalSheetUrl: 'https://winters.com/publications/datasheets/ptg.pdf',
            technicalSheetLabel: 'PTG Datasheet',
            verificationStatus: 'verified',
            published: true,
        },
        {
            id: 'r-stahl-orca-hmi',
            brandId: 'r-stahl',
            familyIds: ['r-stahl-hmi'],
            model: 'ORCA',
            commercialName: 'R. STAHL ORCA HMI',
            shortDescription:
                'Estación HMI ORCA para supervisión y control en entornos industriales con requisitos de seguridad.',
            applicationSummary:
                'Supervisión operativa y control para procesos críticos y zonas clasificadas.',
            measuredVariable: 'Operación / supervisión',
            communicationTechnologies: ['HMI', 'Visualización industrial'],
            mainSpecifications: ['HMI de seguridad', 'Operación industrial', 'Zona clasificada'],
            officialImage: rStahlOrcaHmiImage,
            officialImageAlt: 'ORCA OS E59A de R. STAHL',
            officialPageUrl:
                'https://r-stahl.com/en/us/products/hmis-mobile-solutions-and-cctv-systems/hmis/orca-operator-stations-for-indoor-and-protected-outdoor/orca-operator-stations-for-indoor-and-protected-outdoor-61348/?hq=ORCA',
            sourceUrls: [
                'https://r-stahl.com/en/us/products/hmis-mobile-solutions-and-cctv-systems/hmis/orca-operator-stations-for-indoor-and-protected-outdoor/orca-operator-stations-for-indoor-and-protected-outdoor-61348/?hq=ORCA',
            ],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'r-stahl-exsys-cool-8701',
            brandId: 'r-stahl',
            familyIds: ['r-stahl-hvac'],
            model: 'ExSys Cool 8701',
            commercialName: 'R. STAHL ExSys Cool 8701',
            shortDescription:
                'Solución HVAC ExSys Cool serie 8701 para ambientes industriales con exigencias térmicas y de seguridad.',
            applicationSummary:
                'Control y climatización de instalaciones con requerimientos de protección en zonas clasificadas.',
            measuredVariable: 'Temperatura / ventilación',
            communicationTechnologies: ['HVAC', 'Control térmico'],
            mainSpecifications: ['Serie 8701', 'Climatización industrial', 'Acondicionamiento seguro'],
            officialImage: rStahlExsysCoolImage,
            officialImageAlt: 'ExSys Cool 8701 de R. STAHL',
            officialPageUrl:
                'https://r-stahl.com/en/us/products/control-systems-and-distribution-boards/hvac-solutions/air-conditioner-exsys-cool-series-8701-65236/list-type/downloads/',
            sourceUrls: [
                'https://r-stahl.com/en/us/products/control-systems-and-distribution-boards/hvac-solutions/',
                'https://r-stahl.com/en/us/products/control-systems-and-distribution-boards/hvac-solutions/air-conditioner-exsys-cool-series-8701-65236/list-type/downloads/',
            ],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'r-stahl-exlux-6002-4',
            brandId: 'r-stahl',
            familyIds: ['r-stahl-luminarias'],
            model: 'EXLUX 6002/4',
            commercialName: 'R. STAHL EXLUX 6002/4',
            shortDescription:
                'Luminaria lineal LED EXLUX serie 6002/4 para áreas peligrosas y espacios con exigencia de seguridad.',
            applicationSummary:
                'Iluminación industrial y de seguridad para procesos en zonas clasificadas.',
            measuredVariable: 'Iluminación',
            communicationTechnologies: ['Energía / iluminación'],
            mainSpecifications: ['Serie 6002/4', 'Luminaria lineal LED', 'Zona peligrosa'],
            officialImage: rStahlExluxImage,
            officialImageAlt: 'EXLUX 6002/4 de R. STAHL',
            officialPageUrl:
                'https://r-stahl.com/es/es/productos/luminarias/luminarias-lineales/luminaria-lineal-led-exlux-serie-60024-55259/266724-55291/',
            sourceUrls: [
                'https://r-stahl.com/en/us/products/luminaires/',
                'https://r-stahl.com/es/es/productos/luminarias/luminarias-lineales/luminaria-lineal-led-exlux-serie-60024-55259/266724-55291/',
            ],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'r-stahl-expressure-solution',
            brandId: 'r-stahl',
            familyIds: ['r-stahl-gabinetes'],
            model: 'EXpressure',
            commercialName: 'R. STAHL EXpressure',
            shortDescription:
                'Solución de gabinete EXpressure para alojamiento seguro de equipos y distribución crítica en entornos exigentes.',
            applicationSummary:
                'Protección mecánica y funcional para equipos en instalaciones de automatización y seguridad.',
            measuredVariable: 'Alojamiento / protección',
            communicationTechnologies: ['Enclosure', 'Protección mecánica'],
            mainSpecifications: ['Gabinete de seguridad', 'Alojamiento industrial', 'Protección de equipos'],
            officialImage: rStahlExpressureImage,
            officialImageAlt: 'EXpressure de R. STAHL',
            officialPageUrl:
                'https://r-stahl.com/en/global/corporate/news/lighter-ex-d-enclosure-thanks-to-pressure-a-relief-feature/',
            sourceUrls: [
                'https://r-stahl.com/en/global/corporate/news/lighter-ex-d-enclosure-thanks-to-pressure-a-relief-feature/',
            ],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'bermad-fp-400y-2d',
            brandId: 'bermad',
            familyIds: ['bermad-fire-protection'],
            model: 'FP-400Y-2D',
            commercialName: 'BERMAD FP-400Y-2D',
            shortDescription:
                'Válvula de diluvio FP-400Y-2D de control eléctrico para sistemas de protección contra incendios.',
            applicationSummary:
                'Protección activa para instalaciones críticas con arranque eléctrico y control confiable de descarga.',
            measuredVariable: 'Flujo / protección',
            communicationTechnologies: ['Control eléctrico', 'Alarmas'],
            mainSpecifications: ['Válvula de diluvio', 'Control eléctrico', 'Sistema de seguridad'],
            officialImage: bermadFp400y2dImage,
            officialImageAlt: 'BERMAD FP-400Y-2D',
            officialPageUrl: 'https://www.bermad.com/product/fp-400y-2d/',
            sourceUrls: ['https://www.bermad.com/product/fp-400y-2d/'],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'bermad-fp-400y-2dc',
            brandId: 'bermad',
            familyIds: ['bermad-fire-protection', 'bermad-pressure-control'],
            model: 'FP-400Y-2DC',
            commercialName: 'BERMAD FP-400Y-2DC',
            shortDescription:
                'Válvula de diluvio eléctrica FP-400Y-2DC con control de presión para sistemas de protección y flujo.',
            applicationSummary:
                'Control de descarga con regulación de presión para instalaciones críticas y servicios de seguridad.',
            measuredVariable: 'Presión / flujo',
            communicationTechnologies: ['Control eléctrico', 'Regulación'],
            mainSpecifications: ['Control de presión', 'Válvula de diluvio', 'Protección crítica'],
            officialImage: bermadFp400y2dcImage,
            officialImageAlt: 'BERMAD FP-400Y-2DC',
            officialPageUrl: 'https://www.bermad.com/es/product/fp-400y-2dc/',
            sourceUrls: ['https://www.bermad.com/es/product/fp-400y-2dc/'],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'bermad-fp-400y-4dc',
            brandId: 'bermad',
            familyIds: ['bermad-pressure-control'],
            model: 'FP-400Y-4DC',
            commercialName: 'BERMAD FP-400Y-4DC',
            shortDescription:
                'Válvula de diluvio neumática FP-400Y-4DC con control de presión para sistemas de protección activa.',
            applicationSummary:
                'Solución para protección y regulación de flujo con operación neumática y control de presión.',
            measuredVariable: 'Presión',
            communicationTechnologies: ['Control neumático', 'Regulación'],
            mainSpecifications: ['Control de presión', 'Neumática', 'Sistema de protección'],
            officialImage: bermadFp400y4dcImage,
            officialImageAlt: 'BERMAD FP-400Y-4DC',
            officialPageUrl: 'https://www.bermad.com/es/product/fp-400y-4dc/',
            sourceUrls: ['https://www.bermad.com/es/product/fp-400y-4dc/'],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'draeger-polytron-8100-ec',
            brandId: 'draeger',
            familyIds: ['draeger-gas-detection'],
            model: 'Polytron 8100',
            commercialName: 'Dräger Polytron 8100 EC',
            shortDescription:
                'Detector de gas Polytron 8100 para monitorización continua en procesos y zonas industriales.',
            applicationSummary:
                'Detección de gases peligrosos con respuesta rápida y supervisión operativa en campo.',
            measuredVariable: 'Gas / seguridad',
            communicationTechnologies: ['4-20 mA', 'Alarmas'],
            mainSpecifications: ['Detección continua', 'Área industrial', 'Alta sensibilidad'],
            officialImage: draegerPolytron8100EcImage,
            officialImageAlt: 'Dräger Polytron 8100 EC',
            officialPageUrl: 'https://www.draeger.com/es_mx/Products/Draeger-Polytron-8100',
            sourceUrls: ['https://www.draeger.com/es_mx/Products/Draeger-Polytron-8100'],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'draeger-x-am-8000',
            brandId: 'draeger',
            familyIds: ['draeger-gas-detection'],
            model: 'X-am 8000',
            commercialName: 'Dräger X-am 8000',
            shortDescription:
                'Equipo portátil de detección multi-gas para inspección de calidad de aire y seguridad operacional.',
            applicationSummary:
                'Monitoreo de gases en campo para prevención de riesgos y cumplimiento de estándares de seguridad.',
            measuredVariable: 'Gas / ambiente',
            communicationTechnologies: ['Portátil', 'Alarma visual/acústica'],
            mainSpecifications: ['Detector multi-gas', 'Portabilidad', 'Inspección de campo'],
            officialImage: draegerXam8000Image,
            officialImageAlt: 'Dräger X-am 8000',
            officialPageUrl: 'https://www.draeger.com/es_mx/Products/X-am-8000',
            sourceUrls: ['https://www.draeger.com/es_mx/Products/X-am-8000'],
            verificationStatus: 'pending',
            published: true,
        },
        {
            id: 'draeger-saver-cf',
            brandId: 'draeger',
            familyIds: ['draeger-safety-systems'],
            model: 'Saver CF',
            commercialName: 'Dräger Saver CF',
            shortDescription:
                'Equipo de protección respiratoria Saver CF para trabajos con gases o ambientes confinados.',
            applicationSummary:
                'Protección personal para operarios en entornos con riesgo de exposición a contaminantes.',
            measuredVariable: 'Seguridad respiratoria',
            communicationTechnologies: ['Alarmas', 'Monitoreo de uso'],
            mainSpecifications: ['Protección respiratoria', 'Trabajos críticos', 'Confinados'],
            officialImage: draegerSaverCfImage,
            officialImageAlt: 'Dräger Saver CF',
            officialPageUrl: 'https://www.draeger.com/es_mx/Products/Saver-CF',
            sourceUrls: ['https://www.draeger.com/es_mx/Products/Saver-CF'],
            verificationStatus: 'pending',
            published: true,
        },
    ],
};
