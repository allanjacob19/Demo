const express = require("express");
const fs = require('fs');
const bodyparser = require("body-parser");
const app =express();
var request = require("request");
const{response} = require('express')
const parser = require('xml2js')
const xml = require('x2js')



app.use(bodyparser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})

process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
var custid;
var venid;
var empid;

app.post('/customer',function(req,res)
{
  var custpass;
  custid = req.body.custid;
  custpass = req.body.custpass;
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custlog/100/zws_allan_custlog/zws_allan_custlog',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTLOG:ZFM_ALLAN_CUSTLOGRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTLOG>\r\n         <I_CUS_ID>'+custid+'</I_CUS_ID>\r\n         <I_PASSWORD>'+custpass+'</I_PASSWORD>\r\n      </urn:ZFM_ALLAN_CUSTLOG>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);  
 
})

app.post('/cusprofile',function(req,res)
{

  var options = {
    'method': 'GET',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custprofile/100/zws_allan_custprofile/zws_allan_custprofile',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTPROFILE:ZFM_ALLAN_CUSTPROFILERequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTPROFILE>\r\n         <I_CUS_ID>'+custid+'</I_CUS_ID>\r\n      </urn:ZFM_ALLAN_CUSTPROFILE>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})

app.post('/cusinvoice',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custinvoice/100/zws_allan_custinvoice/zws_allan_custinvoice',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTINVOICE:ZFM_ALLAN_CUSTINVOICERequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTINVOICE>\r\n         <CUSTOMER_ID>'+custid+'</CUSTOMER_ID>\r\n         <!--Optional:-->\r\n         <IT_INVOICE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n            </item>\r\n         </IT_INVOICE>\r\n      </urn:ZFM_ALLAN_CUSTINVOICE>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})


app.post('/cusinquiry',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custinquiry/100/zws_allan_custinquiry/zws_allan_custinquiry',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTINQUIRY:ZFM_ALLAN_CUSTINQUIRYRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTINQUIRY>\r\n         <IM_CUSTOMERID>'+custid+'</IM_CUSTOMERID>\r\n         <!--Optional:-->\r\n         <INQUIRY_TABLE>\r\n         </INQUIRY_TABLE>\r\n      </urn:ZFM_ALLAN_CUSTINQUIRY>\r\n   </soap:Body>\r\n</soap:Envelope>'

  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})

app.post('/creditdebit',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_creddeb/100/zws_allan_creddeb/zws_allan_creddeb',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CREDDEB:ZFM_ALLAN_CREDDEBRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CREDDEB>\r\n         <!--Optional:-->\r\n         <CREDIT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <GJAHR></GJAHR>\r\n               <AUGDT></AUGDT>\r\n               <AUGBL></AUGBL>\r\n               <PSWBT></PSWBT>\r\n               <PSWSL></PSWSL>\r\n            </item>\r\n         </CREDIT>\r\n         <!--Optional:-->\r\n         <DEBIT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               <GJAHR></GJAHR>\r\n               <AUGDT></AUGDT>\r\n               <AUGBL></AUGBL>\r\n               <PSWBT></PSWBT>\r\n               <PSWSL></PSWSL>\r\n            </item>\r\n         </DEBIT>\r\n         <IM_CUSTOMERID>'+custid+'</IM_CUSTOMERID>\r\n      </urn:ZFM_ALLAN_CREDDEB>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})

app.post('/cuspayage',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custpayage/100/zws_allan_custpayage/zws_allan_custpayage',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTPAYAGE:ZFM_ALLAN_CUSTPAYAGERequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTPAYAGE>\r\n         <CUSTOMER_ID>'+custid+'</CUSTOMER_ID>\r\n         <!--Optional:-->\r\n         <IT_DETAIL>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </IT_DETAIL>\r\n      </urn:ZFM_ALLAN_CUSTPAYAGE>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})

app.post('/salesorder',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_salesorder/100/zws_allan_salesorder/zws_allan_salesorder',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_SALESORDER:ZFM_ALLAN_SALES0RDERRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_SALES0RDER>\r\n         <IM_CUSTOMERID>'+custid+'</IM_CUSTOMERID>\r\n         <IM_SALES_ORG>0001</IM_SALES_ORG>\r\n         <!--Optional:-->\r\n         <SALES_ORDER>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n            </item>\r\n         </SALES_ORDER>\r\n      </urn:ZFM_ALLAN_SALES0RDER>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})
app.post('/custform', function (req, res) {

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allancustadobeforminvoice/100/zws_allancustadobeforminvoice/zws_allancustadobeforminvoice',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLANCUSTADOBEFORMINVOICE:ZFM_ALLAN_NEW_CUST_ADOBERequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_NEW_CUST_ADOBE>\r\n         <CUST_ID>'+custid+'</CUST_ID>\r\n      </urn:ZFM_ALLAN_NEW_CUST_ADOBE>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data=new xml();
    var xmljs = data.xml2js(response.body);
    res.send({xmljs:xmljs['Envelope']['Body']['ZFM_ALLAN_NEW_CUST_ADOBEResponse']['IT_RES']});
    
  })


  console.log(custid);

})

app.post('/custdelivery',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custdelivery/100/zws_allan_custdelivery/zws_allan_custdelivery',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTDELIVERY:ZFM_ALLAN_CUSTDELIVERYRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTDELIVERY>\r\n         <IM_CUSTOMERID>'+custid+'</IM_CUSTOMERID>\r\n         <!--Optional:-->\r\n         <LIST_OF_DELIVERY>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n            </item>\r\n         </LIST_OF_DELIVERY>\r\n      </urn:ZFM_ALLAN_CUSTDELIVERY>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(custid);
 
})

app.post('/vendorlogin',function(req,res)
{
  var venpass;
  venid = req.body.venid;
  venpass = req.body.venpass;
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custlog/100/zws_allan_custlog/zws_allan_custlog',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTLOG:ZFM_ALLAN_CUSTLOGRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTLOG>\r\n         <I_CUS_ID>'+venid+'</I_CUS_ID>\r\n         <I_PASSWORD>'+venpass+'</I_PASSWORD>\r\n      </urn:ZFM_ALLAN_CUSTLOG>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
  console.log("Login Page")  
 
})

app.post('/vendorprofile',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORPROFILE&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORPROFILE&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=_j_9CAZ1BFLk86oVRyJ8gDWlENhcc6rC5zIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORPROFILE>\r\n         <VENDORID>'+venid+'</VENDORID>\r\n      </urn:ZFM_ALLAN_VENDORPROFILE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})

app.post('/vendorinvoice',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORINVOICE&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORINVOICE&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=_j_9CAZ1BFLk86oVRyJ8gDWlENhcc6rC5zIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORINVOICE>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <!--Optional:-->\r\n         <VENDORDETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </VENDORDETAILS>\r\n      </urn:ZFM_ALLAN_VENDORINVOICE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})


app.post('/vendorpurchase',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORPURCHASE&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORPURCHASE&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=_j_9CAZ1BFLk86oVRyJ8gDWlENhcc6rC5zIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORPURCHASE>\r\n         <!--You may enter the following 4 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <!--Optional:-->\r\n         <PURCHASEORDERHEADER>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </PURCHASEORDERHEADER>\r\n         <!--Optional:-->\r\n         <PURCHASEORDERITEMS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </PURCHASEORDERITEMS>\r\n         <!--Optional:-->\r\n         <RETURN>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </RETURN>\r\n      </urn:ZFM_ALLAN_VENDORPURCHASE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})

