# Renegade Publishing Queue

This folder is the contract between writing and publishing. If an asset isn't a file in here with `status: approved`, it doesn't get published. No session should dig through old chats to figure out what was approved.

Astro ignores this folder, so nothing in here appears on the site. (The repo is public, though, so anything in here is technically readable before it goes live.)

## One file per asset

`queue/RC-011-review-requests.md`. The ID is `RC-` plus the Content Matrix row number, so every asset traces back to its source idea. Off-matrix ideas start at `RC-500`.

Each file carries its whole package: the blog article (the master), the email, and one post per social platform. Start from `_TEMPLATE.md`.

## Statuses

| Status | Meaning | Who moves it here |
|---|---|---|
| `drafted` | Claude wrote the full package | Claude |
| `revise` | Darin wants changes (notes go in `## Notes`) | Darin |
| `approved` | Cleared to publish as written | Darin, only |
| `scheduled` | Blog committed with a future date; posts and email scheduled in HighLevel | Claude |
| `live` | Everything has fired; URLs recorded | Claude |
| `winner` | Beat the bar in the weekly review; gets multiplied | Claude flags, Darin confirms |
| `parked` | Not now | Anyone |

Each social slot and the email also carry their own `status` (`pending`, `scheduled`, `live`, `failed`), because one channel can fail while the others go through.

## Who does what

**Claude does without asking:**
- Picks P1 ideas from the Content Matrix and writes full packages as `drafted`.
- Runs the style check (`docs/project/WRITING_STYLE.md`), including the banned-phrase list.
- Fills in metadata, slugs, CTAs, and the posting schedule.
- After approval, prepares the blog file and the HighLevel payloads.
- Writes back IDs and URLs, and pulls performance numbers during the weekly review.

**Darin approves:**
- Every asset, before it moves to `approved`. In a writing session, "approve 11, 23, 41" is enough.
- The batch of HighLevel writes. The connection asks for each one, so we do them together in one sitting.
- Every email campaign. Email can't be unsent.
- Anything that makes a specific claim about pricing, results, or a customer.
- Pushes to `main`, because a push to `main` is a live deploy.

## Routing rules

1. **Blog first.** The article goes into `src/content/blog/<slug>.md` with `pubDate` at 6:00 AM Mountain on its publish day. The daily build (`.github/workflows/daily-publish.yml`) makes it live by about 7:15 AM MT.
2. **Anything that links to the blog is scheduled after 8:00 AM MT** on or after that day, so the link never points to a 404.
3. **Images:** every post gets an auto-generated card at `https://gorenegades.com/og/<slug>.png`. That covers Instagram's image requirement without design work. Custom images are optional.
4. **At most two posts per account per day.**
5. **No identical copy across lanes.** When a piece goes to both, the Founder version tells the story and the Renegades version teaches the takeaway.
6. **Academy page gets Academy and mortgage-broker content only.** Parked pages get nothing.
7. **Email goes out on weekdays only, and at most once a day.**
8. **CTA links:** Buy Renegade CRM → `https://gorenegades.com/crm`. Join Community → `https://community.gorenegades.com`. Power Hour → TBD (Darin to supply the registration URL).

## The daily grid (about 10 publishing events from 2 assets)

Asset A is today's blog article. Asset B is yesterday's article, reused in the other lane or at a different time of day.

| Time (MT) | Channel | Asset |
|---|---|---|
| 6:00 | Blog | A |
| 8:15 | LinkedIn: Darin | A |
| 8:30 | Facebook: Darin Rhodes | A |
| 9:00 | Email (weekdays, once set up) | A |
| 11:30 | Instagram: darinrhodes | A |
| 12:00 | LinkedIn: Marketing Renegades page | B |
| 12:30 | Facebook: Marketing Renegades | B |
| 15:00 | Instagram: marketing_renegades | B |
| 17:30 | Facebook: Marketing Renegades | A (Renegades version) |
| 19:00 | Facebook: Darin Rhodes | B |

Ten strong packages written in one day covers five weekdays of this grid. That's the leverage: one writing day produces a week of posts.

## HighLevel accounts (Renegade Academy sub-account `752TznWg3s9PT7P486mf`)

Names below are the current Facebook names as of 2026-09-30. HighLevel may still show older ones until the pages are reconnected; the account ID is what counts.

**Founder lane:** first-person stories, opinions, lessons.

