import MercadoPago from "../mercadopago/MercadoPago";
import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    private token : Token;
    
    constructor(private mercadopago: MercadoPago){
        console.log("Adaptando Payonner em Paypal!")
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadopago.sendPaymentM();
    }
    paypalReceive(): void {
        return this.mercadopago.receivePaymentM();
    }

}