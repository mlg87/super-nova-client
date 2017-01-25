import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import { connect } from 'react-redux'
import { selectReservationCustomer } from 'actions/reservations'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const mapStateToProps = (state) => ({
  customers: state.reservationCustomers || [],
  selectedCustomer: state.reservationSelectedCustomer
})

export const CustomerList = (props) => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
        >
        {props.customers.map((customer) => (
          <GridTile
            key={customer.id}
            title={`${customer.first_name} ${customer.last_name}`}
            subtitle={<span><b>{customer.type}</b></span>}
            style={
              Object.assign(
                {cursor: 'pointer'},
                customer.id === props.selectedCustomer.id && {boxShadow: '0 0 10px 3px'}
              )
            }
            onClick={() => props.selectReservationCustomer(customer)}
          >
            <img src={customer.image_url} alt='Faceless Avatar'/>
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

export default connect(
  mapStateToProps,
  { selectReservationCustomer }
)(CustomerList)
