# xalen-sdk

The official JavaScript/TypeScript SDK for the XALEN AI API. Drop-in replacement for the OpenAI SDK.

## Installation

```bash
npm install xalen-sdk
```

## Quick Start

```typescript
import XALEN from 'xalen-sdk';

const client = new XALEN({ apiKey: 'xln_live_your_key_here' });

const response = await client.chat.completions.create({
  model: 'vedika-standard',
  messages: [{ role: 'user', content: 'What is Shakata Yoga?' }],
});

console.log(response.choices[0].message.content);
```

## Streaming

```typescript
const stream = await client.chat.completions.create({
  model: 'vedika-fast',
  messages: [{ role: 'user', content: 'Analyze planetary transits' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
```

## Environment Variable

Set `XALEN_API_KEY` to avoid passing the key explicitly:

```bash
export XALEN_API_KEY=xln_live_your_key_here
```

## API Base URL

Default: `https://api.xalen.io/v1`

## Documentation

Full API docs: [xalen.io/docs](https://xalen.io/docs)

## License

MIT
