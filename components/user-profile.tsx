"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Calendar, Award, Edit, Download } from "lucide-react"

export default function UserProfile() {
  const userEvents = [
    {
      id: 1,
      title: "Conferencia de IA 2024",
      date: "15 Mar 2024",
      status: "Completado",
      role: "Participante",
      certificate: true,
    },
    {
      id: 2,
      title: "Workshop de React",
      date: "22 Feb 2024",
      status: "Completado",
      role: "Participante",
      certificate: true,
    },
    {
      id: 3,
      title: "Seminario de UX/UI",
      date: "10 Abr 2024",
      status: "Registrado",
      role: "Participante",
      certificate: false,
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "Certificado de Participación - Conferencia de IA 2024",
      date: "16 Mar 2024",
      code: "CERT-AI-2024-001",
    },
    {
      id: 2,
      title: "Certificado de Participación - Workshop de React",
      date: "23 Feb 2024",
      code: "CERT-REACT-2024-002",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mi Perfil</h1>
          <p className="text-gray-600">Gestiona tu información personal y revisa tu actividad</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="text-xl">JD</AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold text-gray-900 mb-1">Juan Pérez</h3>
                <p className="text-gray-600 mb-2">Desarrollador Full Stack</p>
                <Badge className="mb-4">Participante Activo</Badge>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    juan.perez@email.com
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Ciudad de México
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar Perfil
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Eventos Asistidos</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Certificados</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Horas de Formación</span>
                  <span className="font-semibold">45</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="events">Mis Eventos</TabsTrigger>
                <TabsTrigger value="certificates">Certificados</TabsTrigger>
                <TabsTrigger value="settings">Configuración</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>Actualiza tu información personal y profesional</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" defaultValue="Juan" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" defaultValue="Pérez" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" defaultValue="juan.perez@email.com" className="mt-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="organization">Organización</Label>
                        <Input id="organization" defaultValue="Tech Solutions Inc." className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="jobTitle">Cargo</Label>
                      <Input id="jobTitle" defaultValue="Desarrollador Full Stack" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="bio">Biografía</Label>
                      <Textarea
                        id="bio"
                        placeholder="Cuéntanos sobre ti..."
                        className="mt-1 min-h-[100px]"
                        defaultValue="Desarrollador apasionado por las nuevas tecnologías y el aprendizaje continuo."
                      />
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Guardar Cambios
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                <Card>
                  <CardHeader>
                    <CardTitle>Mis Eventos</CardTitle>
                    <CardDescription>Historial de eventos en los que has participado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userEvents.map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{event.title}</h4>
                              <p className="text-sm text-gray-600">
                                {event.date} • {event.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={event.status === "Completado" ? "default" : "secondary"}>
                              {event.status}
                            </Badge>
                            {event.certificate && (
                              <Button size="sm" variant="outline">
                                <Award className="w-4 h-4 mr-2" />
                                Ver Certificado
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates">
                <Card>
                  <CardHeader>
                    <CardTitle>Mis Certificados</CardTitle>
                    <CardDescription>Certificados obtenidos por tu participación en eventos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certificates.map((cert) => (
                        <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                              </div>
                              <Badge variant="outline">{cert.code}</Badge>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{cert.title}</h4>
                            <p className="text-sm text-gray-600 mb-4">Emitido el {cert.date}</p>

                            <Button size="sm" className="w-full">
                              <Download className="w-4 h-4 mr-2" />
                              Descargar PDF
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notificaciones</CardTitle>
                      <CardDescription>Configura cómo quieres recibir notificaciones</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificaciones por Email</p>
                          <p className="text-sm text-gray-600">Recibe actualizaciones por correo</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Activado
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Recordatorios de Eventos</p>
                          <p className="text-sm text-gray-600">Recordatorios antes de eventos</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Activado
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-gray-600">Noticias y eventos destacados</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Desactivado
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Privacidad</CardTitle>
                      <CardDescription>Controla la visibilidad de tu perfil</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Perfil Público</p>
                          <p className="text-sm text-gray-600">Otros usuarios pueden ver tu perfil</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Activado
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Mostrar Certificados</p>
                          <p className="text-sm text-gray-600">Mostrar certificados en tu perfil</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Activado
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
