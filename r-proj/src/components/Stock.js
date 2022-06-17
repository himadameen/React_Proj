import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Stock = () => {

  const [stock, setStock] = useState([])
  const [search, setSearch] = useState('')


  const api = async () => {
    let url = await fetch('')
    let data = await url.json()
    setStock(data);
  }

  useEffect(() => {
    api()
  }, [])

  const sx = {
    minWidth: '400px',
    margin: '0 35px'
  }

  const sx2 = {
    maxWidth: '400px',
    margin: '20px 35px',
  }

  return (
    <>
      <div id='stck_bg'>
        <div id='inter_hd'>International <span id='st'>Stock</span> <span id='m'>Market</span> Exchange</div>
        <div id='indSt'>
          <div id='indstt'>
            <Card sx={sx}>
              <CardMedia
                component="img"
                height="200"
                image="https://st3.depositphotos.com/1005233/14542/i/950/depositphotos_145423213-stock-photo-concept-of-business-international-network.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top International Stocks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The international stock market refers to all the international markets that negotiate stocks from their domestic companies it consists of several domestic and foreign mutual funds, banks, brokerages and institutions who buy and sell bonds from different markets.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to='/inter' className='top10ind-stock' >Learn More</Link></Button>
              </CardActions>
            </Card>
            <Card sx={sx}>
              <CardMedia
                component="img"
                height="200"
                image="https://i1.wp.com/www.techdroidtips.com/wp-content/uploads/2018/12/getty-stock-market-rising_large.jpg?fit=3200%2C1680&ssl=1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Top NIFTY Stocks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This Shows You the National Stock Exchange of India Limited (NSE) is India's largest financial market and <br></br>the fourth largest market by trading volume.  the National Stock Exchange had accumulated $2.27 trillion in total market capitalization.
                </Typography>
              </CardContent>
              <CardActions>
                <br></br>
                <Button size="small"><Link to='/nifty' className='top10ind-stock' >Learn More</Link></Button>
              </CardActions>
            </Card>
            <br></br>
            <Card sx={sx}>
              <CardMedia
                component="img"
                height="200"
                image="https://diariodemadryn.com/wp-content/uploads/2019/11/main-qimg-281ff84ed715fa7f002c9aff0d8459d6.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  India's Top 10 Profitable Stock
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This Shows you the top NSE companies preparing to list on a major exchange The sheer volume of trading activity and application of automated systems promotes greater transparency in trade matching and the settlement process.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to='/profit' className='top10ind-stock' >Learn More</Link></Button>
              </CardActions>
            </Card>
            <br />
          </div>
          <br />
          <div id="cards">
            <Card sx={sx2}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.business-advantage.com/blog/wp-content/uploads/2015/12/Market-Analysis_Part2inSeries1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  India's Top 10 Loss Stock
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This shows you which shares have lost the most during the last hour. You can also view which stocks lost every hour since market opened. In volatile markets it is not enough knowing whether the share has moved up or down today but how the share has moved every hour.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to='/loss' className='top10ind-stock' >Learn More</Link></Button>
              </CardActions>
            </Card>
            <Card sx={sx2}>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.educba.com/academy/wp-content/uploads/2014/04/Stock-Market-in-india.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  India Top 10 Valuable Stock
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This Shows You the top valuable in this Stocks which can boost visibility in the market and lift investor confidence.<br></br> Using cutting-edge technology also allows orders to be filled more efficiently, resulting in greater liquidity and<br></br> accurate prices.
                </Typography>
              </CardContent>
              <CardActions>
                {/* <br></br><br></br> */}
                <Button size="small">
                  <Link to='/valuetop' className='top10ind-stock' >Learn More</Link></Button>
              </CardActions>
            </Card>


          </div>
        </div>
      </div>
    </>
  )
}

export default Stock
