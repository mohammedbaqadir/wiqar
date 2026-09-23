/**
 * Storefront search, small enough to run in the browser.
 *
 * Arabic has to be normalised before it can be matched: the same word is
 * written with different alefs, with or without tashkeel, and shoppers type
 * Arabic-Indic digits while the catalogue keeps Latin ones. The catalogue text
 * and the visitor's query both go through `normalize`, so the two always agree.
 */

const ARABIC_INDIC = '٠١٢٣٤٥٦٧٨٩';

export const normalize = (text: string): string =>
  text
    .replace(/[\u064B-\u0652\u0670]/g, '') // tashkeel
    .replace(/\u0640/g, '') // tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[٠-٩]/g, (digit) => String(ARABIC_INDIC.indexOf(digit)))
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

/** The text a product can be found by. */
export const searchText = (...parts: Array<string | null | undefined>): string =>
  normalize(parts.filter(Boolean).join(' '));

export interface SearchResult {
  matched: boolean;
  score: number;
}

/**
 * Every word in the query has to appear; a hit in the name counts for more than
 * one further down. `haystack` and `name` must already be normalised.
 */
export const scoreMatch = (haystack: string, name: string, query: string): SearchResult => {
  const tokens = normalize(query)
    .split(' ')
    .filter(Boolean);

  if (tokens.length === 0) return { matched: true, score: 0 };

  let score = 0;
  for (const token of tokens) {
    if (!haystack.includes(token)) return { matched: false, score: 0 };
    if (name.startsWith(token)) score += 4;
    else if (name.includes(token)) score += 3;
    else score += 1;
  }
  return { matched: true, score };
};
