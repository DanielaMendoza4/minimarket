// Datos simulados del catálogo mientras no exista un backend.
import { crearImagenProducto } from '../assets/imagenes'

export const productos = [
  { id: 1, nombre: 'Arroz Costeño', categoria: 'Despensa', unidad: '1 kg', precio: 4.9, imagen: crearImagenProducto('🍚', '#eee3c8', '#d9c79e'), stock: 12 },
  { id: 2, nombre: 'Leche Gloria', categoria: 'Lácteos', unidad: '400 g', precio: 4.2, imagen: crearImagenProducto('🥛', '#dcecf0', '#b7d8e0'), stock: 18 },
  { id: 3, nombre: 'Pan de molde', categoria: 'Panadería', unidad: '500 g', precio: 8.5, imagen: crearImagenProducto('🍞', '#f2dfbd', '#e6c78f'), stock: 8 },
  { id: 4, nombre: 'Huevos de corral', categoria: 'Lácteos', unidad: '12 unidades', precio: 10.9, imagen: crearImagenProducto('🥚', '#f3e8d7', '#e7d3b8'), stock: 10 },
  { id: 5, nombre: 'Gaseosa Inca Kola', categoria: 'Bebidas', unidad: '1.5 L', precio: 8.9, imagen: crearImagenProducto('🥤', '#f5e7a8', '#e8cb58'), stock: 15 },
  { id: 6, nombre: 'Agua mineral', categoria: 'Bebidas', unidad: '625 ml', precio: 2.5, imagen: crearImagenProducto('💧', '#d9eef3', '#a9dce7'), stock: 24 },
  { id: 7, nombre: 'Papas fritas', categoria: 'Snacks', unidad: '150 g', precio: 7.5, imagen: crearImagenProducto('🍟', '#f5e5b8', '#e8c96f'), stock: 0 },
  { id: 8, nombre: 'Atún en conserva', categoria: 'Despensa', unidad: '170 g', precio: 6.9, imagen: crearImagenProducto('🐟', '#dce9e3', '#b5d0c3'), stock: 7 },
  { id: 9, nombre: 'Café tostado', categoria: 'Despensa', unidad: '200 g', precio: 13.9, imagen: crearImagenProducto('☕', '#e9d8c8', '#d0ae91'), stock: 6 },
  { id: 10, nombre: 'Jabón de tocador', categoria: 'Cuidado personal', unidad: '90 g', precio: 3.5, imagen: crearImagenProducto('🧼', '#e6e5f1', '#c6c3e1'), stock: 20 },
  { id: 11, nombre: 'Detergente', categoria: 'Limpieza', unidad: '500 g', precio: 7.9, imagen: crearImagenProducto('🫧', '#d9ebf3', '#acd2e1'), stock: 9 },
  { id: 12, nombre: 'Chocolate bitter', categoria: 'Snacks', unidad: '100 g', precio: 5.9, imagen: crearImagenProducto('🍫', '#eadbd3', '#d3b5a4'), stock: 5 },
]
