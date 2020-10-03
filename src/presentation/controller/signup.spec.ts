import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name provided ', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@any.com',
        password: 'any_password',
        passwordConfirmation: 'any_confirmation_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
