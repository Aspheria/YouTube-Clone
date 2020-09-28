import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
  
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useTheme, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
    overflow: 'hidden',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader:{
    textTransform: "uppercase",
  }
}));

const videos = [ 
  {
    id: 1,
    title:
    'Alhambra no Aoi Bin - Yoshiko Sai (Taiji no Yume 1977)',
    channel: ' Kasus Belly Musyk',
    views: '866 visualizacões',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb.png',
  },
  {
    id: 2,
    title:
    'PESSOAS QUE ESTÃO EM 2077',
    channel: 'Desenhos P*tos',
    views: '286.771 visualizacões',
    date: 'há 5 meses',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb2.png',
  },
  {
    id: 3,
    title:
    'Clone do YouTube em React',
    channel: 'Dev',
    views: '300.771 visualizacões',
    date: 'há 9 meses',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb3.png',
  },
  {
    id: 4,
    title:
    'Another 1 Hour of 60s Brazilian Doomer Music (Part 2) [REUPLOAD]',
    channel: 'Vlaspatta Karamazov',
    views: '300 visualizacões',
    date: 'há 2 meses',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb4.png',
  },
  {
    id: 5,
    title:'lofi hip hop radio - beats to relax/study to',
    channel: 'ChilledCow',
    views: '900.698 visualizacões',
    date: 'há 2 meses',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb5.png',
  },
  {
    id: 6,
    title:'The Smiths - How Soon Is Now? (Official Music Video)',
    channel: 'The Smiths',
    views: '18 mi de visualizacões',
    date: 'há 6 anos',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb6.png',
  },
  {
    id: 7,
    title:'Um Girassol Da Cor Do Seu Cabelo',
    channel: 'Lo Borges',
    views: '878.077 de visualizacões',
    date: 'há 7 anos',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb7.png',
  },
  {
    id: 8,
    title:'Lofi Para Webchurrasco Vol. 1 [jdutra remix]',
    channel: 'jdutra remix',
    views: '217.539 de visualizacões',
    date: 'há 2 meses',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb8.png',
  },
  {
    id: 9,
    title:'Молчат Дома (Molchat Doma) - Судно (Sudno)',
    channel: 'Судно',
    views: '9.152.836 de visualizacões',
    date: 'há 3 anos',
    avatar: '/images/avatar.jpeg',
    thumb: 'images/thumb9.png',
  },
]

function Home({darkMode, setDarkMode}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.MenuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />

          </IconButton>
          <img 
          src={theme.palette.type === 'dark' 
            ? "/images/branco.png" 
            :'images/preto.png' 
          } alt="logo" 
          className={classes.logo} />
          
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={setDarkMode} 
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />

          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>

          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button
            startIcon={<AccountCircle />}
            variant='outlined'
            color='secondary'
          >
            Fazer Login
        </Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>
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
                <ListItemIcon>{< HomeIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Início'}
                />
              </ListItem>

              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< WhatshotIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Em alta'}
                />
              </ListItem>

              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Inscrições'}
                />
              </ListItem>
            </List>
            <Divider />

            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Biblioteca'}
                />
              </ListItem>

              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< HistoryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Histórico'}
                />
              </ListItem>

              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Inscrições'}
                />
              </ListItem>
            </List>
            <Divider />
            <Box p={7}>
              <Typography variant='body2' >
                Faca login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<AccountCircle />}
                >
                  Fazer Login
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
                    O Melhor do YouTube
                  </ListSubheader>
                }
              >
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Música'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Esportes'}
                />
              </ListItem>
              
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Jogos'} 
                />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Filmes'} 
                />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Notícias'} 
                />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Ao vivo'} 
                />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Aprender'} 
                />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Vídeos do momento'} 
                />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{< AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  classes={{
                  primary: classes.listItemText
                  }} 
                  primary={'Vídeo em 360'} 
                />
                </ListItem>
                  </List>
          </div>
        </Drawer>
        </Hidden>
        
    
      <Box p={8}>
        <Toolbar />
        <Typography
          variant='5'
          color='textPrimary'
          style={{ fontWeight: 600}}
        >
          Recomendados
        </Typography>

        <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid lg={3} md={4} sm={6} xs={12} item>
                <Box>
                  <img style={{width: '100%'}}
                  alt={item.title}
                  src={item.thumb}
              />
                    <Typography   
                      style={{ fontWeight: 600}}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography
                    variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date} `}
                    </Typography>
                  </Box>
                </Grid>
              ))
            }

        </Grid>
      </Box>
    </Box>
    </div>
  );
}

export default Home;