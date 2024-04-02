import { SearchClient } from "algoliasearch";
import algoliasearch from "algoliasearch/lite";

export const indexName = "react-typescript-style-guild";

const algoliaClient = algoliasearch(
  "5FAZAW5WXJ",
  "33c3cbb33509a3db3c5db8de021379de"
);

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
