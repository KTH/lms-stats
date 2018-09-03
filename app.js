'use strict'
const app = require('kth-node-server')
const config = require('./config/serverSettings')
const logger = require('./server/logger')
require('dotenv').config()

app.use('/api/lms-stats/', require('./server/systemroutes'))


app.start({
  port: config.port,
  logger
})

const CanvasApi = require('kth-canvas-api')
const accessToken = process.env.accessToken
const canvasUrl = process.env.canvasUrl
const canvasApi = new CanvasApi(canvasUrl, accessToken)
const express = require('express');
const coursespromise = canvasApi.get('accounts/1/courses?per_page=100')
const coursesenrpromise = canvasApi.get('accounts/1/courses?with_enrollments=true&per_page=100')

async function KTHCOURSES(){
  const statistics = await coursespromise
return statistics
}

async function KTHENRCOURSES(){
  const statistics = await coursesenrpromise
return statistics
}

async function KTHET(){
  const statistics = await canvasApi.get('accounts/1/external_tools')
return statistics
}

async function KTHS(){
  const statistics = await canvasApi.get('accounts/1/analytics/current/statistics')
return statistics
}

async function KTHA(){
  const statistics = await canvasApi.get('accounts/1/analytics/current/activity')
return statistics
}

async function ABEADM(){
  const statistics = await canvasApi.get('accounts/14/admins')
return statistics
}

async function CBHADM(){
  const statistics = await canvasApi.get('accounts/17/admins')
return statistics
}

async function EECSADM(){
  const statistics = await canvasApi.get('accounts/23/admins')
return statistics
}

async function ITMADM(){
  const statistics = await canvasApi.get('accounts/27/admins')
return statistics
}

async function SCIADM(){
  const statistics = await canvasApi.get('accounts/28/admins')
return statistics
}

async function ABES(){
  const statistics = await canvasApi.get('accounts/3/analytics/current/statistics')
return statistics
}

async function ABEA(){
  const statistics = await canvasApi.get('accounts/3/analytics/current/activity')
return statistics
}

async function ABESL(){
  const statistics = await canvasApi.get('accounts/14/analytics/current/statistics')
return statistics
}

async function BIOS(){
  const statistics = await canvasApi.get('accounts/6/analytics/current/statistics')
return statistics
}

async function BIOA(){
  const statistics = await canvasApi.get('accounts/6/analytics/current/activity')
return statistics
}

async function BIOSL(){
  const statistics = await canvasApi.get('accounts/17/analytics/current/statistics')
return statistics
}

async function CHES(){
  const statistics = await canvasApi.get('accounts/7/analytics/current/statistics')
return statistics
}

async function CHEA(){
  const statistics = await canvasApi.get('accounts/7/analytics/current/activity')
return statistics
}

async function CHESL(){
  const statistics = await canvasApi.get('accounts/22/analytics/current/statistics')
return statistics
}

async function CSCS(){
  const statistics = await canvasApi.get('accounts/10/analytics/current/statistics')
return statistics
}

async function CSCA(){
  const statistics = await canvasApi.get('accounts/10/analytics/current/activity')
return statistics
}

async function CSCSL(){
  const statistics = await canvasApi.get('accounts/23/analytics/current/statistics')
return statistics
}

async function ECES(){
  const statistics = await canvasApi.get('accounts/4/analytics/current/statistics')
return statistics
}

async function ECEA(){
  const statistics = await canvasApi.get('accounts/4/analytics/current/activity')
return statistics
}

async function ECESL(){
  const statistics = await canvasApi.get('accounts/24/analytics/current/statistics')
return statistics
}


async function EESS(){
  const statistics = await canvasApi.get('accounts/5/analytics/current/statistics')
return statistics
}

async function EESA(){
  const statistics = await canvasApi.get('accounts/5/analytics/current/activity')
return statistics
}

async function EESSL(){
  const statistics = await canvasApi.get('accounts/25/analytics/current/statistics')
return statistics
}

async function ICTS(){
  const statistics = await canvasApi.get('accounts/9/analytics/current/statistics')
return statistics
}

async function ICTA(){
  const statistics = await canvasApi.get('accounts/9/analytics/current/activity')
return statistics
}

