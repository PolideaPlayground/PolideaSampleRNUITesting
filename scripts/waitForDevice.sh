#!/bin/bash
adb -s $1 wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do echo "Waiting for emulator."; sleep 1; done; input keyevent 82'