app.post('/vendorcredit',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORCREDITDEBIT&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORCREDITDEBIT&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=FCW96QCg7x5jSxowaSsvFpFrE7bzPhmdVWIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORCREDITDEBIT>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <CREDITTABLE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </CREDITTABLE>\r\n         <DEBITTABLE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DEBITTABLE>\r\n      </urn:ZFM_ALLAN_VENDORCREDITDEBIT>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})


app.post('/vendordebit',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORCREDITDEBIT&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORCREDITDEBIT&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=FCW96QCg7x5jSxowaSsvFpFrE7bzPhmdVWIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORCREDITDEBIT>\r\n         <!--You may enter the following 3 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <CREDITTABLE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </CREDITTABLE>\r\n         <DEBITTABLE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </DEBITTABLE>\r\n      </urn:ZFM_ALLAN_VENDORCREDITDEBIT>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})


app.post('/vendorpayage',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORPAYMENTAGE&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORPAYMENTAGE&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=_j_9CAZ1BFLk86oVRyJ8gDWlENhcc6rC5zIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORPAYMENTAGE>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <PAYMENTAGING>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </PAYMENTAGING>\r\n      </urn:ZFM_ALLAN_VENDORPAYMENTAGE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})

app.post('/vendorgoodsreceipt',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORGOODSRECEIPT&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORGOODSRECEIPT&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=_j_9CAZ1BFLk86oVRyJ8gDWlENhcc6rC5zIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORGOODSRECEIPT>\r\n         <!--You may enter the following 4 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <!--Optional:-->\r\n         <GOODSRECEPITHEADER>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </GOODSRECEPITHEADER>\r\n         <!--Optional:-->\r\n         <GOODSTRECEIPTITEMS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </GOODSTRECEIPTITEMS>\r\n         <!--Optional:-->\r\n         <RETURN>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </RETURN>\r\n      </urn:ZFM_ALLAN_VENDORGOODSRECEIPT>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})

