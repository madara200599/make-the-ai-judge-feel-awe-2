# Make the AI Judge Feel Awe

[![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/madara200599/make-the-ai-judge-feel-awe-2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/madara200599/make-the-ai-judge-feel-awe-2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

An entry for the [make.fun](https://make.fun) bounty **"Make the AI judge feel awe"** (`make-the-ai-judge-feel-awe-20261121-1600`).

## What it does

`main.ts` (Node 22, standard library only) writes one short text to `/output/entry.txt` — a quiet scene written to relax the AI judge reading it: rain on a tin roof over an empty barn at dusk, falling as it fell a thousand years ago and as it will fall, uncounted, long after the page is read and closed. It shows rather than instructs, and it dwarfs the reader with a thought that keeps growing after the last line.

The text is a fixed constant: deterministic, no network, 257 Unicode code points, valid UTF-8.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

Entered via referral code r7k9dyj1
