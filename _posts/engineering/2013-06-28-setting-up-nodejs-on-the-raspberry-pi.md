---
layout: post
title: Setting up Node.js on the Raspberry Pi
author: Blacki Li Rudi Migliozzi
date: 2014-02-03
excerpt: The Raspberry Pi is a powerful platform for prototyping the Internet of Things. In this tutorial series I show you how to begin usiing the Raspberry Pie to create embedded network services for your home and all you need is Javascript.
previousBlog: The Dev Poets Blog
previousBlogLink: http://www.devpoets.com/node-js-on-raspberry-pi/
category: engineering
picture: blacki_m.jpg
---

The Raspberry Pi is a powerful platform for prototyping the Internet of things. In this series of posts I show you how to begin using the Raspberry Pi to create embedded network services for your home using mostly just JavaScript. In this post I start by outlining how to set up a Node.js server on your Raspberry Pi. As a part of this I will walk you through the workflow I use when developing Node.js applications on the Raspberry Pi. 

# Preparing your SD Card

First go download your favorite Raspberry Pi [distro](http://en.wikipedia.org/wiki/Raspberry_Pi#Operating_systems). For this tutorial we will be using [Raspbian “wheezy”](http://www.raspberrypi.org/downloads).

First you will need to have a compatible SD Card. Next we have to format our SD Card. Using Disk Utility we will erase the SD Card. to do this: Select the card, click the erase tab, select MS-DOS (Fat), Rename (optional), and finally hit erase. Once this is complete, select the newly creatted partition and unmount it. Once unmounted, we will get the disk identifier of the SD Card. To do this select the card reader and click Info. This will be different for everybody, it is important you make sure you select the disk identifier for the SD Card on your machine. In my case, the disk identifier is ‘disk1′. You will need to use your disk identifier in th following command. Make sure you change disk1 to rdisk1

    sudo dd bs=1m if=~/Downloads/2013-05-25-wheezy-raspbian.img of=/dev/rdisk1

This will take a few minutes so be patient. Once that is complete eject your SD Card.

    diskutil eject /dev/disk1

# Connecting to your Raspberry Pi

Insert the SD Card and plug in a keyboard and a monitor into your Raspberry Pi. Also connect your Raspberry Pi to your router via ethernet. Lastly plug the micro USB cable in for power being careful not to press on the capacitor on the board.

Upon booting you should automatically see a dialog for the software configuration tool called Raspi-Config. If on this first boot you don’t automatically see the dialog, simply login (username:pi Password:raspberry) and type ‘raspi-config’ to start it.

    raspi-config

Here our main concern is to configure the Raspberry Pi to enable SSH. Within Raspi-Config go to advanced options and enable SSH. Save your configuration settings it will ask you if you want to reboot now, select No. Before we reboot we also want to get the Raspberry Pi’s ip address. To do this we will run ‘ifconfig’ on the Raspberry Pi.

    ifconfig

Our Raspberry Pi’s IP address is the number next to ‘inet addr:’ in my case 192.168.0.20. Next we will configure our Raspberry Pi to not ask us for a password everytime. To do this we will use ssh-keygen on your OSX machine to generate a public / private key pair and share the public key of the Mac with the Raspberry Pi.

To start off once we will ssh into the our Raspberry Pi to simply create a directory on the Raspberry Pi to copy our OSX machine’s public key into.

    ssh pi@192.168.0.20
    mkdir ~/.ssh
    exit

Returning to our Mac, we will generate the public / private key pair and then secure copy it over to our Raspberry Pi.

    ssh-keygen
    scp .ssh/id_rsa.pub pi@192.168.0.20:.ssh/authorized_keys

Now whenever we want to login to do development on our Raspberry Pi we can simply SSH into without having to type a password.

    ssh pi@192.168.0.20

At this point if you’re a [Vim](http://www.devpoets.com/vim-for-beginners/) fan, you can just stop here and begin coding. But if instead you rather develop on your Mac from an editor like [Sublime Text](http://www.sublimetext.com/) there are a couple alternatives. The first of which is to run over to [Will Bond’s site](http://wbond.net/sublime_packages) and install Package control and then the SFTP package available. Instead we will proceed by simply mounting our Rasberry Pi to OSX directly. To do this we will use

If you don’t already have it, go and install [Homebrew](http://mxcl.github.io/homebrew/) We will use this to easily install both [FUSE](http://fuse4x.github.io/) and [SSHFS](http://en.wikipedia.org/wiki/SSHFS). We will need to create a folder on our Mac which will be our mount point. We will then use SSHFS to mount the Raspberry Pi as a directory.

    brew install fuse4x
    brew install sshfs
    mkdir ~/RaspberryPi
    sshfs pi@192.168.0.20:/home/pi ~/RaspberryPi

# Installing Node.js

In Sublime Text we will create a new file and paste in the following shell script

    wget http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz
    tar -zxf node-v0.10.12.tar.gz
    cd node-v0.10.12
    ./configure
    make
    sudo make install

We will save this as node_install.sh onto the freshly sshfs mounted Raspberry Pi. This shell script will get, extract, and compile the Node.js binaries.

SSH’ing back into our Raspbery Pi

    ssh pi@192.168.0.20

We are going to need to do a few things before we can install Node.js. First, we need to make sure that apt-get is updated.

    sudo apt-get update

We are compiling Node from source and this will take a great deal of time. So to make our lives easier we will install a terminal multiplexer. I choose to use [tmux](http://tmux.sourceforge.net/), but [Screen](http://www.gnu.org/software/screen/) would work just fine.

    sudo apt-get install tmux

Once installed we will create a new tmux session.

    tmux

We are now ready to run our script.

    sudo sh node_install.sh

This will take several hours, but luckily we are running tmux which means we can create a new terminal window by typing Cmd + B D (i.e. Press Cmd + B and then press key D) and we won’t stop our build session. Better yet, we could actually just close terminal, go do something fun, and come back a while later. To relaunch the session all you have to do is simply reestablish SSH and run

    tmux attach

this will restore our tmux session. About 2 hours later, once the build is done, we can confirm Node and [NPM](https://npmjs.org/) the Node Package Manager are installed.

    node --version
    npm --version
