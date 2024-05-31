interface ListType {
  items: string[]
}

export function List({ items }: ListType) {
  return (
    <ul className="list-disc text-slate-500 leading-7 space-y-6">
      {items.map((text, index) => (
        <li key={index} className="ml-6">{text}</li>
      ))}
    </ul>
  )
}
