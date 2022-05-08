import React from 'react';
import './App.css';
import { ContentPreview, Game, Notifications, Welcome } from './components';
import { Grid, Typography } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <Grid container spacing={2} padding={2} direction="row" justifyContent="center" alignItems="stretch" className='stretch'>
        <Grid item xs={12} md={6}><Welcome name={'אגם'} visit={'ד״ר גיא לוי'} /></Grid>
        <Grid item xs={12} md={6} alignContent="flex-end" textAlign="center" alignItems="flex-end" justifyContent="flex-end">
          <Typography variant='h1' component="div">
            ACS
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}><Game /></Grid>
        <Grid item xs={12} md={6}><ContentPreview /></Grid>
        <Notifications />
      </Grid>
    </div>
  );
}

export default App;
