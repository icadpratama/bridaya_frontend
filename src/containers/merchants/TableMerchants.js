import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";

import data from "../../data/products";

const dataTableColumns = [
    {
        Header: "Name",
        accessor: "title",
        Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
        Header: "Email",
        accessor: "sales",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Contact",
        accessor: "stock",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Address",
        accessor: "category",
        Cell: props => <p className="text-muted">{props.value}</p>
    }
];

export const TableMerchants = props => {
    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle>
                    <IntlMessages id="table.merchants" />
                </CardTitle>
                <ReactTable
                    data={data}
                    columns={dataTableColumns}
                    defaultPageSize={5}
                    filterable={true}
                    showPageJump={true}
                    PaginationComponent={DataTablePagination}
                    showPageSizeOptions={true}
                />
            </CardBody>
        </Card>
    );
};
