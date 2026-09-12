/**
 * ============================================================================
 * 🥊 RETO 02: De Clases Java POO a Interfaces TypeScript & Duck Typing
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

// ============================================================================
// PASO 1: Interface `PerfilUsuario` y Formateo
// ============================================================================

export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}

export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "Andre Loja",
  correo: "andre.lojab.est@est.salesianos.edu.ec",
  rol: "ESTUDIANTE"
};

/**
 * Implementación de `formatearPerfilUsuario`.
 * Formato requerido: `[PERFIL] ID (ROL): NOMBRE - CORREO`
 */
export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  return `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`;
}

// ============================================================================
// PASO 2: Interface `ProductoItem` y Cálculo de Precio Final
// ============================================================================

export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}

/**
 * Implementación de la función `calcularPrecioFinal`.
 * Reglas sin usar ===:
 * 1. Si no está disponible (!producto.disponible), retorna 0.
 * 2. Si tiene descuento mayor a 0, calcula y resta el porcentaje.
 * 3. Si no, retorna el precio original redondeado a 2 decimales.
 */
export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) {
      return 0;
  }

  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
      const descuento = producto.precio * (producto.descuentoPorcentaje / 100);
      const precioFinal = producto.precio - descuento;
      return Number(precioFinal.toFixed(2));
  }

  return Number(producto.precio.toFixed(2));
}