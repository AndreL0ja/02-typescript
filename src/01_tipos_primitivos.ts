/**
 * ============================================================================
 * 🥊 RETO 01: Fundamentos de TypeScript, Variables y Tipos
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

// ============================================================================
// PASO 1: Declaración de Variables Básicas y Tipos Primitivos
// ============================================================================

export const nombreEstudiante: string = "Carlos Andrade";
export const edadEstudiante: number = 17;
export const promedioObjetivo: number = 9.5;
export const estaMatriculado: boolean = true;

// ============================================================================
// PASO 2: Función de Resumen Personal
// ============================================================================

export function obtenerResumenPersonal(
    nombreEstudiante: string, 
    edadEstudiante: number, 
    promedioObjetivo: number, 
    estaMatriculado: boolean
): string {
    const estado = estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO";
    return `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estado}`;
}

// ============================================================================
// PASO 3: Cálculo de Promedio de Notas (Usando .reduce y sin usar ===)
// ============================================================================

export function calcularPromedio(notas: readonly number[]): number {
    if (notas.length < 1) {
        return 0;
    }

    const suma = notas.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / notas.length;

    return Number(promedio.toFixed(2));
}

// ============================================================================
// PASO 4: Formatear Ficha de Estudiante
// ============================================================================

export function formatearFichaEstudiante(
    nombre: string, 
    edad: number, 
    paralelo: "E1" | "E2", 
    activo: boolean
): string {
    const nombreMayus = nombre.toUpperCase();
    const estado = activo ? "MATRICULADO" : "RETIRADO";
    return `[FICHA UETS] ${nombreMayus} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estado}`;
}