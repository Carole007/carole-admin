@echo off
echo.
echo [��Ϣ] ��װWeb���̣�����node_modules�ļ���
echo.

%~d0
cd %~dp0

cd ..
npm i --registry=https://registry.npmmirror.com

pause