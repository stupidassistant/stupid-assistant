import * as functions from "firebase-functions";
import { foo } from "@stupidassistant/core";

export const helloWorld = functions.https.onRequest((request: any, response: any) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send(`Hello from Firebase!, ${foo}`);
});
