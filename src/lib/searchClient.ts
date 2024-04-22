import { SearchClient } from "algoliasearch";
import algoliasearch from "algoliasearch/lite";

export const indexName = "react-typescript-style-guide";

const appId = import.meta.env.VITE_ALGOLIA_APP_ID;
const apiKey = import.meta.env.VITE_ALGOLIA_API_KEY;

const algoliaClient = algoliasearch(appId, apiKey);

export const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params?.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: "",
          params: "",
        })),
      });
    }

    return algoliaClient.search(requests);
  },
} as SearchClient;
