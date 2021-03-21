import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'




//游戏控制,控制其他的所有类
class GameControl{
    //定义三个属性
    //蛇
    snake:Snake;
    //食物
    food:Food;
    //记分牌
    scorePanel:ScorePanel;

    //创建一个属性来存储的移动方向(也就是按键的方向)
    direction:string='';
    //创建一个属性用来记录游戏是否结束(开关)
    isLive = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    //游戏的初始化
    init(){
        //绑定键盘按键按下的事件
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run();
    }
    //键盘事件
    keyDownHandler(event: KeyboardEvent):void{
        event = event || window.event
        //检查event.key的值是否合法(用户是否按了正确的按键)
        //修改direction属性
        this.direction = event.key;
       
    }
    //创建控制蛇移动方法
    run(){
        //根据方向this.direction 来使蛇的位置改变
        //ArrowUp top 减少
        //Arrow Down top 增加
        //Arrow Left  left 减少
        //Arrow right left 增加
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向来修改值
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -=10;
                break;
            case "ArrowRight":
            case "Right":
                X +=10;
                break;
            
            } 

            //检查蛇吃到食物
            this.checkEat(X,Y)

            try{
                //修改蛇的X和Y的值
                    this.snake.X = X;
                    this.snake.Y = Y;
            }catch (error) {
                //进入到catch,说明蛇撞墙了,游戏结束
                alert(error.message+'Game Over')
                //设置isLive false
                this.isLive = false
            }

            //定时器,因为是递归,所以每次调用自动调用this.run
            this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30)
    }

    //定义一个方法,用来检查蛇是否吃到食物
    checkEat(X:number,Y: number){
         if(X === this.food.getX() && Y === this.food.getY()){
              //检查蛇是否吃到食物
            this.food.change()
            this.scorePanel.addScore();
            this.snake.addBody();
         }
    }

}

export default GameControl