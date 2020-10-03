import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParrarError } from '../errors/missing-param-error'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParrarError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParrarError('email')
      }
    }
  }
}
