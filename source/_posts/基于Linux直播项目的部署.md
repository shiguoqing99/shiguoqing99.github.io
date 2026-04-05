---
title: 基于Linux直播项目的部署
date: 2026-03-22
updated: 2026-03-21
tags:
  - Linux
categories: 指间世界
cover: /img/code/基于Linux直播项目的部署/image-8.png
---

# 基于Linux直播项目的部署
## ✅ 安装配置
### 一、环境
1. ubuntu-24.04.3-live-server-amd64
2. Windows 11
3. VSCode
4. PowerShell
5. Vmware Workstation 16 Player
### 二、创建虚拟机
1. 创建虚拟机，选择 ubuntu-24.04.3-live-server-amd64。
![选择镜像](/img/code/基于Linux直播项目的部署\image.png)
1. 分配磁盘容量、内存、CPU等。
![alt text](/img/code/基于Linux直播项目的部署/image-1.png)
![alt text](/img/code/基于Linux直播项目的部署/image-2.png)
### 三、配置系统
> 不必要步骤省略
1. 语言选择：English、不升级、安装Ubuntu Server。
![Ubuntu Server](/img/code/基于Linux直播项目的部署/image-3.png)
1. 默认网卡、不使用代理、更换更新源**阿里云**
![alt text](/img/code/基于Linux直播项目的部署/image-4.png)
1. 一路默认，设置用户名、密码、主机名。
![alt text](/img/code/基于Linux直播项目的部署/image-5.png)
1. 跳过升级
![alt text](/img/code/基于Linux直播项目的部署/image-6.png)
1. 安装组件，选 OpenSSH Server。
![alt text](/img/code/基于Linux直播项目的部署/image-7.png)
1. 等待安装完成，重启，输入用户名密码进入系统，记录IP地址。
![alt text](/img/code/基于Linux直播项目的部署/image-8.png)
## ✅ VSCode 免密 SSH 连接 Ubuntu 笔记
> 好的，这里给你整理一个超精简、适合做笔记的正确步骤清单，照着做即可实现 VSCode 免密 SSH 连接 Ubuntu。
### 一、在 Windows 上生成密钥
1. 打开 PowerShell（或 CMD）。
2. 执行：
```bash
ssh-keygen
```
1. 一路回车，不设置密码。
![alt text](/img/code/基于Linux直播项目的部署/image-9.png)
1. 密钥位置：
    - 私钥：C:\Users\你的用户名\.ssh\id_ed25519
    - 公钥：C:\Users\你的用户名\.ssh\id_ed25519.pub
![alt text](/img/code/基于Linux直播项目的部署/image-10.png)
### 二、把公钥传到 Ubuntu
1. 在 PowerShell 执行：
```bash
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh sgq@192.168.116.131 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```
1. 一路回车，输入yes，输入 Ubuntu 密码。
```bash
PS C:\Users\31184> type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh sgq@192.168.116.131 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
The authenticity of host '192.168.116.131 (192.168.116.131)' can't be established.
ED25519 key fingerprint is SHA256:dmHGX2yjgdlEjZY+uOkJAInUqh+mLAQolaKPUB0oXJA.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.116.131' (ED25519) to the list of known hosts.
sgq@192.168.116.131's password:
```
### 三、在 VSCode 中连接
1. 安装插件：Remote - SSH。
2. 左下角绿色图标 → Connect to Host... → 输入 用户名@服务器IP，或配置文件
![alt text](/img/code/基于Linux直播项目的部署/image-11.png)
1. 重新启动 VSCode，左下角绿色图标 → 选择 Ubuntu → 成功连接（无需密码）。
---
# Qt 项目转化
> 由于基本上是在Windows下开发，所以需要将Qt项目移植到Linux下，下面是转化的过程

## 将Qt Widget转化为Qt Console
Qt Widget项目在Windows下运行时，会显示一个窗口，而Qt Console项目在Linux下运行时，不会显示窗口，所以需要将Qt Widget项目转化为Qt Console项目

