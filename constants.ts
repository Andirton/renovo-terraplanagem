import { Truck, Shovel, Recycle, Building2, HardHat, Trees } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Renovo Gestão Ambiental e Terraplanagem",
  shortName: "Renovo",
  phone: "(11) 99877-1974",
  whatsappRaw: "5511998771974",
  address: "R. Independência, 13 - Vila Sao Paulo, Mogi das Cruzes - SP, 08840-150",
  instagram: "https://www.instagram.com/renovogestaoambiental/",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Independência,+13+-+Vila+Sao+Paulo,+Mogi+das+Cruzes+-+SP",
};

export const SERVICES = [
  {
    id: 1,
    title: "Terraplanagem",
    description: "Nivelamento, compactação e preparação de terrenos com maquinário de ponta para garantir a base sólida do seu projeto.",
    icon: Shovel,
  },
  {
    id: 2,
    title: "Gestão Ambiental",
    description: "Consultoria e execução de projetos sustentáveis, garantindo conformidade com as normas ambientais vigentes.",
    icon: Trees,
  },
  {
    id: 3,
    title: "Demolição",
    description: "Demolição técnica residencial e industrial com segurança total e destinação correta dos materiais.",
    icon: HardHat,
  },
  {
    id: 4,
    title: "Gestão de Resíduos",
    description: "Coleta, transporte e destinação final certificada de resíduos da construção civil (RCC).",
    icon: Recycle,
  },
  {
    id: 5,
    title: "Gestão de Loteamento",
    description: "Infraestrutura completa para loteamentos, desde a abertura de ruas até o sistema de drenagem.",
    icon: Building2,
  },
  {
    id: 6,
    title: "Transporte de Terra",
    description: "Logística eficiente para retirada ou fornecimento de terra para sua obra.",
    icon: Truck,
  },
];

export const WHATSAPP_LINK = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Renovo.`;