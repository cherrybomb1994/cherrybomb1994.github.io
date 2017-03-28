guacamole支持不同的远程桌面连接，也就是说guacamole需要支持不同的远程桌面协议。本节内容是单指基于RDP协议的部分。guacamole 整个项目分为三个部分，分别是guacamole server、guacamole client以及web application。guacamole server的功能是为client和RDP server提供通信接口。guacamole server又可以称作guacd。guacd与guacamole client之间的通信是依靠guacamole协议，与RDP server通信是依靠RDP协议，具体到代码中使用的是开源项目freerdp。guacd通过加载不同的动态链接库来支持不同的协议。此处加载RDP动态链接库。
guacamole server与其他部分的通信机制如下图所示：

guacd在系统中维持一个守护进程，守护进程中主要是监听来自guacamole client的socket数据包，收到数据包之后创建子进程进行连接处理。
以上是大体介绍了guacamole server的结构，下面将从main函数开始分析代码。分析的重点：
1.	关键结构体分析，包括元素的意义、函数指针的调用；
2.	关键流程的记录；
3.	结构体之间的关系；
4.	关键函数的分析；
1.	main（）
	流程：
1.	新建guacd_client_map，管理连接的client
2.	从配置文件中读取client地址和端口号
（配置文件应该是/etc/guacamole/guacamole.properties，在实测中IP地址：127.0.0.1 端口号：4822）
3.	得到client端socket，描述符socket_fd，并绑定地址
4.	开启守护进程，向配置文件中写入进程pid，设置信号相应模式
5.	listen（socket_fd），监听client端的socket
------------------------------------------连接到guacamole client-----------------------------------
6.	循环daemon loop
	client数据
	guacd的client指的是guacamole client的部分，两者之间使用guacamole协议进行通信。
	此处定义的client关键数据有：
int connected_socket_fd	连接socket的描述符
int socket_fd	socket的描述符
struct addrinfo* addresses	client地址信息
2.	Daemon Loop
	流程：
1.	connected_socket_fd = accept(socket_fd)，接受连接，并创建新的socket处理连接，新socket的描述符是connected_socket_fd
2.	创建子进程，处理连接
3.	在子进程中，将接收到的socket进一步封装为guac_socket，并调用函数处理连接请求guacd_handle_connection(map, socket)
4.	在父进程关闭connected_socket_fd，继续监听，返回1

	关键结构体
guac_socket
guacamole的核心I/O，guacd_socket提供缓冲的输入输出以及写入base64数据的方法。
 
1.封装socket的过程中，data指向了socket的描述符，read_handler、write_handler、select_handler都指向了相应的函数
3. guacd_handle_connection(map, socket)
	流程：
1.	从socket解析命令select
2.	根据得到的连接信息加载相应协议插件plugin
3.	向guacamole client发送连接信息（guacamole协议步骤？）
4.	创建新的guac_client
5.	从socket解析命令size、audio、image、size、connect，并将信息放入guac_client
6.	socket放入guac_client
7.	将当前guac_client加入map中
8.	向guacamole client发送当前client的连接号
9.	初始化client
10.	开始client线程
11.	从map移除当前client
12.	释放相关栈空间
	关键结构体
1.	guac_client_plugin
提供处理初始化函数以及client参数，加载相应协议的动态链接库。
 
__client_plugin_handle	动态链接库句柄
init_handler	guac_client_init函数
args	GUAC_CLIENT_ARGS

2.	guac_client
	guac_client是guacd的核心结构体，提供事件处理函数，以及连接，传输数据所需要的参数。client的初始化是在guacd_handle_connection函数中，部分事件处理函数的指针也在guacd_handle_connection函数中赋值，还有部分处理函数指针是在插件初始化的时赋值。
 
guac_socket	web-client通信socket，
guac_client_state	两个状态GUAC_CLIENT_RUNNING和GUAC_CLIENT_STOPPING
guac_timestamp last_received_timestamp	上次接收到client的sync消息的时间（单位：微秒ms）
guac_timestamp last_sent_timestamp	上次发送到client的sync消息的时间（单位：微秒ms）
guac_client_info	Client的属性，在开始握手阶段使用
void* data	？？
guac_client_handle_messages* handle_messages	处理来自服务器的消息
guac_client_mouse_handler* mouse_handler	鼠标处理函数（web-client）,参数有x，y，mask
guac_client_key_handler* key_handler	键盘处理函数（web-client）,参数有keysym，pressed
guac_client_clipboard_handler* clipboard_handler	剪切板处理函数（web-client），需要guac_stream
guac_client_size_handler* size_handler	Size事件处理函数
guac_client_file_handler* file_handler	File事件处理函数，需要guac_stream
guac_client_pipe_handler* pipe_handler	Pipe事件处理函数，需要guac_stream
guac_client_ack_handler* ack_handler	ack事件处理函数，需要guac_stream
guac_client_blob_handler* blob_handler	blob事件处理函数，需要guac_stream
guac_client_end_handler* end_handler	处理流和事件
guac_client_free_handler* free_handler	释放内存
guac_client_log_handler* log_handler	记录处理，会调用guac_client_log()
guac_client_get_handler* get_handler	get事件处理函数，需要guac_object
guac_client_put_handler* put_handler	put事件处理函数，需要guac_object，guac_stream
guac_pool* __buffer_pool	Buffer是负指数的layer
guac_pool* __layer_pool	Layer的参数的从0开始正数
guac_pool* __stream_pool	
guac_stream* __output_streams	
guac_stream* __input_streams	
guac_pool* __object_pool	
guac_object* __objects	
char* connection_id	在guacamole协议中连接的标识符

4.加载协议插件
	在guacd_handle_connection调用guac_client_plugin_open加载相应协议的动态链接库，并且找到动态库中guac_client_init函数，返回plugin结构体。

5.	初始化client
调用动态库中的guac_client_init，
	guacd_client_map 管理client
