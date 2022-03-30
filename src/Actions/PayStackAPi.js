// import axios from "axios";
import { usePaystackPayment } from "react-paystack";

const PayStackApi = (email, amount, txRef) => {
  const transactionDetails = {
    email,
    key: "pk_test_9bfeb3eccb29d1375f5bb064cef581b6dffaa2c7",
    amount,
    txRef,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  usePaystackPayment(transactionDetails);
};

export default PayStackApi;

/*
const payWithPaystack = (email, amount, txRef) => {

  let handler = PaystackPop.setup({
    , // Replace with your public key
    email: email,
    amount: amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
    ref: txRef, // Replace with a reference you generated
    callback: function (response) {
      //this happens after the payment is completed successfully
      // alert('Payment complete! Reference: ' + reference);

      let reference = response.reference;
      validRequest(reference);

      // Make an AJAX call to your server with the reference to verify the transaction
      const validRequest = async (referenceId) => {
        const obj = JSON.stringify({
          reference: referenceId,
          companyToken:
            "5245ff745564886c0aadf892117d597601b307acba4f54f55aafc33bb06bbbf6ca803e9a",
        });
        try {
          let res = await axios.post(
            "https://haypex.com.ng/dev/ABC/webService/verifyAccountTopUpPayment.php"
          );
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      /*function resendVerification(referenceId){
validRequest (referenceId);
}
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });
  handler.openIframe();
};
 */

// });
