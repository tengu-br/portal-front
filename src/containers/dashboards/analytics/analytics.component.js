import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ECharts from './components/echarts-test/echarts.component';
import EChartAreaBasic from './components/echarts-area-basic/echarts.component'

import CardSimpleExample from './components/cards/card-simple-example';
import styles from './analytics.style';
import CardTwitter from './components/cards/card-twitter';
import EChartPrincipaisTemas from './components/echarts-principais-temas/echarts.component';
import EChartCitacao from './components/echarts-citacoes/echarts.component';
import EChartVolumeTemas from './components/echarts-volume-tema/echarts.component';

// import { Card } from '@material-ui/core';


// <Grid key={1} item xs={12} sm={12} md={8} className={classes.portalWidget}>
// <Typography variant="subheading" className={classes.portalWidgetHeading}>
//   Análise
// </Typography>
// <Paper className={classes.portalWidgetContent}>
//   <TabbedChartWidget />
// </Paper>
// </Grid>

// <Grid key={2} item xs={12} sm={12} md={4} className={classes.portalWidget}>
// <Typography variant="subheading" className={classes.portalWidgetHeading}>
//   Usuários Ativos
// </Typography>
// <Paper className={classes.portalWidgetContent}>
//   <ActiveUsersWidget />
// </Paper>
// </Grid>

// <Grid key={3} item xs={12} sm={12} md={4} className={classes.portalWidget}>
// <Typography variant="subheading" className={classes.portalWidgetHeading}>
//   Sessões por Aparelho
// </Typography>
// <Paper className={classes.portalWidgetContent}>
//   <DoughnutChartWidget />
// </Paper>
// </Grid>

// <Grid key={4} item xs={12} sm={12} md={8} className={classes.portalWidget}>
// <Typography variant="subheading" className={classes.portalWidgetHeading}>
//   Aquisição de clientes
// </Typography>
// <Paper className={classes.portalWidgetContent}>
//   <TableWidget />
// </Paper>
// </Grid>

const Analytics = (props) => {
  const { classes } = props;

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>

          <Grid key={5} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Resumo do Periodo
            </Typography>
            <CardSimpleExample />
          </Grid>
          <Grid key={6} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Numeros Totais
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>
          <Grid key={7} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Publicacoes em Destaque
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <CardTwitter />
            </Paper>
          </Grid>

          <Grid key={8} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Volume Total da Reforma
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <EChartAreaBasic />
            </Paper>
          </Grid>
          <Grid key={9} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Principais Temas
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <EChartPrincipaisTemas />
            </Paper>
          </Grid>

          <Grid key={10} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Citacoes - Camara dos Deputados vs Senado Federal
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <EChartCitacao />
            </Paper>
          </Grid>
          <Grid key={11} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Volume do Tema
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <EChartVolumeTemas />
            </Paper>
          </Grid>

          <Grid key={12} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Nuvem de Wordcloud
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>
          <Grid key={13} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Nuvem de Emoji
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

          <Grid key={14} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Maior Interacao
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>
          <Grid key={15} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque na Imprensa
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>
          <Grid key={16} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque na Camara dos Deputados
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>
          <Grid key={17} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque no Senado Federal
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

          <Grid key={18} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Citacoes de Tema por Rede Social
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>
          <Grid key={19} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Reforma Tributaria por Partidos
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

          <Grid key={20} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Polarizacao de Atores Politicos: Contra/A Favor da Reforma
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

          <Grid key={21} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque na Imprensa
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

          <Grid key={22} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque dos Atores Politicos
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

          <Grid key={23} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque dos Influenciadores
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ECharts />
            </Paper>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
};

Analytics.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Analytics);
