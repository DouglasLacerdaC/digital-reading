interface ParagraphsListType {
  items: string[]
}

export function ParagraphsList({ items }: ParagraphsListType) {
  return (
    <div>
      {items.map((item, index) => (
        <p key={index} className="text-slate-500">{item}</p>
      ))}
    </div>
  )
}
