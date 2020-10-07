import {
  HttpRequest,
  HttpResponse,
  EmailValidator,
  Controller
} from '../protocols'
import { MissingParrarError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helper/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    try {
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParrarError(field))
        }
      }

      const {
        body: { password, passwordConfirmation, email }
      } = httpRequest

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) return badRequest(new InvalidParamError('e-mail'))
    } catch (error) {
      return serverError()
    }
  }
}
