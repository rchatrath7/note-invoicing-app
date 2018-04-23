"use strict"; 
const Promise = require("bluebird"); 
const sqlite3 = require("sqlite3"); 
const path = require('path'); 

module.exports = {
  up: function() {
    return new Promise(function(resolve, reject){
      let db = new sqlite3.Database('./database/InvoiceApp.db');
      db.run(`PRAGMA foreign_keys = ON`); 
    });
  };
}; 
