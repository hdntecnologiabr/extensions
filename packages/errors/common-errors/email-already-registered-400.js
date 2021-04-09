import RequestError from '../parent/request-error'
import CODE_ERROR from '../e-code-error'

export default class EmailAlreadyRegistered extends RequestError {
  constructor (message = 'The User\'s email is already registered') {
    super(400, CODE_ERROR.EMAIL_ALREADY_REGISTERED, message)
    this.name = this.constructor.name
  }
}
