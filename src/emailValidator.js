export class Main {

    containsAt(email){
      
        return /@/.test(email);
    }

    containsPeriod(email){
      
        if(email.endsWith(".")){
            return false;
        }
        
        return (/\./).test(email);
    }

    containtsSpace(email){
        if(email.includes(" ")){
            return false;
        }
        return true;
    }
}
export default Main;