### 去除窗口
1. 创建Qt Console项目，将Qt Widget项目中的源文件复制到Qt Console项目中
2. 删除界面ui文件，将Qt Widget项目中的头文件中的`#include "ui_mainwindow.h"`删除
3. 去掉<QMessageBox>等窗口类的使用

### 修改main函数
1. main函数中，包含主程序文件，如`#include "mainwindow.h"`
2. 创建主程序对象，如`MainWindow w;`
3. 重新编译项目，即可将Qt Widget项目转化为Qt Console项目

### 注意
1. .pro文件中，需要添加去掉gui，添加必要库（同Windows开发）
```cpp
QT -= gui
QT += network sql
```
1. ubuntu-24.04不能直接使用ODBC，需要修改为mysql连接，同时添加主机名、端口号、数据库名、用户名、密码等参数
```cpp
DbHelper::DbHelper()
    : m_db(QSqlDatabase::addDatabase("QMYSQL"))
    , m_error()
{

}
bool DbHelper::init_db()
{
    m_db.setDatabaseName("projectdb");
    m_db.setHostName("localhost");
    m_db.setUserName("root");
    m_db.setPassword("root");
    ...
}
```
## 将已转化的Qt Console项目移植到Linux下
### 1. 先ping一下，看是否能ping通

![alt text](/img/code/基于Linux直播项目的部署/image-12.png)

### 2. 复制项目到Linux下
```bash
scp -r D:\AIoT\cwork\QT\12_10_LivingServer sgq@192.168.116.131:/home/sgq/
```
![alt text](/img/code/基于Linux直播项目的部署/image-13.png)

### 3. 查看Linux下是否有Qt项目文件
![alt text](/img/code/基于Linux直播项目的部署/image-14.png)

---

# Linux 编译运行环境配置
## 1. 安装C/C++/QT环境
### 1 更新软件源，等待结束
```bash
sudo apt update && sudo apt upgrade -y
```
### 2 安装C/C++编译器
```bash
sudo apt install -y build-essential gdb cmake make
```
- build-essential：GCC编译器套件（gcc, g++, make等）
- gdb：调试器
- cmake：现代C++构建工具
- make：传统构建工具

验证安装：
```bash
g++ --version && gdb --version && cmake --version
```
### 3 安装QT5、QT Creator，等待结束
```bash
sudo apt install -y qtbase5-dev qt5-qmake
```
> 无图形化界面，无需安装qtcreator
## 2. 安装mysql 8.0
### 1. 安装mysql
```bash
sudo apt install -y mysql-server
```
### 2. 启动mysql服务
```bash
sudo systemctl start mysql
```
### 3. 设置mysql开机自启
```bash
sudo systemctl enable mysql
```
### 4. 运行安全脚本
```bash
sudo mysql_secure_installation
```
- 是否强制使用强密码登录
- 是否删除匿名用户
- 是否禁止root远程登录
- 是否删除test数据库
- 是否刷新权限

### 5 登录mysql，设置root密码
```bash
mysql -u root -p
```
auth_socket 为默认认证方式，需要修改为密码认证方式
![alt text](/img/code/基于Linux直播项目的部署/image-15.png)
修改root密码
```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```
### 6. 刷新权限，使更改立即生效
```bash
FLUSH PRIVILEGES;
```
### 7. Qt连接mysql驱动
```bash
sudo apt install libqt5sql5-mysql -y
```
## 3. 编译运行项目
```bash
qmake 12_10_LivingServer.pro
make
./12_10_LivingServer
```
## 4. 部署依赖并打包客户端
### 1. 部署依赖
1. 客户端切换到Release
2. 开始菜单打开`Qt 5.13.2 (MinGW 7.3.0 64-bit)`命令行
3. 进入项目目录
4. 执行`windeployqt 12_10_LivingClient.exe`
5. 使用Enigma Virtual Box打包exe