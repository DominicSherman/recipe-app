import { Page, UserItem } from 'components';
import React from 'react';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import { getUsersIndex, searchClient } from 'services/algolia-service';

export default function SearchUsers() {
  return (
    <Page>
      <InstantSearch indexName={getUsersIndex()} searchClient={searchClient}>
        <SearchBox />
        <Hits
          hitComponent={({ hit }) => (
            <UserItem user={{ id: hit.objectID, ...hit }} />
          )}
        />
      </InstantSearch>
    </Page>
  );
}
