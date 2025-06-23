// PATRÓN OBSERVER - Sistema de Eventos

// Interfaz para observadores
interface IEventObserver {
  update(event: EventData): void
  getObserverName(): string
}

// Interfaz para el sujeto observable
interface IEventSubject {
  addObserver(observer: IEventObserver): void
  removeObserver(observer: IEventObserver): void
  notifyObservers(event: EventData): void
}

// Datos del evento
interface EventData {
  id: number
  title: string
  type: "CREATED" | "UPDATED" | "CANCELLED" | "COMPLETED"
  timestamp: Date
  data: any
}

// Observadores concretos
class EmailNotificationObserver implements IEventObserver {
  update(event: EventData): void {
    console.log(`📧 [EmailObserver] Procesando evento: ${event.type} - ${event.title}`)

    switch (event.type) {
      case "CREATED":
        this.sendEventCreatedEmail(event)
        break
      case "UPDATED":
        this.sendEventUpdatedEmail(event)
        break
      case "CANCELLED":
        this.sendEventCancelledEmail(event)
        break
      case "COMPLETED":
        this.sendEventCompletedEmail(event)
        break
    }
  }

  getObserverName(): string {
    return "EmailNotificationObserver"
  }

  private sendEventCreatedEmail(event: EventData): void {
    console.log(`✉️ Enviando email de confirmación para evento: ${event.title}`)
  }

  private sendEventUpdatedEmail(event: EventData): void {
    console.log(`✉️ Enviando email de actualización para evento: ${event.title}`)
  }

  private sendEventCancelledEmail(event: EventData): void {
    console.log(`✉️ Enviando email de cancelación para evento: ${event.title}`)
  }

  private sendEventCompletedEmail(event: EventData): void {
    console.log(`✉️ Enviando email de finalización para evento: ${event.title}`)
  }
}

class CertificateGeneratorObserver implements IEventObserver {
  update(event: EventData): void {
    console.log(`🏆 [CertificateObserver] Procesando evento: ${event.type} - ${event.title}`)

    if (event.type === "COMPLETED") {
      this.generateCertificates(event)
    }
  }

  getObserverName(): string {
    return "CertificateGeneratorObserver"
  }

  private generateCertificates(event: EventData): void {
    console.log(`📜 Generando certificados para evento completado: ${event.title}`)
    // Lógica para generar certificados
  }
}

class AnalyticsObserver implements IEventObserver {
  update(event: EventData): void {
    console.log(`📊 [AnalyticsObserver] Registrando evento: ${event.type} - ${event.title}`)
    this.recordEventMetrics(event)
  }

  getObserverName(): string {
    return "AnalyticsObserver"
  }

  private recordEventMetrics(event: EventData): void {
    console.log(`📈 Actualizando métricas para evento: ${event.title}`)
    // Lógica para actualizar analytics
  }
}

// Sujeto observable - Gestor de Eventos
export class EventManager implements IEventSubject {
  private observers: IEventObserver[] = []
  private events: Map<number, any> = new Map()

  addObserver(observer: IEventObserver): void {
    this.observers.push(observer)
    console.log(`➕ Observer agregado: ${observer.getObserverName()}`)
  }

  removeObserver(observer: IEventObserver): void {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
      console.log(`➖ Observer removido: ${observer.getObserverName()}`)
    }
  }

  notifyObservers(event: EventData): void {
    console.log(`🔔 Notificando a ${this.observers.length} observadores sobre evento: ${event.type}`)

    this.observers.forEach((observer) => {
      try {
        observer.update(event)
      } catch (error) {
        console.error(`❌ Error en observer ${observer.getObserverName()}:`, error)
      }
    })
  }

  // Métodos de gestión de eventos
  createEvent(eventData: any): number {
    const eventId = Date.now() // ID simple para el ejemplo
    this.events.set(eventId, eventData)

    const event: EventData = {
      id: eventId,
      title: eventData.title,
      type: "CREATED",
      timestamp: new Date(),
      data: eventData,
    }

    this.notifyObservers(event)
    return eventId
  }

  updateEvent(eventId: number, updates: any): boolean {
    const existingEvent = this.events.get(eventId)
    if (!existingEvent) {
      return false
    }

    const updatedEvent = { ...existingEvent, ...updates }
    this.events.set(eventId, updatedEvent)

    const event: EventData = {
      id: eventId,
      title: updatedEvent.title,
      type: "UPDATED",
      timestamp: new Date(),
      data: updatedEvent,
    }

    this.notifyObservers(event)
    return true
  }

  cancelEvent(eventId: number): boolean {
    const existingEvent = this.events.get(eventId)
    if (!existingEvent) {
      return false
    }

    existingEvent.status = "CANCELLED"

    const event: EventData = {
      id: eventId,
      title: existingEvent.title,
      type: "CANCELLED",
      timestamp: new Date(),
      data: existingEvent,
    }

    this.notifyObservers(event)
    return true
  }

  completeEvent(eventId: number): boolean {
    const existingEvent = this.events.get(eventId)
    if (!existingEvent) {
      return false
    }

    existingEvent.status = "COMPLETED"

    const event: EventData = {
      id: eventId,
      title: existingEvent.title,
      type: "COMPLETED",
      timestamp: new Date(),
      data: existingEvent,
    }

    this.notifyObservers(event)
    return true
  }

  getObserverCount(): number {
    return this.observers.length
  }
}

// Ejemplo de uso del patrón Observer
export function demonstrateObserverPattern() {
  console.log("🎯 Demostrando Patrón Observer\n")

  // Crear el gestor de eventos
  const eventManager = new EventManager()

  // Crear observadores
  const emailObserver = new EmailNotificationObserver()
  const certificateObserver = new CertificateGeneratorObserver()
  const analyticsObserver = new AnalyticsObserver()

  // Registrar observadores
  eventManager.addObserver(emailObserver)
  eventManager.addObserver(certificateObserver)
  eventManager.addObserver(analyticsObserver)

  console.log(`\n📋 Observadores registrados: ${eventManager.getObserverCount()}\n`)

  // Simular eventos
  const eventId = eventManager.createEvent({
    title: "Conferencia de IA 2024",
    description: "Evento sobre inteligencia artificial",
    date: "2024-03-15",
    capacity: 100,
  })

  console.log("\n" + "=".repeat(50) + "\n")

  eventManager.updateEvent(eventId, {
    capacity: 150,
    location: "Centro de Convenciones",
  })

  console.log("\n" + "=".repeat(50) + "\n")

  eventManager.completeEvent(eventId)

  console.log("\n🎉 Demostración del Patrón Observer completada")
}
