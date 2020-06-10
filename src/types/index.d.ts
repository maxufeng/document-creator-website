import { Wallet } from "ethers";

export interface Form {
  name: string;
  type: "TRANSFERABLE_RECORD" | "VERIFIABLE_DOCUMENT";
  defaults: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  schema: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface ConfigFile {
  wallet: string;
  forms: Form[];
}

export interface Config {
  wallet: Wallet;
  forms: Form[];
}