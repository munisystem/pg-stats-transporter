'use strict';

const stats_schema = {
  "pg_stat_activity": "datid:integer,datname:string,pid:integer,usesysid:integer,usename:string,application_name:string,client_addr:string,client_hostname:string,client_port:integer,backend_start:timestamp,xact_start:timestamp,query_start:timestamp,state_change:timestamp,wait_event_type:string,wait_event:string,state:string,backend_xid:integer,backend_xmin:integer,query:string",
  "pg_stat_database": "datid:integer,datname:string,numbackends:integer,xact_commit:integer,xact_rollback:integer,blks_read:integer,blks_hit:integer,tup_returned:integer,tup_fetched:integer,tup_inserted:integer,tup_updated:integer,tup_deleted:integer,conflicts:integer,temp_files:integer,temp_bytes:integer,deadlocks:integer,blk_read_time:float,blk_write_time:float,stats_reset:timestamp"
}

module.exports = (stat) =>  {
  return stats_schema[stat];
}
