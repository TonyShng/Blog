---
title: '【Python】Chapter3:基本数据类型'
date: 2021-04-19 08:27:00
categories: "Python"
tags:
	- Python
urlname:
keywords: Python
---

计算机顾名思义就是可以做数学计算的机器，因此，计算机程序理所当然地可以处理各种数值。但是，计算机能处理的远不止数值，还可以处理文本、图形、音频、视频、网页等各种各样的数据，不同的数据，需要定义不同的数据类型。

<!-- more -->

#### 变量

Python 中变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。在Python中，变量就是变量，它没有类型，我们所说的”类型“是变量所指的内存中对象的类型。

这种变量本身类型不固定的语言称之为 **动态语言** ，与之相对的是 **静态语言**。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。如：

```java
int a = 123;
a = "ABC";
```

> 和静态语言相比，动态语言更灵活，就是这个原因。

等号( `=` )用来给变量赋值。等号( = )运算符左边是一个变量名，等号( = )运算符右边是存储在变量中的值。

```python
#!/usr/bin/python3

counter = 100 # 整型变量
miles   = 1000.0 # 浮点型变量
name    = "RainTwo"  # 字符串
```

在这里Python解释器干了两件事：

1. 在内存中创建了一个 `RainTwo` 的字符串；
2. 在内存中创建了一个名为 `name` 的变量，并把它指向 `RainTwo`。

也可以把一个变量 `a` 赋值给另一个变量 `b` ，这个操作实际上就是把变量 `b` 指向变量 `a` 所指向的数据。

Python 允许你同时为多个变量赋值

```python
a = b = c = 1
a, b, c = 1, 2, "RainTwo"
```

#### 常量

所谓常量就是不能变的变量，比如常用的数字常数 π 就是一个常量。在 Python 中，通常用全部大写的变量名表示常量:

```python
PI = 3.141592653
```

但事实上 PI 仍然是一个变量，Python 根本没有任何机制保证 PI 不会被改变，所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果你一定要改变变量 PI 的值，也没人能拦住你。

最后解释下整数的除法为什么也是精确的。在 Python 中，有两种除法，一种是 `/` ：

```shell
>>> 10 / 3
3.3333333333333335
```

`/` 除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数：

```shell
>>> 9 / 3
3.0
```

还有一种除法是 `//` ，称为地板除，两个整数的除法仍然是整数：

```shell
>>> 10 // 3
3
```

即整数的地板除 `//` 永远是整数，即使除不尽。要做精确的除法，使用 `/` 就可以。

因为 // 除法只取结果的整数部分，所以 Python 还提供一个余数计算，可以得到两个整数相除的余数：

```shell
>>> 10 % 3
1
```

#### 标准数据类型

Python3 有六个标准的数据类型：

- Number  (数字)
- String  (字符串)
- List (列表)
- Tuple (元组)
- Set (集合)
- Dictionary (字典)

分为**不可变数据**: Number、String、Tuple；

和**可变数据**: List、Dictionary、Set。

#### Number

Python3 支持 **int**、**float**、**bool**、**complex**(复数)

内置的 `type()` 函数可以用来查询变量所指的对象类型:

```shell
>>> a, b, c, d = 20, 5.5, True, 4+3j
>>> print(type(a), type(b), type(c), type(d))
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

此外还可以用 `isinstance` 来判断:

```shell
>>> a = 111
>>> isinstance(a, int)
True
```

isinstance 和 type 的区别在于：

- type() 不会认为子类是一种父类类型
- isinstance() 会认为子类是一种父类类型

##### 数值运算

```shell
>>> 5 + 4  # 加法
9
>>> 4.3 - 2 # 减法
2.3
>>> 3 * 7  # 乘法
21
>>> 2 / 4  # 除法，得到浮点数
0.5
>>> 2 // 4 # 除法，得到整数
0
>>> 17 % 3 # 取余
2
>>> 2 ** 5 # 乘方
32
```

#### String

Python 中的字符串用单引号 `'` 或双引号 `"` 括起来，同时使用反斜杠 `\` 转义特殊字符。

加号 `+` 是字符串的连接符，星号 `*` 表示复制当前字符串，与之结合的数字为复制的次数。

```python
#!usr/bin/python3

str = 'RainTwo'
print(str)
print(str[0:-1])
print(str * 2)  # 输出字符串两次，也可以写成 print(2 * str)  RainTwoRainTwo
print(str + "TEST")  # 连接字符串 输出 RainTwoTEST
```

注意：

1. 反斜杠可以用来转义，使用 r 可以让反斜杠不发生转义
2. 字符串可以用 + 运算符连接在一起，用 * 运算符重复
3. Python 中的字符串有两种索引方式，从左往右以0开始，从右往左以 -1 开始。
4. Python 中的字符串不能改变。

#### List

List(列表) 是 Python 中使用最频繁的数据类型。

列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表(所谓嵌套)。

列表是卸载方括号 `[]` 之间、用逗号分隔开的元素列表。

和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。

列表截取的语法格式：`变量[头下标:尾下标]` , 索引值以 `0` 为开始，`-1` 为从末尾的开始位置。

```python
t = ['a', 'b', 'c', 'd', 'e']
      0    1    2    3    4
     -5   -4   -3   -2   -1
```

加号 + 是列表连接运算符，星号 * 是重复操作。

```python
#!/usr/bin/python3
list = ['abcd', 789, 2.23, 'runoob', 70.2]
tinylist = [123, 'runoob']
print(list * 2) # 输出两次列表
print(list + tinylist) # 连接列表
```

与 Python 的字符串不一样的是，列表中的元素是可以改变的。

注意:

