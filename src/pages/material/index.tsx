import { List } from "./components/list";
import { ParagraphsList } from "./components/paragraphs-list";
import { AccordionsList } from "./components/accordions-list";

import { materials } from "@/data/materials";
import { useParams } from "react-router-dom";

export function Material() {
  const { id } = useParams()

  const material = materials.find(item => item.id === Number(id));

  return (
    <div className="max-w-5xl mx-auto p-5 py-8 space-y-8 pb-56">
      <img
        className="w-full h-72 object-cover rounded-lg"
        src={`../${material?.bannerUrl}`}
      />

      <h1 className="text-3xl font-bold">{material?.contentTitle}</h1>

      {material?.content.map((content, index) => {
        if (content.type === "list") {
          return <List key={index} items={content.itens ?? []} />
        }

        if (content.type === "title") {
          return <h2 key={index} className="text-2xl font-semibold pt-6">{content.text}</h2>
        }

        if (content.type === "paragraph") {
          return <ParagraphsList key={index} items={content.paragraphs ?? []} />
        }

        if (content.type === "accordion") {
          return <AccordionsList key={index} items={content.accordionItens ?? []} />
        }

        return
      })}
    </div>
  )
}
