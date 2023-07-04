import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class Paypal implements IPayPalPayment{

    private token : Token;

    authToken(): Token {
        return new Token()
    }
    paypalPayment(): void {
       this.token = this.authToken();
       console.log("TOKEN: " + this.token.token)
       console.log("Enviando pagamento via PayPal.")
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token)
        console.log("Enviando pagamento via PayPal.")
    }

}