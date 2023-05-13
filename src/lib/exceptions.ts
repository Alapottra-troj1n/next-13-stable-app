export class AuthRequiredError extends Error {
    constructor(message = 'Forbidden Access! Auth is Required'){
        super(message)
        this.name = 'AuthRequiredError'
    }
}