import styled from '@emotion/styled';
import {IColumn} from '../HorizontalTable';
import {Icon} from "@/components/atoms/Icon";

interface ITableHeader<T> {
    columns: IColumn<T>[];
}

type CellType = {
    width?: string;
};
const Cell = styled.th<CellType>`
  width: ${({width}) => width};
  border-bottom: 1px solid ${({theme}) => theme.font.primary};
  padding-bottom: 1.6rem;
  padding-top: 1.56rem;
  color: ${({theme}) => theme.font.primary};
`;

export const TableHeader = <T extends object>({columns}: ITableHeader<T>) => {
    return (
        <tr>
            {columns.map((column) => (
                <Cell key={column.key.toString()}>
                  <span className="flex justify-center items-center gap-[6px]">
                        <Icon name={column.icon || "Empty"} className="w-[24px] h-[24px] [&>*]:stroke-[#6E6E73]"/>
                      {column.title}
                  </span>
                </Cell>
            ))}
        </tr>
    );
};
