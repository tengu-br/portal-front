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

          <Grid key={4} item xs={0} sm={0} md={12} >
            <img src="https://drive.google.com/uc?export=view&id=1Y9vdutyR_sN1Iu_VbHmLZtOuitbQPeUo" width="100%" style={{ padding: "0px" }} />
          </Grid>

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
                  <br />USUARIOS<br /><br />
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
                  <br />INTERACOES<br /><br />
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
                  <br />DATAS<br /><br />
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
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Volume Total da Reforma
          </Typography>
              <EChartAreaBasic />
            </Paper>
          </Grid>
          <Grid key={9} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Principais Temas
            </Typography>
              <EChartPrincipaisTemas />
            </Paper>
          </Grid>

          <Grid key={10} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Citações - Câmara vs Senado
            </Typography>
              <EChartCitacao />
            </Paper>
          </Grid>
          <Grid key={11} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Volume do Tema
            </Typography>
              <EChartVolumeTemas />
            </Paper>
          </Grid>

          <Grid key={12} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Nuvem de Wordcloud
            </Typography>
              <NuvemWordcloud />
            </Paper>
          </Grid>
          <Grid key={13} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Nuvem de Emoji
            </Typography>
              <NuvemEmojicloud />
            </Paper>
          </Grid>

          <Grid key={14} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Maior Interacao
            </Typography>
              <CardTwitterOne />
            </Paper>
          </Grid>
          <Grid key={15} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Destaque na Imprensa
            </Typography>
              <CardTwitterTwo />
            </Paper>
          </Grid>
          <Grid key={16} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Destaque na Câmara
            </Typography>
              <CardTwitterThree />
            </Paper>
          </Grid>
          <Grid key={17} item xs={12} sm={12} md={3} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Destaque no Senado
            </Typography>
              <CardTwitterFour />
            </Paper>
          </Grid>

          <Grid key={18} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Citações de Tema por Rede Social
            </Typography>
              <EChartCitacoesRede />
            </Paper>
          </Grid>
          <Grid key={19} item xs={12} sm={12} md={6} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Reforma Tributária por Partidos
            </Typography>
              <EChartPolaridade />
            </Paper>
          </Grid>

          <Grid key={20} item xs={12} sm={12} md={12} className={classes.portalWidget}>
            <Paper className={classes.portalWidgetContent} style={paperStyle}>
              <Typography variant="subheading" className="subtitulo">
                Polarização de Atores Políticos: Contra/A Favor da Reforma
          </Typography>
              <EChartPolaridadeAtores />
            </Paper>
          </Grid>
          <Grid key={3} item xs={0} sm={0} md={12} >
            <img src="https://drive.google.com/uc?export=view&id=1zBES5PPpIw54QAKCNXjmS6yWbg6jZypO" width="100%" style={{ padding: "0px" }} />
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
