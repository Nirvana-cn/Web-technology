// postMessge()是HTML5新定义的通信机制。所有主流浏览器都已实现。该API定义在Window对象。
// message: 要传递的消息。
// targetOrigin: 指定目标窗口的源。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，
// 那么消息就不会被发送；只有三者完全匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口；

// 当源匹配时，调用postMessage()方法时，目标窗口的Window对象会触发一个message事件。在进行监听事件时，应先判断origin属性，忽略来自未知源的消息。

var popup = window.open()

popup.postMessage("hello there!", "http://example.org");

function receiveMessage(event)
{
    if (event.origin !== "http://example.org")
        return;
    // event.source is popup
    // event.data is "hi there yourself!  the secret response is: rheeeeet!"【见下面一段代码可知】
}
window.addEventListener("message", receiveMessage, false);