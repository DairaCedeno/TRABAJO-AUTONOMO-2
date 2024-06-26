import axios from "axios";
import { data } from "../config";

// en este archivo se definen los servicios para la entidad empleado de la api de java

/*
para la api de python, las entidades existentes son:
- productoFactura
- factura
- producto

para la api de java, las entidades existentes son:
- clientes
- empleados
- categorias

los endpoints de la api de java entidad empleado son:
- GET /empleados
- GET /empleados/{id}
- POST /empleados
- PUT /empleados/{id}
- DELETE /empleados/{id}
*/


const API_BASE_URL = data.URL_API_JAVA;

// obtener un empleado por id
export const getEmpleado = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/empleados/${id}`);
  return response.data;
}

// obtener todos los empleados
export const getEmpleados = async () => {
  const response = await axios.get(`${API_BASE_URL}/empleados`);
  return response.data;
}

// crear un empleado
export const createEmpleado = async (nombre: string, apellido: string, CI: string, telefono: string, direccion: string) => {
  const response = await axios.post(`${API_BASE_URL}/empleados`, { nombre, apellido, CI, telefono, direccion });
  return response.data;
}

// actualizar un empleado
export const updateEmpleado = async (id: number, nombre?: string, apellido?: string, CI?: string, telefono?: string, direccion?: string) => {
  const response = await axios.put(`${API_BASE_URL}/empleados/${id}`, { nombre, apellido, CI, telefono, direccion });
  return response.data;
}

// eliminar un empleado
export const deleteEmpleado = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/empleados/${id}`);
  return response.data;
}