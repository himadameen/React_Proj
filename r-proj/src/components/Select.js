import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Select = () => {

  let ti = new Date().toLocaleTimeString();

  const [time, setTime] = useState(ti);

  const clock = () => {
    ti = new Date().toLocaleTimeString();
    setTime(ti)
  }

  setInterval(clock, 1000)

  return (
    <>
      <div id='sllt'>
        <div id='star'>
          <div id='slt_'>It's a Right <span id='am'>Time To Know</span> and Invest</div>
          <br></br>
          <div id='time'><span>{time}</span></div>
          <br></br>
        </div>
        <div id='select'>
          <div id='crs'>
            <Card sx={{ minWidth: 400 }}>
              <CardMedia
                component="img"
                height="215"
                image="https://th.bing.com/th/id/OIP.nGFB7pJRThI9-s6-VvSn7wHaFj?pid=ImgDet&rs=1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stock
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stock markets are vital components of a free-market economy <br></br>because they enable democratized access to trading and <br></br>exchange of capital for investors of all kinds.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to='/stock' className='stock' >Learn More</Link></Button>
              </CardActions>
            </Card>
            <br></br>
            <Card sx={{ minWidth: 400 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://blog.streetshares.com/hs-fs/hubfs/cryptocurrency-fb.jpg?width=1200&name=cryptocurrency-fb.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Crypto Currency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cryptocurrency is digital money.This type of currency uses <br></br> blockchain technology, which is considered secure because <br></br> it is capable of establishing distributed consensus even<br></br> among untrustworthy parties.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"> <Link to='/crypto' className='crypto'>Learn More</Link></Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>

  )
}

export default Select