import React from 'react'
import { connect } from 'react-redux'
import ReservationNav from 'components/ReservationNav'

const mapStateToProps = (state) => ({

})

const styles = {
  footer: {
    width: '100%',
    height: '45px',
    backgroundColor: '#4e4e4e',
    position: 'absolute',
    bottom: 0,
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    fontWeight: '300',
    margin: '0',
  }
}

const ReservationFooter = (props) => {
  return (
    <footer style={styles.footer}>
      <h4 style={styles.header}>My Reservation</h4>
      <div style={{marginLeft: 'auto'}}>
        <ReservationNav />
      </div>
    </footer>
  )
}

export default connect(
  mapStateToProps
)(ReservationFooter)
