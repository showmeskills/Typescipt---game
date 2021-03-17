//定义类
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        //!表示这个元素不会为空
        this.element = document.getElementById("food")!;
    }

    //定义获取食物X轴坐标的方法
    getX(){
        return this.element.offsetLeft;
    }
    //定义获取食物Y轴坐标的方法
    getY(){
        return this.element.offsetTop;
    }
    //修改食物的位置
    change(){
        //限定范围
        //食物最小的位置0,最大时290
        //蛇移动一次,一格,一格大小就是整10px
        //生成一个随机位置
        let top = Math.round(Math.random()*29)*10;
        let left = Math.round(Math.random()*29)*10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food