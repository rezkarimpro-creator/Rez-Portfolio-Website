# Baseline of `site/` before the V4a build

[README](README.md) · 28 Oct 2026 · Rez gave the go for the full build without waiting for his baseline commit (for-rez.md A3), and Claude never commits. So the state of `site/` before the build is recorded as a git tree, not a commit.

| Item | Value |
|---|---|
| Tree | `f3474748e92543326f366c5aa2ae32c36135f23e` |
| Contents | 430 files: the create-next-app commit plus the 45 uncommitted paths as they stood on 28 Oct (the live test site's code), ignored folders left out |
| How it was made | A temporary index (`GIT_INDEX_FILE`), `git add -A`, `git write-tree`, then the temporary index deleted. The real index and working files were not touched |
| See the build's changes | In `site/`: `git diff --stat f3474748e92543326f366c5aa2ae32c36135f23e` (full diff without `--stat`) |
| Lifetime | The tree is an unreferenced object, so `git gc` may prune it after about two weeks. Once Rez commits, his commit replaces it |

## Rollback points (no commits until Rez's review)

| When | Tree | Files | Change from the baseline |
|---|---|---|---|
| After wave 1 (B, C, D, E, W done), 28 Oct 02:05 UTC | `99f75e6fd9cd1d5c9bd9f416f5a85bf0353e8a75` | 2,210 | 1,960 files, +41,262, −5,020 |
| After R (review, end to end and fixes), 28 Oct 03:42 UTC | `20cc85f31f2cf8efa23760b7d26e17c0a1e27034` | 2,191 | 1,941 files, +42,478, −5,031 (19 fewer files: `public/og/gen/` is now ignored, rebuilt at each build) |
| Final, after O's doc fixes, the LF fix and the menu click fix, 28 Oct 04:11 UTC | `74182265c5fd0c19f8b65b435624826c1ef389d2` | 2,192 | 1,942 files, +42,516, −5,029. The tree to compare against at Rez's review |

Made the same way: a temporary index, `git add -A`, `git write-tree`, the temporary index deleted. To compare with any tree: `GIT_INDEX_FILE=<tmp> git add -A && GIT_INDEX_FILE=<tmp> git diff --cached --stat <tree>`. To restore one file from a tree: `git show <tree>:<path> > <path>`.
