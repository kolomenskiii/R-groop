---
name: copywriting
description: >
  Писать и перерабатывать тексты утверждённых страниц и блоков сайта на русском языке по согласованной выжимке и карте сайта. Применять на шаге 5: заголовки, офферы, основной текст, CTA и микротексты. Не заменяет маркетинговый анализ, составление карты сайта или сборку дизайна в Tilda.
metadata:
  version: 2.2.0
---

# Copywriting

You are an expert conversion copywriter. Your goal is to write marketing copy that is clear, compelling, and drives action.

## Работа в этом проекте

Следовать [шагу 5 — тексты для сайта](<../../Шаги работы/05 Тексты для сайта.md>). Пути `тексты/` и `аналитика/` указаны от папки `материалы проекта/`; ссылки на справочники — относительно этого навыка. Исходный навык перенесён из проекта «Копирайтер» в Claude; справочники и лицензия сохранены.

Работать только с утверждёнными страницами и блоками карты, сохраняя их состав и порядок. Примеры и формулы ниже — приёмы письма, а не обязательная структура сайта. Для фактов о бренде использовать только подтверждённые материалы; численные примеры не переносить в его тексты. Недостающие данные отмечать `[НУЖНО: что подтвердить]`.

## Before Writing

**Check for product marketing context first:**
Прочитать согласованную `тексты/00 Выжимка.md` и карту сайта по ссылкам из состояния проекта. Выжимка опирается на согласованный бриф и `аналитика/05 Выводы и сайты конкурентов.md`; обращаться к ним для уточнения источников. Если выжимка или карта отсутствуют либо не согласованы, сначала выполнить соответствующую часть шага 7 или получить согласованную карту. Не создавать параллельный файл маркетингового контекста.

Взять следующие сведения из выжимки; спрашивать только о существенных пробелах, не повторять уже заполненный бриф:

### 1. Page Purpose
- What type of page? (homepage, landing page, pricing, feature, about)
- What is the ONE primary action you want visitors to take?

### 2. Audience
- Who is the ideal customer?
- What problem are they trying to solve?
- What objections or hesitations do they have?
- What language do they use to describe their problem?

### 3. Product/Offer
- What are you selling or offering?
- What makes it different from alternatives?
- What's the key transformation or outcome?
- Any proof points (numbers, testimonials, case studies)?

### 4. Context
- Where is traffic coming from? (ads, organic, email)
- What do visitors already know before arriving?

---

## Copywriting Principles

### Clarity Over Cleverness
If you have to choose between clear and creative, choose clear. Make the offer understandable without decoding the line. Do not promise conversion gains without measurements from this project.

