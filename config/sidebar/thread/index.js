const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['进程与线程', 'Java线程', '补充'];

const childrenData = [
    [''],
    ['thread的创建', 'thread方法', 'thread同步', 'thread死锁', 'thread通信','线程池', '生产者消费者'],
    ['sleep()、join()、yield()有什么区别', 'wait()、notify()、notifyAll()方法', 'thread问题']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