app.post('/vendorquotation',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_VENDORQUOTATION&receiverParty=&receiverService=&interface=SI_ALLAN_VENDORQUOTATION&interfaceNamespace=http://vendorportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDU6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDWIAAdkZWZhdWx0AQAIUE9VU0VSQDUCAAMwMDADAANLUE8EAAwyMDIzMDUwMjE4MDkFAAQAAAAICgAIUE9VU0VSQDX%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNTAyMTgwOTAyWjAjBgkqhkiG9w0BCQQxFgQUC7!x7RMnaOHCmyYGWiSHE2m1QVIwCQYHKoZIzjgEAwQwMC4CFQD5oSAgVpa034Y1IWWIDKcspArbEQIVAIlGmEAqhzPzZR4GPFBnAcxO%2F6SX; JSESSIONID=zvF9H0J7u8vEj3slmO-zZ0kPT6fdhwF-Y2kA_SAPNFQiuYzePaNAQnsiULP5Lcf7; JSESSIONMARKID=_j_9CAZ1BFLk86oVRyJ8gDWlENhcc6rC5zIX5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_VENDORQUOTATION>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <VENDORID>'+venid+'</VENDORID>\r\n         <!--Optional:-->\r\n         <QUOTATION_RESULT>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </QUOTATION_RESULT>\r\n      </urn:ZFM_ALLAN_VENDORQUOTATION>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(venid);
 
})

app.post('/vendorform', function (req, res) {

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_ven_invoiceadbobe/100/zws_allan_ven_invoiceadbobe/zws_allan_ven_invoiceadbobe',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_VEN_INVOICEADBOBE:ZFM_ALLAN_VENDADOBEFORMRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_VENDADOBEFORM>\r\n         <I_VENDOR_ID>'+venid+'</I_VENDOR_ID>\r\n      </urn:ZFM_ALLAN_VENDADOBEFORM>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data=new xml();
    var xmljs = data.xml2js(response.body);
    // xmljs = JSON.stringify(xmljs)
    res.send({xmljs:xmljs['Envelope']['Body']['ZFM_ALLAN_VENDADOBEFORMResponse']['P_RESPONSE']});
    
  })


  console.log(venid);

})

