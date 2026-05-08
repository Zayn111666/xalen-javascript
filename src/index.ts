import OpenAI from "openai";
import type { ClientOptions } from "openai";

export interface XALENOptions extends Omit<ClientOptions, "apiKey" | "baseURL"> {
  apiKey?: string;
  baseURL?: string;
}

export class XALEN extends OpenAI {
  constructor(options: XALENOptions = {}) {
    const apiKey = options.apiKey || process.env.XALEN_API_KEY;
    if (!apiKey) {
      throw new Error(
        "XALEN API key required. Pass apiKey or set XALEN_API_KEY env var. " +
        "Get your key at https://xalen.io/dashboard"
      );
    }
    super({
      ...options,
      apiKey,
      baseURL: options.baseURL || "https://api.xalen.io/v1",
    });
  }
}

export default XALEN;
