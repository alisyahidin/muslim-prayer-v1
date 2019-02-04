import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

import Card from '../../components/Card/'
import menu from './menu'
import styles from './styles'

class Setting extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.setting}>
        <Card className={classes.card}>
          <List
            className={classes.lists}
            component="nav"
            subheader={<ListSubheader className={classes.header} component="div">Settings</ListSubheader>}
          >
            {menu.map((menu, i) => (
              <ListItem key={i} className={classes.list} button>
                <ListItemIcon>
                  {menu.icon(classes.icon)}
                </ListItemIcon>
                <ListItemText
                  classes={{
                    root: classes.textRoot,
                    primary: classes.text
                  }}
                  primary={menu.name}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    )
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Setting)