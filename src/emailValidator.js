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
}
export default Main;