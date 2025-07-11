"use client";
import { useState } from "react";
import { CarIcon, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";


export const CarCard = ({ car }: { car: any }) => {
    const [saved, setSaved] = useState(car.wishlisted);
    const router = useRouter();

    return (
        <Card className="relative overflow-hidden hover:shadow-lg transition group" >
            {car?.images?.length ?
                <div className="relative h-100 w-full">
                    <Image
                        src={car.images[0]}
                        alt={car.make + " " + car.model}
                        fill
                        className="object-cover rounded-t-md group-hover:scale-105 transition duration-300"
                    />
                </div> :
                <div className="w-full h-full bg-gray-200 flex items-center justify-center" >
                    <CarIcon className="h-12 w-12 text-gray-400" />
                </div>}
            <Button
                onClick={() => setSaved((prev: boolean) => !prev)}
                className={`absolute top-2 bg-white/90 hover:bg-white/90 right-2 rounded-full p-1.5 ${saved ? 'text-red-500 hover:text-red-600' : 'text-gray-600 hover:text-gray-900'}`} >
                <Heart className={saved ? 'fill-current' : ''} size={20} />
            </Button>
            <CardContent className="p-4" >
                <div className="flex flex-col mb-2" >
                    <h3 className="text-lg font-bold line-clamp-1" >
                        {car.make} {car.model}
                    </h3>
                    <span className="text-blue-600" >$ {car.price}</span>
                </div>
                <div className="text-gray-600 mb-2 flex items-center" >
                    <span>{car.year}</span>
                    <span className="mx-2">.</span>
                    <span>{car.transmission}</span>
                    <span className="mx-2">.</span>
                    <span>{car.fuelType}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="bg-gray-50">
                        {car.bodyType}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                        {car.mileage.toLocaleString()} miles
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                        {car.color}
                    </Badge>
                </div>

                <div className="flex justify-between">
                    <Button
                        className="flex-1"
                        onClick={() => {
                            router.push(`/cars/${car.id}`);
                        }}
                    >
                        View Car
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}