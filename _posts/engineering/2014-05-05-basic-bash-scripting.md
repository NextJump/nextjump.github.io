---
layout: post
title: Basic Bash Scripting
author: Ian
category: engineering
excerpt: A good way to increase your general productivity as a developer is to simply do less stuff. However, since you don’t really have the option of ignoring boring tasks in your general workflow, using automation so you don’t have to think about those things when you do them is the next best solution. Scripts in general are a powerful and flexible way to perform many tasks on your machine, and here I’d like to introduce some of the basics of one of the most ubiquitous scripting languages out there&#58; bash, or the bourne again shell.
picture: ian_m.png
---

A good way to increase your general productivity as a developer is to simply do less stuff. However, since you don't really have the option of ignoring boring tasks in your general workflow, using automation so you don't have to think about those things when you do them is the next best solution. Scripts in general are a powerful and flexible way to perform many tasks on your machine, and here I'd like to introduce some of the basics of one of the most ubiquitous scripting languages out there: bash, or the bourne again shell.

## Creating a Script

At its simplest a bash script is just a collection of the commands you may be more or less familiar with from your time at the shell. For those who don't know the bash shell is basically a program that lets you type in commands, executes them, then waits for more commands. When grouped in a file they can be executed with the bash interpreter which will run the commands until there are no more or an error is encountered. Usually a separate process is spawned so that local side effects of the script don't pollute your environment, but you are able to keep the effects in your current shell if you invoke the script with the `source` command.

Let's create a very simple script to demonstrate the idea. A open a file with your text editor of choice and save the following contents:

    #!/usr/bin/env bash
    echo "Hello World"

Make this executable with the command `chmod +x <filename>` and you've created your first bash script. The `#!` characters are known as a *shebang* and let the calling program know to use the rest of the line to determine what interpreter to execute the script with. This is applicable to other scripting languages in addition to bash, such as zsh, python, ruby, or whatever you prefer. The env command tells your system how to locate the appropriate executable and invoke it. The only command in the script prints a string to standard output.

## Functions to increase readability

Bash allows you to define functions that contain blocks of code that simulate their own mini-script. You can invoke them like normal shell commands and they greatly improve the readability of your main script. Bash scripts can easily become cryptic as additions are made, so try to keep any complicated processing in a self-contained function. Try defining some functions in your .bashrc file as well to enable more complicated shortcuts than possible with aliases.

    getgoroot() { # filter GOROOT
        awk -F= '/GOROOT/ { print $2 }'
    }
    extractStringVal() { # remove surrounding quotes
        cut -d'"' -f2
    }
    go env | getgoroot | extractStringVal
    # => /usr/lib/go

## Variables

Variables are declared by assigning a value to an identifier with an equals sign. Variables are then referenced with syntax of a dollar sign and curly brace around the identifier, though the braces can be omitted if the reference is unambiguous.

    message="This is the message"
    echo ${message} # prints "This is the message"
    echo $message   # same output

There are also special variables that are defined by the interpreter and can be used to access certain values with special significance for your script.

    $0  name of the script
    $n  positional parameters to script/function
    $$  PID of the script
    $!  PID of the last command executed
        ( and run in the background )
    $?  exit status of the last command 
        ( ${PIPESTATUS} for pipelined commands )
    $#  number of parameters to script/function
    $@  script/function parameters as separate words
    $*  script/function parameters as single word
        ( $@ is more common )

## That's all for now

Hopefully this small taste of bash has convinced you that the flexibility of the command line can be used to quickly create very powerful ad-hoc tools for your workflow. In further posts we’ll go a little deeper into the possibilities of bash as well as investigate some common utilities that will help you take your scripts to the next level. If you have questions or snippets you’d like to share, put them in the comments below. Happy bashing!
