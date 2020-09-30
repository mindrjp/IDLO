var cytoscape = require('cytoscape');
var sbgnStylesheet = require('cytoscape-sbgn-stylesheet');

var cy = cytoscape({
   container: undefined,
   stylesheet: sbgnStylesheet(cytoscape)
  // other arguments here
}); 