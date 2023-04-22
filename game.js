AFRAME.registerComponent("game-play", {

    init: function () {
        var duration = 120
        const timerEl = document.querySelector("#timer")
        this.startTimer(duration, timerEl)
    },

    gameOver:function(){
        var text1 = document.querySelector("#drivetext");
        var text2 = document.querySelector("#timer");
        var text3 = document.querySelector("#speed");
        var text4 = document.querySelector("#speedkmh");

        var model1 = document.querySelector("#wheel-scene");
        var model2 = document.querySelector("#break-pedal");
        var model3 = document.querySelector("#accelerator-pedal");


        var camera=document.querySelector("#camera")

        text1.setAttribute("visible","false")
        text3.setAttribute("visible","false")
        text4.setAttribute("visible","false")

        model1.setAttribute("visible","false")
        model2.setAttribute("visible","false")
        model3.setAttribute("visible","false")

        camera.setAttribute("camera","active",false)
        camera.removeAttribute("wasd-controls")
        camera.removeAttribute("look-controls")

        var gameover = document.querySelector("#gameover")
        gameover.setAttribute("visible",true)
    },

    startTimer: function (duration, timerEl) {
        var minutes
        var seconds

        setInterval(() => {
            if (duration >= 0) {
                minutes = parseInt(duration / 60)
                seconds = parseInt(duration % 60)

                if (minutes < 10) {
                    minutes = "0" + minutes
                }

                if (seconds < 10) {
                    seconds = "0" + seconds
                }

                timerEl.setAttribute("text", {
                    value: minutes + ":" + seconds
                })

                duration -= 1
            } else {
                this.gameOver()
            }

        }, 1000)
    },

})