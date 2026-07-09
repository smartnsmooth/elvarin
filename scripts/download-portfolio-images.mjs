import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public");

const images = {
  "images/hero/home.png": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
  "images/hero/about.png": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
  "images/hero/services.png": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  "images/hero/industries.png": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
  "images/hero/projects.png": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
  "images/hero/contact.png": "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80",
  "images/about/story-embed.png": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  "images/about/quote-bg.png": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
  "images/about/timeline.png": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80",
  "images/services/pipeline.png": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80",
  "images/services/architecture.png": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
  "images/capabilities/system-integration.png": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
  "images/capabilities/system-management.png": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  "images/capabilities/software-solutions.png": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
  "images/capabilities/saas-products.png": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  "images/capabilities/it-consulting.png": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
  "images/industries/finance-banking.png": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
  "images/industries/public-sector.png": "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1600&q=80",
  "images/industries/manufacturing.png": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80",
  "images/industries/telecommunications.png": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  "images/industries/retail.png": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80",
  "images/industries/healthcare.png": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
  "images/projects/manufacturing-erp-system.png": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
  "images/projects/financial-reporting-platform.png": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
  "images/projects/healthcare-patient-management.png": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80",
  "images/projects/education-learning-platform.png": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
  "images/projects/retail-inventory-system.png": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
  "images/projects/logistics-tracking-platform.png": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
  "images/service-pages/system-integration.png": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
  "images/service-pages/system-management.png": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  "images/service-pages/software-solutions.png": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
  "images/service-pages/saas-products.png": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  "images/service-pages/it-consulting.png": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
};

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("downloaded", path.relative(root, dest));
}

let ok = 0;
let fail = 0;
for (const [rel, url] of Object.entries(images)) {
  try {
    await download(url, path.join(outDir, rel));
    ok++;
  } catch (e) {
    console.error(e.message);
    fail++;
  }
}
console.log(`Done: ${ok} ok, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
