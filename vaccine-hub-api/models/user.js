const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials){
        // user should submit emaail and password
        //if any of these fields are missing, throw an error
        // look up user in db by email
        //if user is found, compare submitted password
        //with the password in the db
        //if there is a match, return the user
        // if any of this goes wrong, throw an error
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        // user should submit their email and password
        // if any of these fields missing, throw an error
        // make sure no user already exists in the system with that email
        // if one does, throw an error
        // take the user's password and hash it
        // take the user's email and lowercase it
        // create a new user in the db with all their info
        // and return the user

    }
}

module.exports = User