import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/MissingParamErrors'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) return badRequest(new MissingParamError('name'))
    if (!httpRequest.body.email) return badRequest(new MissingParamError('email'))

    return {
      statusCode: 200,
      body: 'ok'
    }
  }
}
