---
title: '【Python】Chapter1:课前甜点'
date: 2021-04-16 09:44:40
categories: "Python"
tags:
	- Python
urlname:
keywords: Python
---

Python 是著名的“龟叔” Guido van Rossum 在1989年圣诞节为了打发时间而编写的一个编程语言。

Python 的设计具有很强的可读性，相比其他语言经常食用英文关键字，其他语言的一些标点符号，它具有比其他语言更具特色的语法结构。

<!-- more -->

#### 优点

- 易于学习：龟叔给 Python 的定位就是“优雅”、“明确”、“简单”，所以Python 程序看上去简单易懂，初学者学习，不但入门快，而且将来深入，也可以编写非常复杂的程序。
- 免费开源：Python 是 FLOSS(自由/开放源码软件)之一。你可以自动的发布这个软件的拷贝、阅读它的源码、对它做出改动等等。
- 高级语言：当你在用 Python 语言编写程序的时候，不需要考虑管理内存之类的底层细节。
- 面向对象：Python 既支持面向过程的编程也支持面向对象的编程。在“面向对象”的语言中，程序是由过程仅仅是可以重用代码的函数构建起来的。在“面向对象”的语言中，程序是由数据和功能组合而成的对象构建起来的。
- 可拓展性：如果你需要你的一段关键代码运行的更快或者某些算法不公开，你可以把你的部分程序用 C 或 C++ 编写，然后在 Python 程序中使用它们。
- 丰富的库：Python 的标准库非常庞大，可以帮助你处理各种工作。包括正则表达式、文档生成、单元测试、线程、数据库、网页浏览器、CGI、FTP、电子邮件、XML、XML-RPC、HTML、WAV  文件、密码系统、GUI（图形用户界面）、Tk 和其他与系统有关的操作。记住，只要安装了 Python，所有这些功能都是可用的。这被称作  Python 的“功能齐全”理念。除了标准库以外，还有许多其他高质量的库，如 wxPython、Twisted 和 Python 图像库等等。

#### 缺点

- 运行速度慢:和 C 程序相比非常慢，因为 Python 是解释型语言，你的代码会在执行的时候一行一行地翻译成 CPU 能理解的机器码，这个翻译过程非常耗时，所以很慢。而C程序是运行前直接编译成CPU能执行的机器码，所以很快。
- 代码无法加密：如果要发布Python程序，就是发布源码，像C语言，只需要把编译后的机器码发布出去即可。所以编译型的语言不存在这个问题。

#### 主要应用领域

- 云计算：云计算最热的语言，典型的应用 OpenStack
- WEB开发：许多优秀的 WEB 框架例如 Django、Flask等。许多网站也是通过 Python 开发的，如 YouTube、DropBox、豆瓣、知乎等
- 科学计算和人工智能：典型的图书馆 NumPy、SciPy、Matplotlib、Enided图书馆、熊猫
- 系统操作和维护：操作和维护人员的基本语言
- 金融：定量交易、金融分析，在金融工程领域，Python 不仅使用最多，而且其重要性逐年增加
- 图形GUI：PyQT、WXPython、TkInter

#### 安装Python

如果你的电脑本身没有自带 Python 的话，可以通过 [Python 官方网站](https://www.python.org/downloads/) 来下载安装，然后根据步骤一步步按章即可。Mac和 Linux 平台的话可以通过访问 [资源 ](https://www.python.org/downloads/source/)这里来下载适用的安装包，解压后在终端执行 `./configure` 脚本和 `make && make install` 进行编译安装。此时 Python 会安装在 `/usr/local/bin` 目录中，Python 库会安装在 `/usr/local/lib/pythonXX`，XX为你使用的 Python 版本号。

此时在终端输入下面命令验证安装是否成功:

```shell
$ Python3 -V
Python 3.9.2
```

这里出现 Python 及版本号意味着安装成功，此时可以通过 Python 开始进行编程操作了。

#### 交互式解释器

当我们在终端输入`Python3` 时，此时下面会显示主提示符 `>>>` ，提示输入下一条指令；当输入连续行时，显示次要提示符 `...` 。

```shell
$ python3
Python 3.9.2 (default, Mar 15 2021, 17:37:51)
[Clang 12.0.0 (clang-1200.0.32.29)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> the_world_is_flat = True
>>> if the_world_is_flat:
...     print("Be careful not to fall off!")
...
Be careful not to fall off!
```

> 注意出现次要提示符的时候，需要进行缩进，一般为四个空格或者一个 tab。退出Python的话，可以用`exit()`函数来退出。

在这里，我们就可以编写第一个 Python 程序了:

```shell
$ python3
Python 3.9.2 (default, Mar 15 2021, 17:37:51)
[Clang 12.0.0 (clang-1200.0.32.29)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello, world")
Hello, world
>>> exit()
```

欢迎来到Python世界～

