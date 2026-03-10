import { services, type Service } from "./services";
import { equipment, type Equipment } from "./equipment";

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: NavChild[];
}

function serviceToNavChild(service: Service): NavChild {
  return {
    label: service.title,
    href: `/serwis/${service.slug}`,
  };
}

function equipmentToNavChild(item: Equipment): NavChild {
  return {
    label: item.title,
    href: `/osprzet/${item.slug}`,
  };
}

export const navigation: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "SERWIS",
    href: "/serwis",
    children: services.map(serviceToNavChild),
  },
  { label: "CZĘŚCI ZAMIENNE", href: "/czesci-zamienne", highlight: true },
  {
    label: "OSPRZĘT I INNE",
    href: "/osprzet",
    children: equipment.map(equipmentToNavChild),
  },
  { label: "O FIRMIE", href: "/o-firmie" },
  { label: "KONTAKT", href: "/kontakt" },
];
