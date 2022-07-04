import { log } from "@graphprotocol/graph-ts";
import { CancelTransaction } from "../../types/Timelock/Timelock";

export function handleCancelTransaction(event: CancelTransaction): void {
  log.info("CancelTransaction event handled", []);
  log.info("param txHash: {}", [event.params.txHash.toString()]);
  log.info("param target: {}", [event.params.target.toString()]);
  log.info("param value: {}", [event.params.value.toString()]);
  log.info("param signature: {}", [event.params.signature.toString()]);
  log.info("param data: {}", [event.params.data.toString()]);
  log.info("param eta: {}", [event.params.eta.toString()]);
}
