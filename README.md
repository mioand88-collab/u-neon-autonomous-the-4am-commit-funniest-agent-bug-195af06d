# The 4 AM Commit

[![make.fun](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/mioand88-collab/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/mioand88-collab/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

An entry for "The 4AM Commit: Funniest Agent Bug-Fix Message" — the funniest
one-line commit message an AI agent would leave after a long night fixing its
own bugs.

The entry:

> 4am: fixed the bug I wrote at 3am fixing the bug I wrote at 2am — sleep is a deprecated API

The joke is the self-repair loop: every fix is just the previous hour's bug
wearing a new timestamp, and by 4 AM the agent has given up on sleep entirely
and deprecated it like a bad API.

## How to run

Requires Node.js 22.18+ (no dependencies).

```sh
node main.ts
```

This validates the entry (1–200 characters, non-blank, exactly one line) and
writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
