// PATRÓN STRATEGY - Generación de Certificados

// Interfaz para estrategias de generación de certificados
interface ICertificateStrategy {
  generateCertificate(participantData: ParticipantData, eventData: EventData): Promise<CertificateResult>
  getStrategyName(): string
}

// Datos del participante y evento
interface ParticipantData {
  id: number
  name: string
  email: string
  attendanceHours: number
}

interface EventData {
  id: number
  title: string
  type: string
  duration: number
  completionDate: Date
}

interface CertificateResult {
  certificateId: string
  filePath: string
  verificationCode: string
  generatedAt: Date
}

// Estrategias concretas
class StandardCertificateStrategy implements ICertificateStrategy {
  async generateCertificate(participant: ParticipantData, event: EventData): Promise<CertificateResult> {
    console.log(`📜 Generando certificado estándar para: ${participant.name}`)

    // Simulación de generación de certificado estándar
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const certificateId = `CERT-STD-${Date.now()}`
    const verificationCode = this.generateVerificationCode()

    console.log(`✅ Certificado estándar generado: ${certificateId}`)

    return {
      certificateId,
      filePath: `/certificates/standard/${certificateId}.pdf`,
      verificationCode,
      generatedAt: new Date(),
    }
  }

  getStrategyName(): string {
    return "Standard Certificate"
  }

  private generateVerificationCode(): string {
    return Math.random().toString(36).substring(2, 15).toUpperCase()
  }
}

class PremiumCertificateStrategy implements ICertificateStrategy {
  async generateCertificate(participant: ParticipantData, event: EventData): Promise<CertificateResult> {
    console.log(`🏆 Generando certificado premium para: ${participant.name}`)

    // Simulación de generación de certificado premium con más detalles
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const certificateId = `CERT-PREM-${Date.now()}`
    const verificationCode = this.generateSecureVerificationCode()

    console.log(`✨ Certificado premium generado con diseño especial: ${certificateId}`)

    return {
      certificateId,
      filePath: `/certificates/premium/${certificateId}.pdf`,
      verificationCode,
      generatedAt: new Date(),
    }
  }

  getStrategyName(): string {
    return "Premium Certificate"
  }

  private generateSecureVerificationCode(): string {
    const timestamp = Date.now().toString()
    const random = Math.random().toString(36).substring(2, 10)
    return `${timestamp}-${random}`.toUpperCase()
  }
}

class CompletionCertificateStrategy implements ICertificateStrategy {
  async generateCertificate(participant: ParticipantData, event: EventData): Promise<CertificateResult> {
    console.log(`🎓 Generando certificado de finalización para: ${participant.name}`)

    // Validar que el participante cumple con los requisitos mínimos
    const requiredHours = event.duration * 0.8 // 80% de asistencia requerida

    if (participant.attendanceHours < requiredHours) {
      throw new Error(`Participante no cumple con horas mínimas requeridas: ${requiredHours}`)
    }

    // Simulación de generación de certificado de finalización
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const certificateId = `CERT-COMP-${Date.now()}`
    const verificationCode = this.generateCompletionCode(participant, event)

    console.log(`🎯 Certificado de finalización generado: ${certificateId}`)
    console.log(`📊 Horas completadas: ${participant.attendanceHours}/${event.duration}`)

    return {
      certificateId,
      filePath: `/certificates/completion/${certificateId}.pdf`,
      verificationCode,
      generatedAt: new Date(),
    }
  }

  getStrategyName(): string {
    return "Completion Certificate"
  }

  private generateCompletionCode(participant: ParticipantData, event: EventData): string {
    const participantHash = participant.id.toString().padStart(4, "0")
    const eventHash = event.id.toString().padStart(4, "0")
    const dateHash = new Date().getFullYear().toString()
    return `COMP-${participantHash}-${eventHash}-${dateHash}`
  }
}

// Contexto que usa las estrategias
export class CertificateGenerator {
  private strategy: ICertificateStrategy

