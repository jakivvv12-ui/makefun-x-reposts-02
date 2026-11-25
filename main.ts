import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// PLACEHOLDER: replace this X post URL after @BasedMolang posts the quote/reply.
const PLACEHOLDER_POST_URL = 'https://x.com/BasedMolang/status/0000000000000000000';

const payload = JSON.stringify({ posts: [PLACEHOLDER_POST_URL] }) + '\n';

mkdirSync(OUTPUT_DIR, { recursive: true });
// The kit gate reads POSTS.json; POST.json carries the same bytes for the handoff check.
writeFileSync(join(OUTPUT_DIR, 'POSTS.json'), payload, 'utf8');
writeFileSync(join(OUTPUT_DIR, 'POST.json'), payload, 'utf8');
