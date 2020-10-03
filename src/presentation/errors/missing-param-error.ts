export class MissingParrarError extends Error {
  constructor(paramName: string) {
    super(`Missing Param: ${paramName}`)
    this.name = 'MissingParrarError'
  }
}
