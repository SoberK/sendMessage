import fetch from "node-fetch";
import { handle } from "./handle.js";
const userId = 2043508
for (let index = 0 ; index < 30; index++) {
  await handle(userId);
}
