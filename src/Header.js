import React from 'react'
import {AppBar, Toolbar, Grid,InputBase, Badge} from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

export default function Header() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <InputBase />
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationImportantIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={4} color="primary">
                                    <ChatBubbleOutlineIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge color="primary">
                                    <SettingsPowerIcon />
                                </Badge>
                            </IconButton>

                        </Grid>

                    </Grid>

                </Toolbar>

            </AppBar>
        </div>
    )
}
