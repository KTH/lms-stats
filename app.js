'use strict'
// Hej
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

async function ABES(){
  const statistics = await canvasApi.get('accounts/3/analytics/current/statistics')
return statistics
}

async function ABEA(){
  const statistics = await canvasApi.get('accounts/3/analytics/current/activity')
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

async function CHES(){
  const statistics = await canvasApi.get('accounts/7/analytics/current/statistics')
return statistics
}

async function CHEA(){
  const statistics = await canvasApi.get('accounts/7/analytics/current/activity')
return statistics
}

async function CSCS(){
  const statistics = await canvasApi.get('accounts/10/analytics/current/statistics')
return statistics
}

async function CSCA(){
  const statistics = await canvasApi.get('accounts/10/analytics/current/activity')
  // console.log('Analytics: current activity:', JSON.stringify(statistics, null, 4))
return statistics
}

async function ECES(){
  const statistics = await canvasApi.get('accounts/4/analytics/current/statistics')
  // console.log('Analytics: current activity:', JSON.stringify(statistics, null, 4))
return statistics
}

async function ECEA(){
  const statistics = await canvasApi.get('accounts/4/analytics/current/activity')
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

async function ICTS(){
  const statistics = await canvasApi.get('accounts/9/analytics/current/statistics')
return statistics
}

async function ICTA(){
  const statistics = await canvasApi.get('accounts/9/analytics/current/activity')
return statistics
}

async function ITMS(){
  const statistics = await canvasApi.get('accounts/5/analytics/current/statistics')
return statistics
}

async function ITMA(){
  const statistics = await canvasApi.get('accounts/5/analytics/current/activity')
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

async function STHS(){
  const statistics = await canvasApi.get('accounts/8/analytics/current/statistics')
return statistics
}

async function STHA(){
  const statistics = await canvasApi.get('accounts/8/analytics/current/activity')
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

app.get('kthet', async function(req, res){
  const results= await KTHET()
  console.log('kommer skicka:', results)
  res.json(results);
});


app.get('/api/lms-stats/kths', async function(req, res){
  const results= await KTHS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/ktha', async function(req, res){
  const results= await KTHA()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/abes', async function(req, res){
  const results= await ABES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/bios', async function(req, res){
  const results= await BIOS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/ches', async function(req, res){
  const results= await CHES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/cscs', async function(req, res){
  const results= await CSCS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/eces', async function(req, res){
  const results= await ECES()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/eess', async function(req, res){
  const results= await EESS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/icts', async function(req, res){
  const results= await ICTS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/itms', async function(req, res){
  const results= await ITMS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/scis', async function(req, res){
  const results= await SCIS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/sths', async function(req, res){
  const results= await STHS()
  console.log('kommer skicka:', results)
  res.json(results);
});

app.get('/ufs', async function(req, res){
  const results= await UFS()
  console.log('kommer skicka:', results)
  res.json(results);
});
