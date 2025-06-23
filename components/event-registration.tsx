"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Users, Clock, Star, User, CheckCircle } from "lucide-react"

export default function EventRegistration() {
  const event = {
    title: "Conferencia de Inteligencia Artificial 2024",
    description:
      "Únete a los expertos líderes en IA para explorar las últimas tendencias, innovaciones y aplicaciones prácticas de la inteligencia artificial en diversos sectores industriales.",
    date: "15 de Marzo, 2024",
    time: "09:00 AM - 06:00 PM",
    location: "Centro de Convenciones TechHub",
    address: "Av. Tecnología 123, Ciudad de México",
    attendees: 245,
    maxAttendees: 300,
    price: "Gratuito",
    image: "/placeholder.svg?height=300&width=600",
    organizer: {
      name: "TechEvents México",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    speakers: [
      { name: "Dr. Ana García", role: "Investigadora en IA", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Carlos Mendoza", role: "CTO at AI Solutions", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "María López", role: "Data Scientist", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    agenda: [
      { time: "09:00 - 09:30", title: "Registro y Bienvenida" },
      { time: "09:30 - 10:30", title: "Keynote: El Futuro de la IA" },
      { time: "10:30 - 11:00", title: "Coffee Break" },
      { time: "11:00 - 12:00", title: "Panel: IA en la Industria" },
      { time: "12:00 - 13:00", title: "Almuerzo" },
      { time: "13:00 - 14:00", title: "Workshop: Machine Learning Práctico" },
      { time: "14:00 - 15:00", title: "Casos de Uso Reales" },
      { time: "15:00 - 15:30", title: "Networking y Cierre" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 hover:bg-green-700">{event.price}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} />
                    <AvatarFallback>TE</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">Organizado por {event.organizer.name}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm">{event.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">
                        {event.attendees}/{event.maxAttendees} participantes
                      </p>
                      <p className="text-sm">Lugares disponibles</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Star className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">4.8/5 rating</p>
                      <p className="text-sm">Basado en eventos anteriores</p>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>

                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card>
              <CardHeader>
                <CardTitle>Ponentes Destacados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-16 h-16 mx-auto mb-3">
                        <AvatarImage src={speaker.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-gray-900">{speaker.name}</h4>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Agenda del Evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-20 h-10 bg-blue-100 rounded-lg shrink-0">
                        <Clock className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-xs font-medium text-blue-600">{item.time.split(" - ")[0]}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Registro al Evento
                </CardTitle>
                <CardDescription>Completa tus datos para confirmar tu participación</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Juan" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Pérez" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+52 555 123 4567" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="organization">Organización</Label>
                  <Input id="organization" placeholder="Empresa o Institución" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="jobTitle">Cargo</Label>
                  <Input id="jobTitle" placeholder="Tu posición actual" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="expectations">¿Qué esperas del evento?</Label>
                  <Textarea
                    id="expectations"
                    placeholder="Cuéntanos tus expectativas..."
                    className="mt-1 min-h-[80px]"
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Precio del evento:</span>
                    <span className="font-semibold text-green-600">{event.price}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lugares disponibles:</span>
                    <span className="font-semibold">{event.maxAttendees - event.attendees}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Confirmar Registro
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">Al registrarte, aceptas nuestros términos y condiciones</p>
                </div>
              </CardContent>
            </Card>

            {/* Event Benefits */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">¿Qué incluye?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Acceso a todas las sesiones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Material del evento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Certificado de participación</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Coffee breaks incluidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Oportunidades de networking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
