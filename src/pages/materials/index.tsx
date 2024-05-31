import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { materials } from "@/data/materials";
import { Link } from "react-router-dom";

export function Materials() {
  return (
    <div className="max-w-5xl mx-auto p-5 py-8 space-y-8 pb-56">
      <div className="space-y-2">
      <h1 className="text-3xl font-bold">Conteúdos para visitar</h1>
        <p className="text-slate-500">Visite nossos conteúdos com os recursos de acessibilidade disponíveis!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {materials.map((material, index) => (
          <Card key={index} className="border p-4 flex flex-col">
            <img
              className="rounded-lg h-32 w-full object-cover"
              src={material.bannerUrl}
            />

            <CardContent className="p-0 pt-4 space-y-2 flex flex-col flex-grow">
              <h3 className="font-bold">{material.contentTitle}</h3>

              <div className="flex-grow">
                <p className="text-slate-500">
                  {material.descriptionPrev}
                </p>
              </div>

              <div>
                <Button className="mt-4 bg-emerald-600" asChild>
                  <Link to={`/material/${material.id}`}>Ler conteúdo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
