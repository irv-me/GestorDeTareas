"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Upload, Save, Eye } from "lucide-react"
import { useState } from "react"

export default function EventCreationForm() {
  const [isVirtual, setIsVirtual] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const availableTags = [
    "Tecnología",
    "Educación",
    "Negocios",
    "Salud",
    "Arte",
    "Ciencia",
    "Marketing",
    "Desarrollo",
    "Diseño",
    "Innovación",
  ]

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crear Nuevo Evento</h1>
          <p className="text-gray-600">Completa la información para crear tu evento</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Información Básica
                </CardTitle>
                <CardDescription>Detalles principales del evento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Título del Evento</Label>
                  <Input id="title" placeholder="Ej: Conferencia de Tecnología 2024" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea id="description" placeholder="Describe tu evento..." className="mt-1 min-h-[100px]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Categoría</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conference">Conferencia</SelectItem>
                        <SelectItem value="seminar">Seminario</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="webinar">Webinar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="capacity">Capacidad Máxima</Label>
                    <Input id="capacity" type="number" placeholder="100" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date and Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Fecha y Hora
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-date">Fecha de Inicio</Label>
                    <Input id="start-date" type="datetime-local" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="end-date">Fecha de Fin</Label>
                    <Input id="end-date" type="datetime-local" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reg-start">Registro Abre</Label>
                    <Input id="reg-start" type="datetime-local" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="reg-end">Registro Cierra</Label>
                    <Input id="reg-end" type="datetime-local" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="virtual-mode" checked={isVirtual} onCheckedChange={setIsVirtual} />
                  <Label htmlFor="virtual-mode">Evento Virtual</Label>
                </div>

                {isVirtual ? (
                  <div>
                    <Label htmlFor="virtual-link">Enlace Virtual</Label>
                    <Input id="virtual-link" placeholder="https://zoom.us/j/..." className="mt-1" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="venue">Lugar del Evento</Label>
                      <Input id="venue" placeholder="Centro de Convenciones" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="address">Dirección</Label>
                      <Textarea id="address" placeholder="Dirección completa..." className="mt-1" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Etiquetas</CardTitle>
                <CardDescription>Selecciona etiquetas relevantes para tu evento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-blue-100"
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Etiquetas seleccionadas:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <Badge key={tag} className="bg-blue-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Imagen del Evento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Arrastra una imagen o haz clic para seleccionar</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG hasta 5MB</p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Precio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="free-event" />
                  <Label htmlFor="free-event">Evento Gratuito</Label>
                </div>

                <div>
                  <Label htmlFor="price">Precio (USD)</Label>
                  <Input id="price" type="number" placeholder="0.00" className="mt-1" />
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Evento
                </Button>

                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  Vista Previa
                </Button>

                <Button variant="ghost" className="w-full">
                  Guardar como Borrador
                </Button>
              </CardContent>
            </Card>

            {/* Event Status */}
            <Card>
              <CardHeader>
                <CardTitle>Estado del Evento</CardTitle>
              </CardHeader>
              <CardContent>
                <Select defaultValue="draft">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Borrador</SelectItem>
                    <SelectItem value="published">Publicado</SelectItem>
                    <SelectItem value="private">Privado</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
