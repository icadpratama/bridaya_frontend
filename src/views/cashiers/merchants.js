import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import {
    TableMerchants
} from "../../containers/merchants/TableMerchants";

export default class Merchants extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.merchant-list" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>

                <Row>
                    <Colxx xxs="12">
                        <h3 className="mb-4">
                            <IntlMessages id="table.merchants" />
                        </h3>
                    </Colxx>

                    <Colxx xxs="12">
                        <TableMerchants />
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}
