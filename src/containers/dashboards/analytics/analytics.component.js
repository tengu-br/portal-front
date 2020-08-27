import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import './analytics.css'

import ECharts from './components/echarts-test/echarts.component';
import EChartAreaBasic from './components/echarts-area-basic/echarts.component'
import CardSimpleExample from './components/cards/card-simple-example';
import styles from './analytics.style';
import CardTwitter from './components/cards/card-twitter';
import EChartPrincipaisTemas from './components/echarts-principais-temas/echarts.component';
import EChartCitacao from './components/echarts-citacoes/echarts.component';
import EChartVolumeTemas from './components/echarts-volume-tema/echarts.component';
import NuvemWordcloud from './components/nuvem-wordcloud/nuvem-wordcloud.component';
import NuvemEmojicloud from './components/nuvem-emojicloud/nuvem-emojicloud.component';
import EChartCitacoesRede from './components/echarts-citacoes-rede/echarts.component';
import EChartPolaridade from './components/echarts-polaridade/echarts.component';
import EChartPolaridadeAtores from './components/polaridade-atores/echarts.component';
import CardTwitterOne from './components/cards/card-twitter-one';
import CardTwitterTwo from './components/cards/card-twitter-two';
import CardTwitterThree from './components/cards/card-twitter-three';
import CardTwitterFour from './components/cards/card-twitter-four';

const paperStyle = {
  borderRadius: '20px'
}

const Analytics = (props) => {
  const { classes } = props;

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={24}>

          <Grid key={5} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent}>
              <CardContent >
                <Typography variant="display1" component="h2" >
                  <br />Resumo do Periodo <br /><br />
                </Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                </Typography>
              </CardContent>
            </Paper>
          </Grid>



          <Grid key={5} item xs={12} sm={4} md={3} className={classes.portalWidget} >
            <Paper className={classes.portalWidgetContent} style={paperStyle} className="littleBoxOne">
              <CardContent >
                <Typography variant="display1" component="h2" className="textinho">
                  <br />CITAÇÕES<br /><br />
                </Typography>
                <Typography component="h1" className="textinho">
                  392 mil<br />
                </Typography>
                <Typography component="p" className="textinho">
                  lorem ipsum dolor sit amet
                        </Typography>
              </CardContent>
            </Paper>
            <Paper className={classes.portalWidgetContent} style={paperStyle} className="littleBoxTwo">
              <CardContent >
                <Typography variant="display1" component="h2" className="textinho">
                  <br />CITAÇÕES<br /><br />
                </Typography>
                <Typography component="h1" className="textinho">
                  28 mi<br />
                </Typography>
                <Typography component="p" className="textinho">
                  sed ut perspicatis unde
                    </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <Grid key={5} item xs={12} sm={4} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle} className="littleBoxTwo">
              <CardContent >
                <Typography variant="display1" component="h2" className="textinho">
                  <br />CITAÇÕES<br /><br />
                </Typography>
                <Typography component="h1" className="textinho">
                  928<br />
                </Typography>
                <Typography component="p" className="textinho">
                consectetur adipiscing elit
                    </Typography>
              </CardContent>
            </Paper>
            <Paper className={classes.portalWidgetContent} style={paperStyle} className="littleBoxThree">
              <CardContent >
                <Typography variant="display1" component="h2" className="textinho">
                  <br />CITAÇÕES<br /><br />
                </Typography>
                <Typography component="h1" className="textinho">
                  27/08 <br />
                </Typography>
                <Typography component="p" className="textinho">
                nostrud exercitation ullamco
                    </Typography>
              </CardContent>
            </Paper>

          </Grid>
          <Grid key={7} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <CardTwitter />
            </Paper>
          </Grid>
          <Grid key={8} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Volume Total da Reforma
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartAreaBasic />
            </Paper>
          </Grid>
          <Grid key={9} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Principais Temas
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartPrincipaisTemas />
            </Paper>
          </Grid>

          <Grid key={10} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Citacoes - Camara dos Deputados vs Senado Federal
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartCitacao />
            </Paper>
          </Grid>
          <Grid key={11} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Volume do Tema
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartVolumeTemas />
            </Paper>
          </Grid>

          <Grid key={12} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Nuvem de Wordcloud
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <NuvemWordcloud />
            </Paper>
          </Grid>
          <Grid key={13} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Nuvem de Emoji
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <NuvemEmojicloud />
            </Paper>
          </Grid>

          <Grid key={14} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Maior Interacao
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <CardTwitterOne />
            </Paper>
          </Grid>
          <Grid key={15} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque na Imprensa
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <CardTwitterTwo />
            </Paper>
          </Grid>
          <Grid key={16} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque na Camara dos Deputados
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <CardTwitterThree />
            </Paper>
          </Grid>
          <Grid key={17} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Destaque no Senado Federal
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <CardTwitterFour />
            </Paper>
          </Grid>

          <Grid key={18} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Citacoes de Tema por Rede Social
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartCitacoesRede />
            </Paper>
          </Grid>
          <Grid key={19} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Reforma Tributaria por Partidos
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartPolaridade />
            </Paper>
          </Grid>

          <Grid key={20} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Typography variant="subheading" className={classes.portalWidgetHeading}>
              Polarizacao de Atores Politicos: Contra/A Favor da Reforma
            </Typography>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <EChartPolaridadeAtores />
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
