export type ProductCategory = "office" | "adobe" | "cad" | "security";

export interface Product {
  id: string;
  name: string;
  brand: string;
  sku: string;
  rating: number;
  price: number;
  originalPrice: number;
  category: ProductCategory;
  displayCategory: string;
  description?: string;
  color: string;
  action: "cart" | "details";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Office 2021 Professional Plus",
    brand: "Microsoft",
    sku: "#902456121",
    rating: 100,
    price: 42.9,
    originalPrice: 108.9,
    category: "office",
    displayCategory: "Office",
    description:
      "Microsoft Office 2021 Professional Plus is the complete productivity suite for 1 Windows PC with a genuine perpetual license.",
    color: "#7B2D8E",
    action: "cart",
  },
  {
    id: "2",
    name: "Microsoft 365 Personal",
    brand: "Microsoft",
    sku: "#GDHJSKDHD74",
    rating: 54,
    price: 91.9,
    originalPrice: 124.9,
    category: "office",
    displayCategory: "Office",
    color: "#0078D4",
    action: "details",
  },
  {
    id: "3",
    name: "Office Home & Business 2021 - Key for Mac",
    brand: "Microsoft",
    sku: "#902456119",
    rating: 70,
    price: 53.9,
    originalPrice: 108.9,
    category: "office",
    displayCategory: "Office",
    color: "#217346",
    action: "cart",
  },
  {
    id: "4",
    name: "Office Professional Plus 2024 LTSC",
    brand: "Microsoft",
    sku: "#OFMS2024LTSC",
    rating: 78,
    price: 53.9,
    originalPrice: 140.9,
    category: "office",
    displayCategory: "Office",
    description:
      "Microsoft Office 2024 Professional Plus is the Microsoft productivity suite with original perpetual license for 1 Windows PC.",
    color: "#D83B01",
    action: "cart",
  },
  {
    id: "5",
    name: "Office 2019 Professional Plus",
    brand: "Microsoft",
    sku: "#902456115",
    rating: 67,
    price: 37.9,
    originalPrice: 80.9,
    category: "office",
    displayCategory: "Office",
    color: "#0078D4",
    action: "cart",
  },
  {
    id: "6",
    name: "Office Home & Business 2024 PC/Mac",
    brand: "Microsoft",
    sku: "#0010122024",
    rating: 4,
    price: 139.9,
    originalPrice: 324.9,
    category: "office",
    displayCategory: "Office",
    color: "#217346",
    action: "cart",
  },
  {
    id: "7",
    name: "Adobe Creative Cloud - All apps",
    brand: "Adobe",
    sku: "#PRIMELICENSE",
    rating: 18,
    price: 42.9,
    originalPrice: 73.9,
    category: "adobe",
    displayCategory: "Multimedia",
    description:
      "Adobe Creative Cloud includes over 20 apps for design, video and photography.",
    color: "#FF0000",
    action: "details",
  },
  {
    id: "8",
    name: "Adobe Acrobat Pro 2020",
    brand: "Adobe",
    sku: "#00193429172",
    rating: 18,
    price: 107.9,
    originalPrice: 345.9,
    category: "adobe",
    displayCategory: "Multimedia",
    color: "#FF0000",
    action: "cart",
  },
  {
    id: "9",
    name: "Adobe Photography Plan - 1TB Cloud",
    brand: "Adobe",
    sku: "#0983897171",
    rating: 1,
    price: 21.9,
    originalPrice: 26.9,
    category: "adobe",
    displayCategory: "Multimedia",
    color: "#31A8FF",
    action: "details",
  },
  {
    id: "10",
    name: "Autodesk AutoCAD",
    brand: "Autodesk",
    sku: "#991477233",
    rating: 76,
    price: 86.9,
    originalPrice: 119.9,
    category: "cad",
    displayCategory: "3D Architecture - CAD",
    color: "#E51937",
    action: "details",
  },
  {
    id: "11",
    name: "Autodesk Revit (Windows)",
    brand: "Autodesk",
    sku: "#991477235",
    rating: 61,
    price: 97.9,
    originalPrice: 129.9,
    category: "cad",
    displayCategory: "3D Architecture - CAD",
    color: "#E51937",
    action: "details",
  },
  {
    id: "12",
    name: "BitDefender Total Security",
    brand: "BitDefender",
    sku: "#114667715",
    rating: 0,
    price: 45.9,
    originalPrice: 55.9,
    category: "security",
    displayCategory: "Antivirus",
    color: "#0066CC",
    action: "details",
  },
  {
    id: "13",
    name: "Kaspersky Total Security",
    brand: "Kaspersky",
    sku: "#114667725",
    rating: 0,
    price: 26.9,
    originalPrice: 37.9,
    category: "security",
    displayCategory: "Antivirus",
    color: "#00A88E",
    action: "details",
  },
  {
    id: "14",
    name: "SurfShark VPN",
    brand: "SurfShark",
    sku: "#214667726",
    rating: 0,
    price: 10.9,
    originalPrice: 15.9,
    category: "security",
    displayCategory: "VPN",
    color: "#3DDC84",
    action: "details",
  },
  {
    id: "15",
    name: "Nord VPN",
    brand: "Nord",
    sku: "#214667727",
    rating: 0,
    price: 23.9,
    originalPrice: 26.9,
    category: "security",
    displayCategory: "VPN",
    color: "#4687FF",
    action: "details",
  },
];

export const categoryTabs = [
  { id: "office" as const, label: "Office" },
  { id: "adobe" as const, label: "Adobe" },
  { id: "cad" as const, label: "3D - Cad" },
  { id: "security" as const, label: "Security" },
];

export const faqs = [
  {
    question: "Are your software products authentic?",
    answer:
      "Yes, our licenses are 100% genuine and include an official download. As certified partners of Microsoft, Kaspersky, Parallels, and McAfee, we guarantee technical expertise and qualified assistance at every stage of the purchase. We also offer a 30-day money-back guarantee and Trusted Shops Buyer Protection, which secures your order up to €2,500.",
  },
  {
    question: "Why are your licenses so affordable?",
    answer:
      "Our prices are more competitive thanks to preferential supply agreements and the fully legal resale of used licenses, as recognized by the EU Court in 2012 (C-128/11). This allows us to offer genuine software at significantly lower prices than traditional channels.",
  },
  {
    question: "How do I receive the product key?",
    answer:
      "A few minutes after your purchase, you will receive an email with the product activation key, the official download link, and clear step-by-step instructions for installation and activation.",
  },
  {
    question: "Can I get assistance with installation/activation?",
    answer:
      "Absolutely. Our support team is available free of charge via email and WhatsApp, with the option to receive remote assistance through tools like AnyDesk or TeamViewer.",
  },
  {
    question: "What happens if the license doesn't work?",
    answer:
      "If you experience any issues with the key or activation, send us a brief description of the problem, along with a few screenshots. We will review your case immediately and, if needed, replace the digital product.",
  },
  {
    question: "Can I return or replace the license?",
    answer:
      "You have up to 30 days to request a replacement or a return, as long as the license has not been activated.",
  },
  {
    question: "Are the software licenses valid in every country?",
    answer:
      "All licenses are valid within Europe. Perpetual licenses, as well as Adobe and Autodesk subscriptions, have global validity. Some antivirus, VPN, and Microsoft 365 subscriptions may have regional restrictions outside Europe.",
  },
];