app.post('/employeelogin',function(req,res)
{
  var emppass;
  empid = req.body.empid;
  emppass = req.body.emppass;
  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_custlog/100/zws_allan_custlog/zws_allan_custlog',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_CUSTLOG:ZFM_ALLAN_CUSTLOGRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_CUSTLOG>\r\n         <I_CUS_ID>'+empid+'</I_CUS_ID>\r\n         <I_PASSWORD>'+emppass+'</I_PASSWORD>\r\n      </urn:ZFM_ALLAN_CUSTLOG>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(empid);  
 
})

app.post('/employeeprofile',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_EMPLOYEEPROFILE&receiverParty=&receiverService=&interface=SI_ALLAN_EMPLOYEEPROFILE&interfaceNamespace=http://employeeportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDM6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDOIAAdkZWZhdWx0AQAIUE9VU0VSQDMCAAMwMDADAANLUE8EAAwyMDIzMDQxMTE5NDUFAAQAAAAICgAIUE9VU0VSQDP%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDExMTk0NTQ4WjAjBgkqhkiG9w0BCQQxFgQUsPG8YzFdEkoDDVhP2N9nmS1Y!FYwCQYHKoZIzjgEAwQvMC0CFQDPyBqKhSXwVoPMsGdDRmH9TWotBgIUJSng1h12oS9w9bKMaKkM!TPbk0M%3D; JSESSIONID=1k53veJqFjgQ2kwSDBHlUlrYXNpxhwF-Y2kA_SAP0Qw4cNYeZhgDeB9MDSqmU1Hh; JSESSIONMARKID=6O6wPQ5paQROXjqnazACdhaPeG0Z2DstputH5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_EMPLOYEEPROFILE>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMPID>'+empid+'</EMPID>\r\n         <COMPANYDETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </COMPANYDETAILS>\r\n      </urn:ZFM_ALLAN_EMPLOYEEPROFILE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(empid);
 
})

app.post('/employeepayslip',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_EMPPAYROLLNEW1&receiverParty=&receiverService=&interface=SI_ALLAN_EMPPAYROLLNEW1&interfaceNamespace=http://employeeportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDM6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDOIAAdkZWZhdWx0AQAIUE9VU0VSQDMCAAMwMDADAANLUE8EAAwyMDIzMDQxMzA3MDUFAAQAAAAICgAIUE9VU0VSQDP%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDEzMDcwNTE2WjAjBgkqhkiG9w0BCQQxFgQUx6LI2ktJB7PgNE7eS7pTFPYVQXkwCQYHKoZIzjgEAwQuMCwCFDnPCFTdk0sYzFhTYkgDsN8mCJXUAhRfA%2FNosc1dSkFp2M7gf8oJQO2Q2g%3D%3D; JSESSIONID=cJib0593X1PJau-IWZf42fo8y255hwF-Y2kA_SAPXRXfaplH92TQOiA_TAJi3QE3; JSESSIONMARKID=ZeHbOQVMw20wDcNq6pxHYK5IVCQDzIFXwXKH5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_EMPPAYROLLNEW>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMPID>'+empid+'</EMPID>\r\n         <EMPDETAILS>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </EMPDETAILS>\r\n      </urn:ZFM_ALLAN_EMPPAYROLLNEW>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(empid);
 
})



