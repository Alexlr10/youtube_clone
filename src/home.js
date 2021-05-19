import React from 'react'
import {
    makeStyles, AppBar, Toolbar, IconButton, Button,
    Drawer, ListItem, ListItemIcon, ListItemText, List, Divider, Box, Typography, ListSubheader
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AccountCircle, AddCircle, Apps, Notifications, VideoCall, VideoLibrary } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    MenuIcon: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    icons: {
        paddingRight: theme.spacing(2)
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 25,
    },
    grow: {
        flexGrow: 1
    },
    ListItem: {
        paddingBottom: 4,
        paddingTop: 4,
    },
    listItemText: {
        fontSize: 14
    },
    subheader :{
        textTransform: 'uppercase'
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.MenuIcon} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <img src="./images/preto.png" alt="logo" className={classes.logo}></img>
                    <div className={classes.grow} />
                    <IconButton className={classes.icons} color="inherit" >
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit" >
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit" >
                        <Notifications />
                    </IconButton>
                    <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary"> Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>

                    <List>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Início'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>{<Whatshot />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Em alta'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Inscrições'}
                            />
                        </ListItem>
                    </List>
                    <Divider />

                    <List>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <VideoLibraryIcon />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Biblioteca'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <History />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Histórico'}
                            />
                        </ListItem>
                    </List>
                    <Divider />

                    <Box p={5}>
                        <Typography variant='body2'>
                            Faça login para curtur vídeos, comentar e se inscrever.
                </Typography>
                        <Box mt={2}>
                            <Button
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircle />}
                            >
                                Fazer login
                  </Button>
                        </Box>
                    </Box>
                    <Divider />

                    <List
                        component='nav'
                        aria-labelledby='nested-list-subheader'
                        subheader={
                            <ListSubheader
                                component='div'
                                id='nested-list-subheader'
                                className={classes.subheader}
                            >
                                O Melhor do youtube
                  </ListSubheader>
                        }
                    >
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Música'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Esportes'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Jogos'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Filmes'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Notícias'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Ao vivo'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Destaques'}
                            />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <AddCircle />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText,
                                }}
                                primary={'Videos 360'}
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Procurar mais'}
                        />
                    </ListItem>
                    <Divider />


                </div>
            </Drawer>
        </div>
    )
}

export default Home;