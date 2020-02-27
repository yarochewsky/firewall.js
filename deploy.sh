#!/bin/bash

cd output/
make
rmmod temp.ko || true
insmod temp.ko