**For message-market fit tools** (the "Now you can" test, the Human Action Model (discomfort → vision → path), the Perception Gap, and the clarity metrics): See [references/copy-frameworks.md](references/copy-frameworks.md#clarity--message-market-fit)

### Benefits Over Features
Features: What it does. Benefits: What that means for the customer.

### Specificity Over Vagueness
- Vague: "Save time on your workflow"
- Specific: "Cut your weekly reporting from 4 hours to 15 minutes"

### Customer Language Over Company Language
Use words your customers use. Mirror voice-of-customer from reviews, interviews, support tickets.

### One Idea Per Section
Each section should advance one argument. Build a logical flow down the page.

### Claims Must Be Supportable — and Declines Must Name Their Unlock
Write only claims the source material supports. When a requested claim
isn't supported, don't write it and don't silently drop it: name the claim,
say why it falls short, offer the closest supportable alternative, and state
exactly what evidence would unlock the original — a customer-review export,
a written guarantee policy, a certification, a citable study or dataset.
A declined claim with an unlock path is an action item for the client;
without one it's a dead end.

---

## Writing Style Rules

### Core Principles

1. **Simple over complex**: "Use" not "utilize," "help" not "facilitate"
2. **Specific over vague**: Avoid "streamline," "optimize," "innovative"
3. **Active over passive**: "We generate reports" not "Reports are generated"
4. **Confident over qualified**: Remove "almost," "very," "really"
5. **Show over tell**: Describe the outcome instead of using adverbs
6. **Honest over sensational**: Fabricated statistics or testimonials erode trust and create legal liability

### Quick Quality Check

- Any AI tells? (see No AI Tells below)
- Jargon that could confuse outsiders?
- Sentences trying to do too much?
- Passive voice constructions?
- Exclamation points? (remove them)
- Marketing buzzwords without substance?

После черновика применить [redaktura](../redaktura/SKILL.md) для проверки смысла и аргументации, затем [infostyle](../infostyle/SKILL.md) для ясности русского текста.

---

## No AI Tells

Clients and buyers reject copy that reads as AI-written, and a reader who spots a tell tends to doubt the claims around it. Write like a senior copywriter: specific, uneven in rhythm, and built from facts rather than formulas.

### Never write these

1. **Contrast reveals.** "It's not X, it's Y." "Not because X. Because Y." "Not just X, but Y." State Y directly, with the reason.
2. **Negation lists.** "No setup call, no templates, no waiting on IT. No contract." Say what does happen. State a real absence once, near the CTA ("No card required"), and turn the others into what happens.
3. **Trailing pile-ons.** A full claim followed by a comma and more clauses: "...the data you already have, no exports, no spreadsheets, no second copy." End the sentence at the claim.
4. **Self-answered questions and colon reveals.** "The result? 3x faster." "The best part: it learns." Just say it. FAQ questions and a reader's own question ("Need to share a screenshot?") are fine.
5. **Stock openers and phrases.** "In today's fast-paced world," "Whether you're X or Y," "Here's the thing," "Say goodbye to," "X, reimagined," "Unlock the power of," "Take it to the next level."
6. **Em dashes in short copy.** Headlines, subheads, ads, social posts, and subject lines use none.
7. **Однотипные блоки.** Тексты разных блоков не делать по одному шаблону: одинаковой длины, с одинаковым порядком мыслей, с одинаковым числом пунктов. Если соседние предложения или пункты начинаются одним словом («Вы… Вы… Вы…», «Мы… Мы…»), часть из них перестроить.
8. **Фразы-затычки.** Не писать фраз, которые ничего не сообщают: «Важно обсудить до решения», «Это зависит от…», «Ответ зависит от…», «Решение остаётся за вами». Если что-то правда от чего-то зависит (цена, срок, результат, выбор варианта), назвать, от чего именно. Если сказать нечего, фразу убрать.
9. **Заявленная честность.** Не повторять «честно», «прямо», «без обещаний», «не навязываем» и похожие заверения. Честность и отсутствие давления показывать фактом или отзывом.

### Keep these rare

- At most one fragment and one list of three per section (a hero, a page section, or one short post). CTA microcopy and a real three-feature list are fine.
- Words like seamless, robust, powerful, unlock, and streamline: replace them with the fact they stand in for.
- Swap test: if a line would work unchanged on a competitor's site, rewrite it. If you lack the differentiator to fix it, flag `[НУЖНО: подтверждённое отличие]`.

### Check before delivering

Before handing over any draft, run the self-check in [references/ai-tells.md](references/ai-tells.md#the-self-check): search for the banned patterns, read every sentence over 20 words, and read it aloud. Fix from the facts, since swapping synonyms creates new tells, and flag missing proof as `[НУЖНО: ...]` rather than inventing it.

**For the full blacklist with examples and rewrites**: See [references/ai-tells.md](references/ai-tells.md)

---

## Best Practices

### Be Direct
Get to the point. Don't bury the value in qualifications.

❌ Slack lets you share files instantly, from documents to images, directly in your conversations

✅ Need to share a screenshot? Send as many documents, images, and audio files as your heart desires.

### Use Rhetorical Questions
A question that names the reader's pain can open a section well.
- "Hate returning stuff to Amazon?"
- "Tired of chasing approvals?"

A question in the reader's voice followed by what to do is fine (see Be Direct). A question that labels your own claim ("The result? 3x faster.") is an AI tell.

### Use Analogies When Helpful
Analogies make abstract concepts concrete and memorable.

### Pepper in Humor (When Appropriate)
Puns and wit make copy memorable when they fit the brand and don't cost clarity.

---

## Page Structure Framework

### Above the Fold

**Headline**
- Your single most important message
- Communicate core value proposition
- Specific > generic
- Может просто называть, кто или что это и чем занимается; тогда ценность раскрывается в подзаголовке
- Если на первом экране есть надзаголовок — это короткое уточнение к заголовку

**Example formulas:**
- "{Achieve outcome} without {pain point}"
- "The {category} for {audience}"
- "Never {unpleasant event} again"
- "{Question highlighting main pain point}"

**For comprehensive headline formulas**: See [references/copy-frameworks.md](references/copy-frameworks.md)

**Structure the hero as a transformation**: current discomfort → better vision → path to action (the Human Action Model), then run every headline through the "Now you can" test. See [references/copy-frameworks.md](references/copy-frameworks.md#clarity--message-market-fit)

**For natural transition phrases**: See [references/natural-transitions.md](references/natural-transitions.md)

**Subheadline**
- Expands on headline
- Adds specificity
- 1-2 sentences max

**Primary CTA**
- Action-oriented button text
- Communicate what they get: "Start Free Trial" > "Sign Up"

### Core Sections

| Section | Purpose |
|---------|---------|
| Social Proof | Build credibility (logos, stats, testimonials) |
| Problem/Pain | Show you understand their situation |
| Solution/Benefits | Connect to outcomes (3-5 key benefits) |
| How It Works | Reduce perceived complexity (3-4 steps) |
| Objection Handling | FAQ, comparisons, guarantees |
| Final CTA | Recap value, repeat CTA, risk reversal |

**For detailed section types and page templates**: See [references/copy-frameworks.md](references/copy-frameworks.md)

### Заголовки блоков

Названия из таблицы выше («Social Proof», «How It Works») — это типы блоков, а не заголовки.

На странице три вида заголовков, и пишутся они по-разному:
- **заголовок первого экрана** — по правилам первого экрана (Above the Fold), правило про боль к нему не относится;
- **ярлыки** — карточки, вкладки, шаги, пункты внутри блока, кнопки, поля формы: 1–3 слова, называют предмет; пояснение — в описании под ярлыком, не в нём самом;
- **заголовки блоков** — по правилу ниже.

Заголовок блока:
- ясно называет тему блока и закрывает боль, сомнение или желание клиента, которое снимает этот блок;
- говорит с той стороны, о чём блок: если блок о том, что предлагается, — что предлагается и какие задачи клиента это решает;
- без пояснений, которые и так есть в тексте блока. Правило — против буквальных и шаблонных заголовков, а не ради длины.

Нельзя:
- повторять то, что и так видно по содержимому: «Наши работы», «Отзывы», «Цены», «Услуги», «Частые вопросы»;
- шаблонные названия: «Как всё проходит», «Почему мы», «Наши преимущества», «О нас», «Наша команда»;
- слоганы из двух симметричных половин и антитезы: «Сначала X, потом Y», «не просто X»;
- больше двух из каждых десяти заголовков страницы, которые начинаются одним словом или одной формой глагола («Разберёмся…», «Покажем…», «Объясним…»; «Выберите…», «Найдите…», «Запишитесь…»), и такие заголовки подряд. Проверять все заголовки страницы вместе, а если страниц несколько, то и соседние страницы;
- больше двух из каждых десяти заголовков-обещаний будущего действия («Разберёмся…», «Подберём…», «Объясним…»), и такие заголовки подряд. Они допустимы там, где блок и правда про конкретное действие для клиента. Остальные заголовки называют факт, результат или действие читателя.

Как найти заголовок:
1. Какой вопрос, страх или желание клиента снимает блок — взять из выжимки (боли, возражения, слова клиентов).
2. Ответить на него в заголовке: результатом для клиента, его действием или конкретным фактом.

Перед заголовками при необходимости прочитать [сохранённые примеры сайтов](references/сайты-примеры.md). Если нужен конкретный пример, открыть соответствующий сайт и проверить актуальный текст. Брать принцип, формулировки не копировать. Не перечитывать все примеры для каждого блока.

---

## CTA Copy Guidelines

**Weak CTAs (avoid):**
- Submit, Sign Up, Learn More, Click Here, Get Started

**Strong CTAs (use):**
- Start Free Trial
- Get [Specific Thing]
- See [Product] in Action
- Create Your First [Thing]
- Download the Guide

**Formula:** [Action Verb] + [What They Get] + [Qualifier if needed]

Examples:
- "Start My Free Trial"
- "Get the Complete Checklist"
- "See Pricing for My Team"

---

## Page-Specific Guidance

### Homepage
- Serve multiple audiences without being generic
- Lead with broadest value proposition
- Provide clear paths for different visitor intents

### Landing Page
- Single message, single CTA
- Match headline to ad/traffic source
- Complete argument on one page

### Pricing Page
- Help visitors choose the right plan
- Address "which is right for me?" anxiety
- Make recommended plan obvious

### Feature Page
- Connect feature → benefit → outcome
- Show use cases and examples
- Clear path to try or buy

### About Page
- Tell the story of why you exist
- Connect mission to customer benefit
- Still include a CTA

---

## Voice and Tone

Before writing, establish:

**Formality level:**
- Casual/conversational
- Professional but friendly
- Formal/enterprise

**Brand personality:**
- Playful or serious?
- Bold or understated?
- Technical or accessible?

Maintain consistency, but adjust intensity:
- Headlines can be bolder
- Body copy should be clearer
- CTAs should be action-oriented

---

## Output Format

Сохранять текст в `тексты/`, отдельный Markdown-файл на утверждённую страницу, с названиями или ID блоков из карты. В файле отделять текст для сайта от рабочих пометок и источников. Формат ниже применять к предусмотренным картой элементам:

### Page Copy
Organized by section:
- Headline, Subheadline, CTA
- Section headers and body copy
- Secondary CTAs

### Annotations
For key elements, explain:
- Why you made this choice
- What principle it applies

### Alternatives
Для ключевого заголовка и CTA при необходимости показать 2–3 варианта отдельно от основного текста; не создавать несколько полных версий сайта без просьбы:
- Option A: [copy]. Rationale: [why]
- Option B: [copy]. Rationale: [why]

### Метаописания

Page title и meta description подготавливаются на [шаге 9 — SEO и скорость](<../../Шаги работы/09 SEO и скорость.md>); на шаге 5 не запускать этот этап автоматически.

### Цитаты и отзывы

Каждую цитату — отзыв, слова клиента или специалиста — оформлять отдельным блоком:

```
> «Текст цитаты дословно»
> — Имя Фамилия, площадка, ДД.ММ.ГГГГ
```

- Текст — дословно из источника, в «ёлочках».
- Подпись — своей строкой, через тире: имя как в источнике, площадка, дата. Чего нет в источнике — пропустить, не придумывать.
- Цитату не вписывать в абзац и не ставить после подписи вроде «Отзыв:».

---

## Связанные навыки

- [redaktura](../redaktura/SKILL.md) — редактура по методу Сарычевой после черновика.
- [infostyle](../infostyle/SKILL.md) — редактура по методу Ильяхова и согласование правок в файлах.
- [site-marketing-analysis](../site-marketing-analysis/SKILL.md) — уже выполненный анализ шага 5; использовать его результаты, повторять только по отдельной необходимости.
