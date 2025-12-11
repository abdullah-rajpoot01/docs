import fs from "fs";
import path from "path";
import { marked } from "marked";
import { notFound } from "next/navigation";

export default function DocPage({ params }) {
  try {
    const slugPath = params.slug.join("/"); // e.g. ["dart","data-types"]
    const filePath = path.join(process.cwd(), "docs", `${slugPath}.md`);

    if (!fs.existsSync(filePath)) {
      notFound()
    }

    const md = fs.readFileSync(filePath, "utf8");
    const html = marked(md);

    return (
      <div className="p-8 prose max-w-none markdown" dangerouslySetInnerHTML={{ __html: html }} />
    );
  } catch (err) {
    console.error("Error loading markdown:", err);
    notFound()
  }
}
