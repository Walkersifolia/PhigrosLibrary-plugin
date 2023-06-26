@echo off
title 报错修复
echo 正在安装缺失的依赖
pnpm install http -g
pnpm install http-proxy
pause
