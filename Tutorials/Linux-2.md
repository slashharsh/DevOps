

# Linux Basics - Part 2
2021-06-22 11:44 PM

## Topics:
### Command Line Basics
- What is CLI
- File Navigation
- File Manipulation
- File Processing

## Prerequisites:
- No prerequisites, as everything is from basics.
- Make sure you have access to a Linux Terminal
	- You can use [online bash interpreter(s)](https://itsfoss.com/online-linux-terminals/) to just get started. 

**Note:** This tutorial will not cover advanced topics.
## Important Points:
- Most important points of this lecture.

## Topic: 
### Command Line Interface (CLI)
A command is a program which let the operating system perform some task. Command is a program file present somewhere in a disk. When you type a command in shell or when you click on an application using GUI behind both there is a program that is executed. Commands can also take input from user called arguments.
CLI is an interface for us to write command and perform various operations like input,output etc. In Linux Bash shell is used as that interface between you and kernel.

### File System and Commands
Linux system have a hirearchy in which the top level directory is ***root (/)***  then there comes different directories to store different purpose files, for example ***/bin*** is mainly for all executable commands/programs.

![](https://thesagediary.files.wordpress.com/2018/09/linuxfile.png)

**Navigation of File System**:
1. ls (list): to list the content of a given directory.
```bash
$ ls 
Desktop Downloads Music Pictures
```  
2. pwd (present working directory): to print the current directory in which you are working.
```bash
$ pwd
/home/yau
```
3. cd (change directory): it is used to move or navigate to different directory.
```bash
$ cd /home/yau/Downloads
$ pwd
/home/yau/Downloads
```

**Manipulation of Files**:
1. touch: to create an empty file.
2. mkdir/rmdir: create and remove a directory.
3. rm: to remove a file.
4. mv: to move or rename a file.
5. cp: to copy file from one location to another.
```bash
$ touch a_file.txt
$ mkdir a_directory
$ cp a_file.txt ./a_directory
$ mv a_directory/a_file.txt a_directory/new_file.txt
$ rm a_file.txt
$ ls
$
```
**Processing Files**:
1. cat: used to display content of file on standard output
2. echo: used to print given string to screen
3. grep: used to search a particular word in a file.
4. sort: sort contents of files by default in ascending order.

- **Refer to this [cheat sheet](https://www.guru99.com/linux-commands-cheat-sheet.html) for more linux commands and their usage.**

## To study
Try to learn the following comparisions and topics.
- Use of arguments with various commands
- Types of files stored in different directory like /sbin, /etc.

## Up Next
- Part-3 Basic System Administration in Linux
