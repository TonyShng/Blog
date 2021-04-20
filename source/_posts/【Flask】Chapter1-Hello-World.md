---
title: '【Flask】Chapter1:Hello，World'
date: 2021-04-15 09:15:40
categories: "Flask"
tags:
	- Flask
	- Python
urlname:
keywords: Flask，Python
---

欢迎，你将要开启一个如何使用 [Python](https://www.python.org/) 和 [Flask](https://flask.palletsprojects.com/en/1.1.x/) 框架创建 web应用程序的学习之旅。在第一章，你将会学习如何去新建一个 Flask项目。在本章结束时，你将会在你的电脑上运行一个简单的 Flask Web应用！

*本章节的 GitHub链接: [Browse](https://github.com/miguelgrinberg/microblog/tree/v0.1)，[Zip](https://github.com/miguelgrinberg/microblog/archive/v0.1.zip)，[Diff](https://github.com/miguelgrinberg/microblog/compare/v0.0...v0.1)。*

<!-- more -->

### 安装 Python

如果你没有在你的电脑上安装 Python ，那么现在就开始安装吧！如果你的操作系统没有提供 Python 包，你可以通过 [Python 官方网站](https://www.python.org/downloads/) 来下载进行安装。如果你使用 Microsoft Windows 操作系统与WSL或者 Cygwin，请注意你不应使用 Windows 版本的 Python，而是一个能够支持 Ubuntu(如果你使用的是WSL) 或者 Cygwin 的 Unix 版本。

为了确保你安装的 Python 是可运行的，你可以打开终端窗口并输入 `python3` ，如果这不起作用的话，就试试 `python` 。以下就是应该呈现的效果：

```shell
$ python3
Python 3.9.2 (default, Mar 15 2021, 17:37:51)
[Clang 12.0.0 (clang-1200.0.32.29)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

Python解释器现在正等待一个交互式提醒，你可以在这里输入 Python 语句。在接下来的几章，你将会了解到这种交互式提醒是非常有用的。但是现在，你已经通过这个确认了你的系统上安装了 Python。退出这个交互式解释器，你可以输入 `exit()` 加 Enter 键。在 Linux 和 Mac 系统上你也可以通过 Ctrl-D 快捷键来退出解释器。在 Windows 上，可以使用 Ctrl-Z 加 Enter键来退出。

### Installing Flask

接下来的步骤是安装 Flask，但是在此之前我想告诉你关于如何安装 Python 包的最佳实践。

在 Python 中，像 Flask 这样的包是支持公共仓库的，任何人都可以下载并安装它们。官方 Python 包仓库叫做 [PyPI](https://pypi.org/) ，表示 Python Package Index 的缩写(有些人也将这个仓库戏称为"cheese shop")。在 PyPI 上安装第三方包非常简单，因为 Python 专门提供了一个名为 `pip` 的工具来做这个工作(在 Python 2.7中 `pip` 没有被集成，需要单独安装)。

在你的电脑上安装第三方包，你可以像下面这样使用 `pip`：

```shell
$ pip install <package-name>
```

有趣的是，在大多数情况下安装第三方包的这个方法不会有效。如果你在你电脑上安装的全局的 Python解释器，很可能你的普通账号没有权限去修改它，因此只有一种方法让上面的命令工作就是通过管理员账号运行。但是即使没有这种复杂的情况，也要思考下你用上述方法安装第三方包时会发生什么。`pip` 工具会从 PyPI 上下载包，然后添加到 Python 的安装中。从这时起，在你系统上的每个 Python 脚本都可以访问这个包。 想象一下这样一个情况当你用当时最新的版本 Flask 0.11版本完成了一个 web 应用，但是现在已经支持 0.12版本了。你现在想用 0.12版本开始做第二个应用，但是替换掉0.11版本会让老的程序无法运行。现在你看到问题了么？现在解决方法是为老的应用安装 0.11版本的 Flask，为新的应用安装0.12版本的Flask。

为了处理不同应用维护不同版本的第三方包的问题，Python 使用虚拟环境的概念。虚拟环境是 Python 解释器的完整副本。当你在虚拟环境中安装第三方包时，系统范围的Python解释器不受影响，只有副本受影响。因此要完全自由地为每个应用安装任何版本的三方包，解决方案就是为每个应用使用不同的虚拟环境。虚拟环境还有一个好处就是它们归创建者所拥有，因此不需要管理员账号。

让我们开始创建一个项目所在的目录。我先把这个目录命名为 *microblog*, 这便是这个程序的名称：

```sh
$ mkdir microblog
$ cd microblog
```

如果你正在使用 Python 3 版本，虚拟环境已经成为内置模块，你可以用下面的命令去创建它:

```shell
$ python3 -m venv venv
```

通过这个命令，我用 Python 通过运行 `venv` 这个包创建一个名为 `venv` 的虚拟环境。命令中的第一个 `venv` 是 Python 虚拟环境包的名称，第二个 `venv` 是我要用来表示这个特定的虚拟环境的名称。如果你觉得很困惑，你可以用其他你想给虚拟环境命名的名字去替换第二个 venv 。通常我在项目中都用 venv 这个名字给创建的虚拟环境命名，所以无论何时我 cd 到一个项目中都能找到相应的虚拟环境。

命令执行完，在你的目录下将会有一个名为 venv 的目录用来存储虚拟环境相关文件。





















