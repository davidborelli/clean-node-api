import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcrypt-adapter'

describe('BCrypt Adapter', () => {
  test('Shoud call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashsSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashsSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