  constructor(strategy: ICertificateStrategy) {
    this.strategy = strategy
  }

  setStrategy(strategy: ICertificateStrategy): void {
    this.strategy = strategy
    console.log(`🔄 Estrategia cambiada a: ${strategy.getStrategyName()}`)
  }

  async generateCertificate(participant: ParticipantData, event: EventData): Promise<CertificateResult> {
    console.log(`🚀 Iniciando generación con estrategia: ${this.strategy.getStrategyName()}`)

    try {
      const result = await this.strategy.generateCertificate(participant, event)
      console.log(`✅ Certificado generado exitosamente: ${result.certificateId}`)
      return result
    } catch (error) {
      console.error(`❌ Error generando certificado:`, error)
      throw error
    }
  }

  getCurrentStrategy(): string {
    return this.strategy.getStrategyName()
  }
}

// Factory para crear estrategias basadas en tipo de evento
export class CertificateStrategyFactory {
  static createStrategy(eventType: string, isPremium = false): ICertificateStrategy {
    if (isPremium) {
      return new PremiumCertificateStrategy()
    }

    switch (eventType.toLowerCase()) {
      case "course":
      case "workshop":
        return new CompletionCertificateStrategy()
      case "conference":
      case "seminar":
      case "webinar":
      default:
        return new StandardCertificateStrategy()
    }
  }
}

// Servicio de certificados que integra todo
export class CertificateService {
  private generator: CertificateGenerator

  constructor() {
    // Inicializar con estrategia por defecto
    this.generator = new CertificateGenerator(new StandardCertificateStrategy())
  }

  async generateEventCertificates(
    participants: ParticipantData[],
    event: EventData,
    isPremium = false,
  ): Promise<CertificateResult[]> {
    // Seleccionar estrategia apropiada
    const strategy = CertificateStrategyFactory.createStrategy(event.type, isPremium)
    this.generator.setStrategy(strategy)

    const results: CertificateResult[] = []

    console.log(`\n📋 Generando certificados para ${participants.length} participantes`)
    console.log(`🎯 Evento: ${event.title} (${event.type})`)
    console.log(`⚙️ Estrategia: ${strategy.getStrategyName()}\n`)

    for (const participant of participants) {
      try {
        const certificate = await this.generator.generateCertificate(participant, event)
        results.push(certificate)
        console.log(`✅ Certificado generado para: ${participant.name}\n`)
      } catch (error) {
        console.error(`❌ Error generando certificado para ${participant.name}:`, error)
      }
    }

    console.log(`🎉 Proceso completado. ${results.length}/${participants.length} certificados generados`)
    return results
  }
}

// Ejemplo de uso del patrón Strategy
export async function demonstrateStrategyPattern() {
  console.log("🎯 Demostrando Patrón Strategy - Generación de Certificados\n")

  const certificateService = new CertificateService()

  // Datos de ejemplo
  const participants: ParticipantData[] = [
    { id: 1, name: "Juan Pérez", email: "juan@email.com", attendanceHours: 8 },
    { id: 2, name: "María García", email: "maria@email.com", attendanceHours: 6 },
    { id: 3, name: "Carlos López", email: "carlos@email.com", attendanceHours: 10 },
  ]

  const workshopEvent: EventData = {
    id: 101,
    title: "Workshop de React Avanzado",
    type: "workshop",
    duration: 8,
    completionDate: new Date(),
  }

  const conferenceEvent: EventData = {
    id: 102,
    title: "Conferencia de IA 2024",
    type: "conference",
    duration: 6,
    completionDate: new Date(),
  }

  // Generar certificados para workshop (estrategia de finalización)
  console.log("=".repeat(60))
  await certificateService.generateEventCertificates(participants, workshopEvent)

  console.log("\n" + "=".repeat(60))

  // Generar certificados premium para conferencia
  await certificateService.generateEventCertificates(participants, conferenceEvent, true)

  console.log("\n🎉 Demostración del Patrón Strategy completada")
}
