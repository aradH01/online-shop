import {IColumn} from '../HorizontalTable';
import {TableRowCell} from './TableRowCell';
import styled from '@emotion/styled';
import {useState} from "react";

interface ITableRow<T> {
    data: T[];
    columns: IColumn<T>[];
    onChange?: (rowIndexes: number[]) => void
}

const Row = styled.tr`
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({theme}) => theme.components.tableBorder};
  }

  &[data-active="true"] {
    box-shadow: inset 0px 22px 15px -15px rgba(0, 0, 0, 0.48), inset 0px -22px 15px -15px rgba(0, 0, 0, 0.48);
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }
`;

export const TableRow = <T extends object>({columns, data, onChange}: ITableRow<T>) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const onClickRow = (index: number) => {
        const rows = selectedRows.includes(index) ? selectedRows.filter(item => item !== index) : selectedRows.concat([index])
        setSelectedRows(rows)
        onChange?.(rows)
    }
    return (
        <>
            {data.map((item, itemIndex) => (
                <Row className="transition-all" key={`table-body-${itemIndex}`}
                     data-active={selectedRows.includes(itemIndex)}
                     //onClick={() => onClickRow(itemIndex)}
                >
                    {columns.map((column, columnIndex) => (
                        <TableRowCell
                            key={`table-row-cell-${columnIndex}`}
                            item={item}
                            column={column}
                        />
                    ))}
                </Row>
            ))}
        </>
    );
};
