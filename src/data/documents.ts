export type FederationDocument = {
  id: string;
  title: string;
  type: "PDF" | "DOC";
  status: "Güncel" | "Hazırlanıyor";
  url?: string;
  description?: string;
};

export const federationDocuments: FederationDocument[] = [
  {
    id: "ana-tuzuk",
    title: "Federasyon Ana Tüzüğü",
    type: "PDF",
    status: "Hazırlanıyor",
    description: "Federasyon ana tüzüğü dijital arşive eklenecektir.",
  },
  {
    id: "uyelik-esaslari",
    title: "Üyelik Başvuru Esasları",
    type: "PDF",
    status: "Hazırlanıyor",
    description: "Bağlı dernekler ve üyelik süreçlerine ilişkin esaslar.",
  },
  {
    id: "temsilcilik-yonergesi",
    title: "Temsilcilik Yönergesi",
    type: "PDF",
    status: "Hazırlanıyor",
    description: "İl temsilcilikleri görev ve yetkilerine ilişkin yönerge.",
  },
];
