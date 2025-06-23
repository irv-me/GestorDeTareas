// PATRÓN FACTORY METHOD - Sistema de Notificaciones

// Interfaz base para notificaciones
interface INotification {
  send(recipient: string, message: string, subject?: string): Promise<boolean>
  getType(): string
}

// Implementaciones concretas
class EmailNotification implements INotification {
  async send(recipient: string, message: string, subject?: string): Promise<boolean> {
    console.log(`📧 Enviando email a: ${recipient}`)
    console.log(`📋 Asunto: ${subject}`)
    console.log(`💬 Mensaje: ${message}`)

    // Simulación de envío de email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("✅ Email enviado exitosamente")
    return true
  }

  getType(): string {
    return "EMAIL"
  }
}

class SMSNotification implements INotification {
  async send(recipient: string, message: string): Promise<boolean> {
    console.log(`📱 Enviando SMS a: ${recipient}`)
    console.log(`💬 Mensaje: ${message}`)

    // Simulación de envío de SMS
    await new Promise((resolve) => setTimeout(resolve, 800))

    console.log("✅ SMS enviado exitosamente")
    return true
  }

  getType(): string {
    return "SMS"
  }
}

class PushNotification implements INotification {
  async send(recipient: string, message: string, subject?: string): Promise<boolean> {
    console.log(`🔔 Enviando push notification a: ${recipient}`)
    console.log(`📋 Título: ${subject}`)
    console.log(`💬 Mensaje: ${message}`)

    // Simulación de envío de push notification
    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log("✅ Push notification enviada exitosamente")
    return true
  }

  getType(): string {
    return "PUSH"
  }
}

// Factory para crear notificaciones
class NotificationFactory {
  static createNotification(type: string): INotification {
    switch (type.toUpperCase()) {
      case "EMAIL":
        return new EmailNotification()
      case "SMS":
        return new SMSNotification()
      case "PUSH":
        return new PushNotification()
      default:
        throw new Error(`Tipo de notificación no soportado: ${type}`)
    }
  }

  static getSupportedTypes(): string[] {
    return ["EMAIL", "SMS", "PUSH"]
  }
}

// Servicio de notificaciones que usa el Factory
export class NotificationService {
  async sendNotification(type: string, recipient: string, message: string, subject?: string): Promise<boolean> {
    try {
      const notification = NotificationFactory.createNotification(type)
      return await notification.send(recipient, message, subject)
    } catch (error) {
      console.error(`❌ Error enviando notificación ${type}:`, error)
      return false
    }
  }

  async sendMultipleNotifications(
    types: string[],
    recipient: string,
    message: string,
    subject?: string,
  ): Promise<{ [key: string]: boolean }> {
    const results: { [key: string]: boolean } = {}

    for (const type of types) {
      results[type] = await this.sendNotification(type, recipient, message, subject)
    }

    return results
  }

  getSupportedNotificationTypes(): string[] {
    return NotificationFactory.getSupportedTypes()
  }
}

// Ejemplo de uso
export async function notifyEventRegistration(userEmail: string, eventTitle: string) {
  const notificationService = new NotificationService()

  const message = `¡Te has registrado exitosamente en el evento: ${eventTitle}!`
  const subject = "Confirmación de Registro - EventPro"

  // Enviar notificación por email
  await notificationService.sendNotification("EMAIL", userEmail, message, subject)

  // Enviar múltiples notificaciones
  const results = await notificationService.sendMultipleNotifications(["EMAIL", "PUSH"], userEmail, message, subject)

  console.log("📊 Resultados de notificaciones:", results)
}
