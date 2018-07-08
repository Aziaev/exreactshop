import * as React from 'react';
import { Button } from 'react-materialize';
import { DESC } from '../constants/index';

/**
 * Кнопки сортировки в шапке таблицы
 *
 * @param props
 *  fieldName - название поля
 *  setSort - метод сортирующий по нажатому столбцу
 *  sortedBy - название столбца по которому отсортирована таблица
 *  sortOrder - порядок сортировки
 *
 * @returns - рендерит кнопку сортировки
 */
export default function ( props: any ) {
  const { fieldName, setSort, sortedBy, sortOrder } = props;
  return (
    <th data-field={fieldName}>
      <Button
        flat
        onClick={() => setSort( fieldName )}
        disabled={!setSort}
      >
        {fieldName} {sortedBy === fieldName &&
      <span>
            {sortOrder === DESC ? <span>&#x25BC;</span> : <span>&#x25B2;</span>}
          </span>
      }
      </Button>
    </th>
  );
}
