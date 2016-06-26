#!/bin/bash

set -ex

cp env.template .env
sed -i "s#<MONGODB>#$MONGODB#;" .env
sed -i "s#<SESSION_SECRET>#$SESSION_SECRET#;" .env
