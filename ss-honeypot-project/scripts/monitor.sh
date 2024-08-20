#!/bin/bash
for ip in $(terraform output -json honeypot_instance_ips | jq -r '.[]'); do
  ssh user@$ip "tail -f /path/to/honeypot/logs"
done
