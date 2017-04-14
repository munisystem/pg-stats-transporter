'use strict';

const stats_schema = {
  "pg_stat_activity": "datid:integer,datname:string,pid:integer,usesysid:integer,usename:string,application_name:string,client_addr:string,client_hostname:string,client_port:integer,backend_start:timestamp,xact_start:timestamp,query_start:timestamp,state_change:timestamp,wait_event_type:string,wait_event:string,state:string,backend_xid:integer,backend_xmin:integer,query:string"
}

module.exports = (stat) => {
  return stats_schema[stat];
}
