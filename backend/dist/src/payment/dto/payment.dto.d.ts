export declare enum PaymentMethod {
    CASH = "CASH",
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    MOBILE_PAY = "MOBILE_PAY"
}
export declare class PaymentRequestDto {
    amount: number;
    method: PaymentMethod;
}
