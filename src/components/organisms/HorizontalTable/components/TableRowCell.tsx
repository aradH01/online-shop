import {IColumn} from '../HorizontalTable';
import styled from '@emotion/styled';

interface ITableRowCell<T> {
    item: T;
    column: IColumn<T>;
}

const Cell = styled.td`
  padding: 1rem 0;
 

  &:first-of-type > p {
    max-width: 9.5rem;
  }

  button {
    margin: 0 auto;
  }

  .action-buttons {
    display: flex;
    margin: 0 auto;
    justify-content: center;

    button {
      height: 32px !important;
      margin: 0 !important;
    }

    button:first-of-type {
      margin-right: 1rem !important;
    }
  }
`;

export const TableRowCell = <T extends object>({
                                                   item,
                                                   column,
                                               }: ITableRowCell<T>) => {
    // const value = parseValue(column.key, item);
    return <Cell>{column.render && column.render(column, item)}</Cell>;
};
