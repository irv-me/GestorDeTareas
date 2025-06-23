// Pruebas para los patrones de diseño implementados

import { db, getUserById } from "../patterns/singleton/database-connection"
import { NotificationService } from "../patterns/factory/notification-factory"
import { EventManager, EmailNotificationObserver } from "../patterns/observer/event-observer"
import { CertificateService } from "../patterns/strategy/certificate-strategy"
import { jest } from "@jest/globals"

describe("Patrones de Diseño - Pruebas Unitarias", () => {
  describe("Singleton Pattern - Database Connection", () => {
    test("debe retornar la misma instancia", () => {
      const instance1 = db
      const instance2 = db

      expect(instance1).toBe(instance2)
      expect(instance1).toBeInstanceOf(Object)
    })

    test("debe mantener el estado de conexión", async () => {
      await db.connect()
      expect(db.getConnectionStatus()).toBe(true)
    })

    test("debe ejecutar queries correctamente", async () => {
      const result = await getUserById(1)
      expect(result).toBeDefined()
    })
  })

  describe("Factory Pattern - Notification Service", () => {
    let notificationService: NotificationService

    beforeEach(() => {
      notificationService = new NotificationService()
    })

    test("debe crear servicio de notificaciones", () => {
      expect(notificationService).toBeInstanceOf(NotificationService)
    })

    test("debe retornar tipos soportados", () => {
      const types = notificationService.getSupportedNotificationTypes()
      expect(types).toContain("EMAIL")
      expect(types).toContain("SMS")
      expect(types).toContain("PUSH")
    })

    test("debe enviar notificación email", async () => {
      const result = await notificationService.sendNotification(
        "EMAIL",
        "test@example.com",
        "Test message",
        "Test subject",
      )
      expect(result).toBe(true)
    })

    test("debe manejar tipo de notificación inválido", async () => {
      const result = await notificationService.sendNotification("INVALID", "test@example.com", "Test message")
      expect(result).toBe(false)
    })
  })

  describe("Observer Pattern - Event Manager", () => {
    let eventManager: EventManager
    let emailObserver: EmailNotificationObserver

    beforeEach(() => {
      eventManager = new EventManager()
      emailObserver = new EmailNotificationObserver()
    })

    test("debe agregar observadores", () => {
      eventManager.addObserver(emailObserver)
      expect(eventManager.getObserverCount()).toBe(1)
    })

    test("debe remover observadores", () => {
      eventManager.addObserver(emailObserver)
      eventManager.removeObserver(emailObserver)
      expect(eventManager.getObserverCount()).toBe(0)
    })

    test("debe crear evento y notificar observadores", () => {
      const consoleSpy = jest.spyOn(console, "log").mockImplementation()

      eventManager.addObserver(emailObserver)
      const eventId = eventManager.createEvent({
        title: "Test Event",
        description: "Test Description",
      })

      expect(eventId).toBeDefined()
      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe("Strategy Pattern - Certificate Service", () => {
    let certificateService: CertificateService

    beforeEach(() => {
      certificateService = new CertificateService()
    })

    test("debe crear servicio de certificados", () => {
      expect(certificateService).toBeInstanceOf(CertificateService)
    })

    test("debe generar certificados para participantes", async () => {
      const participants = [{ id: 1, name: "Test User", email: "test@example.com", attendanceHours: 8 }]

      const event = {
        id: 1,
        title: "Test Event",
        type: "conference",
        duration: 6,
        completionDate: new Date(),
      }

      const results = await certificateService.generateEventCertificates(participants, event)

      expect(results).toHaveLength(1)
      expect(results[0]).toHaveProperty("certificateId")
      expect(results[0]).toHaveProperty("verificationCode")
    })
  })
})
