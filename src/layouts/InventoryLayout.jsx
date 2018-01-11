import React, { Component } from 'react'
import { connect } from 'react-redux'
// components
import { Link } from 'react-router'
import Add from 'material-ui/svg-icons/content/add'
import FlatButton from 'material-ui/FlatButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Avatar from 'material-ui/Avatar'

import { inventoryGet, updateSelectedInventory } from 'actions/inventory'
import InventorySearch from 'components/InventorySearch'

// appearance
import { colors } from 'config/colors'

class InventoryLayout extends Component {

  componentWillMount() {
    const { inventoryGet } = this.props
    inventoryGet()
  }

  renderSubNavLinks() {
    let links = [
      {
        path: '/inventory/add',
        text: 'ADD',
        icon: () => <Add color={ colors.nav.inactiveText } />
      }
    ]


    const style_button = {
      height: '90%',
      color: colors.nav.inactiveText
    }

    return links.map((link) => {
      return (
        <Link to={ link.path } key={ link.path }>
          <FlatButton
            icon={ link.icon() }
            style={ style_button }
            label={ link.text }
            />
        </Link>
      )
    })
  }

  renderInventoryRows(inventory) {
    const { selectedInventoryId } = this.props
    const style_tableRow = (id) => ({
      cursor: id !== selectedInventoryId ? 'pointer' : 'not-allowed',
      color: colors.nav.inactiveText
    })

    return inventory.map((item, i) => {
      return (
        <TableRow
          key={ item.item_id }
          style={ style_tableRow(item.item_id) }
          selectable={ item.item_id !== selectedInventoryId}
          selected={ item.item_id === selectedInventoryId }
        >
          <TableRowColumn>
            <Avatar src={item.image_url} />
          </TableRowColumn>
          <TableRowColumn>
            {item.type}
          </TableRowColumn>
          <TableRowColumn>
            {item.model}
          </TableRowColumn>
          <TableRowColumn>
            {item.brand}
          </TableRowColumn>
          <TableRowColumn>
            {item.gender}
          </TableRowColumn>
          <TableRowColumn>
            {item.size}
          </TableRowColumn>
        </TableRow>
      )
    })
  }

  render() {
    const {
      inventory,
      children,
      updateSelectedInventory
    } = this.props

    const style_subNav = {
      height: '60px',
      borderBottom: `1px solid ${colors.nav.linkActiveAndBorder}`,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      paddingRight: '20px'
    }

    return (
      <div>
        <div style={ style_subNav }>
          { this.renderSubNavLinks() }
        </div>
        <InventorySearch />
        <Table multiSelectable={ false } onRowSelection={ updateSelectedInventory }>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false } style={{ backgroundColor: colors.table.header }}>
            <TableRow>
              <TableHeaderColumn>IMAGE</TableHeaderColumn>
              <TableHeaderColumn>TYPE</TableHeaderColumn>
              <TableHeaderColumn>MODEL</TableHeaderColumn>
              <TableHeaderColumn>BRAND</TableHeaderColumn>
              <TableHeaderColumn>GENDER</TableHeaderColumn>
              <TableHeaderColumn>SIZE</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={ false } displayRowCheckbox={ false }>
            { this.renderInventoryRows(inventory) }
          </TableBody>
        </Table>
        { children }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inventory: state.inventory.inventory,
    selectedInventoryId: state.inventory.selectedInventoryId
  }
}

export default InventoryLayout = connect(mapStateToProps, {
  inventoryGet,
  updateSelectedInventory
})(InventoryLayout)
