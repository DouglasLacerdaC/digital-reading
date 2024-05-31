import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AccordionsListType {
  items: {
    title: string,
    description: string
  }[]
}

export function AccordionsList({ items }: AccordionsListType) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map(({ title, description }, index) => (
        <AccordionItem key={index} value={title}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <p>
              {description}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
