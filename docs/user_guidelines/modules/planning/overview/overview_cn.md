# 功能概述

## 功能概述

Planning 模块在自动驾驶系统中扮演着至关重要的角色，它在遵守交通规则的前提下，将车辆从当前位置沿着路由线路导航到终点位置。

Planning 进行轨迹规划时，需要满足的基础要求有三个：

- 遵守道路交通规则，比如在人行道前停止让行，在交通灯变红时停车，变绿时通行等，
- 对路上遇到的其他交通参与者，如行人，车辆，路边固定障碍物等，不能产生碰撞，
- 规划输出的轨迹，包括路径曲率，速度，加速度等不能超出车辆执行能力边界。

另外，Planning 规划出来的轨迹还要考虑一些其他的因素，比如舒适型，加减速变化率尽量不要太大，方向盘角度变化率不要太大。

## 运行流程

planning 模块根据上游模块输入的感 知周围环境信息，地图定位导航信息，以及全局路径信息，为自动驾驶车辆规划出一条运动轨迹（包含坐标、速度、加速度，jerk加加速度、时间等信息），然后将这些信息传递给控制模块。

![image (31).png](https://bce.bdstatic.com/doc/Apollo-Homepage-Document/Apollo_Doc_CN_9_0/image%20%2831%29_509d61d.png)

## 模块原理

Apollo 规划模块功能是基于 **场景（scenario-based）**实现的。针对不同的场景，规划模块通过一系列独立的 **任务（task）** 组合来完成轨迹的规划。开发者可以根据自己的使用需求，调整支持运行的场景列表，或者场景中支持的任务类型来满足自己的需求。

![image (8).png](https://bce.bdstatic.com/doc/Apollo-Homepage-Document/Apollo_Doc_CN_9_0/image%20%288%29_2cf19d6.png)

Apollo 规划架构示意图如上，其中部分重要模块如下：

- Public Road Planner：实现了一个有限状态机，结合导航、环境等信息确定自动驾驶车辆的驾驶场景，
- Scenario Manager：根据状态机与车辆相关信息，调用合适当前场景的 Scenario，
- Scenario：结合上游模块信息，通过一系列的任务组合，完成自动驾驶车辆的轨迹规划，
- Task 组合：一组实现决策和优化任务的 task 集合。优化器用于优化车辆的轨迹和速度。决策器则基于规则，确定自动驾驶车辆何时换车道、何时停车、何时蠕行（慢速行进）或蠕行何时完成等驾驶行为。
