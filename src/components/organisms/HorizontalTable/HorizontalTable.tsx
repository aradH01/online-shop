import styled from '@emotion/styled';
import React, {ComponentProps} from 'react';
import {TableHeader} from './components/TableHeader';
import {TableRow} from './components/TableRow';
import {AvailableIcons} from "@/components/atoms/Icon";

export interface IColumn<T> {
    key: string | string[];
    title: string;
    width?: string;
    icon?: AvailableIcons
    // eslint-disable-next-line no-unused-vars
    render?: (column: IColumn<T>, item: T) => React.ReactNode;
}

export interface IHorizontalTable<T> {
    columns: IColumn<T>[];
    data: T[];
    className?: string;
    onChange?: ComponentProps<typeof TableRow>["onChange"]
}

const Table = styled.table`
  /* max-width: 66.37rem; */
  width: 100%;
  border-radius: 8px;
  border-collapse: collapse;
  background-color: transparent;
`;

export const HorizontalTable = <T extends object>({
                                                      columns,
                                                      data,
                                                      className,
                                                      onChange,
                                                  }: IHorizontalTable<T>) => {
    return (
        <>
            <Table className={className}>
                <thead>
                <TableHeader columns={columns}/>
                </thead>
                <tbody>
                <TableRow onChange={onChange} data={data} columns={columns}/>
                </tbody>
            </Table>
        </>
    );
};