1. List写在方括号之间，元素用逗号隔开。
2. 和字符串一样，List 可以被索引和切片。
3. List 可以使用 `+` 操作符进行拼接。
4. List 中的元素是可以改变的。

Python 列表截取可以接收第三个参数，参数作用是截取的步长，以下实例在索引1到索引4的位置并设置步长为2(间隔一个位置)来截取字符串:

```shell
>>> letters = ['r', 'u', 'n', 'o', 'o', 'b']
>>> letters[1:4:2]
['u', 'o']
```

#### Tuple

元组与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 `()` 里，元素之间用逗号隔开。

元组中的元素类型也可以不相同:

```python
#!/usr/bin/python3

tuple = ('abcd', 789, 2.23, 'runoob', 79.2)
tinytuple = (123, 'runoob')

print(tuple)             # 输出元组
print(tuple[0])          # 输出元组第一个元素
print(tuple[1:3])        # 输出从第二个元素开始到第三个元素
print(tuple[2:])         # 输出从第三个元素开始的所有元素
print(tinytuple *2)      # 输出两次元组
print(tuple + tinytuple) # 连接元组
```

元组与字符串类似，可以被索引且下标索引从0开始，-1 为从末尾开始的位置。也可以进行截取，可以把字符串看作一种特殊的元组。

```shell
>>> tup = (1, 2, 3, 4, 5, 6)
>>> print(tup[0])
1
>>> print(tup[1:5])
(2, 3, 4, 5)
>>> tup[0] = 11
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```

虽然 tuple 的元素不可改变，但它可以包含可变的对象，比如 list 列表。

构造包含 0 个或 1个元素的元组比较特殊，所以有一些额外的语法规则：

```python
tup1 = ()     # 空元组
tup2 = (20,)  # 一个元素，需要在元素后面添加逗号
```

string、list 和 tuple 都属于 sequence(序列)。

注意：

1. 与字符串一样，元组的元素不能修改
2. 元组也可以被索引和切片，方法一样
3. 注意构造包含0 或 1 个元素的元组的特殊语法规则
4. 元组也可以使用 `+` 操作符进行拼接

#### Set

集合是由一个或数个形态各异的大小整体组成，构成集合的事物或者对象称作元素或是成员。

基本功能是进行成员关系测试和删除重复元素。

可以使用大括号 `{}` 或者 `set()` 函数创建集合，注意：创建一个空集合必须用 `set()` 而不是 `{}`，因为 `{}` 是用来创建一个空字典的。

创建格式:

```python
parame = {value01, value02, ...}
set(value)

sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Tencent', 'Baidu'}
print(sites)

# 成员测试
if 'Runoob' in sites:
    print('Runoob 在集合中')
else:
    print('Runoob 不在集合中')

# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')

print(a)
print(a - b)  # a 和 b 的差集  {'r', 'b', 'd'}
print(a | b)  # a 和 b 的并集  {'b', 'c', 'a', 'z', 'm', 'r', 'l', 'd'}
print(a & b)  # a 和 b 的交集  {'c', 'a'}
print(a ^ b)  # a 和 b 中不同时存在的元素  {'z', 'b', 'm', 'r', 'l', 'd'}
```

#### Dictionary

字典是 Python 中另一个非常有用的内置数据类型。

列表是**有序**的对象集合，字典是**无序**的对象集合。两者之间的区别在于: 字典当中的元素是通过键来存取的，而不是通过偏移存取。

字典是一种映射类型，字典用 `{}` 标识，它是一个无序的 **键(key) : 值(value)** 的集合。

键(key) 必须使用不可变类型。

在同一个字典中，键(key)必须是唯一的。

```python
#!/usr/bin/python3

dict = {}
dict['one'] = "1 - 啦啦啦"
dict[2] = "2 - 啦啦啦"

tinydict = {'name': 'runoob', 'code': 1, 'site': 'www.raintwo.wang'}

print(dict['one'])       # 输出键为 'one' 的值
print(dict[2])           # 输出键为 2 的值
print(tinydict)          # 输出完整的字典
print(tinydict.keys())   # 输出所有键
print(tinydict.values()) # 输出所有值
```

构造函数 `dict()` 可以直接从键值对序列中构建字典如下：

```python
>>> dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
>>> dict(Runoob=1, Google=2, Taobao=3)
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
```

另外，字典类型也有一些内置的函数，例如 clear()、keys()、values() 等。

注意:

1. 字典是一种映射类型，它的元素是键值对。
2. 字典的关键字必须为不可变类型，且不能重复。
3. 创建空字典使用 `{}`

#### Python数据类型转换

有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。

| 函数                   | 描述                                                 |
| ---------------------- | ---------------------------------------------------- |
| int(x, [base])         | 将 x 转换为一个整数                                  |
| float(x)               | 将 x 转换到一个浮点数                                |
| complex(real, [image]) | 创建一个复数                                         |
| str(x)                 | 将对象 x 转换为字符串                                |
| repr(x)                | 将对象 x 转换为表达式字符串                          |
| eval(str)              | 用来计算在字符串中的有效Python表达式，并返回一个对象 |
| tuple(s)               | 将序列 s 转换为一个元组                              |
| list(s)                | 将序列 s 转换为一个列表                              |
| set(s)                 | 转换为可变集合                                       |
| dict(d)                | 创建一个字典。d 必须是一个(key, value) 元组序列      |
| frozenset(s)           | 转换为不可变集合                                     |
| chr(x)                 | 将一个整数转换为一个字符串                           |
| ord(x)                 | 将一个字符转换为它的整数值                           |
| hex(x)                 | 将一个整数转换为一个十六进制字符串                   |
| oct(x)                 | 将一个整数转换为一个八进制字符串                     |

