// PATRÓN SINGLETON - Conexión a Base de Datos
class DatabaseConnection {
  private static instance: DatabaseConnection
  private connection: any
  private isConnected = false

  private constructor() {
    // Constructor privado para prevenir instanciación directa
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection()
    }
    return DatabaseConnection.instance
  }

  public async connect(): Promise<void> {
    if (!this.isConnected) {
      try {
        // Simulación de conexión a PostgreSQL
        this.connection = {
          host: process.env.DB_HOST || "localhost",
          port: process.env.DB_PORT || 5432,
          database: process.env.DB_NAME || "eventpro",
          user: process.env.DB_USER || "admin",
          password: process.env.DB_PASSWORD || "password",
        }

        console.log("🔗 Conexión a base de datos establecida")
        this.isConnected = true
      } catch (error) {
        console.error("❌ Error conectando a la base de datos:", error)
        throw error
      }
    }
  }

  public async query(sql: string, params?: any[]): Promise<any> {
    if (!this.isConnected) {
      await this.connect()
    }

    // Simulación de query
    console.log(`📊 Ejecutando query: ${sql}`)
    if (params) {
      console.log(`📋 Parámetros:`, params)
    }

    // Retorna datos simulados
    return { rows: [], rowCount: 0 }
  }

  public getConnectionStatus(): boolean {
    return this.isConnected
  }
}

// Uso del Singleton
export const db = DatabaseConnection.getInstance()

// Ejemplo de uso
export async function getUserById(id: number) {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [id])
  return result.rows[0]
}

export async function createEvent(eventData: any) {
  const query = `
    INSERT INTO events (title, description, start_date, end_date, organizer_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `
  const params = [eventData.title, eventData.description, eventData.startDate, eventData.endDate, eventData.organizerId]

  const result = await db.query(query, params)
  return result.rows[0]
}
