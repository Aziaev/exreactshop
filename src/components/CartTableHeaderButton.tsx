import * as React from 'react';
import { Button } from 'react-materialize';
import { ASC } from '../constants/index';

export default function (props: any) {
  const { fieldName, setSort, sortedBy, sortOrder } = props;
  return (
    <th data-field={fieldName}>
      <Button
        flat
        onClick={() => setSort(fieldName)}
        disabled={!setSort}
      >
        {fieldName} {sortedBy === fieldName &&
          <span>
            {sortOrder === ASC ? <span>&#x25BC;</span> : <span>&#x25B2;</span>}
          </span>
        }
      </Button>
    </th>
  );
}
