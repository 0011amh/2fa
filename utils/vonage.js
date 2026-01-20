import { Vonage } from "@vonage/server-sdk";
const vonage = new Vonage({
  apiKey: "5500a1b7",
  apiSecret: "beOsFUM5QAzeZNg6",
});
export const sendOtp = async (to, from, text) => {
  return await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
};
