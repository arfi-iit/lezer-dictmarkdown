import { styleTags, tags as t } from "@lezer/highlight";

export const dictMarkdownHighlighting = styleTags({
  Text: t.content,
  Bold: t.strong,
  Italic: t.emphasis,
  Ref: t.link,
  Spaced: t.monospace,
  Subscript: t.compareOperator,
  Superscript: t.arithmeticOperator,
});
