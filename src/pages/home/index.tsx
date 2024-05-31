import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { materials } from "@/data/materials";

const banners = [
  "./escola.jpeg",
  "./slide1.png",
  "./slide2.avif",
  "./acessibilidade.avif"
]

export function Home() {
  return (
    <div className="space-y-12 py-8 md:px-6 px-4 max-w-5xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-slate-500">Seja bem-vindo(a) ao nosso site!</p>
      </div>

      <Carousel opts={{ loop: true }} className="w-full" plugins={[Autoplay({ delay: 1500 }) ]}>
        <CarouselContent>
          {banners.map((url, index) => (
            <CarouselItem key={index} className="md:basis-96 lg:basis-96">
              <div className="p-1">
                <Card className="p-0 rounded-2xl overflow-hidden">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img className="w-full h-full object-cover" src={url} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Conteúdos para os alunos</h2>
        <p className="text-slate-500">Encontre alguns conteúdos que disponibilizamos!</p>
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
                  <Link to={`material/${material.id}`}>Ler conteúdo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
