export class Main {

    containsAt(email){
      
        return /@/.test(email);
    }

    containsPeriod(email){
        if((/\./).test(email)){
            return true;
        }
        return false;
    }
}
export default Main;