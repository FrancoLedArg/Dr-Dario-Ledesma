import Joi from 'joi'

const id = Joi.number().integer()
const role = Joi.string()
const username = Joi.string().alphanum()
const password = Joi.string().alphanum()
const nombre = Joi.string()
const apellido = Joi.string()
const telefono = Joi.string().alphanum().min(10).max(20)

export const getUserSchema = Joi.object({
  id: id.required()
})

export const createUserSchema = Joi.object({
  role: role.required(),
  username: username.required(),
  password: password.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  telefono: telefono.required()
})

export const updateUserSchema = Joi.object({
  id: id.required(),
  nombre: nombre,
  apellido: apellido,
  telefono: telefono
})
