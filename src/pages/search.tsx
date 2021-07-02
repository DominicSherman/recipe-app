import { Page } from 'components';
import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { getRecipesIndex, searchClient } from 'services/algolia-service';

export default function Search() {
  return (
    <Page>
      <InstantSearch indexName={getRecipesIndex()} searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </Page>
  );
}
