import { Mail, Github, Linkedin, Instagram, Youtube } from "lucide-svelte";

export const linkSocial = [
  {
    name: "gmail",
    icon: Mail,
    url: "#",
  },
  {
    name: "github",
    icon: Github,
    url: "#",
  },
  {
    name: "linkedin",
    icon: Linkedin,
    url: "#",
  },
  {
    name: "instagram",
    icon: Instagram,
    url: "#",
  },
  {
    name: "youtube",
    icon: Youtube,
    url: "#",
  },
];

// list pekerjaan / pengalaman kerja
export const workExperience = [
  {
    company: "PT. Graha Ventura Indonesia",
    role: "Technician - Staff",
    joinYear: 2023,
    endYear: null,
    description:
      "Performed routine inspections and maintenance of Asic Miner equipment, including monitoring inactive units, configuring mining pools, and managing machine power cycles. Monitored network and machine performance via dashboards, and troubleshooted or repaired faulty hardware to ensure optimal uptime.",
  },
  {
    company: "Asia Printing",
    role: "IT Support - Operator",
    joinYear: 2022,
    endYear: 2023,
    description:
      "Responsible for daily operations of the print and copy services, while providing IT support to ensure smooth workflow. Performing routine maintenance of network infrastructure to ensure file sharing and printer sharing are operational. Ensuring all computers are connected to the internet and fully functional. Operating and maintaining photocopiers, printers, and other office equipment for daily printing tasks. Managing daily workflow of print, copy, and document handling tasks efficiently.",
  },
  {
    company: "PP. Darul Muttaqien Bogor",
    role: "Cleaning Service",
    joinYear: 2018,
    endYear: 2022, // sekarang
    description:
      "Responsible for maintaining cleanliness and hygiene in assigned areas to ensure a safe and welcoming environment. Cleaning and organizing office spaces, restrooms, and common areas. Handling cleaning supplies and equipment properly and maintaining inventory. Reporting maintenance issues or hazards to ensure a safe workplace. Supporting a clean and orderly environment to enhance comfort and productivity.",
  },
];
