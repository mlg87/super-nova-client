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
  },
  leftSide: {
    marginLeft: '45px'
  },
  rightSide: {
    marginLeft: 'auto',
    marginRight: '45px'
  }
}

const ReservationFooter = (props) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSide}>
        <h4 style={styles.header}>My Reservation</h4>
      </div>
      <div style={styles.rightSide}>
        <ReservationNav />
      </div>
    </footer>
  )
}

export default connect(
  mapStateToProps
)(ReservationFooter)
