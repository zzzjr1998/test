(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{297:function(a,t,v){"use strict";v.r(t);var _=v(24),r=Object(_.a)({},function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"java多线程与并发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java多线程与并发","aria-hidden":"true"}},[a._v("#")]),a._v(" Java多线程与并发")]),a._v(" "),v("h2",{attrs:{id:"什么是进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是进程","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是进程")]),a._v(" "),v("p",[v("strong",[a._v("进程")]),a._v("（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。")]),a._v(" "),v("h3",{attrs:{id:"进程的状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程的状态","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程的状态")]),a._v(" "),v("ol",[v("li",[v("p",[v("strong",[a._v("就绪状态")]),a._v("（Ready）：\n进程已获得除处理器外的所需资源，等待分配处理器资源；只要分配了处理器进程就可执行。就绪进程可以按多个优先级来划分队列。例如，当一个进程由于时间片用完而进入就绪状态时，排入低优先级队列；当进程由I/O操作完成而进入就绪状态时，排入高优先级队列。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("运行状态")]),a._v("(Running)：\n进程占用处理器资源；处于此状态的进程的数目小于等于处理器的数目。在没有其他进程可以执行时(如所有进程都在阻塞状态)，通常会自动执行系统的空闲进程。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("阻塞状态")]),a._v("(Blocked)：\n由于进程等待某种条件（如I/O操作或进程同步），在条件满足之前无法继续执行。该事件发生前即使把处理器资源分配给该进程，也无法运行。")])])]),a._v(" "),v("p",[v("img",{attrs:{src:"/thread/%E8%BF%9B%E7%A8%8B%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2.PNG",alt:"进程状态转换"}})]),a._v(" "),v("ul",[v("li",[a._v("执行态→阻塞态：等待资源、I/O请求、信号。")]),a._v(" "),v("li",[a._v("阻塞态→就绪态：资源满足、I/O结束、信号完成。")]),a._v(" "),v("li",[a._v("就绪态→执行态：处理器空闲时选择更高优先权进程抢占。")]),a._v(" "),v("li",[a._v("执行态→就绪态：运行时间片到、有更高优先权进程。")])]),a._v(" "),v("h2",{attrs:{id:"什么是线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是线程","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是线程")]),a._v(" "),v("p",[v("strong",[a._v("线程")]),a._v("（thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。")]),a._v(" "),v("h3",{attrs:{id:"java线程的状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java线程的状态","aria-hidden":"true"}},[a._v("#")]),a._v(" Java线程的状态")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("新建状态")]),a._v("：\n使用"),v("code",[a._v("new")]),a._v("关键字和"),v("code",[a._v("Thread")]),a._v("类或其子类建立一个线程对象后，该线程对象就处于新建状态。它保持这个状态直到程序"),v("code",[a._v("start()")]),a._v("这个线程。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("就绪状态")]),a._v("：\n当线程对象调用了"),v("code",[a._v("start()")]),a._v("方法之后，该线程就进入就绪状态。就绪状态的线程处于就绪队列中，要等待JVM里线程调度器的调度。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("运行状态")]),a._v("：\n如果就绪状态的线程获取CPU资源，就可以执行"),v("code",[a._v("run()")]),a._v("，此时线程便处于运行状态。处于运行状态的线程最为复杂，它可以变为阻塞状态、就绪状态和死亡状态。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("阻塞状态\n如果一个线程执行了"),v("code",[a._v("sleep")]),a._v("睡眠）、"),v("code",[a._v("suspend")]),a._v("（挂起）等方法，失去所占用资源之后，该线程就从运行状态进入阻塞状态。在睡眠时间已到或获得设备资源后可以重新进入就绪状态。可以分为三种：")])]),a._v(" "),v("li",[v("p",[a._v("等待阻塞：运行状态中的线程执行"),v("code",[a._v("wait()")]),a._v("方法，使线程进入到等待阻塞状态。")])]),a._v(" "),v("li",[v("p",[a._v("同步阻塞：线程在获取"),v("code",[a._v("synchronized")]),a._v("同步锁失败(因为同步锁被其他线程占用)。")])]),a._v(" "),v("li",[v("p",[a._v("其他阻塞：通过调用线程的"),v("code",[a._v("sleep()")]),a._v("或"),v("code",[a._v("join()")]),a._v("发出了 I/O 请求时，线程就会进入到阻塞状态。当"),v("code",[a._v("sleep()")]),a._v("状态超时，"),v("code",[a._v("join()")]),a._v("等待线程终止或超时，或者 I/O 处理完毕，线程重新转入就绪状态。")])])])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("死亡状态")]),a._v("：\n一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。")])])]),a._v(" "),v("h2",{attrs:{id:"区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 区别")]),a._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),v("p",[a._v("以下内容从"),v("a",{attrs:{href:"https://github.com/yangchong211/YCBlogs",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[a._v("这")]),v("OutboundLink")],1),a._v("转载")])]),a._v(" "),v("h2",{attrs:{id:"并行和并发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并行和并发","aria-hidden":"true"}},[a._v("#")]),a._v(" 并行和并发")]),a._v(" "),v("ul",[v("li",[a._v("前者是逻辑上同时发生，指在某一个时间内同时运行多个程序。")]),a._v(" "),v("li",[a._v("后者是物理上同时发生，指在某一个时间点同时运行多个程序。")])]),a._v(" "),v("h3",{attrs:{id:"进程与线程概念区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程概念区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程与线程概念区别")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("进程：")]),a._v(" 进程是进程实体的运行过程，是系统进行资源分配和调度的一个独立单位（具有动态、并发、独立、异步的特性，以及就绪、执行、阻塞3种状态）；引入进程是为了使多个程序可以并发的执行，以提高系统的资源利用率和吞吐量。")]),a._v(" "),v("li",[v("strong",[a._v("线程：")]),a._v(" 是比进程更小的可独立运行的基本单位，可以看做是轻量级的进程（具有轻型实体，独立调度分派单位，可并发执行，共享进程资源等属性）；引入目的是为了减少程序在并发执行过程中的开销，使OS的并发效率更高。")])]),a._v(" "),v("h3",{attrs:{id:"进程与线程调度区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程调度区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程与线程调度区别")]),a._v(" "),v("ul",[v("li",[a._v("调度方面：在引入线程的OS中，线程是独立的调度和分派单位，而进程作为资源的拥有单位(相当于把未引入线程的传统OS中的进程的两个属性分开了)。由于线程不拥有资源，因此可以显著的提高并发度以及减少切换开销。")])]),a._v(" "),v("h3",{attrs:{id:"进程与线程并发行区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程并发行区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程与线程并发行区别")]),a._v(" "),v("ul",[v("li",[a._v("并发性：引入了线程的OS中，进程间可以并发，而且一个进程内部的多个线程之间也是可以并发的，这就使OS具有更好的并发性，有效的提高了系统资源利用率和吞吐量。")])]),a._v(" "),v("h3",{attrs:{id:"进程与线程拥有资源对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程拥有资源对比","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程与线程拥有资源对比")]),a._v(" "),v("ul",[v("li",[a._v("拥有资源：无论OS是否支持线程，进程都是基本的资源拥有单位，线程只拥有很少的基本的资源，但是线程可以访问所隶属的进程的资源（进程的代码段，数据段和所拥有的系统资源如fd）。")])]),a._v(" "),v("h3",{attrs:{id:"进程与线程系统开销对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程系统开销对比","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程与线程系统开销对比")]),a._v(" "),v("ul",[v("li",[a._v("系统开销：创建或者撤销进程的时候，系统要为之创建或回收PCB，系统资源等，切换时也需要保存和恢复CPU环境。而线程的切换只需要保存和恢复少量的寄存器，不涉及存储器管理方面的工作，所以开销较小。此外，统一进程中的多个线程由于共享地址空间，所以通信同步等都比较方便。")])])])},[],!1,null,null,null);t.default=r.exports}}]);