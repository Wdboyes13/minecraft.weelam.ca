#!/bin/sh
systemctl status mcserv | head -n 3 | tail -n 1
