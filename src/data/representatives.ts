import type { ProvincialRepresentative } from "@/types";

/** Kaynak: anadoluasiretlerfederasyonu.com/il-temsilcileri */
export const provincialRepresentatives: ProvincialRepresentative[] = [
  {
    id: "antalya",
    city: "Antalya",
    name: "Murat Kederli",
    title: "Burukan Aşireti Kanaat Önderi",
    image: "/representatives/antalya.jpg",
  },
  {
    id: "gaziantep",
    city: "Gaziantep",
    name: "Ali Filiz Yazar",
    title: "İl Temsilcisi",
    image: "/representatives/gaziantep.jpg",
  },
  {
    id: "sanliurfa",
    city: "Şanlıurfa",
    name: "Zülfikar Emiroğlu",
    title: "Emirler Aşireti",
    image: "/representatives/sanliurfa.jpg",
  },
  {
    id: "erzurum",
    city: "Erzurum",
    name: "Salih Aydın",
    title: "Kurdkâ Aşireti Kanaat Önderi",
    image: "/representatives/erzurum.jpg",
  },
  {
    id: "mersin",
    city: "Mersin",
    name: "Ersin Gürel Yıldırım",
    title: "Ahıska Türkü Kanaat Önderi",
    image: "/representatives/mersin.jpg",
  },
  {
    id: "afyonkarahisar",
    city: "Afyonkarahisar",
    name: "Dr. Özgür Kavak",
    title: "İl Temsilcisi",
    image: "/representatives/afyonkarahisar.jpg",
  },
  {
    id: "siirt",
    city: "Siirt",
    name: "Mirza Tetik",
    title: "Duderan Aşireti Lideri",
    image: "/representatives/siirt.jpg",
  },
];

/** İl id'sine göre temsilci sözlüğü */
export function buildRepresentativeMap(
  representatives: ProvincialRepresentative[] = provincialRepresentatives,
): Record<string, ProvincialRepresentative> {
  return Object.fromEntries(representatives.map((rep) => [rep.id, rep]));
}
