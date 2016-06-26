#!/bin/bash

set -o errexit # Exit on error

cp env.template .env

chmod 755 ./deploy.sh

sed -i "s#<MONGODB>#$MONGODB#;" *.env
sed -i "s#<SESSION_SECRET>#$SESSION_SECRET#;" *.env
sed -i "s#<MAILGUN_USERNAME>#$MAILGUN_USERNAME#;" *.env
sed -i "s#<MAILGUN_PASSWORD>#$MAILGUN_PASSWORD#;" *.env
sed -i "s#<GOOGLE_ID>#$GOOGLE_ID#;" *.env
sed -i "s#<GOOGLE_SECRET>#$GOOGLE_SECRET#;" *.env