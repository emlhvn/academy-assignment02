const ljf = require( "load-json-file" );
const wjf = require( "write-json-file" );

const oul3 = ljf.sync( "./data/vnProv.json" );
const regions = {"region": [{"name": "North", "id":"JzKStMojAGA" }, {"name": "Central", "id": "SgkhNupCR4x"},
 {"name": "Highland", "id":"bJ55F4lb3WJ" }, {"name": "South", "id": "T6shP0GyRuQ"}] };

var o={features:[]
      };

regions.region.forEach(function(region){
        oul3.features.forEach(function(features){
	///change the uid to region north JzKStMojAGA, central SgkhNupCR4x, highland bJ55F4lb3WJ, south T6shP0GyRuQ
        if(features.properties.parent==region.id){
        console.log(features.id);
        o.features.push(features);

            }
});
/// change the outputfile name based on the region
wjf.sync(`./data/${region.name}.json`, o, {indent: 2} );
});
