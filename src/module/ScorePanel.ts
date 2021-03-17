//积分排的类
class ScorePanel{
    score = 0
    level = 1
    //分数和等级
    scoreEle:HTMLElement
    levelEle:HTMLElement
    //设置一个变量限制等级
    maxLevel:number
    //设置一个变量多少分升级
    upScore:number
    constructor(maxLevel:number=10,upScore:number=10){
        this.maxLevel = maxLevel
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    //设置一个加分的方法
    addScore(){
        //添加''可以把number转化string
        this.scoreEle.innerHTML = ++this.score + '';
        //判断分数
        if(this.score%this.upScore === 0){
            this.levelUp()
        }
    }
    //提升等级
    levelUp(){
        //等级上限
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel