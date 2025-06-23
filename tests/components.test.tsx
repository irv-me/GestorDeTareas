// Pruebas para componentes de la interfaz

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import EventPlatformDashboard from "../app/page"
import EventCreationForm from "../components/event-creation-form"
import UserProfile from "../components/user-profile"

describe("Componentes de Interfaz - Pruebas", () => {
  describe("Dashboard Principal", () => {
    test("debe renderizar el dashboard correctamente", () => {
      render(<EventPlatformDashboard />)

      expect(screen.getByText("¡Bienvenido de vuelta!")).toBeInTheDocument()
      expect(screen.getByText("EventPro")).toBeInTheDocument()
      expect(screen.getByPlaceholderText("Buscar eventos...")).toBeInTheDocument()
    })

    test("debe mostrar estadísticas del sistema", () => {
      render(<EventPlatformDashboard />)

      expect(screen.getByText("Eventos Activos")).toBeInTheDocument()
      expect(screen.getByText("Total Participantes")).toBeInTheDocument()
      expect(screen.getByText("Certificados Emitidos")).toBeInTheDocument()
    })

    test("debe permitir búsqueda de eventos", async () => {
      render(<EventPlatformDashboard />)

      const searchInput = screen.getByPlaceholderText("Buscar eventos...")
      fireEvent.change(searchInput, { target: { value: "Conferencia" } })

      expect(searchInput).toHaveValue("Conferencia")
    })
  })

  describe("Formulario de Creación de Eventos", () => {
    test("debe renderizar formulario completo", () => {
      render(<EventCreationForm />)

      expect(screen.getByText("Crear Nuevo Evento")).toBeInTheDocument()
      expect(screen.getByLabelText("Título del Evento")).toBeInTheDocument()
      expect(screen.getByLabelText("Descripción")).toBeInTheDocument()
    })

    test("debe validar campos requeridos", async () => {
      render(<EventCreationForm />)

      const submitButton = screen.getByText("Guardar Evento")
      fireEvent.click(submitButton)

      // Verificar que se muestren mensajes de validación
      await waitFor(() => {
        expect(screen.getByLabelText("Título del Evento")).toBeRequired()
      })
    })

    test("debe alternar entre evento presencial y virtual", () => {
      render(<EventCreationForm />)

      const virtualSwitch = screen.getByLabelText("Evento Virtual")
      fireEvent.click(virtualSwitch)

      expect(screen.getByLabelText("Enlace Virtual")).toBeInTheDocument()
    })
  })

  describe("Perfil de Usuario", () => {
    test("debe mostrar información del usuario", () => {
      render(<UserProfile />)

      expect(screen.getByText("Mi Perfil")).toBeInTheDocument()
      expect(screen.getByText("Juan Pérez")).toBeInTheDocument()
      expect(screen.getByText("Desarrollador Full Stack")).toBeInTheDocument()
    })

    test("debe mostrar pestañas de navegación", () => {
      render(<UserProfile />)

      expect(screen.getByText("Perfil")).toBeInTheDocument()
      expect(screen.getByText("Mis Eventos")).toBeInTheDocument()
      expect(screen.getByText("Certificados")).toBeInTheDocument()
      expect(screen.getByText("Configuración")).toBeInTheDocument()
    })

    test("debe permitir cambiar entre pestañas", () => {
      render(<UserProfile />)

      const certificatesTab = screen.getByText("Certificados")
      fireEvent.click(certificatesTab)

      expect(screen.getByText("Mis Certificados")).toBeInTheDocument()
    })
  })
})
