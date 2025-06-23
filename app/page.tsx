"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  MapPin,
  Users,
  Search,
  Filter,
  Bell,
  User,
  Settings,
  Plus,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react"
import { useState } from "react"

export default function EventPlatformDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const upcomingEvents = [
    {
      id: 1,
      title: "Conferencia de Tecnología 2024",
      date: "15 Mar 2024",
      time: "09:00 AM",
      location: "Centro de Convenciones",
      attendees: 245,
      maxAttendees: 300,
      type: "Conferencia",
      status: "Publicado",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Seminario de Inteligencia Artificial",
      date: "22 Mar 2024",
      time: "02:00 PM",
      location: "Auditorio Principal",
      attendees: 89,
      maxAttendees: 150,
      type: "Seminario",
      status: "Publicado",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Workshop de Desarrollo Web",
      date: "28 Mar 2024",
      time: "10:00 AM",
      location: "Sala de Computación",
      attendees: 32,
      maxAttendees: 40,
      type: "Workshop",
      status: "Publicado",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { title: "Eventos Activos", value: "12", icon: Calendar, color: "text-blue-600" },
    { title: "Total Participantes", value: "1,234", icon: Users, color: "text-green-600" },
    { title: "Certificados Emitidos", value: "856", icon: Award, color: "text-purple-600" },
    { title: "Eventos Completados", value: "45", icon: TrendingUp, color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">EventPro</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Bienvenido de vuelta!</h2>
          <p className="text-gray-600">Gestiona tus eventos y conecta con tu audiencia</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Crear Evento
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-3 right-3 bg-white text-gray-800 hover:bg-white">{event.type}</Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  <Badge variant={event.status === "Publicado" ? "default" : "secondary"} className="ml-2 shrink-0">
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {event.time}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees}/{event.maxAttendees} participantes
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Ver Detalles
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Gestionar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Programar Evento</h4>
                <p className="text-sm text-gray-600">Crea y programa un nuevo evento</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Gestionar Participantes</h4>
                <p className="text-sm text-gray-600">Administra registros y asistencia</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Generar Certificados</h4>
                <p className="text-sm text-gray-600">Crea certificados para participantes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
