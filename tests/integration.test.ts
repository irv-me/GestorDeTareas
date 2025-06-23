// Pruebas de integración del sistema

import { db } from "../patterns/singleton/database-connection"
import { NotificationService } from "../patterns/factory/notification-factory"
import { EventManager } from "../patterns/observer/event-observer"

describe("Pruebas de Integración", () => {
  describe("Flujo completo de creación de evento", () => {
    test("debe crear evento y enviar notificaciones", async () => {
      // Configurar servicios
      const eventManager = new EventManager()
      const notificationService = new NotificationService()

      // Crear evento
      const eventData = {
        title: "Conferencia de Integración",
        description: "Evento de prueba de integración",
        startDate: new Date(),
        endDate: new Date(),
        organizerId: 1,
      }

      const eventId = eventManager.createEvent(eventData)
      expect(eventId).toBeDefined()

      // Simular registro de usuario
      const registrationResult = await notificationService.sendNotification(
        "EMAIL",
        "usuario@test.com",
        "Confirmación de registro",
        "Registro exitoso",
      )

      expect(registrationResult).toBe(true)
    })
  })

  describe("Flujo de generación de certificados", () => {
    test("debe completar evento y generar certificados", async () => {
      const eventManager = new EventManager()

      // Crear y completar evento
      const eventId = eventManager.createEvent({
        title: "Workshop de Certificación",
        type: "workshop",
        duration: 8,
      })

      const completionResult = eventManager.completeEvent(eventId)
      expect(completionResult).toBe(true)
    })
  })

  describe("Integración con base de datos", () => {
    test("debe conectar y ejecutar operaciones", async () => {
      await db.connect()
      expect(db.getConnectionStatus()).toBe(true)

      // Simular operaciones CRUD
      const user = await db.query("SELECT * FROM users WHERE id = $1", [1])
      expect(user).toBeDefined()
    })
  })
})
