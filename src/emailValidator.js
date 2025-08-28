export class Main {

    containsAt(email){
        if(/@/.test(email)){
            return true;
        }
        return false;
    }
}
export default Main;