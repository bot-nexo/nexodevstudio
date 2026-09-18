import type { Service } from "../types/service";

import {
    Globe,
    Code2,
    Bot,
    BrainCircuit,
} from "lucide-astro";


export const SERVICES: Service[] = [
    {
        title: "Landing Pages de Conversión",
        description:
            "Sitios ultrarrápidos y optimizados para SEO que transforman visitantes en clientes potenciales calificados.",
        icon: Globe,
    },
    {
        title: "Desarrollo Web a Medida",
        description:
            "Aplicaciones modernas y escalables diseñadas para optimizar la operativa de tu negocio sin límites técnicos.",
        icon: Code2,
    },
    {
        title: "Automatización de Procesos",
        description:
            "Automatización con IA integrada a WhatsApp y CRM para reducir atención manual y eliminar tareas repetitivas.",
        icon: Bot,
    },
    {
        title: "Soluciones con IA",
        description:
            "Agentes inteligentes y automatizaciones avanzadas para potenciar la productividad y descubrir nuevas oportunidades de negocio.",
        icon: BrainCircuit,
    },
];
