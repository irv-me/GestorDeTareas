"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Database, Bell, Eye, Award, Play, CheckCircle, Code, Lightbulb } from "lucide-react"

// Importar las demostraciones de patrones
import { db, getUserById, createEvent } from "../singleton/database-connection"
import { NotificationService, notifyEventRegistration } from "../factory/notification-factory"
import { demonstrateObserverPattern } from "../observer/event-observer"
import { demonstrateStrategyPattern } from "../strategy/certificate-strategy"

export default function PatternsDemo() {
  const [logs, setLogs] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const clearLogs = () => {
    setLogs([])
  }

  const runSingletonDemo = async () => {
    setIsRunning(true)
    addLog("🔗 Iniciando demostración del patrón Singleton")

    try {
      // Conectar a la base de datos
      await db.connect()
      addLog("✅ Conexión establecida usando Singleton")

      // Simular consultas
      await getUserById(1)
      addLog("📊 Consulta de usuario ejecutada")

      await createEvent({
        title: "Evento Demo",
        description: "Evento de demostración",
        startDate: new Date(),
        endDate: new Date(),
        organizerId: 1,
      })
      addLog("📅 Evento creado usando la misma conexión")

      addLog(`🔍 Estado de conexión: ${db.getConnectionStatus() ? "Activa" : "Inactiva"}`)
    } catch (error) {
      addLog(`❌ Error: ${error}`)
    }

    setIsRunning(false)
  }

  const runFactoryDemo = async () => {
    setIsRunning(true)
    addLog("🏭 Iniciando demostración del patrón Factory")

    try {
      const notificationService = new NotificationService()

      // Mostrar tipos soportados
      const supportedTypes = notificationService.getSupportedNotificationTypes()
      addLog(`📋 Tipos soportados: ${supportedTypes.join(", ")}`)

      // Enviar diferentes tipos de notificaciones
      await notificationService.sendNotification(
        "EMAIL",
        "usuario@ejemplo.com",
        "Mensaje de prueba",
        "Asunto de prueba",
      )
      addLog("📧 Notificación EMAIL enviada")

      await notificationService.sendNotification("SMS", "+1234567890", "Mensaje SMS de prueba")
      addLog("📱 Notificación SMS enviada")

      await notificationService.sendNotification("PUSH", "device_token_123", "Mensaje push de prueba", "Título push")
      addLog("🔔 Notificación PUSH enviada")

      // Demostrar función de registro de evento
      await notifyEventRegistration("usuario@ejemplo.com", "Conferencia Demo 2024")
      addLog("🎉 Notificación de registro de evento enviada")
    } catch (error) {
      addLog(`❌ Error: ${error}`)
    }

    setIsRunning(false)
  }

  const runObserverDemo = async () => {
    setIsRunning(true)
    addLog("👁️ Iniciando demostración del patrón Observer")

    try {
      // Capturar console.log para mostrar en la interfaz
      const originalLog = console.log
      console.log = (message: string) => {
        addLog(message)
        originalLog(message)
      }

      demonstrateObserverPattern()

      // Restaurar console.log
      console.log = originalLog
    } catch (error) {
      addLog(`❌ Error: ${error}`)
    }

    setIsRunning(false)
  }

  const runStrategyDemo = async () => {
    setIsRunning(true)
    addLog("🎯 Iniciando demostración del patrón Strategy")

    try {
      // Capturar console.log para mostrar en la interfaz
      const originalLog = console.log
      console.log = (message: string) => {
        addLog(message)
        originalLog(message)
      }

      await demonstrateStrategyPattern()

      // Restaurar console.log
      console.log = originalLog
    } catch (error) {
      addLog(`❌ Error: ${error}`)
    }

    setIsRunning(false)
  }

  const patterns = [
    {
      name: "Singleton",
      description: "Garantiza una única instancia de conexión a base de datos",
      icon: Database,
      color: "bg-blue-500",
      demo: runSingletonDemo,
      benefits: ["Optimización de recursos", "Consistencia", "Control de acceso"],
    },
    {
      name: "Factory Method",
      description: "Crea diferentes tipos de notificaciones de forma flexible",
      icon: Bell,
      color: "bg-green-500",
      demo: runFactoryDemo,
      benefits: ["Extensibilidad", "Mantenimiento", "Flexibilidad"],
    },
    {
      name: "Observer",
      description: "Notifica automáticamente cambios de estado a múltiples componentes",
      icon: Eye,
      color: "bg-purple-500",
      demo: runObserverDemo,
      benefits: ["Bajo acoplamiento", "Reactividad", "Escalabilidad"],
    },
    {
      name: "Strategy",
      description: "Diferentes estrategias para generar certificados según el tipo",
      icon: Award,
      color: "bg-orange-500",
      demo: runStrategyDemo,
      benefits: ["Flexibilidad", "Intercambiabilidad", "Mantenibilidad"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Demostración de Patrones de Diseño</h1>
          <p className="text-gray-600">Implementación práctica de patrones en el sistema EventPro</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patterns Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {patterns.map((pattern, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${pattern.color}`}>
                        <pattern.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pattern.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          Patrón de Diseño
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="mb-4">{pattern.description}</CardDescription>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Beneficios:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pattern.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button onClick={pattern.demo} disabled={isRunning} className="w-full" variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      {isRunning ? "Ejecutando..." : "Ejecutar Demo"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Code Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Implementación de Patrones
                </CardTitle>
                <CardDescription>Ejemplos de código de los patrones implementados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Singleton - Database Connection</h4>
                    <code className="text-sm text-gray-600">
                      {`class DatabaseConnection {
  private static instance: DatabaseConnection;
  
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}`}
                    </code>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Factory - Notification Creation</h4>
                    <code className="text-sm text-gray-600">
                      {`class NotificationFactory {
  static createNotification(type: string): INotification {
    switch (type.toUpperCase()) {
      case 'EMAIL': return new EmailNotification();
      case 'SMS': return new SMSNotification();
      case 'PUSH': return new PushNotification();
    }
  }
}`}
                    </code>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Observer - Event Management</h4>
                    <code className="text-sm text-gray-600">
                      {`interface IEventObserver {
  update(event: EventData): void;
}

class EventManager {
  private observers: IEventObserver[] = [];
  
  notifyObservers(event: EventData): void {
    this.observers.forEach(observer => observer.update(event));
  }
}`}
                    </code>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Strategy - Certificate Generation</h4>
                    <code className="text-sm text-gray-600">
                      {`interface ICertificateStrategy {
  generateCertificate(data: ParticipantData): Promise<CertificateResult>;
}

class CertificateGenerator {
  constructor(private strategy: ICertificateStrategy) {}
  
  setStrategy(strategy: ICertificateStrategy): void {
    this.strategy = strategy;
  }
}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Logs Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Logs de Ejecución
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={clearLogs} disabled={logs.length === 0}>
                    Limpiar
                  </Button>
                </div>
                <CardDescription>Salida en tiempo real de las demostraciones</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {logs.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      <Code className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Ejecuta una demostración para ver los logs</p>
                    </div>
                  ) : (
                    logs.map((log, index) => (
                      <div key={index} className="p-2 bg-gray-50 rounded text-xs font-mono border-l-2 border-blue-200">
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Pattern Benefits */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">¿Por qué estos patrones?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Mantenibilidad</p>
                    <p className="text-xs text-gray-600">Código más fácil de mantener y extender</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Reutilización</p>
                    <p className="text-xs text-gray-600">Componentes reutilizables en diferentes contextos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Escalabilidad</p>
                    <p className="text-xs text-gray-600">Sistema preparado para crecer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Testabilidad</p>
                    <p className="text-xs text-gray-600">Fácil de probar y validar</p>
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