| Key | Platform | Name | Account ID |
|---|---|---|---|
| `fb-darin` | Facebook | Darin Rhodes | `641daa50954f272fb6712d24_752TznWg3s9PT7P486mf_1671233902888533_page` |
| `ig-darin` | Instagram | darinrhodes | `641daa768807505960cda8a4_752TznWg3s9PT7P486mf_17841401268080505` |
| `li-darin` | LinkedIn | Darin Rhodes (profile) | `641daab38807500c7fcda8b6_752TznWg3s9PT7P486mf_sr6Wb3kJWy_profile` |

**Renegades lane:** how-tos, Renegade CRM, community.

| Key | Platform | Name | Account ID |
|---|---|---|---|
| `fb-renegades` | Facebook | Marketing Renegades (facebook.com/nofearmarketing) | `641daa50954f272fb6712d24_752TznWg3s9PT7P486mf_100731298783330_page` |
| `ig-renegades` | Instagram | marketing_renegades | `641daa768807505960cda8a4_752TznWg3s9PT7P486mf_17841468839851807` |
| `li-renegades` | LinkedIn | Marketing Renegades (page) | `673fb0cd7d51af51ba218c4d_752TznWg3s9PT7P486mf_108772941_page` |

**Occasional:** Academy and mortgage-broker content only.

| Key | Platform | Name | Account ID |
|---|---|---|---|
| `fb-academy` | Facebook | Marketing Renegade Academy (facebook.com/nofearmarketingtoday) | `641daa50954f272fb6712d24_752TznWg3s9PT7P486mf_289618017568423_page` |

**Community:** every blog post also goes to the Renegade Academy group's Discussion / Q&A channel, posted as Darin, on its publish day, with a short intro and a discussion question.

| Key | Platform | Name | Account ID |
|---|---|---|---|
| `community-academy-qa` | Community | Renegade Academy, Discussion / Q&A | `673fafb578967c4ea82c00c3_752TznWg3s9PT7P486mf_692f625b54ad64beea55fbb9` |

**Post as:** HighLevel user `0bkjHSL1AEXPnFSJpJwU` (Darin, agency user). Pass it as both `userId` and `createdBy` on every post.

**Approvals:** posts are created as `scheduled` (not drafts), at least 8 hours ahead, so Darin can edit or delete them in Social Planner before they fire. Text-only posts must send `media: []`.

**Parked (don't post):** Renegade CRM on Facebook (`313498618522250`) and LinkedIn (`673fb0cd7d51af51ba218c4d_752TznWg3s9PT7P486mf_108763937_page`), Startup Lead Factory, Marketing is Easy, Easy 12 Step Marketing, Lead Generation Machine.

Routing: Darin says "founder," "Renegades," or "both." When he doesn't say, stories go to Founder, how-tos go to Renegades, and the strongest pieces go to both, with different copy per lane.

The LinkedIn connection expires on 2026-10-02 and needs reconnecting in Social Planner. Check token expiry in the monthly review.

HighLevel operations used: `create-post` (social, with `scheduleDate`), `create-email-campaign` followed by `schedule-campaign` (email), and `get-posts` (reading results back).

## The weekly review (Mondays, about 20 minutes)

1. Claude pulls last week's post stats from HighLevel and email stats from the campaigns.
2. It writes the numbers into each asset's `metrics` block and appends a line per asset to `SCOREBOARD.md`.
3. Winners are the top 20% of the week by engagement per reach, plus anything that produced a reply, booking, or signup. Claude flags them as `winner`.
4. Each winner gets a multiply list: a short video script, a Meta ad variant, a resend or second email angle, and a Power Hour topic.
5. What won shapes next week's pick from the Content Matrix. Lean into the pillar that's working, and still rotate through the rest so the full breadth of the product shows up.

## The whole workflow, start to finish

1. **Write (Darin, about 2 hours):** dictate, draft, or just say "write the next ten P1s."
2. **Package (Claude):** full packages land in `queue/` as `drafted`.
3. **Approve (Darin, about 15 minutes):** read them, then say "approve 11, 23" or "revise 41: less salesy."
4. **Load (together, one sitting):** Claude commits the blogs with future dates, pushes, then schedules the social posts and emails in HighLevel. You approve the batch.
5. **Review (Mondays):** scoreboard, winners, multiply.

The machine is these five steps. Resist adding more.
