### line-bot-sdk-nodejs / TypeScript
> https://line.github.io/line-bot-sdk-nodejs/guide/typescript.html#what-s-good-about-using-typescript

The library is built to just-work with TypeScript too, so import the library and there you go.
```
import {
  // main APIs
  Client,
  middleware,

  // exceptions
  JSONParseError,
  SignatureValidationFailed,

  // types
  TemplateMessage,
  WebhookEvent,
} from "@line/bot-sdk";
```