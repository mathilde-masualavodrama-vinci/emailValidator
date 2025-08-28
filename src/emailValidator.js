export class Main {


    IsValid(email) {
        return this.checkAtFormat(email) && this.containsPeriod(email) && this.containtsSpace(email);
    }
    containsAt(email) {

        return /@/.test(email);
    }

    containsPeriod(email) {

        if (email.endsWith(".")) {
            return false;
        }

        return (/\./).test(email);
    }

    containtsSpace(email) {
        if (email.includes(" ")) {
            return false;
        }
        return true;
    }

    checkAtFormat(email) {

        return this.containsAt(email) && email.indexOf('@') < email.length - 1 && email.indexOf('@') > 0;
    }


}
export default Main;