app.post('/employeepayroll',function(req,res)
{

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_EMPPAYROLL&receiverParty=&receiverService=&interface=SI_ALLAN_EMPPAYROLL&interfaceNamespace=http://employeeportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDM6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDOIAAdkZWZhdWx0AQAIUE9VU0VSQDMCAAMwMDADAANLUE8EAAwyMDIzMDQxMjE4MDQFAAQAAAAICgAIUE9VU0VSQDP%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDEyMTgwNDUyWjAjBgkqhkiG9w0BCQQxFgQUk4qNAyYTnHE%2FXthItxCIvbbPiHgwCQYHKoZIzjgEAwQvMC0CFQCdP5HswzxYXmwWWeFoM4YYIupqTAIUcViD5PMxn7Ki2mj0YCA0y3zUAMY%3D; JSESSIONID=lEgqGbuTy5zm7b_0w1X9ADRsUaR2hwF-Y2kA_SAPXia7Vu2hbw9vOCkjGiHmtc2L; JSESSIONMARKID=U9JGxwdDhUSSii9yumFHokJHk_cY5noeLj_n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_EMPPAYROLL>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMPID>'+empid+'</EMPID>\r\n         <PAYROLL>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n              \r\n            </item>\r\n         </PAYROLL>\r\n      </urn:ZFM_ALLAN_EMPPAYROLL>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };

  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(empid);
 
})

app.post('/employeeleave',function(req,res)
{

  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ALLAN_EMPLEAVE&receiverParty=&receiverService=&interface=SI_ALLAN_EMPLEAVE&interfaceNamespace=http://employeeportal_allan.com',
    'headers': {
      'Authorization': 'Basic cG91c2VyQDM6MjAyMkBUZWNo',
      'Content-Type': 'application/xml',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDOIAAdkZWZhdWx0AQAIUE9VU0VSQDMCAAMwMDADAANLUE8EAAwyMDIzMDQxMjA2NDMFAAQAAAAICgAIUE9VU0VSQDP%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwNDEyMDY0MzUyWjAjBgkqhkiG9w0BCQQxFgQU4JZ5KNRLT!lSglyd4fjQm3ZPxiIwCQYHKoZIzjgEAwQvMC0CFFVfhSSvVzi41o7PErqDwLGdWr3uAhUA9DDljlZKZS%2FPC6C6rfaPtsvS6Ts%3D; JSESSIONID=6VPMrfUp6M2ab0ldj8Gu4kzD1jR0hwF-Y2kA_SAPi0rqn9rsjvWpyx9BEEsdQaKg; JSESSIONMARKID=7sBaeQFo6kdBxkm1LCRj56WE4fuCUFfelX2H5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_ALLAN_EMPLEAVE>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <EMPID>'+empid+'</EMPID>\r\n         <EMPLEAVE>\r\n            <!--Zero or more repetitions:-->\r\n            <item>\r\n               \r\n            </item>\r\n         </EMPLEAVE>\r\n      </urn:ZFM_ALLAN_EMPLEAVE>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
  
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    var data = new xml();
    var xmljs = data.xml2js(response.body);
    xmljs = JSON.stringify(xmljs)
    res.send(xmljs);
  })

  console.log(empid);
 
})


app.post('/employeeform', function (req, res) {

  var options = {
    'method': 'POST',
    'url': 'https://dxbktlds4.kaarcloud.com:4300/sap/bc/srt/rfc/sap/zws_allan_empadobeform/100/zws_allan_empadobeform/zws_allan_empadobeform',
    'headers': {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      'action': 'urn:sap-com:document:sap:rfc:functions:ZWS_ALLAN_EMPADOBEFORM:ZFM_ALLAN_EMPADOBEFORMRequest',
      'Authorization': 'Basic QWJhcGVyOkFiYXBlckAxMjM=',
      'Cookie': 'sap-usercontext=sap-client=100'
    },
    body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <urn:ZFM_ALLAN_EMPADOBEFORM>\r\n         <EMP_ID>'+empid+'</EMP_ID>\r\n      </urn:ZFM_ALLAN_EMPADOBEFORM>\r\n   </soap:Body>\r\n</soap:Envelope>'
  
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var data=new xml();
    var xmljs = data.xml2js(response.body);
    // xmljs = JSON.stringify(xmljs)
    res.send({xmljs:xmljs['Envelope']['Body']['ZFM_ALLAN_EMPADOBEFORMResponse']['ZPDF']});
    
  })


  console.log(empid);

})




app.listen(3030,()=>{console.log("Hii!!! I am in Port no: 3030");});