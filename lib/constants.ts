import { AlgoliaSearchIndex } from '@ircsignpost/signpost-base/dist/src/search-common';
import { LatLngExpression } from 'leaflet';

export const SITE_TITLE = 'InfoDigna';

export const COUNTRY_ID = 26;

export const MAP_DEFAULT_COORDS: LatLngExpression = [25.5428, -103.3496];

// Cache statically generated pages for 1 hour. The timeout was chosen
// arbitrarily. Our website has static, non-urgent resources, so we probably do
// not need to serve content faster.
export const REVALIDATION_TIMEOUT_SECONDS: number = 1 * 60 * 60;

// The "about us" article ID.
export const ABOUT_US_ARTICLE_ID: number = 6592468755101;

// The information hierary of the website.
// Set to true for the category -> section -> article hierarchy, similar to that of United for Ukraine.
// Set to false for the "information" -> category -> article hierarchy, similar to that of Beporsed.
//
// TODO
export const USE_CAT_SEC_ART_CONTENT_STRUCTURE = true;

// A mapping from category ID to a Material icon for that category.
export const CATEGORY_ICON_NAMES: { [key: string]: string } = {
  '123': 'home_work', // Placeholder
};

// A mapping from section ID to a Material icon for that section.
export const SECTION_ICON_NAMES: { [key: string]: string } = {
  '360012506633': 'favorite',
  '360011370294': 'rebase_edit',
  '1500000297781': 'security',
  '1500000316262': 'diversity_3',
  '1500000297761': 'campaign',
  '1500000297741': 'assignment_return',
  '1500000297721': 'language',
  '360011370234': 'flag',
  '1500000316222': 'coronavirus',
  '1500000297701': 'euro',
  '1500000297681': 'flag_circle',
  '15400470228765': 'follow_the_signs', // Asilo y migracion
  '15400400520349': 'favorite', // Salud
  '15400444012061': 'info',
  '15400475744413': 'book',
};

// A list of category IDs that the site should not display.
export const CATEGORIES_TO_HIDE: number[] = [1500000022641];

export const MENU_CATEGORIES_TO_HIDE: number[] = [
  5388415886487, 5451758139293, 5388415940887, 4421271418775, 4420351027479,
];

// A map from a locale code to Zendesk locale id used for dynamic content translations.
// https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/
// Keep in sync with locales configured in /next.config.js.
export const DYNAMIC_CONTENT_LOCALES: { [key: string]: number } = {
  es: 2,
};

export const ZENDESK_AUTH_HEADER = {
  Authorization: 'Bearer ' + process.env.ZENDESK_OAUTH_TOKEN,
};

export const GOOGLE_ANALYTICS_IDS = [
  process.env.NEXT_PUBLIC_GA_ID ?? '',
  process.env.NEXT_PUBLIC_GA4_ID ?? '',
];

// Algolia search app ID, Search API key and search index name:
// https://www.algolia.com/account/api-keys/
export const ALGOLIA_SEARCH_APP_ID = 'BWATZIXLX6';
export const ALGOLIA_SEARCH_API_KEY = '5ce4c0f27492db0d6e42fa948101e69c';
export const ALGOLIA_SEARCH_API_KEY_WRITE =
  process.env.ALGOLIA_SEARCH_API_KEY_WRITE ?? '';

// See README for more info on how to create indexes.
export const ALGOLIA_ARTICLE_INDEX_NAME = 'zendesk_signpost-mexico_articles';
export const ALGOLIA_QUERY_INDEX_NAME =
  'zendesk_signpost-mexico_articles_query_suggestions';

export const SEARCH_BAR_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_QUERY_INDEX_NAME,
};

export const SEARCH_RESULTS_PAGE_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_ARTICLE_INDEX_NAME,
};

export const DIRECTUS_AUTH_TOKEN = process.env.DIRECTUS_TOKEN ?? '';
export const DIRECTUS_COUNTRY_ID = 10;
export const DIRECTUS_INSTANCE = 'https://directus-irc.azurewebsites.net/';
