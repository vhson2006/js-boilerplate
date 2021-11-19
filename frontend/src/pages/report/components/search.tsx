import React, { useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { PAGE_SIZE, FIRST_PAGE } from '../../../commons/config';
import { redeemAction } from '../../../actions/main';

const mapStateToProps = (state: any) => ({
  search: state.redeem.search,
});
const mapDispatchToProps = (dispatch: any) => ({
  searchRedeem: (params: any) => dispatch({ type: redeemAction.SAGA_GET_REDEEMS, value: params }),
});
const SearchComponent = (props: any) => {
  const { search, searchRedeem } = props;
  const newSearch = useRef(search);
  const searchHandler = () => {
    searchRedeem({ page: FIRST_PAGE, size: PAGE_SIZE, search: newSearch.current.value });
  }
  return (
    <Form.Group as={Row}>
      <Col sm={{ span: 6, offset: 2 }}>
        <FormattedMessage id="searchPlaceholder">
          {(msg) => <Form.Control ref={newSearch} placeholder={msg.toString()} defaultValue={search} />}
        </FormattedMessage>
      </Col>
      <Col sm={4}>
        <Button type="button" onClick={searchHandler}><FormattedMessage id="searchButton"/></Button>
      </Col>
    </Form.Group>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