async function ICTSL(){
  const statistics = await canvasApi.get('accounts/26/analytics/current/statistics')
return statistics
}

async function ITMS(){
  const statistics = await canvasApi.get('accounts/11/analytics/current/statistics')
return statistics
}

async function ITMA(){
  const statistics = await canvasApi.get('accounts/11/analytics/current/activity')
return statistics
}

async function ITMSL(){
  const statistics = await canvasApi.get('accounts/27/analytics/current/statistics')
return statistics
}

async function SCIS(){
  const statistics = await canvasApi.get('accounts/12/analytics/current/statistics')
return statistics
}

async function SCIA(){
  const statistics = await canvasApi.get('accounts/12/analytics/current/activity')
return statistics
}

async function SCISL(){
  const statistics = await canvasApi.get('accounts/28/analytics/current/statistics')
return statistics
}

async function STHS(){
  const statistics = await canvasApi.get('accounts/8/analytics/current/statistics')
return statistics
}

async function STHA(){
  const statistics = await canvasApi.get('accounts/8/analytics/current/activity')
return statistics
}

async function STHSL(){
  const statistics = await canvasApi.get('accounts/29/analytics/current/statistics')
return statistics
}

async function UFS(){
  const statistics = await canvasApi.get('accounts/13/analytics/current/statistics')
return statistics
}

async function UFA(){
  const statistics = await canvasApi.get('accounts/13/analytics/current/activity')
return statistics
}

app.use('/api/lms-stats/',express.static('public'))

app.get('/api/lms-stats/kthcourses', async function(req, res){
  const results= await KTHCOURSES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/kthenrcourses', async function(req, res){
  const results= await KTHENRCOURSES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/kthet', async function(req, res){
  const results= await KTHET()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/abeadm', async function(req, res){
  const results= await ABEADM()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/cbhadm', async function(req, res){
  const results= await CBHADM()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/eecsadm', async function(req, res){
  const results= await EECSADM()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/itmadm', async function(req, res){
  const results= await ITMADM()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/sciadm', async function(req, res){
  const results= await SCIADM()
  console.log('kommer skicka:', results)
  res.json(results);
});


app.get('/api/lms-stats/kths', async function(req, res){
  const results= await KTHS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/ktha', async function(req, res){
  const results= await KTHA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/abea', async function(req, res){
  const results= await ABEA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/abes', async function(req, res){
  const results= await ABES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/abesl', async function(req, res){
  const results= await ABESL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/bioa', async function(req, res){
  const results= await BIOA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/bios', async function(req, res){
  const results= await BIOS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/biosl', async function(req, res){
  const results= await BIOSL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/chea', async function(req, res){
  const results= await CHEA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/ches', async function(req, res){
  const results= await CHES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/chesl', async function(req, res){
  const results= await CHESL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/csca', async function(req, res){
  const results= await CSCA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/cscs', async function(req, res){
  const results= await CSCS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/cscsl', async function(req, res){
  const results= await CSCSL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/ecea', async function(req, res){
  const results= await ECEA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/eces', async function(req, res){
  const results= await ECES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/ecesl', async function(req, res){
  const results= await ECESL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/eesa', async function(req, res){
  const results= await EESA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/eess', async function(req, res){
  const results= await EESS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/eessl', async function(req, res){
  const results= await EESSL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/icta', async function(req, res){
  const results= await ICTA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/icts', async function(req, res){
  const results= await ICTS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/ictsl', async function(req, res){
  const results= await ICTSL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/itma', async function(req, res){
  const results= await ITMA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/itms', async function(req, res){
  const results= await ITMS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/itmsl', async function(req, res){
  const results= await ITMSL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/scia', async function(req, res){
  const results= await SCIA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/scis', async function(req, res){
  const results= await SCIS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/scisl', async function(req, res){
  const results= await SCISL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/stha', async function(req, res){
  const results= await STHA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/sths', async function(req, res){
  const results= await STHS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/sthsl', async function(req, res){
  const results= await STHSL()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/api/lms-stats/ufs', async function(req, res){
  const results= await UFS()
  console.log('kommer skicka:', results)
  res.json(results);
});
