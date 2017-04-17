'use strict';

const stats_schema = {
  "pg_stat_activity": "datid:integer,datname:string,pid:integer,usesysid:integer,usename:string,application_name:string,client_addr:string,client_hostname:string,client_port:integer,backend_start:timestamp,xact_start:timestamp,query_start:timestamp,state_change:timestamp,waiting:boolean,state:string,backend_xid:integer,backend_xmin:integer,query:string",
  "pg_stat_database": "datid:integer,datname:string,numbackends:integer,xact_commit:integer,xact_rollback:integer,blks_read:integer,blks_hit:integer,tup_returned:integer,tup_fetched:integer,tup_inserted:integer,tup_updated:integer,tup_deleted:integer,conflicts:integer,temp_files:integer,temp_bytes:integer,deadlocks:integer,blk_read_time:float,blk_write_time:float,stats_reset:timestamp",
  "pg_stat_user_tables": "relid:integer,schemaname:string,relname:string,seq_scan:integer,seq_tup_read:integer,idx_scan:integer,idx_tup_fetch:integer,n_tup_ins:integer,n_tup_upd:integer,n_tup_del:integer,n_tup_hot_upd:integer,n_live_tup:integer,n_dead_tup:integer,n_mod_since_analyze:integer,last_vacuum:timestamp,last_autovacuum:timestamp,last_analyze:timestamp,last_autoanalyze:timestamp,vacuum_count:integer,autovacuum_count:integer,analyze_count:integer,autoanalyze_count:integer",
  "pg_stat_user_indexes": "relid:integer,indexrelid:integer,schemaname:string,relname:string,indexrelname:string,idx_scan:integer,idx_tup_read:integer,idx_tup_fetch:integer",
  "pg_statio_user_tables": "relid:integer,schemaname:string,relname:string,heap_blks_read:integer,heap_blks_hit:integer,idx_blks_read:integer,idx_blks_hit:integer,toast_blks_read:integer,toast_blks_hit:integer,tidx_blks_read:integer,tidx_blks_hit:integer",
  "pg_statio_user_indexes": "relid:integer,indexrelid:integer,schemaname:string,relname:string,indexrelname:string,idx_blks_read:integer,idx_blks_hit:integer",
  "pg_stat_sys_tables": "relid:integer,schemaname:string,relname:string,seq_scan:integer,seq_tup_read:integer,idx_scan:integer,idx_tup_fetch:integer,n_tup_ins:integer,n_tup_upd:integer,n_tup_del:integer,n_tup_hot_upd:integer,n_live_tup:integer,n_dead_tup:integer,n_mod_since_analyze:integer,last_vacuum:timestamp,last_autovacuum:timestamp,last_analyze:timestamp,last_autoanalyze:timestamp,vacuum_count:integer,autovacuum_count:integer,analyze_count:integer,autoanalyze_count:integer",
  "pg_stat_sys_indexes": "relid:integer,indexrelid:integer,schemaname:string,relname:string,indexrelname:string,idx_scan:integer,idx_tup_read:integer,idx_tup_fetch:integer",
  "pg_statio_sys_tables": "relid:integer,schemaname:string,relname:string,heap_blks_read:integer,heap_blks_hit:integer,idx_blks_read:integer,idx_blks_hit:integer,toast_blks_read:integer,toast_blks_hit:integer,tidx_blks_read:integer,tidx_blks_hit:integer",
  "pg_statio_sys_indexes": "relid:integer,indexrelid:integer,schemaname:string,relname:string,indexrelname:string,idx_blks_read:integer,idx_blks_hit:integer",
  "pg_stat_all_tables": "relid:integer,schemaname:string,relname:string,seq_scan:integer,seq_tup_read:integer,idx_scan:integer,idx_tup_fetch:integer,n_tup_ins:integer,n_tup_upd:integer,n_tup_del:integer,n_tup_hot_upd:integer,n_live_tup:integer,n_dead_tup:integer,n_mod_since_analyze:integer,last_vacuum:timestamp,last_autovacuum:timestamp,last_analyze:timestamp,last_autoanalyze:timestamp,vacuum_count:integer,autovacuum_count:integer,analyze_count:integer,autoanalyze_count:integer",
  "pg_stat_all_indexes": "relid:integer,indexrelid:integer,schemaname:string,relname:string,indexrelname:string,idx_scan:integer,idx_tup_read:integer,idx_tup_fetch:integer",
  "pg_statio_all_tables": "relid:integer,schemaname:string,relname:string,heap_blks_read:integer,heap_blks_hit:integer,idx_blks_read:integer,idx_blks_hit:integer,toast_blks_read:integer,toast_blks_hit:integer,tidx_blks_read:integer,tidx_blks_hit:integer",
  "pg_statio_all_indexes": "relid:integer,indexrelid:integer,schemaname:string,relname:string,indexrelname:string,idx_blks_read:integer,idx_blks_hit:integer"
}

module.exports = (stat) =>  {
  return stats_schema[stat];
}
